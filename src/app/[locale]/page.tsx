import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CoreServicesSection } from "@/components/sections/CoreServicesSection";
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
      <PartnersSlider />
      <CaseStudiesSection />
      <NewsSection />
    </>
  );
}
