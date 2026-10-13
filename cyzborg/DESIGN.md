---
name: CYZBORG
description: Dark photographic gymwear, audio, and augmented-athlete identity.
colors:
  copper: "#b87333"
  copper-text: "#db9a60"
  copper-hover: "#d99a60"
  blue: "#00a3ff"
  background: "#000"
  surface: "#101010"
  media-surface: "#151515"
  ink: "#fff"
  muted: "#b6b6b6"
  line: "#ffffff26"
  selected-surface: "#342316"
  audio-hover: "#07344d"
typography:
  official-lettering:
    fontFamily: "Conthrax, sans-serif"
    fontWeight: 600
    lineHeight: 1.16
  headline:
    fontFamily: "Oswald, Arial, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 64px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.025em"
  release-title:
    fontFamily: "Oswald, Arial, sans-serif"
    fontSize: "clamp(32px, 3.5vw, 52px)"
    fontWeight: 600
    lineHeight: 1.1
  product-title:
    fontFamily: "Oswald, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0"
  body:
    fontFamily: "Rajdhani, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "Rajdhani, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    letterSpacing: ".05em"
rounded:
  control: "12px"
  media: "14px"
  dialog: "16px"
  pill: "999px"
  circle: "50%"
spacing:
  compact: "8px"
  control-gap: "12px"
  tile-gap: "16px"
  media-gap: "24px"
  heading-gap: "32px"
  section-mobile: "52px"
  section-tablet: "64px"
  section-desktop: "88px"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.background}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 28px"
  button-primary-hover:
    backgroundColor: "{colors.copper-hover}"
  button-outline:
    backgroundColor: "#08080880"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 28px"
  button-outline-hover:
    backgroundColor: "{colors.audio-hover}"
  signup-input:
    backgroundColor: "#080808cc"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  category-chip:
    backgroundColor: "#191919"
    textColor: "#ccc"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  media-panel:
    backgroundColor: "{colors.media-surface}"
    rounded: "{rounded.media}"
    padding: "24px 24px 44px"
  cover-play:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.background}"
    rounded: "{rounded.circle}"
    size: "56px"
---

# Design System: CYZBORG

## Overview

**Creative North Star: "The Augmented Athlete Campaign"**

CYZBORG uses a black photographic campaign world: athletes, garments, music covers, and training tools supply the material. Copper marks primary commitment; blue marks audio, focus, and selection. White condensed headings and muted supporting copy maintain hierarchy without replacing official identity artwork.

The interface is dark-only, spacious at section boundaries, and compact inside controls. Rounded controls and charcoal media panels provide practical touch surfaces; full-width photography and restrained image shading carry atmosphere. Existing official logos, helmet, Z, hero lettering, covers, and brand backgrounds remain authoritative.

**Key Characteristics:**
- Dark-only black and charcoal surfaces with photographic depth.
- Copper primary actions; blue audio and focus states.
- Official hero lettering; self-hosted Oswald and Rajdhani.
- Rounded controls, contained garments, directional audio motion.

Source-derived documentation of Campaign B. Mandatory Sites control-browser was unavailable: no rendered capture, visual verification, comp diff, or Lighthouse run is claimed. Build-phase specification and capture gates remain unverified; responsive behavior below describes source rules, not observed device output.

## Colors

Copper and electric blue are distinct signals against a neutral photographic field. Frontmatter values are normative. Sidecar tonal ramps are generated preview metadata, not additional shipped color tokens.

### Primary
- **Training Copper:** primary actions, cover play, control borders, and selected album outlines.
- **Readable Copper:** supporting accent text, release status, menu coming-soon text, and contact tile details.
- **Copper Hover:** primary-button and cover-play hover feedback.

### Secondary
- **CYZBORG Blue:** audio emphasis, track state, focus rings, selection, and caret.
- **Audio Hover:** dark blue fill behind outlined audio actions.

### Neutral
- **Black:** page foundation and primary-action text.
- **Charcoal:** cards, selected albums, embedded-player surroundings, and dialogs.
- **Media Charcoal:** garment stages and photographic placeholders.
- **White / Muted Gray:** primary versus supporting content.
- **Quiet Line:** subtle divisions and social-card borders.
- **Selected Copper Surface:** pressed chips, tabs, and front/back switch controls.

**The Accent Role Rule.** Copper carries primary actions and selected commitment; blue carries audio emphasis and keyboard focus. Platform colors remain local to social tiles.

## Typography

**Display Font:** Oswald with Arial and sans-serif fallbacks, self-hosted in weights 400–700.
**Body Font:** Rajdhani with Arial and sans-serif fallbacks, self-hosted in weights 400–700.
**Identity Lettering:** official hero SVG; the self-hosted Conthrax semibold face remains available selectively.

