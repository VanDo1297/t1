import { getHeroData, getGioiThieuData, getVeDtgData } from "@/sanity/queries";
import { HeroSection } from "@/components/sections/HeroSection";
import { GioiThieuSection } from "@/components/sections/GioiThieuSection";
import { VeDtgSection } from "@/components/sections/VeDtgSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [heroData, gioiThieuData, veDtgData] = await Promise.all([
    getHeroData(locale),
    getGioiThieuData(locale),
    getVeDtgData(locale),
  ]);

  return (
    <main>
      <HeroSection data={heroData} locale={locale} />
      <GioiThieuSection data={gioiThieuData} />
      <VeDtgSection data={veDtgData} />
    </main>
  );
}
