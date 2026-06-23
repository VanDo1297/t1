import { getHeroData, getGioiThieuData, getVeDtgData, getGiaiPhapData, getPartnersPageData, getTinTucList, getTinTucPageData, urlFor } from "@/sanity/queries";
import type { PartnerItem, ClientItem } from "@/sanity/queries";
import { HeroSection } from "@/components/sections/HeroSection";
import { SubNav } from "@/components/layout/SubNav";
import { GioiThieuSection } from "@/components/sections/GioiThieuSection";
import { VeDtgSection } from "@/components/sections/VeDtgSection";
import { GiaiPhapSection } from "@/components/sections/GiaiPhapSection";
import { DoiTacSection, type CarouselItem } from "@/components/sections/DoiTacSection";
import { TinTucHomeSection } from "@/components/sections/TinTucHomeSection";

const subNavItems = {
  vi: [
    { label: "Vì sao chọn DTG ?", href: "#ve-dtg" },
    { label: "Giải pháp", href: "#giai-phap" },
    { label: "Đối tác", href: "#doi-tac" },
    { label: "Khách hàng", href: "#khach-hang" },
    { label: "Tin tức", href: "#tin-tuc" },
  ],
  en: [
    { label: "Why DTG ?", href: "#ve-dtg" },
    { label: "Solutions", href: "#giai-phap" },
    { label: "Partners", href: "#doi-tac" },
    { label: "Clients", href: "#khach-hang" },
    { label: "News", href: "#tin-tuc" },
  ],
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [heroData, gioiThieuData, veDtgData, giaiPhapData, partnersData, latestArticles, tinTucPageData] = await Promise.all([
    getHeroData(locale),
    getGioiThieuData(locale),
    getVeDtgData(locale),
    getGiaiPhapData(locale),
    getPartnersPageData(locale),
    getTinTucList(locale),
    getTinTucPageData(locale),
  ]);

  const items = subNavItems[locale as keyof typeof subNavItems] || subNavItems.vi;

  const LOGO_FALLBACK = "/assets/dtg-logo.png";
  const toCarousel = (list: (PartnerItem | ClientItem)[]): CarouselItem[] =>
    list.map((p) => ({
      name: p.name,
      logoUrl: p.logo ? urlFor(p.logo).url() : LOGO_FALLBACK,
      url: p.url,
    }));

  return (
    <main style={{ overflowX: "clip" }}>
      <HeroSection data={heroData} locale={locale} />
      <SubNav
        items={items}
        ctaLabel={locale === "vi" ? "Tư vấn & Demo" : "Demos and trials"}
        ctaHref="/lien-he"
        locale={locale}
      />
      <GioiThieuSection data={gioiThieuData} locale={locale} />
      <VeDtgSection data={veDtgData} />
      <GiaiPhapSection data={giaiPhapData} locale={locale} />
      <DoiTacSection
        sectionTitle={partnersData.sectionTitle}
        strategicTitle={partnersData.strategicPartnersTitle}
        strategicPartners={toCarousel(partnersData.strategicPartners)}
        networkTitle={partnersData.networkPartnersTitle}
        networkPartners={toCarousel(partnersData.networkPartners)}
        clientsTitle={partnersData.clientsTitle}
        clients={toCarousel(partnersData.clients)}
      />
      <TinTucHomeSection
        locale={locale}
        articles={latestArticles.slice(0, 6)}
        title={tinTucPageData.homeSectionTitle}
        subtitle={tinTucPageData.homeSectionSubtitle}
      />
    </main>
  );
}
