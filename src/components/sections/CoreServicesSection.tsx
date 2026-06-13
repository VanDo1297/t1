"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Cloud, Fingerprint } from "lucide-react";
import {
  getScrollAnimationProps,
  useScrollAnimation,
  type AnimationPreset,
} from "@/hooks/useScrollAnimation";

const platforms = [
  {
    icon: Shield,
    tab: "AI-Powered Network Security",
    heading: "AI-Powered Network Security",
    desc: "Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.",
    cta: "Explore Network Security",
    stats: [
      { value: "95%", label: "of the Fortune 100" },
      { value: "70 K", label: "customers" },
    ],
    awards: [
      { source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall" },
      { source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for SASE Platforms" },
      { source: "Forrester", title: "The Forrester Wave™: Enterprise Firewall Solutions" },
      { source: "Gartner", title: "Gartner® Magic Quadrant™ for Single-Vendor SASE" },
      { source: "Gartner", title: "Gartner® Magic Quadrant™ for Network Firewalls" },
      { source: "Gartner", title: "Gartner® Magic Quadrant™ for SD-WAN" },
    ],
  },
  {
    icon: Eye,
    tab: "AI-Driven Security Operations",
    heading: "AI-Driven Security Operations",
    desc: "Transform the SOC and enable better, faster security with the #1 AI-driven SecOps platform powered by unified data, artificial intelligence and automation.",
    cta: "Explore SecOps",
    stats: [
      { value: "700+", label: "partner integrations" },
      { value: "480 B", label: "endpoints scanned daily" },
    ],
    awards: [
      { source: "Gartner", title: "2026 Gartner® Magic Quadrant™ for Endpoint Protection Platforms" },
      { source: "Forrester", title: "Forrester Cybersecurity IR Services Wave" },
      { source: "Frost & Sullivan", title: "Frost & Sullivan MDR Radar" },
      { source: "Forrester", title: "Forrester Wave™: Extended Detection And Response Platforms, Q2 2024" },
    ],
  },
  {
    icon: Cloud,
    tab: "Real-Time Cloud Security",
    heading: "Real-Time Cloud Security",
    desc: "Secure cloud apps, data and infrastructure from code to runtime. Protect cloud-native environments with continuous visibility, posture management, runtime defense and AI-powered risk prioritization.",
    cta: "Explore Cloud Security",
    stats: [
      { value: "Code", label: "to cloud visibility" },
      { value: "Runtime", label: "threat defense" },
    ],
    awards: [
      { source: "Gartner", title: "Gartner® Magic Quadrant™ for Cloud-Native Application Protection" },
      { source: "Forrester", title: "The Forrester Wave™: Cloud Workload Security" },
      { source: "Gartner", title: "Gartner® Magic Quadrant™ for Cloud Security Posture Management" },
      { source: "IDC", title: "IDC MarketScape for Cloud Security" },
    ],
  },
  {
    icon: Fingerprint,
    tab: "Next-Generation Identity Security",
    heading: "Next-Generation Identity Security",
    desc: "Control identity chaos across every human, machine and AI agent. Discover, govern and secure every identity with contextual intelligence that keeps access aligned to risk.",
    cta: "Explore Identity Security",
    stats: [
      { value: "Every", label: "identity protected" },
      { value: "Agentic", label: "AI access controls" },
    ],
    awards: [
      { source: "Gartner", title: "Gartner® Magic Quadrant™ for Identity Governance and Administration" },
      { source: "Forrester", title: "The Forrester Wave™: Identity as a Service" },
    ],
  },
];

function AnimatedContentBlock({
  children,
  className = "",
  delay = 0,
  isActive,
  preset,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  isActive: boolean;
  preset: AnimationPreset;
}) {
  const { ref, isInView } = useScrollAnimation({
    preset,
    duration: 0.58,
    delay,
    margin: "-18% 0px -18% 0px",
  });

  return (
    <motion.div
      ref={ref}
      {...getScrollAnimationProps(preset, isActive && isInView, {
        duration: 0.58,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      })}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TabContent({
  platform,
  isActive,
}: {
  platform: (typeof platforms)[number];
  isActive: boolean;
}) {
  return (
    <div
      className={isActive ? "pointer-events-auto" : "pointer-events-none"}
    >
      {/* Heading row */}
      <AnimatedContentBlock
        isActive={isActive}
        preset="ttb"
        className="mb-10 flex items-start justify-between"
      >
        <h3 className="text-[34px] font-semibold uppercase leading-[1.15] tracking-[0.08em] text-[#141414] sm:text-[44px] lg:text-[52px]">
          {platform.heading}
        </h3>
        <a
          href="#contact"
          className="mt-2 flex shrink-0 items-center gap-2 text-[14.8px] font-semibold text-[#141414]/70 transition hover:text-[#141414]"
        >
          See all
          <ArrowRight size={16} />
        </a>
      </AnimatedContentBlock>

      {/* Content: left text + right awards */}
      <div className="grid gap-12 lg:grid-cols-2">
        <AnimatedContentBlock
          isActive={isActive}
          preset="ltr"
          delay={0.08}
          className="flex min-w-0 flex-col"
        >
          <p className="mb-10 text-[15px] font-medium leading-[1.65] text-[#141414]/60 sm:text-[17px]">
            {platform.desc}
          </p>

          <div className="mb-10 flex gap-8">
            {platform.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[40px] font-medium leading-none text-[#141414] sm:text-[52px]">
                  {stat.value}
                </div>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#141414]/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center rounded-full border-2 border-[#c75435] px-7 py-4 text-[14.8px] font-semibold leading-[1.4] text-[#141414] transition duration-300 hover:bg-[#c75435] hover:text-white"
          >
            {platform.cta}
            <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-1" />
          </a>
        </AnimatedContentBlock>

        <AnimatedContentBlock
          isActive={isActive}
          preset="rtl"
          delay={0.12}
          className="grid min-w-0 grid-cols-2 gap-3 lg:gap-4"
        >
          {platform.awards.map((award) => (
            <div
              key={award.title}
              className="flex min-h-[120px] flex-col justify-between rounded-lg bg-[linear-gradient(115deg,#c75435_0%,#93311f_100%)] p-5 text-white transition duration-300 hover:bg-[#93311f]"
            >
              <p className="text-[20px] font-bold leading-[1.2]">
                {award.source}
              </p>
              <p className="mt-3 text-[12px] font-medium leading-[1.4] text-white/78">
                {award.title}
              </p>
            </div>
          ))}
        </AnimatedContentBlock>
      </div>
    </div>
  );
}

export function CoreServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = 116;
      let nextIndex = 0;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        if (section.getBoundingClientRect().top <= activationLine) {
          nextIndex = index;
        }
      });

      setActiveIndex(nextIndex);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <section id="platforms" className="relative bg-white text-[#141414]">
      {/* Heading area */}
      <div className="mx-auto w-full max-w-[1720px] px-5 pt-20 sm:px-8 sm:pt-28 lg:px-[10rem] lg:pt-36">
        <motion.div ref={headingRef} {...headingAnim} className="mb-10 max-w-5xl">
          <div className="mb-6 h-px w-48 bg-[#c75435]" />
          <h2 className="text-[40px] font-medium leading-[1.15] text-[#141414] sm:text-[52px] lg:text-[64px]">
            Introducing the Platforms,
            <br />
            powered by Precision AI
          </h2>
        </motion.div>
      </div>

      {/* Tabs — sticky below SubNav */}
      <div className="sticky top-[49px] z-50 border-b border-[#141414]/10 bg-white backdrop-blur">
        <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {platforms.map((platform, index) => {
              const TabIcon = platform.icon;
              const isActive = activeIndex === index;
              return (
                <a
                  key={platform.tab}
                  href={`#platform-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`flex shrink-0 items-center gap-3 border-b-2 px-6 py-5 text-[15px] font-semibold leading-[1.4] transition-colors ${
                    isActive
                      ? "border-[#c75435] text-[#141414]"
                      : "border-transparent text-[#141414]/45 hover:border-[#c75435] hover:text-[#141414]"
                  }`}
                >
                  <TabIcon
                    size={20}
                    className={isActive ? "text-[#c75435]" : "text-[#141414]/30"}
                  />
                  {platform.tab}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {platforms.map((platform, index) => (
        <div
          key={platform.tab}
          id={`platform-${index}`}
          ref={(node) => {
            sectionRefs.current[index] = node;
          }}
          data-platform-index={index}
          className="relative z-0 min-h-[calc(100svh-49px)] scroll-mt-[116px] border-t border-[#141414]/10"
        >
          {/* Diagonal stripe pattern right */}
          <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[45%] overflow-hidden opacity-[0.12]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #c75435 0px, #c75435 2px, transparent 2px, transparent 28px)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-[10rem] lg:pb-24 lg:pt-32">
            <TabContent platform={platform} isActive={activeIndex === index} />
          </div>
        </div>
      ))}
    </section>
  );
}