The condensed pairing feels direct and athletic. Supporting copy keeps comfortable line spacing; display type emphasizes approved brand expressions.

### Hierarchy
- **Headline:** section titles; source ramp appears in frontmatter, with targeted responsive reductions.
- **Release Title:** uppercase album headings; mobile uses a responsive 30–42px ramp and tablet uses 32px.
- **Product Title:** concise garment names; mobile uses 18px, narrow single-column cards use 23px.
- **Body:** default supporting prose; release descriptions use 19px/1.5 and system prose 18px/1.6, with a 65ch maximum where present.
- **Label:** primary actions; navigation uses Rajdhani 600 at 15px with .05em tracking. Factual status text is smaller and local to its component.

**The Artwork Authority Rule.** Use official SVG lettering for the hero and official identity assets for logos. Conthrax is selective; supporting headings use Oswald.

## Layout

Full-width photographic bands alternate with centered content. The desktop shell caps at 1440px with 48px side gutters; the header caps at 1680px with 40px gutters and is 80px tall. Shell gutters become 32px below 1280px, 20px below 768px, and 16px below 360px. The mobile header is 72px tall. Standard sections use the desktop, tablet, and mobile spacing tokens; the collection and landscape signup have their own observed padding.

Campaign photography opens the page and the collection follows directly. Garments use a three-column grid, two below 1024px, and one below 480px. Category photography uses three equal columns; below 1024px Apparel and Music share a row with System spanning full width beneath, then all three stack below 480px. Audio pairs square cover artwork with copy in an .83/1.17 grid, then stacks below 768px. The separate fan feature uses a narrower .55/1.45 artwork/copy grid. System prose and official architecture art sit side by side, then stack; four photographic pillars reduce to two and then one. Social links follow a three/two/one-column grid. The landscape signup uses two columns and stacks below 768px; its field and button stack at tablet and narrow-phone widths.

At desktop widths from 1024px, the hero uses the approved image’s 2:1 aspect ratio and contain sizing, showing the whole campaign rather than cropping the bottom. The slogan occupies the left. Below 768px the campaign photo sits at the top (clamp(470px,138vw,640px) tall, cropped at 56% so the bar, hands, and cable stay in frame) and fades into black; the copy sits beneath it rather than over the equipment. Native source breakpoints are recorded in the sidecar. Treat these as implementation facts requiring rendered device checks, not verified compositions.

## Elevation & Depth

Most surfaces are flat at rest. Photographic gradients, near-black tonal layering, and very low-opacity official helmet artwork create depth. Preserve the fan collage and System background beneath their dark shading. Imagery occupies isolated negative layers, content the local foreground, fixed navigation layer 30, and the skip link layer 60. Native dialogs use the browser top layer with a dark backdrop; the player close control uses its local layer 1.

