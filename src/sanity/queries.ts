import { client } from "./client";

// Map from Sanity section type → next-intl namespace key
const SECTION_MAP: Record<string, string> = {
  sectionNav: "nav",
  sectionSubNav: "subNav",
  sectionHero: "hero",
  sectionAbout: "about",
  sectionWhyChoose: "whyChoose",
  sectionServices: "services",
  sectionPartners: "partners",
  sectionCaseStudies: "caseStudies",
  sectionNews: "news",
  sectionContact: "contact",
  sectionFooter: "footer",
  sectionStats: "stats",
  sectionWhyPalo: "whyPalo",
  sectionPlatforms: "platforms",
  sectionServicesResponse: "servicesResponse",
  sectionSolutionsMatrix: "solutionsMatrix",
  sectionCtaBox: "ctaBox",
  sectionPartnersSlider: "partnersSlider",
  sectionEngagement: "engagement",
  sectionInsights: "insights",
  sectionSearch: "search",
  sectionCommon: "common",
  sectionAboutDtg: "aboutDtg",
};

type AnyDoc = Record<string, any>;

function toArrayMap(arr: any[] | undefined, keyField: string) {
  if (!arr) return {};
  const result: Record<string, any> = {};
  for (const item of arr) {
    if (item[keyField]) result[item[keyField]] = item;
  }
  return result;
}

function transformNav(doc: AnyDoc) {
  const result: Record<string, any> = {};
  for (const item of doc.danhSachMenu || []) {
    if (item.key) result[item.key] = item.nhan;
  }
  // Store items array for Header to use
  result._items = (doc.danhSachMenu || []).map((item: any) => ({
    key: item.key,
    href: item.href || `/${item.key}`,
  }));
  return result;
}

function transformSubNav(doc: AnyDoc) {
  const result: Record<string, string> = {};
  for (const item of doc.danhSachMenu || []) {
    if (item.key) result[item.key] = item.nhan;
  }
  return result;
}

function transformHero(doc: AnyDoc) {
  return {
    title: doc.title, titleHighlight: doc.titleHighlight, subtitle: doc.subtitle,
    ctaProfile: doc.ctaProfile, ctaContact: doc.ctaContact, keywords: doc.keywords || [],
    _videoUrl: doc.videoUrl || "",
  };
}

function transformAbout(doc: AnyDoc) {
  const orbit: Record<string, string> = {};
  const orbitKeys = ["security", "data", "cloud", "network"];
  (doc.orbit || []).forEach((item: any, i: number) => {
    const key = orbitKeys[i] || `item${i}`;
    orbit[key] = item.ten;
    orbit[`${key}Desc`] = item.moTa;
  });
  return {
    kicker: doc.kicker, title: doc.title,
    description1: doc.description1, description2: doc.description2,
    cta: doc.cta, orbitCenter: doc.orbitCenter, orbit,
  };
}

function transformWhyChoose(doc: AnyDoc) {
  const metrics: Record<string, any> = {};
  for (const item of doc.danhSachChiSo || []) {
    if (item.key) metrics[item.key] = item.nhan;
  }
  // Store metrics with numeric values for components
  const _metrics = (doc.danhSachChiSo || []).map((item: any) => ({
    value: item.giaTri, suffix: item.hauTo || "+", label: item.key,
  }));

  const values: Record<string, { title: string; desc: string }> = {};
  for (const item of doc.danhSachGiaTri || []) {
    if (item.key) values[item.key] = { title: item.tieuDe, desc: item.moTa };
  }

  const steps: Record<string, { title: string; desc: string }> = {};
  (doc.danhSachBuoc || []).forEach((item: any, i: number) => {
    steps[String(i + 1)] = { title: item.tieuDe, desc: item.moTa };
  });

  return {
    title: doc.title, metrics, values, _metrics,
    process: { kicker: doc.kickerQuyTrinh || "", title: doc.tieuDeQuyTrinh, steps },
    cta: { subtitle: doc.ctaSubtitle, message: doc.ctaMessage, button: doc.ctaButton },
  };
}

function transformServices(doc: AnyDoc) {
  const result: Record<string, any> = {
    kicker: doc.kicker, title: doc.title, viewDetail: doc.viewDetail,
  };
  for (const item of doc.danhSachDichVu || []) {
    if (item.key) result[item.key] = { title: item.tieuDe, desc: item.moTa };
  }
  result._items = (doc.danhSachDichVu || []).map((item: any) => ({
    key: item.key, icon: item.icon || "", slug: item.slug || "",
  }));
  return result;
}

