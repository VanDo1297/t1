"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { useTranslations } from "next-intl";

const insightKeys = ["ai-network", "ai-era", "cyber-resilience", "magazine"] as const;
const insightImages = [
  "/assets/svtech/news/news-1.jpg",
  "/assets/svtech/news/news-2.jpg",
  "/assets/svtech/news/news-3.jpg",
  "/assets/svtech/services/service-4.jpg",
];

function InsightCard({ itemKey, image, index }: { itemKey: string; image: string; index: number }) {
  const t = useTranslations("insights");
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUpSm",
    delay: index * 0.08,
    once: true,
  });

  return (
    <motion.article
      ref={ref}
      {...animationProps}
      className="group flex flex-col overflow-hidden border border-white/14 bg-white/[0.04] transition duration-300 hover:border-[#2563eb]/75"
    >
      <div className="relative h-44 overflow-hidden sm:h-60">
        <Image
          src={image}
          alt={t(`items.${itemKey}.title`)}
          fill
          className="object-cover opacity-82 transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7 lg:p-10">
        <span className="mb-6 text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.22em] text-[#2563eb] sm:text-[13px]">
          {t(`items.${itemKey}.type`)}
        </span>
        <h3 className="text-[22px] font-medium leading-[1.22] text-white sm:text-[26px] lg:text-[30px]">
          {t(`items.${itemKey}.title`)}
        </h3>
        <span className="mt-auto inline-flex items-center pt-10 text-[14.8px] font-semibold leading-[1.4] text-white underline decoration-white/80 decoration-2 underline-offset-[10px] transition group-hover:text-[#2563eb] group-hover:decoration-[#2563eb]">
          {t("readMore")}
          <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </motion.article>
  );
}

export function NewsSection() {
  const t = useTranslations("insights");

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section className="relative overflow-hidden bg-primary-dark py-12 text-white sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37, 99, 235,0.14),transparent_24%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <div className="mb-8 flex flex-col gap-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <motion.h2
            ref={headingRef}
            {...headingAnim}
            className="whitespace-pre-line max-w-5xl text-[28px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]"
          >
            {t("heading")}
          </motion.h2>
          <Link
            href="/news"
            className="inline-flex items-center text-[14.8px] font-semibold leading-[1.4] tracking-[0.01rem] text-white underline decoration-white decoration-2 underline-offset-[10px] transition hover:text-[#2563eb] hover:decoration-[#2563eb]"
          >
            {t("viewAll")}
            <ArrowRight size={18} className="ml-3" />
          </Link>
        </div>

        <MobileCarousel gridClassName="gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {insightKeys.map((key, index) => (
            <InsightCard key={key} itemKey={key} image={insightImages[index]} index={index} />
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
