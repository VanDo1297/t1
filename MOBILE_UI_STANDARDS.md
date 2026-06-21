# Mobile UI Standards

Homepage `/vi` is the visual reference for mobile screens. These rules apply below `640px`; tablet and desktop styles must remain unchanged unless a task explicitly requests otherwise.

## Typography

| Role | Size | Line height | Typical weight |
| --- | ---: | ---: | ---: |
| Page/hero title | 48px | 1.12 | 500–700 |
| Primary section title | 32px | 1.25–1.5 | 700 |
| Compact section title | 24–28px | 1.5 | 700 |
| Subsection/card title | 20px | 1.4 | 600–700 |
| Compact card title/name | 14–18px | 1.4–1.5 | 600–700 |
| Introductory body | 18px | 1.8 | 400 |
| Standard body | 16px | 1.7 | 400 |
| Card supporting copy | 12–14px | 1.4–1.5 | 400–600 |
| Tabs/filters/meta | 14–16px | 1.5 | 500–700 |

Use uppercase tracking sparingly. Section headings use approximately `0.04em–0.05em`; labels may use up to `0.15em`.

## Cards

- Mobile grids use one card per row unless the card is intentionally compact.
- Use `16px` between cards.
- Use `20–24px` internal padding.
- Use `12–16px` corner radius.
- Card title is normally `20px`; supporting copy is `14–16px` depending on content density.
- Preserve a clear hierarchy: title, supporting copy, then metadata/action.

## Spacing and layout

- Page gutter: `20px` (`px-5`).
- Standard section vertical padding: `48px`; hero/content-led sections may use `64–80px`.
- Keep text lines readable without applying `max-w` to page containers.
- Horizontal tab groups remain scrollable on mobile and automatically reveal the active tab.
- Sticky secondary navigation must sit immediately below the `56px` site subnavigation.

## Responsive implementation

- Mobile-only changes belong below `640px` or in base Tailwind utilities with desktop values restored at `sm`/`md`.
- Do not change desktop typography while fixing mobile.
- Scope page-specific overrides under a page class to prevent leakage.
- Prefer adding narrowly scoped overrides over restructuring existing components.

## Applied page scopes

- `about-page-mobile`: About page.
- `solutions-overview-mobile`: Solutions and services overview.
- `solution-category-mobile`: Technology, cyber security, and AI category pages.
- `solution-detail-mobile`: Individual solution pages.
- `solution-articles-mobile`: Solution article listings.
- `news-list-mobile`: News listing and category filters.
- `article-detail-mobile`: News and solution article details.