function transformCaseStudies(doc: AnyDoc) {
  const result: Record<string, any> = { kicker: doc.kicker, title: doc.title };
  for (const item of doc.danhSachDuAn || []) {
    if (item.key) result[item.key] = { title: item.tieuDe, desc: item.moTa };
  }
  result._items = (doc.danhSachDuAn || []).map((item: any) => ({
    key: item.key, image: item.hinhAnh || null,
  }));
  return result;
}

function transformNews(doc: AnyDoc) {
  const tags: Record<string, string> = {};
  for (const item of doc.danhSachTag || []) {
    if (item.key) tags[item.key] = item.nhan;
  }
  const items: Record<string, string> = {};
  for (const item of doc.danhSachBaiViet || []) {
    if (item.slug) items[item.slug] = item.tieuDe;
  }
  const _items = (doc.danhSachBaiViet || []).map((item: any) => ({
    slug: item.slug, image: item.hinhAnh || null, tag: item.tag || "", date: item.ngay || "",
  }));
  return { kicker: doc.kicker, title: doc.title, viewAll: doc.viewAll, tags, items, _items };
}

function transformContact(doc: AnyDoc) {
  const solutionOptions: Record<string, string> = {};
  for (const item of doc.danhSachGiaiPhap || []) {
    if (item.key) solutionOptions[item.key] = item.nhan;
  }
  return {
    title: doc.title,
    info: { title: doc.infoTitle, phone: doc.infoPhone, email: doc.infoEmail, address: doc.infoAddress },
    form: {
      title: doc.formTitle, name: doc.formName, company: doc.formCompany,
      phoneEmail: doc.formPhoneEmail, solution: doc.formSolution, message: doc.formMessage,
      submit: doc.formSubmit, success: doc.formSuccess, solutionOptions,
    },
  };
}

function transformFooter(doc: AnyDoc) {
  const servicesList: Record<string, string> = {};
  for (const item of doc.danhSachDichVu || []) {
    if (item.key) servicesList[item.key] = item.ten;
  }
  return {
    description: doc.description, quickLinks: doc.quickLinks, services: doc.services,
    newsletter: doc.newsletter, newsletterPlaceholder: doc.newsletterPlaceholder,
    subscribe: doc.subscribe, copyright: doc.copyright, privacy: doc.privacy,
    terms: doc.terms, ctaHeading: doc.ctaHeading, servicesList,
  };
}

function transformStats(doc: AnyDoc) {
  return {
    heading: doc.heading, goodNews: doc.goodNews, goodNewsTitle: doc.goodNewsTitle,
    growth: doc.growth, growthSub: doc.growthSub,
    development: doc.development, developmentSub: doc.developmentSub,
    zeroDay: doc.zeroDay, ransomware: doc.ransomware, dataBreaches: doc.dataBreaches,
    badNews: doc.badNews, badNewsTitle: doc.badNewsTitle,
  };
}

function transformWhyPalo(doc: AnyDoc) {
  const metrics: Record<string, any> = {};
  for (const item of doc.danhSachChiSo || []) {
    if (item.key) {
      metrics[item.key] = { value: item.giaTri, label: item.nhan, desc: item.moTa };
      if (item.prefix) metrics[item.key].prefix = item.prefix;
    }
  }
  return { kicker: doc.kicker, heading: doc.heading, headingAccent: doc.headingAccent, cta: doc.cta, metrics };
}

function transformPlatforms(doc: AnyDoc) {
  const items: Record<string, any> = {};
  for (const item of doc.danhSachNenTang || []) {
    if (item.key) {
      const stats: Record<string, any> = {};
      for (const s of item.thongKe || []) {
        if (s.key) stats[s.key] = { value: s.giaTri, label: s.nhan };
      }
      items[item.key] = { tab: item.tab, heading: item.tieuDe, desc: item.moTa, cta: item.cta, stats };
    }
  }
  return { heading: doc.heading, seeAll: doc.seeAll, items };
}

function transformServicesResponse(doc: AnyDoc) {
  const stats: Record<string, any> = {};
  for (const item of doc.danhSachThongKe || []) {
    if (item.key) stats[item.key] = { value: item.giaTri, label: item.nhan };
  }
  return {
    heading: doc.heading, kicker: doc.kicker, title: doc.title, desc: doc.desc, cta: doc.cta,
    stats, matters: { value: doc.mattersValue, label: doc.mattersLabel },
    response: { value: doc.responseValue, label: doc.responseLabel },
  };
}

function transformSolutionsMatrix(doc: AnyDoc) {
  return {
    heading: doc.heading, featured: doc.featured, featuredTitle: doc.featuredTitle,
    exploreCta: doc.exploreCta, items: doc.danhSachGiaiPhap || [], features: doc.danhSachTinhNang || [],
  };
}

