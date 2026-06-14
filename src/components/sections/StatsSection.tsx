"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslations } from "next-intl";

function CircleProgress({
  value,
  label,
  sublabel,
  delay = 0,
}: {
  value: number;
  label: string;
  sublabel: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const radius = 46;
  const strokeW = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-5">
      <div className="relative h-36 w-36 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 108 108">
          <circle
            cx="54"
            cy="54"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth={strokeW}
          />
          <motion.circle
            cx="54"
            cy="54"
            r={radius}
            fill="none"
            stroke="#2563eb"
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-semibold leading-[1.2] text-white sm:text-4xl lg:text-[44px]">
            {value} %
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl font-medium leading-[1.25] text-[#2563eb] sm:text-3xl">
          {label}
        </p>
        <p className="mt-2 whitespace-pre-line text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.2em] text-white/80">
          {sublabel}
        </p>
      </div>
    </div>
  );
}

function StatBar({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: number;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <p className="mb-2 text-[14px] font-medium uppercase leading-[1.5] tracking-[0.02rem] text-white/82 sm:text-[17.6px]">
        {label}
      </p>
      <div className="flex items-center gap-4">
        <motion.div
          className="h-7 rounded-r-full"
          style={{
            background: "linear-gradient(90deg, rgba(37, 99, 235,0.15) 0%, #2563eb 100%)",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 0.75, delay, ease: "easeOut" }}
        />
        <motion.span
          className="text-[32px] font-bold leading-none text-white sm:text-[40px] lg:text-[52px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4, ease: "easeOut" }}
        >
          {value}%
        </motion.span>
      </div>
    </div>
  );
}

export function StatsSection() {
  const t = useTranslations("stats");

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "ltr",
    margin: "-5% 0px -5% 0px",
  });

  const { ref: goodNewsRef, animationProps: goodNewsAnim } = useScrollAnimation({
    preset: "ttb",
  });

  const { ref: circlesRef, animationProps: circlesAnim } = useScrollAnimation({
    preset: "ttb",
    delay: 0.15,
  });

  const { ref: statBarsRef, animationProps: statBarsAnim } = useScrollAnimation({
    preset: "ltr",
  });

  const { ref: badNewsRef, animationProps: badNewsAnim } = useScrollAnimation({
    preset: "rtl",
  });

  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="ai-world-bg absolute -inset-[12%]" />
        <div className="ai-world-grid absolute inset-0 opacity-80" />
        <div className="ai-world-scan absolute left-0 top-[8%] h-[84%] w-[58%] blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_46%,transparent_0%,rgba(9,22,42,0.2)_42%,rgba(9,22,42,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-dark via-primary-dark/82 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 h-[52%] w-[45%] overflow-hidden opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #2563eb 0px, #2563eb 1px, transparent 1px, transparent 9px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary-dark" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 lg:px-[10rem] lg:pt-16 lg:pb-24">
        {/* Main heading */}
        <motion.h2
          ref={headingRef}
          {...headingAnim}
          className="mb-8 max-w-5xl text-[28px] font-bold leading-[1.15] text-white sm:mb-12 sm:text-[40px] lg:mb-16 lg:text-[44.666px]"
        >
          {t.rich("heading", {
            accent: (chunks) => <span className="text-[#2563eb]">{chunks}</span>,
          })}
        </motion.h2>

        {/* Row 1: Good News heading (left) + Circles (right) */}
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          {/* Good News heading — left ~35% */}
          <motion.div
            ref={goodNewsRef}
            {...goodNewsAnim}
            className="lg:w-[38%] lg:shrink-0"
          >
            <span className="mb-4 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
              {t("goodNews")}
            </span>
            <h3 className="whitespace-pre-line text-[28px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">
              {t("goodNewsTitle")}
            </h3>
          </motion.div>

          {/* Circles — right ~65%, pushed right */}
          <motion.div
            ref={circlesRef}
            {...circlesAnim}
            className="flex justify-center gap-10 sm:gap-14 lg:flex-1 lg:justify-end lg:gap-16"
          >
            <CircleProgress
              value={78}
              label={t("growth")}
              sublabel={t("growthSub")}
              delay={0.2}
            />
            <CircleProgress
              value={94}
              label={t("development")}
              sublabel={t("developmentSub")}
              delay={0.4}
            />
          </motion.div>
        </div>

        {/* Row 3: Stat bars (left) + Bad News (right) */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          {/* Stat bars — left ~50% (ltr) */}
          <motion.div
            ref={statBarsRef}
            {...statBarsAnim}
            className="space-y-8 lg:w-[54%] lg:shrink-0"
          >
            <StatBar
              label={t("zeroDay")}
              value={56}
              delay={0.3}
            />
            <StatBar
              label={t("ransomware")}
              value={73}
              delay={0.5}
            />
            <StatBar
              label={t("dataBreaches")}
              value={56}
              delay={0.7}
            />
          </motion.div>

          {/* Bad News — right ~50% (rtl) */}
          <motion.div
            ref={badNewsRef}
            {...badNewsAnim}
            className="lg:flex-1 lg:pl-16"
          >
            <span className="mb-4 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
              {t("badNews")}
            </span>
            <h3 className="whitespace-pre-line text-[28px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">
              {t("badNewsTitle")}
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
