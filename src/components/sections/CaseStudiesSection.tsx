"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { useTranslations } from "next-intl";

const cardKeys = ["executives", "specialists", "partners", "customers"] as const;

function EngagementCard({ cardKey, index }: { cardKey: string; index: number }) {
  const t = useTranslations("engagement.cards");
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUpSm",
    delay: index * 0.08,
    once: true,
  });

  return (
    <motion.article
      ref={ref}
      {...animationProps}
      className="group relative flex flex-col overflow-hidden border border-white/14 bg-white/[0.04] p-5 text-white transition duration-300 hover:border-[#2563eb] sm:p-7 lg:p-10"
    >
      <div
        className="absolute inset-x-0 top-0 h-40 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 2px, transparent 2px, transparent 28px)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <span className="mb-16 block text-[11px] font-semibold uppercase leading-[1.4] tracking-[2.6px] text-[#2563eb] sm:text-[13px]">
          {t(`${cardKey}.tab`)}
        </span>
        <h3 className="mb-5 text-[22px] font-medium leading-[1.18] text-white sm:text-[26px] lg:text-[30px]">
          {t(`${cardKey}.title`)}
        </h3>
        <p className="text-[14px] font-medium leading-[1.5] text-white/68 sm:text-[15px] lg:text-[17px]">
          {t(`${cardKey}.desc`)}
        </p>
        <a
          href="#contact"
          className="mt-auto inline-flex items-center pt-10 text-[14.8px] font-semibold leading-[1.4] text-white underline decoration-2 underline-offset-[10px] transition hover:text-[#2563eb]"
        >
          {t(`${cardKey}.cta`)}
          <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

export function CaseStudiesSection() {
  const t = useTranslations("engagement");

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  const tCards = useTranslations("engagement.cards");

  return (
    <section id="engage" className="relative overflow-hidden bg-primary-dark text-white">
      <div className="mx-auto w-full max-w-[1720px] px-4 py-12 sm:px-8 sm:py-16 lg:px-[10rem] lg:py-24">
        <motion.h2
          ref={headingRef}
          {...headingAnim}
          className="whitespace-pre-line max-w-5xl text-[28px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]"
        >
          {t("heading")}
        </motion.h2>
      </div>

      <div className="bg-primary-dark py-12 text-white sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
          <div className="mb-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {cardKeys.map((key, index) => (
              <button
                key={key}
                type="button"
                className={`shrink-0 border px-4 py-3 text-[13px] font-semibold leading-[1.35] transition sm:px-6 sm:py-4 sm:text-[15px] ${
                  index === 0
                    ? "border-[#2563eb] bg-[#2563eb] text-black"
                    : "border-white/15 bg-white/[0.04] text-white/70 hover:border-[#2563eb] hover:text-white"
                }`}
              >
                {tCards(`${key}.tab`)}
              </button>
            ))}
          </div>

          <MobileCarousel gridClassName="gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cardKeys.map((key, index) => (
              <EngagementCard key={key} cardKey={key} index={index} />
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
