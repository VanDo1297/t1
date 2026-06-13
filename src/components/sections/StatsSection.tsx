"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
      <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
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
            stroke="#c75435"
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-semibold leading-[1.2] text-[#141414] sm:text-4xl lg:text-[44px]">
            {value} %
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl font-medium leading-[1.25] text-[#c75435] sm:text-3xl">
          {label}
        </p>
        <p className="mt-2 whitespace-pre-line text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.2em] text-[#141414]">
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
      <p className="mb-2 text-[14px] font-medium uppercase leading-[1.5] tracking-[0.02rem] text-[#141414] sm:text-[17.6px]">
        {label}
      </p>
      <div className="flex items-center gap-4">
        <motion.div
          className="h-7 rounded-r-full"
          style={{
            background: "linear-gradient(90deg, rgba(199,84,53,0.15) 0%, #c75435 100%)",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 0.75, delay, ease: "easeOut" }}
        />
        <motion.span
          className="text-[48px] font-bold leading-none text-[#141414] sm:text-[56px]"
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
    <section className="relative bg-white text-[#141414]">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(199,84,53,0.16),transparent_28%),radial-gradient(circle_at_20%_60%,rgba(49,93,255,0.16),transparent_32%)]" />
      </div>
      <div className="absolute top-0 right-0 h-[52%] w-[45%] overflow-hidden opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #c75435 0px, #c75435 1px, transparent 1px, transparent 9px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 pt-10 pb-20 sm:px-8 sm:pt-14 sm:pb-28 lg:px-[10rem] lg:pt-16 lg:pb-36">
        {/* Main heading */}
        <motion.h2
          ref={headingRef}
          {...headingAnim}
          className="mb-20 max-w-5xl text-[44px] font-medium leading-[1.15] text-[#141414] sm:text-[52px] lg:text-[58px]"
        >
          A new <span className="text-[#c75435]">AI world</span> is here
        </motion.h2>

        {/* Row 1: Good News heading (left) + Circles (right) */}
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          {/* Good News heading — left ~35% */}
          <motion.div
            ref={goodNewsRef}
            {...goodNewsAnim}
            className="lg:w-[38%] lg:shrink-0"
          >
            <span className="mb-4 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#c75435]">
              THE GOOD NEWS
            </span>
            <h3 className="text-[34px] font-medium leading-[1.2] text-[#141414] sm:text-[40px] lg:text-[44.666px]">
              AI is rapidly
              <br />
              transforming your
              <br />
              organization
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
              label="~1.5X growth"
              sublabel={"in usage in last\n12 months"}
              delay={0.2}
            />
            <CircleProgress
              value={94}
              label="development"
              sublabel={"enterprises using gen AI\nsoftware"}
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
              label="Increase in exploited zero days (YoY, 2023)"
              value={56}
              delay={0.3}
            />
            <StatBar
              label="Increase in ransomware attacks (YoY, 2023)"
              value={73}
              delay={0.5}
            />
            <StatBar
              label="Increase in data breaches and leaks (YoY, 2023)"
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
            <span className="mb-4 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#c75435]">
              THE BAD NEWS
            </span>
            <h3 className="text-[34px] font-medium leading-[1.2] text-[#141414] sm:text-[40px] lg:text-[44.666px]">
              Attackers are
              <br />
              supercharging their
              <br />
              speed and scale.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
