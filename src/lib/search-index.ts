export interface SearchItem {
  id: string;
  title: string;
  content: string;
  section: string;
  href: string;
}

/**
 * Build a flat search index from all site content.
 * Called at component level with translated strings.
 */
export function buildSearchIndex(
  messages: Record<string, unknown>,
  locale: string
): SearchItem[] {
  const items: SearchItem[] = [];
  const m = messages as Record<string, Record<string, unknown>>;

  // Hero
  if (m.hero) {
    items.push({
      id: "hero",
      title: String(m.hero.title || ""),
      content: [m.hero.subtitle, m.hero.titleHighlight].filter(Boolean).join(" "),
      section: "Home",
      href: `/${locale}`,
    });
  }

  // About
  if (m.about) {
    items.push({
      id: "about",
      title: String(m.about.title || ""),
      content: [m.about.description1, m.about.description2].filter(Boolean).join(" "),
      section: String(m.about.kicker || "About"),
      href: `/${locale}/about`,
    });
  }

  // Services
  if (m.services) {
    const svc = m.services as Record<string, unknown>;
    for (const key of ["network", "server", "security", "cloud", "conference", "ai"]) {
      const item = svc[key] as Record<string, string> | undefined;
      if (item) {
        items.push({
          id: `service-${key}`,
          title: item.title,
          content: item.desc,
          section: String(svc.kicker || "Services"),
          href: `/${locale}/solutions/${key}`,
        });
      }
    }
  }

  // Why Choose / Values
  if (m.whyChoose) {
    const wc = m.whyChoose as Record<string, unknown>;
    items.push({
      id: "why-choose",
      title: String(wc.title || ""),
      content: "",
      section: "Why Choose",
      href: `/${locale}#why-palo`,
    });

    const values = wc.values as Record<string, Record<string, string>> | undefined;
    if (values) {
      for (const [key, val] of Object.entries(values)) {
        items.push({
          id: `value-${key}`,
          title: val.title,
          content: val.desc,
          section: "Why Choose",
          href: `/${locale}#why-palo`,
        });
      }
    }
  }

  // Case Studies
  if (m.caseStudies) {
    const cs = m.caseStudies as Record<string, unknown>;
    for (const key of ["evn", "bca", "vinhomes", "hospital"]) {
      const item = cs[key] as Record<string, string> | undefined;
      if (item) {
        items.push({
          id: `case-${key}`,
          title: item.title,
          content: item.desc,
          section: String(cs.kicker || "Case Studies"),
          href: `/${locale}#engage`,
        });
      }
    }
  }

  // News
  if (m.news) {
    const news = m.news as Record<string, unknown>;
    const newsItems = news.items as Record<string, string> | undefined;
    if (newsItems) {
      for (const [slug, title] of Object.entries(newsItems)) {
        items.push({
          id: `news-${slug}`,
          title,
          content: "",
          section: String(news.kicker || "News"),
          href: `/${locale}/news/${slug}`,
        });
      }
    }
  }

  // Contact
  if (m.contact) {
    items.push({
      id: "contact",
      title: String((m.contact as Record<string, unknown>).title || "Contact"),
      content: "",
      section: "Contact",
      href: `/${locale}/contact`,
    });
  }

  return items;
}
