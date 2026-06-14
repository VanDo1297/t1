"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { useTranslations } from "next-intl";

const metricKeys = ["mttr", "attacks", "endpoints"] as const;

function MetricCard({
  metricKey,
  delay,
}: {
  metricKey: string;
  delay: number;
}) {
  const t = useTranslations("whyPalo.metrics");
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUpSm",
    delay,
    once: true,
  });

  const prefix = metricKey === "attacks" ? t(`${metricKey}.prefix`) : undefined;
  const description = t(`${metricKey}.desc`);

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      tabIndex={0}
      className="group relative flex h-[240px] w-full overflow-hidden rounded-[28px] border border-[#141414]/14 bg-white p-5 shadow-[0_26px_80px_rgba(0,0,0,0.22)] outline-none transition duration-300 hover:border-[#2563eb]/75 focus-visible:border-[#2563eb] focus-visible:ring-2 focus-visible:ring-[#2563eb]/35 sm:h-[280px] sm:p-7 lg:h-[300px] lg:p-10"
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-end gap-3">
          {prefix && (
            <span className="pb-2 text-[22px] font-medium leading-none text-[#141414]/60">
              {prefix}
            </span>
          )}
          <span className="text-[40px] font-medium leading-none text-[#2563eb] sm:text-[56px] lg:text-[62px]">
            {t(`${metricKey}.value`)}
          </span>
        </div>
        <h3 className="mb-6 max-w-[420px] text-[22px] font-medium leading-[1.25] text-[#141414] sm:text-[26px] lg:text-[30px]">
          {t(`${metricKey}.label`)}
        </h3>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 translate-y-full opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <div className="relative overflow-hidden border-t border-white/14 bg-[#09162a]/96 px-5 py-5 text-[14px] font-medium leading-[1.55] text-white shadow-[0_-20px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:px-7 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563eb] to-transparent" />
          <div className="absolute -right-10 -top-14 h-28 w-28 rounded-full bg-[#2563eb]/24 blur-2xl" />
          <p className="relative z-10">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const t = useTranslations("whyPalo");
  const { ref: headerRef, animationProps: headerAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section id="why-palo" className="relative bg-primary-dark py-12 text-white sm:py-16 lg:py-24">
      {/* Animated background — starfield */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-starfield absolute -inset-[5%]" />
        <div className="bg-starfield-twinkle absolute inset-0" />
        <div
          className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%]"
          style={{
            background:
              "radial-gradient(circle at 25% 40%, rgba(37,99,235,0.14), transparent 40%), radial-gradient(circle at 75% 60%, rgba(37,99,235,0.08), transparent 35%)",
            animation: "ai-world-drift 16s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <motion.div ref={headerRef} {...headerAnim} className="mb-8 sm:mb-12 lg:mb-16">
          <span className="mb-4 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
            {t("kicker")}
          </span>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-5xl">
              <h2 className="text-[28px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">
                {t("heading")}
              </h2>
              <p className="mt-1 text-[28px] font-medium italic leading-[1.2] text-[#2563eb] sm:text-[40px] lg:text-[44.666px]">
                {t("headingAccent")}
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-[#2563eb] px-7 py-3 text-[14.8px] font-semibold leading-[1.4] text-[#2563eb] transition-shadow duration-150 ease-in-out hover:shadow-[0_0_16px_rgba(37, 99, 235,0.3)] lg:mt-4"
            >
              {t("cta")}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="relative">
          <MobileCarousel gridClassName="gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metricKeys.map((key, index) => (
              <MetricCard key={key} metricKey={key} delay={index * 0.08} />
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
