import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CoreServicesSection } from "@/components/sections/CoreServicesSection";
import { CtaBox } from "@/components/sections/CtaBox";
import { PartnersSlider } from "@/components/sections/PartnersSlider";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { NewsSection } from "@/components/sections/NewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <CoreServicesSection />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <CtaBox />
      </div>
      <PartnersSlider />
      <CaseStudiesSection />
      <NewsSection />
    </>
  );
}
