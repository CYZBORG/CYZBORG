import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  initializeFirestore,
  setLogLevel,
  doc,
  getDoc,
  getDocFromServer,
  setDoc,
  deleteDoc,
  serverTimestamp,
  collection,
  onSnapshot,
  Unsubscribe,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Suppress noisy internal SDK transport retry logs in preview iframes
setLogLevel('silent');

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(
  app,
  {
    experimentalAutoDetectLongPolling: true,
  },
  firebaseConfig.firestoreDatabaseId
);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validate connection to Firestore on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

const VISITOR_STORAGE_KEY = 'cyzborg_visitor_id_v1';
const VOTES_CACHE_KEY = 'cyzborg_shirt_votes_v1';
const ID_REGEX = /^[a-zA-Z0-9_\-]+$/;

export function getOrCreateVisitorId(): string {
  try {
    const existing = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (existing && existing.length >= 8 && existing.length <= 64 && ID_REGEX.test(existing)) {
      return existing;
    }
    const generated =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? `vis_${crypto.randomUUID().replace(/[^a-zA-Z0-9_\-]/g, '')}`
        : `vis_${Math.random().toString(36).slice(2, 12)}_${Date.now().toString(36)}`;
    const sanitized = generated.slice(0, 64);
    localStorage.setItem(VISITOR_STORAGE_KEY, sanitized);
    return sanitized;
  } catch {
    return `vis_fallback_${Date.now().toString(36)}`;
  }
}

export function getCachedVotes(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(VOTES_CACHE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    return {};
  }
}

export function setCachedVotes(votes: Record<string, boolean>): void {
  try {
    localStorage.setItem(VOTES_CACHE_KEY, JSON.stringify(votes));
  } catch {
    // ignore storage errors
  }
}

export async function syncVisitorVotesFromBackend(
  shirtIds: string[]
): Promise<Record<string, boolean>> {
  const visitorId = getOrCreateVisitorId();
  const results: Record<string, boolean> = { ...getCachedVotes() };

  await Promise.all(
    shirtIds.map(async (shirtId) => {
      if (!ID_REGEX.test(shirtId) || shirtId.length > 64) return;
      const voteId = `${shirtId}__${visitorId}`;
      const path = `shirtVotes/${voteId}`;
      try {
        const snap = await getDoc(doc(db, 'shirtVotes', voteId));
        results[shirtId] = snap.exists();
      } catch (error) {
        if (error instanceof Error && error.message.includes('Missing or insufficient permissions')) {
          handleFirestoreError(error, OperationType.GET, path);
        }
      }
    })
  );

  setCachedVotes(results);
  return results;
}

export async function toggleShirtVoteInBackend(
  shirtId: string,
  currentlyVoted: boolean
): Promise<boolean> {
  const visitorId = getOrCreateVisitorId();
  if (
    !shirtId ||
    shirtId.length < 1 ||
    shirtId.length > 64 ||
    !ID_REGEX.test(shirtId) ||
    visitorId.length < 8 ||
    visitorId.length > 64 ||
    !ID_REGEX.test(visitorId)
  ) {
    throw new Error('Invalid shirt or visitor identifier');
  }

  const voteId = `${shirtId}__${visitorId}`;
  const path = `shirtVotes/${voteId}`;
  const voteRef = doc(db, 'shirtVotes', voteId);

  try {
    if (currentlyVoted) {
      await deleteDoc(voteRef);
      return false;
    } else {
      await setDoc(voteRef, {
        shirtId,
        visitorId,
        createdAt: serverTimestamp(),
      });
      return true;
    }
  } catch (error) {
    handleFirestoreError(
      error,
      currentlyVoted ? OperationType.DELETE : OperationType.CREATE,
      path
    );
  }
}

export function subscribeOwnerVoteTotals(
  onTotals: (totals: Record<string, number>, totalCount: number) => void
): Unsubscribe {
  const path = 'shirtVotes';
  return onSnapshot(
    collection(db, path),
    (snapshot) => {
      const counts: Record<string, number> = {};
      let total = 0;
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const sId = typeof data.shirtId === 'string' ? data.shirtId : '';
        if (sId) {
          counts[sId] = (counts[sId] || 0) + 1;
          total += 1;
        }
      });
      onTotals(counts, total);
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
}

export interface RecordedChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface RecordedChatSession {
  id: string;
  visitorId: string;
  summary: string;
  transcript: string;
  messageCount: number;
  updatedAtIso: string;
}

export async function saveChatSessionToBackend(
  messages: RecordedChatMessage[]
): Promise<void> {
  const visitorId = getOrCreateVisitorId();
  if (visitorId.length < 8 || visitorId.length > 64 || !ID_REGEX.test(visitorId)) {
    return;
  }

  const userMessages = messages.filter((m) => m.role === 'user');
  if (userMessages.length === 0) return;

  const sessionId = `chat_${visitorId}`;
  const path = `chatSessions/${sessionId}`;
  const sessionRef = doc(db, 'chatSessions', sessionId);

  const summaryRaw = userMessages.map((m) => m.text.trim()).join(' | ');
  const summary = (summaryRaw || 'Visitor apparel feedback').slice(0, 1000);

  const transcriptRaw = messages
    .map((m) => `${m.role === 'user' ? 'VISITOR' : 'CYZBORG'}: ${m.text.trim()}`)
    .join('\n\n');
  const transcript = (transcriptRaw || 'VISITOR: Started chat').slice(0, 12000);
  const messageCount = Math.min(Math.max(messages.length, 1), 200);

  try {
    const existingSnap = await getDoc(sessionRef);
    if (existingSnap.exists()) {
      const existingData = existingSnap.data();
      await setDoc(sessionRef, {
        visitorId,
        summary,
        transcript,
        messageCount,
        createdAt: existingData.createdAt,
        updatedAt: serverTimestamp(),
      });
    } else {
      const now = serverTimestamp();
      await setDoc(sessionRef, {
        visitorId,
        summary,
        transcript,
        messageCount,
        createdAt: now,
        updatedAt: now,
      });
    }
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes('Missing or insufficient permissions')
    ) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  }
}

export function subscribeOwnerChatSessions(
  onSessions: (sessions: RecordedChatSession[]) => void
): Unsubscribe {
  const path = 'chatSessions';
  return onSnapshot(
    collection(db, path),
    (snapshot) => {
      const list: RecordedChatSession[] = [];
      snapshot.forEach((docSnap) => {
        const d = docSnap.data();
        const updatedDate =
          d.updatedAt && typeof d.updatedAt.toDate === 'function'
            ? d.updatedAt.toDate()
            : new Date();
        list.push({
          id: docSnap.id,
          visitorId: typeof d.visitorId === 'string' ? d.visitorId : docSnap.id,
          summary: typeof d.summary === 'string' ? d.summary : '',
          transcript: typeof d.transcript === 'string' ? d.transcript : '',
          messageCount: typeof d.messageCount === 'number' ? d.messageCount : 0,
          updatedAtIso: updatedDate.toISOString(),
        });
      });
      list.sort((a, b) => b.updatedAtIso.localeCompare(a.updatedAtIso));
      onSessions(list);
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
}

export async function signInOwner() {
  return signInWithPopup(auth, googleProvider);
}

export async function signOutOwner() {
  return signOut(auth);
}