function transformCtaBox(doc: AnyDoc) {
  return { heading: doc.heading, cta: doc.cta, playLabel: doc.playLabel };
}

function transformPartnersSlider(doc: AnyDoc) {
  return { heading: doc.heading, headingAccent: doc.headingAccent };
}

function transformPartners(doc: AnyDoc) {
  const _partnerLogos = (doc.danhSachDoiTac || []).map((item: any) => ({
    name: item.ten, logo: item.logo || null,
  }));
  const _clientLogos = (doc.danhSachKhachHang || []).map((item: any) => ({
    name: item.ten, logo: item.logo || null,
  }));
  return { kicker: doc.kicker, title: doc.title, _partnerLogos, _clientLogos };
}

function transformEngagement(doc: AnyDoc) {
  const cards: Record<string, any> = {};
  for (const item of doc.danhSachThe || []) {
    if (item.key) cards[item.key] = { tab: item.tab, title: item.tieuDe, desc: item.moTa, cta: item.cta };
  }
  return { heading: doc.heading, cards };
}

function transformInsights(doc: AnyDoc) {
  const items: Record<string, any> = {};
  for (const item of doc.danhSachBaiViet || []) {
    if (item.key) items[item.key] = { type: item.loai, title: item.tieuDe };
  }
  const _items = (doc.danhSachBaiViet || []).map((item: any) => ({
    key: item.key, image: item.hinhAnh || null,
  }));
  return { heading: doc.heading, viewAll: doc.viewAll, readMore: doc.readMore, items, _items };
}

function transformSearch(doc: AnyDoc) {
  return { placeholder: doc.placeholder, noResults: doc.noResults, hint: doc.hint };
}

function transformCommon(doc: AnyDoc) {
  return { learnMore: doc.learnMore, readMore: doc.readMore, backToHome: doc.backToHome };
}

function transformAboutDtg(doc: AnyDoc) {
  const stats: Record<string, any> = {};
  (doc.stats || []).forEach((item: any, i: number) => {
    stats[String(i)] = { value: item.value, label: item.label, desc: item.desc };
  });
  const recognition: Record<string, any> = {};
  (doc.recognitionItems || []).forEach((item: any, i: number) => {
    recognition[String(i)] = { label: item.label };
  });
  const whyPoints: Record<string, string> = {};
  (doc.whyPoints || []).forEach((point: string, i: number) => {
    whyPoints[`point${i + 1}`] = point;
  });
  return {
    kicker: doc.kicker, heading: doc.heading, subtitle: doc.subtitle,
    stats,
    commitment: { kicker: doc.commitmentKicker, heading: doc.commitmentHeading, desc: doc.commitmentDesc },
    recognitionKicker: doc.recognitionKicker,
    recognition,
    why: { kicker: doc.whyKicker, heading: doc.whyHeading, ...whyPoints },
  };
}

const TRANSFORMERS: Record<string, (doc: AnyDoc) => any> = {
  sectionNav: transformNav,
  sectionSubNav: transformSubNav,
  sectionHero: transformHero,
  sectionAbout: transformAbout,
  sectionWhyChoose: transformWhyChoose,
  sectionServices: transformServices,
  sectionPartners: transformPartners,
  sectionCaseStudies: transformCaseStudies,
  sectionNews: transformNews,
  sectionContact: transformContact,
  sectionFooter: transformFooter,
  sectionStats: transformStats,
  sectionWhyPalo: transformWhyPalo,
  sectionPlatforms: transformPlatforms,
  sectionServicesResponse: transformServicesResponse,
  sectionSolutionsMatrix: transformSolutionsMatrix,
  sectionCtaBox: transformCtaBox,
  sectionPartnersSlider: transformPartnersSlider,
  sectionEngagement: transformEngagement,
  sectionInsights: transformInsights,
  sectionSearch: transformSearch,
  sectionCommon: transformCommon,
  sectionAboutDtg: transformAboutDtg,
};

const ALL_TYPES = Object.keys(SECTION_MAP).map((t) => `"${t}"`).join(", ");

export async function getTranslations(
  locale: string
): Promise<Record<string, unknown>> {
  const docs = await client.fetch<AnyDoc[]>(
    `*[_type in [${ALL_TYPES}] && language == $locale]`,
    { locale }
  );

  const messages: Record<string, unknown> = {};

  for (const doc of docs) {
    const nsKey = SECTION_MAP[doc._type];
    const transformer = TRANSFORMERS[doc._type];
    if (nsKey && transformer) {
      messages[nsKey] = transformer(doc);
    }
  }

  return messages;
}
