import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { randomUUID } from "crypto";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const k = () => randomUUID().replace(/-/g, "").slice(0, 12);

function importBothLanguages(vi, en) {
  const tx = client.transaction();
  for (const doc of [...vi, ...en]) {
    tx.createOrReplace(doc);
  }
  return tx.commit();
}

async function run() {
  const vi = JSON.parse(readFileSync("src/messages/vi.json", "utf-8"));
  const en = JSON.parse(readFileSync("src/messages/en.json", "utf-8"));

  const docs = [];

  for (const lang of ["vi", "en"]) {
    const d = lang === "vi" ? vi : en;

    // Nav
    const navHrefs = { home: "/", about: "/about", solutions: "/solutions", process: "/process", partners: "/partners", news: "/news", contact: "/contact" };
    const navKeys = Object.keys(d.nav);
    docs.push({
      _id: `sectionNav-${lang}`, _type: "sectionNav", language: lang,
      danhSachMenu: navKeys.map((nKey) => ({
        _key: k(), _type: "object", key: nKey, nhan: d.nav[nKey], href: navHrefs[nKey] || `/${nKey}`,
      })),
    });

    // SubNav
    const subNavKeys = Object.keys(d.subNav);
    docs.push({
      _id: `sectionSubNav-${lang}`, _type: "sectionSubNav", language: lang,
      danhSachMenu: subNavKeys.map((snKey) => ({
        _key: k(), _type: "object", key: snKey, nhan: d.subNav[snKey],
      })),
    });

    // Hero
    docs.push({
      _id: `sectionHero-${lang}`, _type: "sectionHero", language: lang,
      title: d.hero.title, titleHighlight: d.hero.titleHighlight, subtitle: d.hero.subtitle,
      ctaProfile: d.hero.ctaProfile, ctaContact: d.hero.ctaContact, keywords: d.hero.keywords,
      videoUrl: "https://homepage.dtgsoft.vn/api/v1/public/media/54cabb07-4d47-4c49-829f-1bd933ff5e29/file",
    });

    // About
    const orbitKeys = ["security", "data", "cloud", "network"];
    docs.push({
      _id: `sectionAbout-${lang}`, _type: "sectionAbout", language: lang,
      kicker: d.about.kicker, title: d.about.title,
      description1: d.about.description1, description2: d.about.description2,
      cta: d.about.cta, orbitCenter: d.about.orbitCenter,
      orbit: orbitKeys.map((oKey) => ({
        _key: k(), _type: "object",
        ten: d.about.orbit[oKey], moTa: d.about.orbit[`${oKey}Desc`],
      })),
    });

    // WhyChoose
    const metricsData = [
      { key: "yearsExperience", value: 23, suffix: "+" },
      { key: "projectsDeployed", value: 1000, suffix: "+" },
      { key: "techPartners", value: 40, suffix: "+" },
      { key: "enterpriseClients", value: 500, suffix: "+" },
    ];
    const valueKeys = ["experience", "experts", "solutions", "nationwide", "support", "quality"];
    const stepKeys = ["1", "2", "3", "4", "5", "6"];
    docs.push({
      _id: `sectionWhyChoose-${lang}`, _type: "sectionWhyChoose", language: lang,
      title: d.whyChoose.title,
      danhSachChiSo: metricsData.map((m) => ({
        _key: k(), _type: "object", key: m.key, nhan: d.whyChoose.metrics[m.key], giaTri: m.value, hauTo: m.suffix,
      })),
      danhSachGiaTri: valueKeys.map((vKey) => ({
        _key: k(), _type: "object", key: vKey,
        tieuDe: d.whyChoose.values[vKey].title, moTa: d.whyChoose.values[vKey].desc,
      })),
      tieuDeQuyTrinh: d.whyChoose.process.title,
      danhSachBuoc: stepKeys.map((sKey) => ({
        _key: k(), _type: "object",
        tieuDe: d.whyChoose.process.steps[sKey].title, moTa: d.whyChoose.process.steps[sKey].desc,
      })),
      ctaSubtitle: d.whyChoose.cta.subtitle,
      ctaMessage: d.whyChoose.cta.message,
      ctaButton: d.whyChoose.cta.button,
    });

    // Services
    const svcData = [
      { key: "network", icon: "Network", slug: "network-telecom" },
      { key: "server", icon: "Server", slug: "server-storage" },
      { key: "security", icon: "Shield", slug: "cybersecurity" },
      { key: "cloud", icon: "Cloud", slug: "cloud-virtualization" },
      { key: "conference", icon: "Video", slug: "video-conference" },
      { key: "ai", icon: "Brain", slug: "ai-solutions" },
    ];
    docs.push({
      _id: `sectionServices-${lang}`, _type: "sectionServices", language: lang,
      kicker: d.services.kicker, title: d.services.title, viewDetail: d.services.viewDetail,
      danhSachDichVu: svcData.map((s) => ({
        _key: k(), _type: "object", key: s.key,
        tieuDe: d.services[s.key].title, moTa: d.services[s.key].desc,
        icon: s.icon, slug: s.slug,
      })),
    });

    // Partners
    docs.push({
      _id: `sectionPartners-${lang}`, _type: "sectionPartners", language: lang,
      kicker: d.partners.kicker, title: d.partners.title,
    });

    // Case Studies
    const csKeys = ["evn", "bca", "vinhomes", "hospital"];
    docs.push({
      _id: `sectionCaseStudies-${lang}`, _type: "sectionCaseStudies", language: lang,
      kicker: d.caseStudies.kicker, title: d.caseStudies.title,
      danhSachDuAn: csKeys.map((cKey) => ({
        _key: k(), _type: "object", key: cKey,
        tieuDe: d.caseStudies[cKey].title, moTa: d.caseStudies[cKey].desc,
      })),
    });

    // News
    const tagKeys = ["all", "event", "technology", "company", "press"];
    const newsMetaData = {
      "dtg-hop-tac-ha-tang-ai": { tag: "event", ngay: "2026-06-12" },
      "hybrid-cloud-architecture": { tag: "technology", ngay: "2026-06-10" },
      "dtg-certifications": { tag: "company", ngay: "2026-06-08" },
    };
    const newsItemKeys = Object.keys(d.news.items);
    docs.push({
      _id: `sectionNews-${lang}`, _type: "sectionNews", language: lang,
      kicker: d.news.kicker, title: d.news.title, viewAll: d.news.viewAll,
      danhSachTag: tagKeys.map((tKey) => ({
        _key: k(), _type: "object", key: tKey, nhan: d.news.tags[tKey],
      })),
      danhSachBaiViet: newsItemKeys.map((nKey) => ({
        _key: k(), _type: "object", slug: nKey, tieuDe: d.news.items[nKey],
        tag: newsMetaData[nKey]?.tag || "",
        ngay: newsMetaData[nKey]?.ngay || "",
      })),
    });

    // Contact
    const solKeys = ["network", "server", "security", "maintenance", "ai", "cloud"];
    docs.push({
      _id: `sectionContact-${lang}`, _type: "sectionContact", language: lang,
      title: d.contact.title,
      infoTitle: d.contact.info.title, infoPhone: d.contact.info.phone,
      infoEmail: d.contact.info.email, infoAddress: d.contact.info.address,
      formTitle: d.contact.form.title, formName: d.contact.form.name,
      formCompany: d.contact.form.company, formPhoneEmail: d.contact.form.phoneEmail,
      formSolution: d.contact.form.solution, formMessage: d.contact.form.message,
      formSubmit: d.contact.form.submit, formSuccess: d.contact.form.success,
      danhSachGiaiPhap: solKeys.map((soKey) => ({
        _key: k(), _type: "object", key: soKey, nhan: d.contact.form.solutionOptions[soKey],
      })),
    });

    // Footer
    const fSvcKeys = ["network", "server", "security", "cloud", "conference", "ai"];
    docs.push({
      _id: `sectionFooter-${lang}`, _type: "sectionFooter", language: lang,
      description: d.footer.description, quickLinks: d.footer.quickLinks,
      services: d.footer.services, newsletter: d.footer.newsletter,
      newsletterPlaceholder: d.footer.newsletterPlaceholder, subscribe: d.footer.subscribe,
      copyright: d.footer.copyright, privacy: d.footer.privacy, terms: d.footer.terms,
      ctaHeading: d.footer.ctaHeading,
      danhSachDichVu: fSvcKeys.map((fKey) => ({
        _key: k(), _type: "object", key: fKey, ten: d.footer.servicesList[fKey],
      })),
    });

    // Stats
    docs.push({
      _id: `sectionStats-${lang}`, _type: "sectionStats", language: lang,
      heading: d.stats.heading, goodNews: d.stats.goodNews, goodNewsTitle: d.stats.goodNewsTitle,
      growth: d.stats.growth, growthSub: d.stats.growthSub,
      development: d.stats.development, developmentSub: d.stats.developmentSub,
      zeroDay: d.stats.zeroDay, ransomware: d.stats.ransomware, dataBreaches: d.stats.dataBreaches,
      badNews: d.stats.badNews, badNewsTitle: d.stats.badNewsTitle,
    });

    // WhyPalo
    const wpKeys = ["mttr", "attacks", "endpoints"];
    docs.push({
      _id: `sectionWhyPalo-${lang}`, _type: "sectionWhyPalo", language: lang,
      kicker: d.whyPalo.kicker, heading: d.whyPalo.heading,
      headingAccent: d.whyPalo.headingAccent, cta: d.whyPalo.cta,
      danhSachChiSo: wpKeys.map((wKey) => ({
        _key: k(), _type: "object", key: wKey,
        prefix: d.whyPalo.metrics[wKey].prefix || "",
        giaTri: d.whyPalo.metrics[wKey].value,
        nhan: d.whyPalo.metrics[wKey].label,
        moTa: d.whyPalo.metrics[wKey].desc,
      })),
    });

    // Platforms
    const platKeys = ["network", "secops", "cloud", "identity"];
    docs.push({
      _id: `sectionPlatforms-${lang}`, _type: "sectionPlatforms", language: lang,
      heading: d.platforms.heading, seeAll: d.platforms.seeAll,
      danhSachNenTang: platKeys.map((pKey) => {
        const p = d.platforms.items[pKey];
        return {
          _key: k(), _type: "object", key: pKey,
          tab: p.tab, tieuDe: p.heading, moTa: p.desc, cta: p.cta,
          thongKe: Object.entries(p.stats).map(([sKey, s]) => ({
            _key: k(), _type: "object", key: sKey, giaTri: s.value, nhan: s.label,
          })),
        };
      }),
    });

    // ServicesResponse
    const srKeys = ["researchers", "malware", "incidents", "partners"];
    docs.push({
      _id: `sectionServicesResponse-${lang}`, _type: "sectionServicesResponse", language: lang,
      heading: d.servicesResponse.heading, kicker: d.servicesResponse.kicker,
      title: d.servicesResponse.title, desc: d.servicesResponse.desc, cta: d.servicesResponse.cta,
      danhSachThongKe: srKeys.map((srKey) => ({
        _key: k(), _type: "object", key: srKey,
        giaTri: d.servicesResponse.stats[srKey].value,
        nhan: d.servicesResponse.stats[srKey].label,
      })),
      mattersValue: d.servicesResponse.matters.value,
      mattersLabel: d.servicesResponse.matters.label,
      responseValue: d.servicesResponse.response.value,
      responseLabel: d.servicesResponse.response.label,
    });

    // SolutionsMatrix
    docs.push({
      _id: `sectionSolutionsMatrix-${lang}`, _type: "sectionSolutionsMatrix", language: lang,
      heading: d.solutionsMatrix.heading, featured: d.solutionsMatrix.featured,
      featuredTitle: d.solutionsMatrix.featuredTitle, exploreCta: d.solutionsMatrix.exploreCta,
      danhSachGiaiPhap: d.solutionsMatrix.items,
      danhSachTinhNang: d.solutionsMatrix.features,
    });

    // CtaBox
    docs.push({
      _id: `sectionCtaBox-${lang}`, _type: "sectionCtaBox", language: lang,
      heading: d.ctaBox.heading, cta: d.ctaBox.cta, playLabel: d.ctaBox.playLabel,
    });

    // PartnersSlider
    docs.push({
      _id: `sectionPartnersSlider-${lang}`, _type: "sectionPartnersSlider", language: lang,
      heading: d.partnersSlider.heading, headingAccent: d.partnersSlider.headingAccent,
    });

    // Engagement
    const engKeys = ["executives", "specialists", "partners", "customers"];
    docs.push({
      _id: `sectionEngagement-${lang}`, _type: "sectionEngagement", language: lang,
      heading: d.engagement.heading,
      danhSachThe: engKeys.map((eKey) => ({
        _key: k(), _type: "object", key: eKey,
        tab: d.engagement.cards[eKey].tab, tieuDe: d.engagement.cards[eKey].title,
        moTa: d.engagement.cards[eKey].desc, cta: d.engagement.cards[eKey].cta,
      })),
    });

    // Insights
    const insKeys = ["ai-network", "ai-era", "cyber-resilience", "magazine"];
    docs.push({
      _id: `sectionInsights-${lang}`, _type: "sectionInsights", language: lang,
      heading: d.insights.heading, viewAll: d.insights.viewAll, readMore: d.insights.readMore,
      danhSachBaiViet: insKeys.map((iKey) => ({
        _key: k(), _type: "object", key: iKey,
        loai: d.insights.items[iKey].type, tieuDe: d.insights.items[iKey].title,
      })),
    });

    // Search
    docs.push({
      _id: `sectionSearch-${lang}`, _type: "sectionSearch", language: lang,
      placeholder: d.search.placeholder, noResults: d.search.noResults, hint: d.search.hint,
    });

    // Common
    docs.push({
      _id: `sectionCommon-${lang}`, _type: "sectionCommon", language: lang,
      learnMore: d.common.learnMore, readMore: d.common.readMore, backToHome: d.common.backToHome,
    });

    // AboutDtg
    if (d.aboutDtg) {
      const statKeys = Object.keys(d.aboutDtg.stats);
      const recogKeys = Object.keys(d.aboutDtg.recognition);
      docs.push({
        _id: `sectionAboutDtg-${lang}`, _type: "sectionAboutDtg", language: lang,
        kicker: d.aboutDtg.kicker, heading: d.aboutDtg.heading, subtitle: d.aboutDtg.subtitle,
        stats: statKeys.map((sKey) => ({
          _key: k(), _type: "object",
          value: d.aboutDtg.stats[sKey].value,
          label: d.aboutDtg.stats[sKey].label,
          desc: d.aboutDtg.stats[sKey].desc,
        })),
        commitmentKicker: d.aboutDtg.commitment.kicker,
        commitmentHeading: d.aboutDtg.commitment.heading,
        commitmentDesc: d.aboutDtg.commitment.desc,
        recognitionKicker: d.aboutDtg.recognitionKicker,
        recognitionItems: recogKeys.map((rKey) => ({
          _key: k(), _type: "object",
          label: d.aboutDtg.recognition[rKey].label,
        })),
        whyKicker: d.aboutDtg.why.kicker,
        whyHeading: d.aboutDtg.why.heading,
        whyPoints: [d.aboutDtg.why.point1, d.aboutDtg.why.point2, d.aboutDtg.why.point3].filter(Boolean),
      });
    }
  }

  console.log(`Importing ${docs.length} section documents...`);
  const tx = client.transaction();
  for (const doc of docs) {
    tx.createOrReplace(doc);
  }
  const result = await tx.commit();
  console.log(`Done! Imported ${result.results.length} documents.`);
}

run().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
