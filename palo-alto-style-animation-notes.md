# Palo Alto Networks Style And Animation Notes

Source: live Safari inspection of https://www.paloaltonetworks.com/ using scroll positions across the page and computed styles from the active document.

Viewport sampled: Safari desktop, page height around 16,390px, viewport height around 859px.

## Global Style Tokens

- Font family: `TT Hoves, Arial, Helvetica Neue, Helvetica, sans-serif` for headings, nav, buttons, labels, cards.
- Base dark: `#141414` or black overlays.
- Brand orange/red: `rgb(250, 88, 45)` / `#fa582d`.
- Light blue hero accent: pale cyan used only on hero headline highlight.
- White text: `rgb(255, 255, 255)`.
- Utility light background: `rgb(244, 244, 242)`.
- Heading weight: usually `500`.
- Button/nav weight: usually `600`.
- Main container left offset at sampled desktop: around `123px`.
- Most sections use full-width background with inner `container-fluid` grid.

## Layout Type 1: Header + Hero Media Banner

### Structure

- Top promo bar: black strip, centered message.
- Utility toolbar: light strip, left tools and right links.
- Main nav: transparent over hero, logo and nav left, CTA right.
- Hero section: full-width background image/video with left text block and right visual.

### Live Computed Values

- Hero section padding: `224px 0 112px`.
- Hero background: black base with overlay.
- Main hero title:
  - `font-size: 51.25px` at sampled viewport.
  - `font-weight: 500`.
  - `line-height: 61.5px`.
  - `color: white` for first line.
  - second line uses pale cyan.
- Hero subtitle:
  - `font-size: 21.166666px`.
  - `font-weight: 500`.
  - `line-height: 29.633333px`.
  - `color: white`.
- Primary CTA:
  - `font-size: 14.8px`.
  - `font-weight: 600`.
  - `line-height: 20.72px`.
  - blue pill, white text.
  - transition: `box-shadow 0.15s ease-in-out`.
- Secondary CTA:
  - Same text size and weight as primary.
  - White text link with underline.
- Main nav item:
  - TT Hoves.
  - visually around `15-16px`.
  - weight `600`.
  - white over hero.
- Utility toolbar:
  - height around `49px`.
  - background `rgb(244, 244, 242)`.
  - text black.
- Main nav:
  - height around `100px`.
  - transparent background.

### Animation

- Hero media is static/looping background media.
- CTA hover is subtle: shadow/opacity/color change, not large transform.
- Main perceived motion comes from media/visual asset, not from text.
- Header itself does not use heavy animation on initial load.

## Layout Type 2: Slim Recommended Carousel

### Structure

- Full-width dark carousel directly under hero.
- Label: `RECOMMENDED`.
- Horizontal items: small image thumbnail + text stack.
- Arrow controls on right side.

### Live Computed Values

- Eyebrow `RECOMMENDED`:
  - `font-size: 14.4px`.
  - `font-weight: 500`.
  - `line-height: 20.16px`.
  - `color: white`.
  - uppercase, wide tracking visually.
- Card title:
  - `font-size: 15.6px`.
  - `font-weight: 500`.
  - `line-height: 23.4px`.
  - `color: white`.
- Layout:
  - carousel row is one horizontal line.
  - cards are flat, not boxed.
  - images are small square/rect thumbnails aligned left of text.

### Animation

- Carousel uses glider/slider behavior.
- Arrow click moves horizontal track.
- Card hover reduces opacity: observed CSS pattern `opacity: .8`.
- Arrow hover changes border/background depending on theme.

## Layout Type 3: Sticky Anchor Navigation

### Structure

- Appears below recommended.
- Sticks to top while scrolling through large content blocks.
- Nav items centered across width.
- CTA pill on right.

### Live Computed Values

- Section height: `49px`.
- Background: `rgba(0, 0, 0, 0.7)`.
- Nav item:
  - `font-size: 16px`.
  - `font-weight: 600`.
  - `line-height: 22.4px`.
  - `color: white`.
- CTA:
  - `font-size: 14.8px`.
  - `font-weight: 600`.
  - `line-height: 20.72px`.
  - black text on orange/brand pill.

### Animation

- Sticky/pinned behavior at top of viewport.
- Transition: `transform 0.25s linear`.
- No dramatic entrance animation; the movement is mostly sticky scroll behavior.

## Layout Type 4: Dark AI Stats Section

### Structure

- Dark full-width background, video texture behind.
- Large headline: `A new AI world is here`.
- Good news row:
  - left: eyebrow + heading.
  - right: two donut charts.
- Bad news row:
  - left: progress bars.
  - right: eyebrow + heading.

### Live Computed Values

- Main headline:
  - `font-size: 57.833332px`.
  - `font-weight: 500`.
  - `line-height: 69.4px`.
  - `color: white`.
- Eyebrow:
  - `font-size: 14.4px`.
  - `font-weight: 600`.
  - `line-height: 20.16px`.
  - `letter-spacing: 2.88px`.
  - `color: rgb(250, 88, 45)`.
