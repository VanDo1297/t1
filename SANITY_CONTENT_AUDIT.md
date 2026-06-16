# Sanity Content Audit

Updated: 2026-06-16

## Cleanup completed

Removed source files that were not imported by any active route/layout/component/config:

- `src/components/ui/Card.tsx`
- `src/components/ui/Hexagon.tsx`
- `src/components/ui/Modal.tsx`
- `src/components/sections/ProcessTimeline.tsx`
- `src/components/sections/MetricsSection.tsx`
- `src/components/sections/StatsSection.tsx`
- `src/sanity/image.ts`
- `src/app/[locale]/solutions/[slug]/page.tsx`
- `src/app/[locale]/solutions/[slug]/SolutionDetailPage.tsx`

Removed the empty route folder after deleting the unused solution detail route:

- `src/app/[locale]/solutions/[slug]/`

Removed unused public assets that were not referenced by source code after cross-checking route files, components, constants, CSS-style `url(...)` usage, metadata, and scripts:

- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`
- `public/assets/dtg-brand/**`
- `public/assets/svtech/banner.png`
- `public/assets/svtech/border.svg`
- `public/assets/svtech/career.jpg`
- `public/assets/svtech/certificate.png`
- `public/assets/svtech/client-coteccons.png`
- `public/assets/svtech/client-homecredit.png`
- `public/assets/svtech/client-sacombank.png`
- `public/assets/svtech/field-1.png`
- `public/assets/svtech/field-2.png`
- `public/assets/svtech/field-3.png`
- `public/assets/svtech/hero.svg`
- `public/assets/svtech/illustration.png`
- `public/assets/svtech/logo.svg`
- `public/assets/svtech/logo-white.svg`
- `public/assets/svtech/partner-ai.png`
- `public/assets/svtech/partner-data.png`
- `public/assets/svtech/partner-global.png`
- `public/assets/svtech/partner-network.png`
- `public/assets/svtech/partner-security.png`
- `public/assets/svtech/services.png`
- `public/assets/svtech/services/service-1.jpg`
- `public/assets/svtech/services/service-2.jpg`
- `public/assets/svtech/services/service-3.jpg`
- `public/assets/svtech/why/customer-understanding.jpg`
- `public/assets/svtech/why/hero.jpg`
- `public/assets/svtech/why/partners/**`
- `public/assets/svtech/why/why-choose-us.png`
- `public/assets/svtech/why/workforce.jpg`
- `public/assets/svtech/why/workforce-bg.jpg`

Also removed dead exports from `src/lib/constants.ts`: `SITE_NAME`, `SITE_URL`, locale constants, `NAV_ITEMS`, `METRICS`, `CORE_SERVICES`, and `CASE_STUDIES`.

## Still hard-coded instead of fully driven by Sanity

### `src/lib/constants.ts`

- `HERO_VIDEO_URL` is still a fixed HTTPS media URL. `transformHero()` already exposes `_videoUrl`, but `HeroSection` does not consume it.
- `PROCESS_STEPS` fixes process step count/order. Process steps and detail bullets should come from Sanity.
- `PARTNER_LOGOS` and `CLIENT_LOGOS` fix partner/client names and public image paths. Sanity has partner/client transforms; components should render CMS logo URL first, public asset only as fallback.
- `NEWS_ITEMS` fixes news slugs, image paths, tags, and dates. News listing/detail/static params should come from Sanity news data.

### `src/components/layout/Header.tsx`

- Logo image `"/assets/svtech/dtg-logo-color.png"` and `alt="DTG"` are hard-coded. Use CMS logo URL/alt with this public image as fallback.
- Fallback `navItems` array is local. Acceptable only as fallback; primary menu already attempts `nav._items` from Sanity.
- Search aria label, keyboard hint `⌘K`, language labels `VI/EN`, `Tiếng Việt`, `English`, and flag text are hard-coded.

### `src/components/layout/Footer.tsx`

- Logo image and alt are hard-coded.
- Company address, phone numbers, fax, and email are hard-coded even though `sectionContact` exposes contact info.
- Quick-link key list and service key list are hard-coded arrays. They should come from Sanity nav/footer/service lists.
- Privacy/terms are text-only spans with labels from CMS but no CMS-managed URLs.

### `src/components/layout/SubNav.tsx`

- `navKeys` fixes section anchors and ordering locally.
- CTA anchor `#contact` is hard-coded.

### `src/components/sections/HeroSection.tsx`

- Video source uses `HERO_VIDEO_URL` constant instead of `hero._videoUrl` from Sanity.
- CTA destinations `/about` and `/contact` are hard-coded. Labels are CMS-backed, URLs are not.

### `src/components/sections/AboutSection.tsx`

- `metricKeys = ["mttr", "attacks", "endpoints"]` fixes list shape in code. Render metrics from Sanity data instead.
- CTA destination `/about` is hard-coded.

### `src/components/sections/CoreServicesSection.tsx`

- `platformKeys` and `platformIcons` fix platform list and icons in code.
- `statsKeysMap` fixes stat keys per platform. Stats already exist in Sanity transform and should drive the rendered stat list.
- `awardsData` is fully hard-coded content. Move award source/title lists into Sanity.
- Mobile fallback label `"More"` is hard-coded when `platforms.more` is missing.
- Section IDs, `#contact` links, and generated `platform-${index}` anchors are local structure. Keep only if intentionally code-owned.

### `src/components/sections/ServicesResponseSection.tsx`

- `statKeys` fixes stat card order locally.
- Trusted client logos come from `CLIENT_LOGOS`, duplicated/sliced in code. Use CMS client logo list first, public assets as fallback.

### `src/components/sections/SolutionsMatrixSection.tsx`

- Main solution and feature arrays are already read via `t.raw(...)` and can be populated by Sanity.
- Highlight behavior still assumes first item (`index === 0`) rather than a CMS `featured` flag.
- CTA anchor `#contact` is hard-coded.

### `src/components/sections/CtaBox.tsx`

- Background image `"/assets/svtech/team.webp"` is hard-coded in CSS. Add a Sanity image/URL field and keep this as fallback.
- CTA anchor `#testimonials` is hard-coded.

### `src/components/sections/PartnersSlider.tsx`

- Partner cards are rendered from `PARTNER_LOGOS` constants. Use Sanity partner logos first, public assets as fallback.

### `src/components/sections/CaseStudiesSection.tsx`

- `cardKeys` fixes card count/order locally. Render `engagement.cards` from a Sanity array.
- CTA anchor `#contact` is hard-coded inside every card.

### `src/components/sections/NewsSection.tsx`

- `insightKeys` fixes insight list locally.
- `insightImages` hard-codes public image paths, including a service image reused as the fourth card. Use `insights._items[].image` from Sanity with public fallback images.

### `src/components/sections/AboutDtgSection.tsx`

- `statIcons`, `statNumbers`, `statSuffixes`, `statSpecialValue`, and `[0, 1, 2, 3]` loops hard-code stat structure and values. Sanity `aboutDtg.stats` already includes values, labels, and descriptions but values are not used here.
- `recognitionIcons`, progress `widths`, and `[0, 1, 2, 3]` loops hard-code recognition item structure.

### `src/components/sections/ContactForm.tsx`

- Select placeholder format `"-- {solution} --"` is hard-coded.
- API endpoint `"/api/contact"` is code-owned, but form error messages come from Zod hard-coded strings in `src/lib/validations.ts`.

### `src/app/[locale]/process/page.tsx`

- `stepDetails` hard-codes all process detail bullet content.
- Heading uses Sanity/translation, but `PROCESS_STEPS`, `"Bước"`, step number labels, and detail bullets are local.

### `src/app/[locale]/contact/page.tsx`

- Address, phone numbers, fax, email, and Google Maps embed URL are hard-coded.
- These should be fields in Sanity contact/settings, with map URL/embed URL managed by CMS.

### `src/app/[locale]/partners/page.tsx`

- `categories` fixes filter tabs locally.
- Filter display text `"Tất cả"` and generated category labels are hard-coded.
- Partner list uses `PARTNER_LOGOS` constants instead of Sanity.
- Certification title `"Chứng Chỉ Chuyên Gia"` and all certification names/images are hard-coded. Move certifications to Sanity and use public images as fallback.

### `src/app/[locale]/news/page.tsx`

- Tag list `["all", "event", "technology", "company", "press"]` is hard-coded.
- News cards use `NEWS_ITEMS` constants for slug/image/tag/date instead of Sanity.

### `src/app/[locale]/news/[slug]/page.tsx`

- `generateStaticParams()` and lookup use `NEWS_ITEMS` constants instead of Sanity news slugs.
- Detail props for tag/date/image come from local constants instead of Sanity.

### `src/app/[locale]/news/[slug]/NewsDetailPage.tsx`

- Article body is placeholder text hard-coded in Vietnamese.
- News detail should render Sanity body/portable text/MDX-equivalent content.

### `src/app/[locale]/layout.tsx`

- Metadata title, description, and icon path are hard-coded. Site settings/SEO should come from Sanity, with public icon as fallback.

### `src/components/ui/ChatButton.tsx`

- Default greeting, bot result/no-result messages, contact link title/section, header text `DTG Support`, status `Online`, input placeholder, and all SVG-only labels are hard-coded.
- Chat/search copy should be moved to Sanity/common translations.

### `src/components/ui/SearchDialog.tsx`

- Most visible copy uses `search` translations.
- Keyboard hint `ESC` is hard-coded.

### `src/lib/search-index.ts`

- Search sections/fallback labels such as `Home`, `About`, `About DTG`, `Services`, `Why Choose`, `Case Studies`, `News`, `Contact`, `Partners`, and `Process` are hard-coded.
- Search href mapping is hard-coded. If Sanity owns page URLs/slugs, build the index from CMS route metadata.

### `src/lib/validations.ts`

- Zod validation error messages are hard-coded Vietnamese strings. Move user-facing validation messages to Sanity/translation config or map error codes to CMS copy.

### `src/app/api/contact/route.ts`

- JSON error messages are hard-coded.
- Commented email sender, recipient, subject, and HTML template are hard-coded. If enabled, these should come from environment/settings plus CMS-managed email copy where appropriate.

## Existing Sanity data that is not fully consumed

- `transformHero()` returns `_videoUrl`, but `HeroSection` reads `HERO_VIDEO_URL`.
- `transformServices()` returns `_items` with key/icon/slug, but the current `/solutions` page does not consume that service list for rendered cards or detail navigation.
- `transformWhyChoose()` returns `_metrics` and process step data, but process page still uses local `PROCESS_STEPS` and local `stepDetails`.
- `transformPartners()` returns `_partnerLogos` and `_clientLogos`, but partner/client components still use constants.
- `transformNews()` returns `_items` with slug/image/tag/date, but news pages use `NEWS_ITEMS`.
- `transformInsights()` returns `_items` with images, but `NewsSection` uses local `insightImages`.
- `transformAboutDtg()` returns stat values, but `AboutDtgSection` ignores them and uses local stat numbers/suffixes.

## Public asset fallback rule

Keep the remaining files under `public/assets` only as fallbacks. For logo/image/media fields, the render pattern should be:

1. Use Sanity image/URL if present.
2. Fall back to the existing public asset path.
3. Avoid using public asset paths as the primary content source.
