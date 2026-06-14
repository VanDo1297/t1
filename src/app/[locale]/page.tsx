import { HeroSection } from "@/components/sections/HeroSection";
import { SubNav } from "@/components/layout/SubNav";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CoreServicesSection } from "@/components/sections/CoreServicesSection";
import { ServicesResponseSection } from "@/components/sections/ServicesResponseSection";
import { SolutionsMatrixSection } from "@/components/sections/SolutionsMatrixSection";
import { CtaBox } from "@/components/sections/CtaBox";
import { PartnersSlider } from "@/components/sections/PartnersSlider";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { NewsSection } from "@/components/sections/NewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SubNav />
      <StatsSection />
      <AboutSection />
      <CoreServicesSection />
      <ServicesResponseSection />
      <WhyChooseSection />
      <SolutionsMatrixSection />
      <div className="bg-primary-dark px-5 py-24 sm:px-8 sm:py-28 lg:px-[10rem] lg:py-36">
        <CtaBox />
      </div>
      <PartnersSlider />
      <CaseStudiesSection />
      <NewsSection />
    </>
  );
}
