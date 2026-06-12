import { useTranslations } from "next-intl";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <WhyChooseSection />
    </div>
  );
}
