"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { useTranslations } from "next-intl";

function PartnerCard({ partner }: { partner: { name: string; logo: string } }) {
  return (
    <div className="group flex items-center justify-center rounded-2xl border border-[#141414]/10 bg-white px-6 py-8 transition duration-300 hover:border-primary/30 hover:shadow-lg sm:px-8 sm:py-10">
      <div className="relative h-10 w-32 opacity-70 transition duration-300 group-hover:opacity-100 sm:h-12 sm:w-36">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function PartnersSlider() {
  const t = useTranslations("partnersSlider");

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section className="relative overflow-hidden bg-light-surface py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-[10rem]">
        <motion.h2
          ref={headingRef}
          {...headingAnim}
          className="mb-10 text-center text-[28px] font-medium leading-[1.2] text-[#141414] sm:mb-14 sm:text-[40px] lg:text-[44.666px]"
        >
          {t("heading")} <span className="text-primary">{t("headingAccent")}</span>
        </motion.h2>

        <MobileCarousel
          gridClassName="gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
          slideWidth="72%"
          showControls
        >
          {PARTNER_LOGOS.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </MobileCarousel>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1720px] px-4 sm:mt-14 sm:px-8 lg:px-[10rem]">
        <div className="h-px bg-[#141414]/10" />
      </div>
    </section>
  );
}