- Section heading:
  - `font-size: 44.666668px`.
  - `font-weight: 500`.
  - `line-height: 53.6px`.
  - `color: white`.
- Donut chart:
  - chart box around `256px x 262px`.
  - SVG circle visual around `232px x 232px`.
  - percentage text uses large TT Hoves heading style.
- Progress label:
  - `font-size: 17.6px`.
  - `font-weight: 500`.
  - `line-height: 26.4px`.
  - `color: white`.
- Progress bar:
  - height around `28px`.
  - width controlled by `flex-basis`.
  - sampled values: `56%`, `73%`, `56%`.

### Animation

- Donut chart SVG circle:
  - animation name like `stat_circle_anim_*`.
  - duration: `1s`.
  - draws stroke from zero to final percentage.
- Progress rows:
  - class becomes `animate-progress`.
  - transition: `opacity 0.75s, transform 0.75s`.
  - bar width is percentage-based via `flex-basis`.
- Heading line animations:
  - observed transition on headings: `line-height 0.75s`.
- Background video loops quietly behind section.

## Layout Type 5: Dark Editorial Statement + Metric Cards

### Structure

- Dark video/texture background.
- Eyebrow left.
- Large editorial heading, split with branded orange text.
- CTA outline/primary aligned to right on desktop.
- Below: three stat teaser cards in a row.

### Live Computed Values

- Editorial heading:
  - `font-size: 44.666668px`.
  - `font-weight: 500`.
  - line-height observed up to `78.78px` while animated.
  - white text with branded orange segment.
- Stat card numbers:
  - large `h1` style, orange.
  - sampled number size later in page around heading scale.
- Cards:
  - 3 columns desktop.
  - Each card is a dark block with internal padding around `px-4 py-5`.
  - Copy uses sans body, white/light gray.

### Animation

- Title line reveal/line-height transition: around `0.75s`.
- Stat/card blocks appear with scroll-triggered opacity/transform behavior.
- Background video provides subtle continuous motion.

## Layout Type 6: Platform Tabs / Pinned Product Sections

### Structure

- Section title: `Introducing the Platforms, powered by Precision AI`.
- Horizontal tab nav:
  - AI-Powered Network Security.
  - AI-Driven Security Operations.
  - Real-Time Cloud Security.
  - Next-Generation Identity Security.
- Each tab has a large content area:
  - left: description, metrics, CTA.
  - right: award cards / visual metrics.
- The section is very tall and pinned through scroll.

### Live Computed Values

- Section title:
  - `font-size: 51.25px`.
  - `font-weight: 500`.
  - `line-height: 61.5px`.
  - `color: white`.
- Tab link:
  - `font-size: 18.4px`.
  - `font-weight: 500`.
  - `line-height: 27.6px`.
  - active color: white.
  - inactive color sampled: `rgb(185, 185, 185)`.
- Body copy:
  - TT Hoves sans.
  - usually `body-sans-2` scale, around `16-18px`.

### Animation

- Pinned/sticky scroll behavior across a tall section.
- Active tab changes by scroll position.
- Tab pane uses fade behavior (`tab-pane fade show active` in DOM).
- Award cards reveal/expand via local UI interaction.
- Scroll progress drives which tab content is active.

## Layout Type 7: Telemetry / Hidden Threat Ticker

### Structure

- Large dark data section.
- Title: `So you can defend at speed and scale.`
- Timestamp/date line.
- Horizontal/clustered metrics: cloud events, exploit attempts, malware executions, attacks prevented.

### Live Computed Values

- Numbers use large heading scale.
- Sample metric number:
  - `font-size: 27.041666px`.
  - `font-weight: 500`.
  - `line-height: 37.858334px`.
  - `color: rgb(250, 88, 45)`.
- Metric descriptions are compact uppercase/label style.

### Animation

- Ticker/counting feel.
- Metrics update visually as a live-data block.
- Background remains dark; motion is mostly number/ticker oriented.

## Layout Type 8: Solutions / Services Editorial Blocks

### Structure

- Dark section with large heading:
  - `Secure whatever, whenever, wherever — with less complexity.`
- Content appears as tabbed/product blocks.
- Section continues the sticky anchor nav.

### Live Computed Values

- Large heading:
  - `font-size: 51.25px`.
  - `font-weight: 500`.
  - `line-height: 61.5px`.
  - `color: white`.
- CTA style remains consistent:
  - `14.8px`.
  - `600`.
  - `20.72px`.
  - transition: `box-shadow 0.15s ease-in-out`.

### Animation

- Tab/pane transitions and scroll-linked active state.
- Copy blocks fade rather than bounce.
- No large parallax on text; motion stays restrained.

## Layout Type 9: Full Screen Video Section

### Structure

- Large video block.
- Minimal controls: volume/play.
- Video dominates viewport.

### Live Computed Values

- Video section sampled around `662px` height in viewport.
- Control buttons have zero visible text size because icon-only controls are used.

### Animation

- Continuous video playback.
- Play/volume controls have small UI state transitions.
- Section is primarily media-led, not text-led.

