import React, { useState, useEffect } from 'react';
import { SectionIds } from '../../types';
import { X, Heart, Lock, LogOut, ZoomIn, ZoomOut, MessageSquare } from 'lucide-react';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  auth,
  getCachedVotes,
  setCachedVotes,
  syncVisitorVotesFromBackend,
  toggleShirtVoteInBackend,
  subscribeOwnerVoteTotals,
  subscribeOwnerChatSessions,
  RecordedChatSession,
  signInOwner,
  signOutOwner,
} from '../../src/firebase';

interface ShirtColorway {
  name: string;
  swatch: string;
  frontUrl: string;
  backUrl: string;
}

interface ShirtDesign {
  id: string;
  number: string;
  category: string;
  name: string;
  colorways: ShirtColorway[];
}

const OWNER_EMAIL = 'cyzborg.official@gmail.com';

const SHIRT_COLLECTION: ShirtDesign[] = [
  {
    id: 'core-tee-black',
    number: '01',
    category: 'CORE TEE',
    name: 'CYZBORG Core T-Shirt',
    colorways: [
      {
        name: 'Black',
        swatch: '#131313',
        frontUrl: 'https://helmet-with-logo.netlify.app/core%20tee%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/core%20tee%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'core-tee-od-green',
    number: '02',
    category: 'CORE TEE',
    name: 'CYZBORG Core T-Shirt',
    colorways: [
      {
        name: 'OD Green',
        swatch: '#383B2C',
        frontUrl: 'https://helmet-with-logo.netlify.app/core%20tee%20green%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/core%20tee%20green%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'z-essential',
    number: '03',
    category: 'ESSENTIAL TEE',
    name: 'CYZBORG Z-Essential T-Shirt',
    colorways: [
      {
        name: 'Black',
        swatch: '#131313',
        frontUrl: 'https://helmet-with-logo.netlify.app/z%20essential%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/z%20essential%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'mbfhm',
    number: '04',
    category: 'STATEMENT TEE',
    name: 'MBFHM T-Shirt',
    colorways: [
      {
        name: 'Stone Gray',
        swatch: '#59595C',
        frontUrl: 'https://helmet-with-logo.netlify.app/mbfhm%20mockup%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/mbfhm%20mockup%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'cyzborg-fitness',
    number: '05',
    category: 'FITNESS TEE',
    name: 'CYZBORG Fitness T-Shirt',
    colorways: [
      {
        name: 'Light Heather Gray',
        swatch: '#ACACAE',
        frontUrl: 'https://helmet-with-logo.netlify.app/cf%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/cf%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'good-boy-dept',
    number: '06',
    category: 'DEPARTMENT TEE',
    name: "CYZBORG's GOOD BOY Department",
    colorways: [
      {
        name: 'Black',
        swatch: '#131313',
        frontUrl: 'https://helmet-with-logo.netlify.app/fbm%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/fbm%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'pnr-tee',
    number: '07',
    category: 'STATEMENT TEE',
    name: 'PSYCHOTIC. NOT ROBOTIC. T-Shirt',
    colorways: [
      {
        name: 'Bone',
        swatch: '#DCD5CD',
        frontUrl: 'https://helmet-with-logo.netlify.app/pnr%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/pnr%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'fyf-tee',
    number: '08',
    category: 'STATEMENT TEE',
    name: 'FYF T-Shirt',
    colorways: [
      {
        name: 'Blue',
        swatch: '#0044E7',
        frontUrl: 'https://helmet-with-logo.netlify.app/fyf%20front%20z.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/fyf%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'ssmc-tee',
    number: '09',
    category: 'STATEMENT TEE',
    name: 'Stronger. Smarter. MORE CAPABLE. T-Shirt',
    colorways: [
      {
        name: 'Black',
        swatch: '#131313',
        frontUrl: 'https://helmet-with-logo.netlify.app/ssmc%20front.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/ssmc%20back.png?v=20260928',
      },
    ],
  },
  {
    id: 'iconic-muscle-tee',
    number: '10',
    category: 'MUSCLE TEE',
    name: 'Iconic CYZBORG Muscle T-Shirt',
    colorways: [
      {
        name: 'Black',
        swatch: '#1C1B1B',
        frontUrl: 'https://helmet-with-logo.netlify.app/iconic%20muscle%20tee%20front%202.png?v=20260928',
        backUrl: 'https://helmet-with-logo.netlify.app/iconic%20muscle%20tee%20back%202.png?v=20260928',
      },
    ],
  },
];

const WhatsComing: React.FC = () => {
  const [votedShirts, setVotedShirts] = useState<Record<string, boolean>>(() => getCachedVotes());
  const [pendingVotes, setPendingVotes] = useState<Record<string, boolean>>({});
  const [lightboxShirtIndex, setLightboxShirtIndex] = useState<number | null>(null);
  const [zoomedSide, setZoomedSide] = useState<'front' | 'back' | null>(null);

  // Private Owner State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [ownerTotals, setOwnerTotals] = useState<Record<string, number>>({});
  const [totalVoteCount, setTotalVoteCount] = useState<number>(0);
  const [ownerChatSessions, setOwnerChatSessions] = useState<RecordedChatSession[]>([]);
  const [showOwnerChats, setShowOwnerChats] = useState<boolean>(false);

  const isOwner =
    Boolean(currentUser?.emailVerified) &&
    currentUser?.email?.toLowerCase() === OWNER_EMAIL.toLowerCase();

  useEffect(() => {
    const shirtIds = SHIRT_COLLECTION.map((s) => s.id);
    syncVisitorVotesFromBackend(shirtIds)
      .then((synced) => {
        setVotedShirts(synced);
      })
      .catch(() => {
        // fallback to cached local state if offline
      });
  }, []);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!isOwner) {
      setOwnerTotals({});
      setTotalVoteCount(0);
      setOwnerChatSessions([]);
      return;
    }
    const unsubTotals = subscribeOwnerVoteTotals((counts, total) => {
      setOwnerTotals(counts);
      setTotalVoteCount(total);
    });
    const unsubChats = subscribeOwnerChatSessions((sessions) => {
      setOwnerChatSessions(sessions);
    });
    return () => {
      unsubTotals();
      unsubChats();
    };
  }, [isOwner]);

  useEffect(() => {
    if (lightboxShirtIndex === null) {
      setZoomedSide(null);
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedSide !== null) {
          setZoomedSide(null);
        } else {
          setLightboxShirtIndex(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxShirtIndex, zoomedSide]);

  const handleToggleVote = async (shirtId: string) => {
    if (pendingVotes[shirtId]) return;
    const currentlyVoted = Boolean(votedShirts[shirtId]);
    const nextState = !currentlyVoted;

    // Optimistic UI update
    const optimistic = { ...votedShirts, [shirtId]: nextState };
    setVotedShirts(optimistic);
    setCachedVotes(optimistic);
    setPendingVotes((prev) => ({ ...prev, [shirtId]: true }));

    try {
      const confirmedState = await toggleShirtVoteInBackend(shirtId, currentlyVoted);
      setVotedShirts((prev) => {
        const updated = { ...prev, [shirtId]: confirmedState };
        setCachedVotes(updated);
        return updated;
      });
    } catch {
      // Revert if backend write fails
      setVotedShirts((prev) => {
        const reverted = { ...prev, [shirtId]: currentlyVoted };
        setCachedVotes(reverted);
        return reverted;
      });
    } finally {
      setPendingVotes((prev) => ({ ...prev, [shirtId]: false }));
    }
  };

  const activeModalShirt =
    lightboxShirtIndex !== null ? SHIRT_COLLECTION[lightboxShirtIndex] : null;
  const activeModalColorway = activeModalShirt ? activeModalShirt.colorways[0] : null;

  return (
    <section
      id={SectionIds.WHATS_COMING}
      className="pt-8 pb-6 md:pt-12 md:pb-12 bg-cyzborg-black relative overflow-hidden border-t border-neutral-800 scroll-mt-[61px] md:scroll-mt-[83px] lg:scroll-mt-[103px]"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.025] pointer-events-none"></div>

      {/* Subtle Official Helmet Background Marks */}
      <div className="absolute -top-16 -right-24 w-[420px] md:w-[620px] opacity-[0.028] pointer-events-none select-none z-0 rotate-[8deg]">
        <img
          loading="lazy"
          decoding="async"
          src="https://helmet-with-logo.netlify.app/detailed%20white.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="absolute -bottom-24 -left-24 w-[440px] md:w-[640px] opacity-[0.025] pointer-events-none select-none z-0 -rotate-[8deg]">
        <img
          loading="lazy"
          decoding="async"
          src="https://helmet-with-logo.netlify.app/simple%20logo%20transparent.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Section Header — Matches "The Network" top spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold uppercase tracking-tight leading-none mb-3">
          <span className="text-[#00A3FF]">THE</span>{' '}
          <span className="text-white">FIRST</span>{' '}
          <span className="text-cyzborg-orange">DROP</span>
        </h2>
        <div className="flex items-center justify-center gap-2 sm:gap-3 font-mono text-[10px] min-[380px]:text-[11px] sm:text-sm text-neutral-300 tracking-[0.2em] sm:tracking-[0.35em] pl-[0.2em] sm:pl-[0.35em] uppercase whitespace-nowrap text-center">
          <span>COLLECTION PREVIEW</span>
          <span className="text-neutral-500">/</span>
          <span>EARLY 2027</span>
        </div>

        {/* Private Owner Dashboard Banner (Visible ONLY to verified site owner) */}
        {isOwner && (
          <div className="mt-5 flex flex-col items-center gap-3">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 px-4 py-2 bg-[#121314] border border-cyzborg-orange/50 text-xs font-mono uppercase tracking-[0.18em] text-neutral-200">
              <span className="text-cyzborg-orange font-bold">
                OWNER ANALYTICS • TOTAL VOTES: {totalVoteCount}
              </span>
              <span className="text-neutral-700">|</span>
              <button
                type="button"
                onClick={() => setShowOwnerChats((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-white hover:text-cyzborg-orange transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyzborg-orange" />
                <span>
                  {showOwnerChats ? 'Hide' : 'View'} Chat Logs ({ownerChatSessions.length})
                </span>
              </button>
              <span className="text-neutral-700">|</span>
              <button
                type="button"
                onClick={() => signOutOwner()}
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>

            {showOwnerChats && (
              <div className="w-full max-w-4xl text-left bg-[#0c0c0d] border border-neutral-700 p-4 sm:p-5 max-h-[420px] overflow-y-auto space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <span className="font-mono text-xs font-bold text-cyzborg-orange uppercase tracking-[0.2em]">
                    RECORDED VISITOR R&amp;D CHATS &amp; APPAREL REQUESTS
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400">
                    {ownerChatSessions.length} SESSIONS
                  </span>
                </div>

                {ownerChatSessions.length === 0 ? (
                  <p className="font-mono text-xs text-neutral-500 py-4 text-center uppercase tracking-[0.15em]">
                    No visitor chat recommendations recorded yet.
                  </p>
                ) : (
                  ownerChatSessions.map((session) => (
                    <details
                      key={session.id}
                      className="group bg-[#121314] border border-neutral-800 p-3"
                    >
                      <summary className="flex flex-wrap items-center justify-between gap-2 cursor-pointer list-none">
                        <div className="min-w-0 flex-1">
                          <span className="font-mono text-[10px] text-cyzborg-orange uppercase tracking-[0.15em] block">
                            {new Date(session.updatedAtIso).toLocaleString()} •{' '}
                            {session.messageCount} MSGS
                          </span>
                          <p className="font-sans text-xs text-white font-semibold truncate mt-0.5">
                            {session.summary}
                          </p>
                        </div>
                        <span className="font-mono text-[10px] text-neutral-400 group-open:text-cyzborg-orange uppercase tracking-[0.15em]">
                          Transcript ▾
                        </span>
                      </summary>
                      <pre className="mt-3 pt-3 border-t border-neutral-800 font-mono text-[11px] text-neutral-300 whitespace-pre-wrap leading-relaxed">
                        {session.transcript}
                      </pre>
                    </details>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
          {SHIRT_COLLECTION.map((shirt, shirtIndex) => {
            const activeColorway = shirt.colorways[0];
            const hasVoted = Boolean(votedShirts[shirt.id]);
            const isBusy = Boolean(pendingVotes[shirt.id]);
            const privateVoteCount = ownerTotals[shirt.id] || 0;
            const isMuscleTee = shirt.id === 'iconic-muscle-tee';

            return (
              <article
                key={shirt.id}
                className="group relative bg-[#0c0c0d] border border-neutral-800/90 hover:border-neutral-700 transition-colors duration-200 flex flex-col"
              >
                {/* Compact Storefront Card Header */}
                <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-[#0c0c0d] border-b border-neutral-800/90 flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-xs sm:text-[13px] font-bold text-cyzborg-orange tracking-[0.15em]">
                        {shirt.number}
                      </span>
                      <span className="text-neutral-600 font-mono text-xs">/</span>
                      <span className="font-mono text-[10px] sm:text-[11px] text-neutral-300 uppercase tracking-[0.18em] truncate">
                        {shirt.category}
                      </span>
                    </div>

                    {/* Colorway Swatch & Label */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0"
                        style={{ backgroundColor: activeColorway.swatch }}
                      />
                      <span className="font-mono text-[10px] sm:text-[11px] text-neutral-300 uppercase tracking-[0.18em]">
                        {activeColorway.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`font-display ${
                        shirt.id === 'ssmc-tee'
                          ? 'text-lg sm:text-xl md:text-2xl lg:text-[21px] xl:text-[25px]'
                          : 'text-xl sm:text-2xl md:text-[26px] lg:text-[24px] xl:text-[27px]'
                      } font-bold text-white uppercase tracking-wide leading-none whitespace-nowrap overflow-hidden text-ellipsis`}
                    >
                      {shirt.name}
                    </h3>

                    {isOwner && (
                      <span className="font-mono text-[11px] font-bold text-cyzborg-orange tracking-[0.15em] shrink-0">
                        {privateVoteCount} {privateVoteCount === 1 ? 'VOTE' : 'VOTES'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Uniform Flat Charcoal (#222426) Product Image Area — Larger Shirts, Zero Gradients/Shadows */}
                <div
                  onClick={() => {
                    setZoomedSide(null);
                    setLightboxShirtIndex(shirtIndex);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setZoomedSide(null);
                      setLightboxShirtIndex(shirtIndex);
                    }
                  }}
                  aria-label={`View larger preview of ${shirt.name} (${activeColorway.name})`}
                  className="relative flex-1 px-2 pt-3 pb-2.5 sm:px-4 sm:pt-5 sm:pb-3.5 bg-[#222426] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange"
                >
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-3 items-start bg-[#222426]">
                    {/* Front View */}
                    <div className="flex flex-col items-center bg-[#222426]">
                      <div
                        style={{ aspectRatio: '1142 / 1377' }}
                        className="relative w-full bg-[#222426]"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={activeColorway.frontUrl}
                          alt={`${shirt.name} (${activeColorway.name}) - Front`}
                          style={{ opacity: 1, filter: 'none', mixBlendMode: 'normal' }}
                          className={`absolute inset-0 w-full h-full object-contain opacity-100 filter-none mix-blend-normal transition-transform duration-300 ${
                            isMuscleTee
                              ? 'scale-[0.98] -translate-y-[0.5%] group-hover:scale-[1.0]'
                              : 'group-hover:scale-[1.02]'
                          }`}
                        />
                      </div>
                      <span className="mt-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-300">
                        Front
                      </span>
                    </div>

                    {/* Back View */}
                    <div className="flex flex-col items-center bg-[#222426]">
                      <div
                        style={{ aspectRatio: '1142 / 1377' }}
                        className="relative w-full bg-[#222426]"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={activeColorway.backUrl}
                          alt={`${shirt.name} (${activeColorway.name}) - Back`}
                          style={{ opacity: 1, filter: 'none', mixBlendMode: 'normal' }}
                          className={`absolute inset-0 w-full h-full object-contain opacity-100 filter-none mix-blend-normal transition-transform duration-300 ${
                            isMuscleTee
                              ? 'scale-[0.98] -translate-y-[0.5%] group-hover:scale-[1.0]'
                              : 'group-hover:scale-[1.02]'
                          }`}
                        />
                      </div>
                      <span className="mt-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-300">
                        Back
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Bar — "I'd wear this" Heart Control + Concept Mockup Label */}
                <div className="px-4 py-2.5 sm:px-5 sm:py-3 bg-[#0c0c0d] border-t border-neutral-800/90 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={isBusy}
                      onClick={() => handleToggleVote(shirt.id)}
                      aria-pressed={hasVoted}
                      aria-label={`I'd wear this: ${shirt.name} (${activeColorway.name})`}
                      className="group/vote inline-flex items-center gap-3 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange cursor-pointer disabled:opacity-60"
                    >
                      <span className="flex items-center justify-center w-8 h-8">
                        <Heart
                          className={`w-5 h-5 transition-all duration-200 ${
                            hasVoted
                              ? 'fill-cyzborg-orange text-cyzborg-orange scale-110'
                              : 'text-neutral-300 group-hover/vote:text-white'
                          }`}
                        />
                      </span>
                      <span
                        className={`px-5 sm:px-7 py-2 border font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 ${
                          hasVoted
                            ? 'border-cyzborg-orange bg-cyzborg-orange/15 text-white'
                            : 'border-neutral-700 bg-transparent text-white group-hover/vote:border-neutral-400'
                        }`}
                      >
                        I&apos;D WEAR THIS
                      </span>
                    </button>
                  </div>

                  <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-[0.2em] shrink-0">
                    CONCEPT MOCKUP
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Discreet Owner Lock Trigger — Positioned absolute so it adds zero extra bottom padding */}
      {!isOwner && (
        <button
          type="button"
          onClick={() => signInOwner().catch(() => {})}
          title="Site Owner Vote Totals"
          aria-label="Site Owner Sign In"
          className="absolute bottom-1.5 right-3 z-20 inline-flex items-center gap-1 font-mono text-[9px] text-neutral-800 hover:text-neutral-500 uppercase tracking-[0.2em] transition-colors cursor-pointer py-1 px-1.5"
        >
          <Lock className="w-2.5 h-2.5" />
          <span>Owner</span>
        </button>
      )}

      {/* Transparent Larger Shirt Preview Modal (Click shirt again to zoom even larger) */}
      {lightboxShirtIndex !== null && activeModalShirt && activeModalColorway && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-2.5 sm:p-6 md:p-8 overflow-y-auto"
          onClick={() => {
            setZoomedSide(null);
            setLightboxShirtIndex(null);
          }}
        >
          <div
            className="relative w-full max-w-6xl flex flex-col items-center bg-transparent my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Above Shirts with Exit / X Button Top-Right */}
            <div className="w-full flex items-center justify-between mb-1.5 sm:mb-4 px-1 sm:px-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="font-mono text-xs sm:text-sm font-bold text-cyzborg-orange tracking-[0.2em] shrink-0">
                  {activeModalShirt.number}
                </span>
                <span className="font-display text-lg sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide leading-none truncate">
                  {activeModalShirt.name}
                </span>
                <span className="hidden sm:inline-block font-mono text-xs text-neutral-400 uppercase tracking-[0.18em] shrink-0">
                  • {activeModalColorway.name}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {zoomedSide !== null && (
                  <button
                    type="button"
                    onClick={() => setZoomedSide(null)}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 h-9 sm:h-11 bg-black/80 border border-neutral-600 font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-neutral-200 hover:border-cyzborg-orange hover:text-white transition-colors cursor-pointer"
                  >
                    <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Front &amp; Back</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setZoomedSide(null);
                    setLightboxShirtIndex(null);
                  }}
                  aria-label="Close larger shirt preview"
                  className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 bg-black/80 border border-neutral-600 text-white hover:border-cyzborg-orange hover:text-cyzborg-orange transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Transparent Shirt Display Area — Click a shirt to zoom in even larger, click again to zoom out */}
            {zoomedSide === null ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 w-full items-center bg-transparent">
                <div
                  onClick={() => setZoomedSide('front')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setZoomedSide('front');
                    }
                  }}
                  aria-label={`Zoom in on ${activeModalShirt.name} Front`}
                  className="group/zoom flex flex-col items-center bg-transparent cursor-zoom-in"
                >
                  <img
                    src={activeModalColorway.frontUrl}
                    alt={`${activeModalShirt.name} (${activeModalColorway.name}) - Front`}
                    style={{ opacity: 1, filter: 'none', mixBlendMode: 'normal' }}
                    className={`max-h-[34svh] sm:max-h-[75vh] w-full object-contain opacity-100 filter-none mix-blend-normal transition-transform duration-300 ${
                      activeModalShirt.id === 'iconic-muscle-tee'
                        ? 'scale-[0.85] group-hover/zoom:scale-[0.88]'
                        : 'group-hover/zoom:scale-[1.03]'
                    }`}
                  />
                  <span className="mt-1 sm:mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-300 group-hover/zoom:text-white transition-colors">
                    <span>Front</span>
                    <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60 group-hover/zoom:opacity-100" />
                  </span>
                </div>

                <div
                  onClick={() => setZoomedSide('back')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setZoomedSide('back');
                    }
                  }}
                  aria-label={`Zoom in on ${activeModalShirt.name} Back`}
                  className="group/zoom flex flex-col items-center bg-transparent cursor-zoom-in"
                >
                  <img
                    src={activeModalColorway.backUrl}
                    alt={`${activeModalShirt.name} (${activeModalColorway.name}) - Back`}
                    style={{ opacity: 1, filter: 'none', mixBlendMode: 'normal' }}
                    className={`max-h-[34svh] sm:max-h-[75vh] w-full object-contain opacity-100 filter-none mix-blend-normal transition-transform duration-300 ${
                      activeModalShirt.id === 'iconic-muscle-tee'
                        ? 'scale-[0.85] group-hover/zoom:scale-[0.88]'
                        : 'group-hover/zoom:scale-[1.03]'
                    }`}
                  />
                  <span className="mt-1 sm:mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-300 group-hover/zoom:text-white transition-colors">
                    <span>Back</span>
                    <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60 group-hover/zoom:opacity-100" />
                  </span>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setZoomedSide(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setZoomedSide(null);
                  }
                }}
                aria-label="Zoom out to Front and Back view"
                className="w-full flex flex-col items-center justify-center bg-transparent cursor-zoom-out py-1"
              >
                <img
                  src={
                    zoomedSide === 'front'
                      ? activeModalColorway.frontUrl
                      : activeModalColorway.backUrl
                  }
                  alt={`${activeModalShirt.name} (${activeModalColorway.name}) - ${zoomedSide} Zoomed`}
                  style={{ opacity: 1, filter: 'none', mixBlendMode: 'normal' }}
                  className="max-h-[68svh] sm:max-h-[78vh] w-full max-w-4xl object-contain opacity-100 filter-none mix-blend-normal animate-fade-in"
                />
                <span className="mt-2 sm:mt-2.5 inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-300">
                  <span>{zoomedSide === 'front' ? 'Front' : 'Back'} — Click to zoom out</span>
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default WhatsComing;
