"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solutions = [
  "Secure Your AI ecosystem",
  "Secure your network",
  "Secure your cloud",
  "Secure Your Identities",
  "Automate your SOC",
  "Threat intel and incident response services",
  "Solutions by industry",
];

const features = [
  "Secure AI apps, agents, models and data.",
  "Stop advanced threats at every point of access.",
  "Reduce complexity with consolidated security.",
  "Respond faster with real-time intelligence.",
];

function SolutionItem({ solution, index }: { solution: string; index: number }) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "ltr",
    delay: index * 0.04,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className={`border-l-2 px-5 py-4 text-[18px] font-semibold leading-[1.35] transition ${
        index === 0
          ? "border-[#2563eb] bg-[#2563eb]/20 text-white"
          : "border-white/14 text-white/62 hover:border-[#2563eb] hover:text-white"
      }`}
    >
      {solution}
    </motion.div>
  );
}

export function SolutionsMatrixSection() {
  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  const { ref: contentRef, animationProps: contentAnim } = useScrollAnimation({
    preset: "fadeIn",
    once: true,
  });

  return (
    <section id="solutions" className="relative overflow-hidden bg-primary-dark py-24 text-white sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(37, 99, 235,0.12),transparent_25%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1720px] gap-14 px-5 sm:px-8 lg:grid-cols-[520px_minmax(0,1fr)] lg:px-[10rem]">
        <motion.div ref={headingRef} {...headingAnim}>
          <h2 className="text-[34px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">
            Secure whatever,
            <br />
            whenever, wherever —
            <br />
            with less complexity.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <div className="space-y-1">
            {solutions.map((solution, index) => (
              <SolutionItem key={solution} solution={solution} index={index} />
            ))}
          </div>

          <motion.div
            ref={contentRef}
            {...contentAnim}
            className="relative min-h-[560px] overflow-hidden border border-white/14 bg-white/[0.04] p-8 sm:p-10"
          >
            <div
              className="absolute inset-y-0 right-0 w-1/2 opacity-[0.16]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 6px, transparent 6px, transparent 24px)",
              }}
            />
            <div className="relative z-10 flex min-h-[480px] flex-col">
              <span className="mb-8 block text-[13px] font-semibold uppercase leading-[1.4] tracking-[2.6px] text-[#2563eb]">
                FEATURED SOLUTION
              </span>
              <h3 className="max-w-3xl text-[30px] font-medium leading-[1.18] text-white sm:text-[36px] lg:text-[40px]">
                Secure AI apps, agents, models and data.
              </h3>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="border border-[#141414]/12 bg-white p-5 text-[17px] font-medium leading-[1.45] text-[#141414]/72">
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-auto inline-flex w-fit items-center rounded-full border-2 border-[#2563eb] px-7 py-4 text-[14.8px] font-semibold leading-[1.4] text-white transition duration-300 hover:bg-[#2563eb]"
              >
                Explore solutions
                <ArrowRight size={20} className="ml-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
