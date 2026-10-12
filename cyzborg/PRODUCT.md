# CYZBORG

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who train and want to express their fitness identity through apparel, music, and content. Visitors browse apparel concepts, listen to releases, share ideas, and register interest in future drops. The CYZBORG Team uses a private owner dashboard to review messages and shirt likes.

## Product Purpose

CYZBORG is a fitness lifestyle brand creating premium apparel, original music, and cinematic content inspired by modern training culture. The website introduces the brand and builds a community ahead of apparel sales.

## Positioning

CYZBORG = Exercise + Cyborg. An augmented athlete uses modern tools to become stronger, smarter, and more capable. Phones record form and progress, music creates focus, watches provide feedback, digital education teaches skills, and AI helps turn information into a plan. Technology helps perform the work better; it does not replace human effort.

The apparel is the uniform. The music is the soundtrack. The videos tell the story.

## Operating Context

The existing website uses React and Vite. GitHub hosts its source and Netlify deploys it. Netlify Functions and Blobs support guest feedback, voting, and the private owner dashboard at /admin. Preserve this deployment and data flow.

## Capabilities and Constraints

- Apparel concepts with larger front/back inspection and two coming-soon hoodie previews.
- Positive-only “I’d wear it” votes, without requiring account sign-in. Browser-based duplicate prevention is not a guarantee of one vote per human.
- Original music with album selection, listening links, and a separate My Body Fucking Hates Me fan-favorite feature.
- Share Your Input combines a direct suggestion form with About the Brand. Do not imply live AI replies or guaranteed responses.
- Suggestions may concern apparel, fabrics, items, music, videos, or other ideas. Reply email is optional.
- January 2027 is a tentative launch target, not a promise. Products shown are concepts; do not invent confirmed prices, fabrics, availability, or release dates.
- Shop and Origin remain coming soon. The founders’ personal origin story is reserved for later.
- Preserve desktop, tablet, and mobile behavior, including the approved mobile menu and image-viewing flows.

## Brand Commitments

- Preserve official CYZBORG wordmark, Z, and simplified helmet assets accurately; do not substitute generated lettering or redraw them casually.
- Preserve the approved dark-only identity, existing colors, typography, real brand copy, and content. Conthrax is selective rather than universal.
- Preserve the established navigation order: Shop, Origin, Launch, Audio, System, Socials.
- Use “we” or “The CYZBORG Team” in brand-facing communication.
- Core expressions: “STRONGER. SMARTER. MORE CAPABLE.”; “HUMAN EFFORT, ENHANCED BY TECHNOLOGY.”; “MORE THAN HUMAN. BETTER THAN MACHINE.”; “GRAPHIC T-SHIRTS & GYMWEAR.”
- Do not invent motivational slogans, reviews, endorsements, customers, or brand claims.
- Gym imagery must show believable equipment, anatomy, and use. Reference gym photographs without permission are inspiration only, not publishable assets.

## Evidence on Hand

- app/page.tsx: published page structure and apparel collection.
- components/brand-help.tsx: approved brand explanation, launch caveat, and suggestion form.
- components/mission.tsx: technology and human-effort explanation.
- components/shirt-vote.tsx and components/community-dashboard.tsx: voting and private owner views.
- public/: existing logos, apparel mockups, music artwork, and photography assets.
- netlify/functions/: existing server integration. Keep credentials and submitted messages private.

## Product Principles

1. Help visitors express their own identity, rather than asking them to support the founders’ dream.
2. Preserve brand accuracy and approved content through every refinement.
3. Make listening, viewing apparel, liking concepts, and sharing ideas easy without sign-in.
4. Treat realistic imagery and usable mobile behavior as requirements.
5. Clearly distinguish concepts and tentative plans from confirmed products and dates.