## Layout Type 10: Engagement Cards / Events

### Structure

- Heading: `Here for you. Here for what's next.`
- Cards like Ignite on Tour, Executive Briefing Center, Under Attack, Product Demo Center.
- Cards arranged in grid, image + text container.

### Live Computed Values

- Card base:
  - `font-size: 16px`.
  - `font-weight: 400`.
  - `line-height: 24px`.
  - dark text on light card backgrounds.
- Heading uses same TT Hoves heading scale as previous title sections.
- Cards have clear image block and padded text block.

### Animation

- Cards are static editorial cards with hover opacity/CTA response.
- Carousel/slider behavior appears on smaller widths.
- No heavy transform animation.

## Layout Type 11: Perspectives Carousel

### Structure

- Dark branded background.
- Heading: `Staying ahead demands perspectives you can trust.`
- CTA: `View all`.
- Large card carousel, with article/magazine cards.

### Live Computed Values

- Card/teaser base:
  - `font-size: 16px`.
  - `font-weight: 400`.
  - `line-height: 24px`.
- Carousel title text uses TT Hoves heading/card title classes.
- Cards can use branded gradient backgrounds.

### Animation

- Carousel arrows move horizontal track.
- Hover opacity around `.8`.
- Arrow hover changes border/background.
- Card content itself remains calm and editorial.

## Layout Type 12: Footer

### Structure

- Newsletter form / sign-up block.
- Mega footer accordion/navigation groups.
- Light and dark mixed surfaces.

### Live Computed Values

- Language/footer button sample:
  - `font-size: 18px`.
  - `font-weight: 600`.
  - `line-height: 25.2px`.
- Footer text switches between dark and white depending on block.

### Animation

- Accordion expand/collapse in footer groups.
- Form controls have standard focus/validation transitions.

## Animation System Summary

- Page uses restrained enterprise motion.
- Main animation types:
  - Scroll-pinned anchor nav: `transform 0.25s linear`.
  - Title line reveal/line-height transitions: around `0.75s`.
  - Donut SVG stroke draw: `1s`.
  - Progress row reveal: `opacity 0.75s, transform 0.75s`.
  - Button hover: `box-shadow 0.15s ease-in-out`.
  - Carousel track slide with hover opacity around `.8`.
  - Background video loops for visual energy.
- Avoid:
  - bouncy easing.
  - large scale transforms.
  - excessive blur/glow.
  - colorful gradients on text except branded accent spans.

## Practical Implementation Notes For Our Site

- Use a consistent type scale:
  - Hero h1: around `51-72px` depending viewport; weight `500`; line-height `1.2`.
  - Section h2: around `51-58px`; weight `500`; line-height `1.2`.
  - Section h3: around `44-45px`; weight `500`; line-height `1.2`.
  - Body hero/subtitle: around `21-24px`; weight `500`.
  - Nav/CTA: around `14.8px`; weight `600`; line-height `20.72px`.
  - Eyebrow: `14.4px`; weight `600`; letter spacing `2.88px`; uppercase.
- Use desktop spacing:
  - Header main nav height: around `100px`.
  - Hero vertical padding: `224px top`, `112px bottom`.
  - Sticky anchor height: `49px`.
  - Major dark sections: large top/bottom spacer, usually `medium` to `large` section padding.
- Use layout patterns:
  - Full-width dark backgrounds with inner grid.
  - Left text/right visual for hero.
  - Left heading/right metrics for stats.
  - Sticky anchor nav for long landing pages.
  - Tall pinned tab sections for product categories.
  - Flat editorial cards rather than heavy glassmorphism.
- Use color discipline:
  - Dark surface: `#141414`.
  - Brand orange: `#fa582d`.
  - White text on dark.
  - Gray inactive tab: `rgb(185, 185, 185)`.
  - Light surface: `rgb(244, 244, 242)`.

## Current Homepage Mapping

Updated target order after re-checking the full Palo Alto homepage in Safari:

1. Hero banner: keep DTG video/text, but Palo-style header, type scale, CTA, overlay.
2. Sticky anchor nav: black translucent, 49px height, orange CTA.
3. AI stats: `A new AI world is here`, two donut charts, three progress bars.
4. Why Palo: hardcoded Palo structure with one editorial heading and exactly 3 metric cards.
5. Platforms: hardcoded 4 platform tabs/panels:
   - AI-Powered Network Security.
   - AI-Driven Security Operations.
   - Real-Time Cloud Security.
   - Next-Generation Identity Security.
6. Speed/scale metrics: hardcoded 6 telemetry cards.
7. Intelligence/response services: added 3 services cards.
8. Solutions matrix: added left solution category list and right featured solution panel.
9. Customer proof/video: large customer heading and media-led play block.
10. Trusted logos: marquee logo strip.
11. Engagement tabs: exactly 4 cards: Executives, Specialists, Partners, Customers.
12. Perspectives: exactly 4 article/magazine cards.
13. Newsletter/footer: existing Palo-style footer remains below page content.
