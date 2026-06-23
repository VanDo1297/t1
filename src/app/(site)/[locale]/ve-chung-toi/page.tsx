import { getVeChungToiPageData, getGioiThieuData } from "@/sanity/queries";
import { GioiThieuSection } from "@/components/sections/GioiThieuSection";
import { AboutClientSections } from "@/components/sections/AboutClientSections";
import { CompanyCultureSection } from "@/components/sections/CompanyCultureSection";
import {
  GallerySection,
  VisionSection,
  CoreValuesSection,
  HistoryTitle,
  LeadershipSection,
  HumanResourcesSection,
} from "@/components/sections/AboutAnimatedSections";
import Image from "next/image";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [data, gioiThieuData] = await Promise.all([
    getVeChungToiPageData(locale),
    getGioiThieuData(locale),
  ]);

  const isVi = locale === "vi";

  return (
    <main className="about-page-mobile" style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <Image src="/assets/bg/1.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="site-hero-content">
          <h1 className="site-hero-title">
            {isVi ? "Về chúng tôi" : "About Us"}
          </h1>
          <p className="site-hero-description">
            {data.brandStoryTitle}
          </p>
        </div>
      </section>

      {/* Giới thiệu - same as home */}
      <GioiThieuSection data={gioiThieuData} locale={locale} />

      {/* Photo Gallery */}
      <GallerySection images={data.galleryImages} />

      {/* Vision / Mission / Motto */}
      <VisionSection cards={data.visionCards} />

      {/* Core Values Icons */}
      <CoreValuesSection title={data.coreValuesTitle} icons={data.coreValueIcons} isVi={isVi} />

      {/* History Timeline */}
      <section id="lich-su" className="bg-white px-5 py-12 md:py-20">
        <div>
          <HistoryTitle title={data.historyTitle} />
          <AboutClientSections
            historyYears={data.historyYears}
            certificates={data.certificates}
            certificatesTitle={data.certificatesTitle}
            locale={locale}
          />
        </div>
      </section>

      {/* Leadership */}
      <LeadershipSection title={data.leadershipTitle} leaders={data.leaders} />

      {/* Culture */}
      <CompanyCultureSection
        title={data.companyCultureTitle}
        items={data.companyCultureItems}
        images={data.companyCultureImages}
      />

      {/* Nguồn nhân lực */}
      <HumanResourcesSection isVi={isVi} />
    </main>
  );
}
