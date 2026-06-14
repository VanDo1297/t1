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
  _locale: string
): SearchItem[] {
  const items: SearchItem[] = [];
  const m = messages as Record<string, Record<string, unknown>>;

  // Hero → trang chủ
  if (m.hero) {
    items.push({
      id: "hero",
      title: String(m.hero.title || ""),
      content: [m.hero.subtitle, m.hero.titleHighlight].filter(Boolean).join(" "),
      section: "Home",
      href: "/",
    });
  }

  // About → /about
  if (m.about) {
    items.push({
      id: "about",
      title: String(m.about.title || ""),
      content: [m.about.kicker, m.about.description1, m.about.description2].filter(Boolean).join(" "),
      section: String(m.about.kicker || "About"),
      href: "/about",
    });
  }

  // AboutDtg
  if (m.aboutDtg) {
    const ad = m.aboutDtg as Record<string, unknown>;
    items.push({
      id: "about-dtg",
      title: String(ad.heading || ""),
      content: String(ad.subtitle || ""),
      section: String(ad.kicker || "About DTG"),
      href: "/about",
    });
  }

  // Services → /solutions
  if (m.services) {
    const svc = m.services as Record<string, unknown>;
    // Section title
    items.push({
      id: "services",
      title: String(svc.title || ""),
      content: "",
      section: String(svc.kicker || "Services"),
      href: "/solutions",
    });
    // Individual services - dynamic from keys
    const skipKeys = ["kicker", "title", "viewDetail", "_items"];
    for (const [key, val] of Object.entries(svc)) {
      if (skipKeys.includes(key) || typeof val !== "object" || val === null) continue;
      const item = val as Record<string, string>;
      if (item.title) {
        items.push({
          id: `service-${key}`,
          title: item.title,
          content: item.desc || "",
          section: String(svc.kicker || "Services"),
          href: "/solutions",
        });
      }
    }
  }

  // Why Choose
  if (m.whyChoose) {
    const wc = m.whyChoose as Record<string, unknown>;
    items.push({
      id: "why-choose",
      title: String(wc.title || ""),
      content: "",
      section: "Why Choose",
      href: "/",
    });

    const values = wc.values as Record<string, Record<string, string>> | undefined;
    if (values) {
      for (const [key, val] of Object.entries(values)) {
        if (val.title) {
          items.push({
            id: `value-${key}`,
            title: val.title,
            content: val.desc || "",
            section: "Why Choose",
            href: "/",
          });
        }
      }
    }
  }

  // Case Studies - dynamic
  if (m.caseStudies) {
    const cs = m.caseStudies as Record<string, unknown>;
    // Index section title
    items.push({
      id: "case-studies",
      title: String(cs.title || ""),
      content: String(cs.kicker || ""),
      section: String(cs.kicker || "Case Studies"),
      href: "/",
    });
    const skipKeys = ["kicker", "title", "_items"];
    for (const [key, val] of Object.entries(cs)) {
      if (skipKeys.includes(key) || typeof val !== "object" || val === null) continue;
      const item = val as Record<string, string>;
      if (item.title) {
        items.push({
          id: `case-${key}`,
          title: item.title,
          content: item.desc || "",
          section: String(cs.kicker || "Case Studies"),
          href: "/",
        });
      }
    }
  }

  // News - dynamic
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
          href: `/news/${slug}`,
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
      href: "/contact",
    });
  }

  // Partners
  if (m.partners) {
    items.push({
      id: "partners",
      title: String((m.partners as Record<string, unknown>).title || "Partners"),
      content: "",
      section: String((m.partners as Record<string, unknown>).kicker || "Partners"),
      href: "/partners",
    });
  }

  // Process
  if (m.whyChoose) {
    const wc = m.whyChoose as Record<string, unknown>;
    const process = wc.process as Record<string, unknown> | undefined;
    if (process) {
      items.push({
        id: "process",
        title: String(process.title || ""),
        content: "",
        section: "Process",
        href: "/process",
      });
    }
  }

  return items;
}
