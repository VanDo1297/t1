"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  {
    value: "90 %",
    label: "reduction in MTTR",
    description: "Drive innovation and digital transformation with AI.",
  },
  {
    prefix: "up to",
    value: "30.9 B",
    label: "inline attacks blocked per day",
    description:
      "Proactively monitor, analyze and prevent sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.",
  },
  {
    value: "480 B",
    label: "endpoints scanned daily",
    description:
      "Enable better, faster security with an integrated suite of battle-tested, AI-driven products.",
  },
];

function MetricCard({
  metric,
  delay,
}: {
  metric: (typeof metrics)[number];
  delay: number;
}) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUpSm",
    delay,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="group relative min-h-[380px] overflow-hidden rounded-[28px] border border-[#141414]/14 bg-white px-8 py-10 shadow-[0_26px_80px_rgba(0,0,0,0.22)] transition duration-300 hover:border-[#2563eb]/75 sm:px-10"
    >
      <div className="relative z-10 flex h-full min-h-[300px] flex-col">
        <div className="mb-5 flex items-end gap-3">
          {metric.prefix && (
            <span className="pb-2 text-[22px] font-medium leading-none text-[#141414]/60">
              {metric.prefix}
            </span>
          )}
          <span className="text-[62px] font-medium leading-none text-[#2563eb] sm:text-[72px]">
            {metric.value}
          </span>
        </div>
        <h3 className="mb-6 max-w-[420px] text-[26px] font-medium leading-[1.25] text-[#141414] sm:text-[30px]">
          {metric.label}
        </h3>
        <p className="mt-auto max-w-[430px] text-[15px] font-medium leading-[1.55] text-[#141414]/55">
          {metric.description}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyChooseSection() {
  const { ref: headerRef, animationProps: headerAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1.5px)",
            backgroundSize: "13px 13px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <motion.div ref={headerRef} {...headerAnim} className="mb-14 sm:mb-16">
          <span className="mb-4 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
            Why Palo Alto Networks
          </span>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-5xl">
              <h2 className="text-[34px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">
                Platformization empowers you to
                <br className="hidden sm:block" />
                harness AI-ready infrastructure.
              </h2>
              <p className="mt-1 text-[34px] font-medium italic leading-[1.2] text-[#2563eb] sm:text-[40px] lg:text-[44.666px]">
                And leverage services powered by
                <br className="hidden sm:block" />
                Precision AI<sup className="text-[60%]">®</sup> to keep everything secure.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-[#2563eb] px-7 py-3 text-[14.8px] font-semibold leading-[1.4] text-[#2563eb] transition-shadow duration-150 ease-in-out hover:shadow-[0_0_16px_rgba(37, 99, 235,0.3)] lg:mt-4"
            >
              See our platform approach
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[calc(100%+5rem)] w-screen -translate-x-1/2 -translate-y-1/2 opacity-45"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 2px, transparent 2px, transparent 32px), radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.22), transparent 58%)",
              maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            }}
          />
          <div className="relative grid gap-6 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
