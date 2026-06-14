"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslations } from "next-intl";

export function CtaBox() {
  const t = useTranslations("ctaBox");

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  const { ref: videoRef, animationProps: videoAnim } = useScrollAnimation({
    preset: "fadeIn",
    once: true,
  });

  return (
    <section id="proven-success" className="mx-auto w-full max-w-[1720px]">
      <motion.div
        ref={headingRef}
        {...headingAnim}
        className="mb-8 grid gap-8 sm:mb-12 lg:mb-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end"
      >
        <h2 className="max-w-5xl text-[28px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">
          {t("heading")}
        </h2>
        <a
          href="#testimonials"
          className="inline-flex items-center text-[14.8px] font-semibold leading-[1.4] text-white underline decoration-white decoration-2 underline-offset-[10px] transition hover:text-[#2563eb] hover:decoration-[#2563eb]"
        >
          {t("cta")}
          <ArrowRight size={18} className="ml-3" />
        </a>
      </motion.div>

      <motion.div
        ref={videoRef}
        {...videoAnim}
        className="group relative min-h-[320px] overflow-hidden bg-black sm:min-h-[520px] lg:min-h-[620px]"
      >
        <div className="absolute inset-0 bg-[url('/assets/svtech/team.webp')] bg-cover bg-center opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/45 to-transparent" />
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.18]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 6px, transparent 6px, transparent 26px)",
          }}
        />
        <div className="relative z-10 flex min-h-[320px] items-center justify-center sm:min-h-[520px] lg:min-h-[620px]">
          <button
            type="button"
            className="flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition duration-300 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-black"
            aria-label={t("playLabel")}
          >
            <Play size={34} fill="currentColor" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