### Shadow Vocabulary
- **Attached Menu:** soft downward shadow beneath the menu (0 14px 30px #0006).
- **Dialog:** broad isolation shadow around native dialogs (0 24px 80px #0009).

**The Photographic Depth Rule.** Use charcoal surfaces, image shading, and subtle brand artwork for depth. Reserve structural shadows for attached menus and dialogs.

## Shapes

Controls use softly rounded corners; media panels use the larger media radius and dialogs the dialog radius. Circular cover-play and close controls, pill-shaped inline audio actions, and category chips are deliberate exceptions. The attached mobile menu rounds its lower-left corner only. Full-width photographic bands keep straight edges. Full-screen garment inspection removes dialog rounding.

Borders are quiet neutral strokes until selection or interaction makes them copper or blue. Do not make every section a card. Garment stages contain the whole mockup; campaign and category images cover their photographic frames.

## Components

### Buttons
Confident, compact, and touchable. Primary and outlined actions share a 50px minimum height. Copper primary hover lightens; outlined audio hover uses dark blue and a blue stroke. Active controls scale to .97. Hover enhancement is limited to fine pointers. Keyboard focus is a 2px blue outline offset 5px. Cover play is a 56px copper circle; it scales to 1.06 on fine-pointer hover.

### Chips
Suggestion categories use pill shapes, 44px minimum height, charcoal fill, and subtle white borders. Pressed state uses the selected copper surface and copper stroke. These are functional category selectors, not decorative labels.

### Cards / Containers
Garment media panels, release art, pillar photos, album options, and social tiles share the media radius. Product metadata stays outside the image panel. Social tiles have platform-colored icons and handles; hover applies the corresponding border and an 8% platform-color tint over charcoal. Keep brand artwork accurate and image-dependent patterns tied to approved assets.

### Inputs / Fields
The signup input uses a near-black translucent fill, subtle white stroke, white text, and the control radius, with 54px minimum height. Suggestion fields use charcoal and at least 48px. Keep visible labels, blue caret/focus, muted placeholders, and explicit error/success messages. Disabled controls reduce opacity to .55.

### Navigation
The transparent fixed opening header turns 90% black after scrolling. Preserve Shop, Origin, Launch, Audio, System, Socials order, with Shop and Origin marked coming soon. Below 1600px use the compact menu attached beneath the header at the right edge. Its height is bounded by the remaining dynamic viewport and it scrolls vertically, including landscape devices. On mobile the standalone Share Your Input button moves into that menu. Escape closes the menu and returns focus to its trigger. The mobile footer centers identity and legal content.

### Audio Carousel
Forward/backward controls drive directional 480ms release and rail transitions using cubic-bezier(.23,1,.32,1). Hidden/outgoing slides are inert. Selection uses copper, track state uses blue, and selected album keyboard focus is restored after movement. Arrow keys navigate. A playing embed escapes the square cover constraint and reserves at least 352px height. The separate fan feature keeps its smaller artwork scale and collage backdrop.

### Garment Inspection and Motion
Native dialogs isolate front/back comparison; full-screen inspection contains the garment and offers pill-shaped side switches. Image hover scaling is restrained at 1.035, lasting 240ms for products and 300ms for categories. Controls transition in 160ms, the header in 180ms, and the attached menu opens over 200ms. Reduced motion disables animations and transitions, removes image/play scaling, uses automatic scroll behavior, and changes audio selection immediately.

## Do's and Don'ts

### Do:
- **Do** preserve official logos, helmet, Z, SVG slogan, apparel mockups, album covers, and approved background artwork.
- **Do** contain garment mockups and enlarged front/back views; use cover cropping for campaign photography.
- **Do** keep Share Your Input inside the attached mobile menu, preserve navigation order, and allow the menu to scroll within the viewport.
- **Do** retain blue focus outlines, reduced-motion behavior, and meaningful touch targets.
- **Do** use platform color only inside its matching social tile.

### Don't:
- **Don't** replace approved hero lettering with live text or generated lettering.
- **Don't** introduce a light mode, logo glow, fabricated product claims, or unapproved motivational copy.
- **Don't** spread Conthrax across body copy or turn release status labels into decorative section kickers.
- **Don't** enforce square artwork proportions around the 352px embedded audio player.

Not canonized: the generic eyebrow utility and decorative footer lightning glyph are incumbent implementation details, not reusable visual rules. Factual concept/release/coming-soon labels remain legitimate status content. These source details were documented without application changes; rendered legibility, crops, device behavior, and performance remain unverified.

## October 11 requested refinements

Header identity separates the official wordmark at left from the larger detailed helmet centered on the full header. Coming-soon notes sit below the shared navigation baseline. Desktop header height is 100px; mobile remains 72px with a compact centered helmet. Category panels immediately follow the hero, before the collection. Fan-favorite artwork receives a 0.9/1.1 split and the full 1440px shell. System art receives a larger column and responsive scaling. Focus, Track, Learn, and Adapt preserve their original images and descriptions, with stronger headings, blue/copper rules, and brighter grouped description text. These refinements are source-checked, not browser-verified.

### Header and compact music refinements

The centered header mark uses the official simple helmet (/helmet.svg), with a 236px desktop wordmark. Coming-soon notes are centered beneath Shop and Origin; the menu retains its stacked layout. Desktop album selection is half the shell width, 70% on tablets and full width on phones to preserve readable touch targets. The fan-favorite artwork column is 30% smaller (0.63/1.37 desktop ratio), with 64px section padding; phones cap artwork at 308px with 40px padding. First Access uses a 340px desktop minimum and 48px padding, with content-driven height and 40px padding on phones. Browser rendering remains unverified.

### Wide-screen spacing and header breathing room

Desktop header is 116px high around the 90px centered simple helmet, leaving 13px above and below. The 252×72px wordmark shares the same vertical centerline. Phones retain 72px header height and existing wordmark sizes. Anchor scroll offsets follow the current header height. From 1800px, the collection shell grows to 1840px with four columns, and Audio uses a 1680px shell, 560px artwork column, and left-aligned 720px album selector. Other screen sizes retain their current layouts. These rules address wide-screen gutters without inventing extra content.

### Wide Audio balance correction

From 1800px, Audio uses a 500px feature artwork column, 64px top/48px bottom section padding, and a centered 1200px album selector displaying five compact covers with one offscreen buffer on each side. Selector covers remain about 200px on wide screens. The seven-item rail translates one fifth of its viewport plus gap allowance per arrow step, retaining the 480ms directional animation and reduced-motion behavior. Phone and tablet carousel layouts are unchanged. Actual browser rendering remains unverified; the user-supplied current screenshot informed this adjustment.

### Single-release editorial balance

From 1024px, Audio releases other than PSYCHOTIC Dancing use full-height flex copy beside their art: 44–64px titles, 26px descriptions (30px when under 250 characters), and a listening group anchored to the column bottom. Streaming labels are 16px and platform links 18px. PSYCHOTIC Dancing, fan-favorite typography, and phone/tablet type remain unchanged. The listening wrapper preserves both overview Play and per-track platform-row Play placements. Existing hidden sizing slides retain stable section height during transitions. Supplied screenshots were inspected; new browser rendering remains unverified.

## October 12 motion and audio dock

**Focal moment: system boot.** Once per browser session, a 2px CYZBORG-blue scan line crosses the hero over 1.1s. The campaign photo resolves from brightness .35 and 10px blur to sharp (1.3s, power2.inOut), and the official slogan SVG is uncovered left to right by clip-path in step with the scan line. Tagline, actions, and release note settle 18px upward afterward (expo.out). A 2.6s failsafe completes the sequence if frames stall. Scrolling out of the hero, the photo drifts down 8% while the copy rises and dims.

**Supporting motion, by material:** category panels wipe up with clip-path; garments and social tiles arrive as staggered lists, capped at 0.3s total; release artwork resolves from a 12px blur. Every element is visible by default, and motion hides content only after the script runs.

**System rail.** A 2px blue-to-copper rail above Focus, Track, Learn, and Adapt fills with scroll. Each pillar powers up as it is reached: its photo goes from grayscale and dim to full color, its rule draws in, and its copy brightens. The rail is hidden below 768px, where the pillars still power up one by one.

**Audio dock.** Every Play control sends one Spotify embed (80px compact) to a fixed charcoal dock centered at the bottom (max 760px, 16px radius, attached-menu shadow). Music keeps playing while the visitor browses. The playing release's cover control turns blue with an audio-lines icon. The dock enters in 450ms and exits in 200ms. Spotify still loads only after Play is pressed. Below 600px the title block is hidden and the embed fills the dock.

**Reduced motion:** no boot, parallax, reveals, or dock slide. Pillars still switch on as they are reached.

## October 12 tablet refinements

- **Header:** whenever the menu button shows (below 1600px), Share Your Input lives only inside the menu.
- **Hero:** fills the first screen (100svh, cover at 68% 20%) on desktop and landscape tablets. On portrait tablets the photo takes the top of the screen (100svh − 275px, cropped to keep the bar and cable) and the copy sits beneath it.
- **Section rhythm:** from 768px to 1366px, sections use 64px padding, with tighter joins at Drop→Audio and System→Network.
- **System art:** larger on tablets; it is stacked full-bleed beneath the copy in portrait.
- **Audio:** release descriptions are 18–21px with a 58ch measure; titles run 36–54px. Streaming links are a brand-colored Simple Icons glyph plus a white name (Spotify #1ED760, Apple Music #FA243C, YouTube Music #FF3B3B), with no container; a 2px white underline draws in from the left on hover and focus (220ms). A release with no links shows no "Now streaming" label.
- **Album selector:** from 1024px it shows five covers in a 1200px selector; on portrait tablets it shows three covers at full width.
- **Fan favorite:** a centered 1120px feature on desktop and landscape. In portrait it is stacked and centered, with 420px art and a soft drop shadow.
- **Category panels:** three equal columns from 640px; stacked below that.
- **Hero copy clearance:** on desktop the photo is anchored at 30% 20% and the copy capped at 50% width, so the slogan never meets the shirt print. On landscape tablets and laptops (768–1366px) the photo sits at 12% 20%, the copy at 48% width, and the copy is bottom-aligned with 16svh of clearance, which places it below the print and above the bar.
- **System intro (portrait tablets):** 56–68px heading; "The Augmented Athlete" gets a 56px blue rule above it; the first paragraph is a 24px white lead and the rest is 20px/1.65 body text with a 34em measure.

## October 12 Audio overhaul (replaces the carousel)

**Model: an artist discography page.** The Audio header shows "AUDIO" with a factual count ("8 releases / Now streaming on major platforms."). Below it:

- **Discography rail:** a tablist of uniform cover cards: a square cover (10px radius), a two-line title, and a type line (Single / Album / Two-track release, taken from the data). Unselected covers sit at brightness .66 and go to full on hover or selection. The selected card gets a 2px copper outline offset 3px; keyboard focus uses blue. The latest release carries a copper "NEW" badge. All 8 fit in one row on desktop; narrower screens scroll horizontally with snap, edge fades, and arrow buttons on fine pointers only. Phones get 128px cards bleeding to the screen edges, swipe only. Arrow keys, Home, and End move the selection.
- **Release panel:** one shared layout for every release. Cover (400px desktop / 280px portrait tablet / 112px thumbnail beside the title on phones) with a copper play button; copper meta line; 32–46px uppercase title; description at 17px/1.7 with a 62ch measure (an all-caps first paragraph becomes a heading-font tagline); a tracklist (singles show one row) where each row has a number, name, per-track platform icons for multi-track releases, and a pill Play button that sends the track to the audio dock (the playing row is tinted blue and shows an audio-lines icon); and "Listen on" brand links. A new selection fades in (280ms); the rail itself never moves. On phones, the page scrolls the panel into view after a tap when needed.
- **Fan favorite:** the same panel, centered at 1120px over its collage, with the meta line "Fan favorite / Album".
- **Audio round 2:** "Listen on" names are removed everywhere. Every track row (singles included) carries icon-only brand links (40px targets on desktop; 44px with 10px spacing under the song name on phones and tablets) and a Play pill. On desktop the tracklist is capped at 720px, so the icons and Play sit next to the name. Phones and tablets center Play on the row. All releases render stacked in one grid cell, with only the active one visible, so the section height never changes between releases. A Prev / 01 of 08 / Next pager sits under every release (names show on desktop); touch screens can also swipe the details. Paging from below brings the release top back into view. A release can override its type in the data (FUCK YOUR FEELINGS = Single).
- **System art (≤1023px):** cropped to its content (1.5 aspect, image 116% wide), pulled up under the copy, and faded out at the bottom.
- **Header (phones, tablets, coarse-pointer up to 1366px):** no wordmark; the centered helmet is the logo.
- **Audio round 3:** on desktop, each release's copy is vertically centered beside its cover. On phones, tablets, and touch screens up to 1366px, releases become a horizontal scroll-snap row of equal-height cards (#0e0e0e, 16px radius, 20–28px padding). The next card peeks in by about 28px (72px on tablets), and non-current cards dim to 40%. The snapped card drives the selected cover, and tapping a cover scrolls to its card. Below the row: eight dots (the active one is a 22px copper pill, each with a 28×32 target) and a "Swipe for more releases" hint with nudging chevrons that fades after the first swipe. The pager is desktop-only. Phone cards place a 104px cover beside the meta and title, vertically centered.
- **System (≤1023px):** the architecture art is a faint (20%) backdrop behind the copy, enlarged to 190% width and radially masked; it is no longer a block below the text.
- **Audio desktop:** the cover (400px) and copy (680px) form one block centered in the shell, with a 64px gap.
- **Swipe cards:** each card keeps its natural height, and the row eases (320ms) to the height of the card in view; the dots follow directly beneath. Every tracklist ends with a bottom divider.
- **Shirts:** the vote sits inside the product info, under the color. Phone image cards are 1.25:1 with less padding and 28px between products.
- **Audio round 5 (replaces the swipe cards):** phones, tablets, and touch screens up to 1366px show the discography as a single-open accordion list. Each row has a 64px cover (88px on tablets), an uppercase name, a type line with a NEW pill on the latest release, and a chevron. The open row shows a full-brightness cover, a copper type line, and a rotated copper chevron; its body (description and tracklist with icon links and Play) fades in. The latest release opens by default. When another row is tapped, the previously open row closes and the scroll position compensates, so the tapped row stays under the finger. Desktop keeps the cover rail, the stable panel, and the pager.
- **Shirts (phones):** 1.32:1 image cards with 12px vertical padding; "View larger" is a small translucent pill over the image corner.
- **Shirts (768px and up):** 1.2:1 image cards with 14px/20px padding and the same overlay "View larger" pill as on phones.
- **Shirt vote:** sits directly under the color; the divider line comes after it and closes each product.
- **System backdrop:** enlarged (270% width on phones, 170% on tablets) at 24% opacity, centered on the story paragraphs.
- **Release list (phones, tablets):** the latest release is always open at the top as a featured block (no toggle). The other seven sit in one collapsed "Earlier releases" row with overlapping cover thumbnails and a count; opening it shows the single-open accordion list.
