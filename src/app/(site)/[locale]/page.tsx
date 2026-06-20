import { getHeroData, getGioiThieuData, getVeDtgData, getGiaiPhapData } from "@/sanity/queries";
import { HeroSection } from "@/components/sections/HeroSection";
import { SubNav } from "@/components/layout/SubNav";
import { GioiThieuSection } from "@/components/sections/GioiThieuSection";
import { VeDtgSection } from "@/components/sections/VeDtgSection";
import { GiaiPhapSection } from "@/components/sections/GiaiPhapSection";

const subNavItems = {
  vi: [
    { label: "Vì sao chọn DTG ?", href: "#ve-dtg" },
    { label: "Giải pháp", href: "#giai-phap" },
    { label: "Thành tựu", href: "#thanh-tuu" },
    { label: "Hợp tác", href: "#hop-tac" },
  ],
  en: [
    { label: "Why DTG ?", href: "#ve-dtg" },
    { label: "Solutions", href: "#giai-phap" },
    { label: "Proven Success", href: "#thanh-tuu" },
    { label: "Engage with Us", href: "#hop-tac" },
  ],
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [heroData, gioiThieuData, veDtgData, giaiPhapData] = await Promise.all([
    getHeroData(locale),
    getGioiThieuData(locale),
    getVeDtgData(locale),
    getGiaiPhapData(locale),
  ]);

  const items = subNavItems[locale as keyof typeof subNavItems] || subNavItems.vi;

  return (
    <main>
      <HeroSection data={heroData} locale={locale} />
      <SubNav
        items={items}
        ctaLabel={locale === "vi" ? "Tư vấn & Demo" : "Demos and trials"}
        ctaHref="/lien-he"
        locale={locale}
      />
      <GioiThieuSection data={gioiThieuData} />
      <VeDtgSection data={veDtgData} />
      <GiaiPhapSection data={giaiPhapData} locale={locale} />
    </main>
  );
}
