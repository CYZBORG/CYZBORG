# Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **Deterministic One-Vote-Per-Visitor-Per-Shirt Key**: Every document in `/shirtVotes/{voteId}` must have a valid ID (`voteId.size() <= 128 && voteId.matches('^[a-zA-Z0-9_\\-]+$')`) that equals `incoming().shirtId + '__' + incoming().visitorId`.
2. **Strict Schema & Bounds for Votes**: `shirtId` must be an allowlisted shirt ID (`size() >= 1 && size() <= 64`), `visitorId` must be a valid visitor token (`size() >= 8 && size() <= 64`), and `createdAt` must strictly equal `request.time`. No extra shadow fields are permitted (`hasOnly(['shirtId', 'visitorId', 'createdAt'])`).
3. **Deterministic Chat Session Key & Immutability**: Every document in `/chatSessions/{sessionId}` must have `sessionId == 'chat_' + incoming().visitorId`, strict field bounds (`summary.size() <= 1000`, `transcript.size() <= 12000`, `messageCount >= 1 && messageCount <= 200`), `updatedAt == request.time`, and on `update`, `visitorId == existing().visitorId` and `createdAt == existing().createdAt`.
4. **Private Owner Analytics**: Listing `/shirtVotes` or `/chatSessions` (`allow list`) is strictly restricted to the verified site owner (`cyzborg.official@gmail.com` with `email_verified == true`) or a document in `/admins/$(request.auth.uid)`. Anonymous visitors can never list votes or list other visitors' chat transcripts.

## 2. The "Dirty Dozen" Payloads
1. **Shadow Field Injection on Vote**: `{ "shirtId": "core-tee-black", "visitorId": "visitor_12345678", "createdAt": "<request.time>", "isAdmin": true }` -> `PERMISSION_DENIED`
2. **Oversized `shirtId` (1MB String)**: `{ "shirtId": "a...1MB...", "visitorId": "visitor_12345678", "createdAt": "<request.time>" }` -> `PERMISSION_DENIED`
3. **Oversized `transcript` on ChatSession (>12,000 chars)**: `{ "visitorId": "visitor_12345678", "summary": "Hi", "transcript": "a...20000...", "messageCount": 2, "createdAt": "<request.time>", "updatedAt": "<request.time>" }` -> `PERMISSION_DENIED`
4. **Invalid Characters in `shirtId`**: `{ "shirtId": "core/tee$black", "visitorId": "visitor_12345678", "createdAt": "<request.time>" }` -> `PERMISSION_DENIED`
5. **Short `visitorId` (< 8 chars)**: `{ "shirtId": "core-tee-black", "visitorId": "short", "createdAt": "<request.time>" }` -> `PERMISSION_DENIED`
6. **Mismatched Document ID (`sessionId != 'chat_' + visitorId`)**: Path `/chatSessions/wrong_id` with `{ "visitorId": "visitor_12345678", ... }` -> `PERMISSION_DENIED`
7. **Forged Client Timestamp (`updatedAt != request.time`)**: `{ "visitorId": "visitor_12345678", "updatedAt": "2020-01-01T00:00:00Z", ... }` -> `PERMISSION_DENIED`
8. **Mutating Immutable `createdAt` on ChatSession Update**: Updating `/chatSessions/chat_visitor_12345678` with a modified `createdAt` or `visitorId` -> `PERMISSION_DENIED`
9. **Wrong Type for `messageCount` (String instead of Int)**: `{ "messageCount": "two", ... }` -> `PERMISSION_DENIED`
10. **Unauthorized Public `list` Query on `/chatSessions`**: Unauthenticated or non-owner user executing `getDocs(collection(db, 'chatSessions'))` -> `PERMISSION_DENIED`
11. **Unverified Admin Email Spoof on `list`**: User with `email == 'cyzborg.official@gmail.com'` and `email_verified == false` listing `/chatSessions` -> `PERMISSION_DENIED`
12. **Mutation via `updateDoc` on Existing Vote**: Updating `/shirtVotes/core-tee-black__visitor_12345678` -> `PERMISSION_DENIED`
