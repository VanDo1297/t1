"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Cloud, Fingerprint, ChevronDown } from "lucide-react";
import {
  getScrollAnimationProps,
  useScrollAnimation,
  type AnimationPreset,
} from "@/hooks/useScrollAnimation";
import { useTranslations } from "next-intl";

const platformKeys = ["network", "secops", "cloud", "identity"] as const;
const platformIcons = [Shield, Eye, Cloud, Fingerprint] as const;

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
  platformKey,
  isActive,
  awards,
}: {
  platformKey: string;
  isActive: boolean;
  awards: Array<{ source: string; title: string }>;
}) {
  const t = useTranslations("platforms");
  const statKeys = Object.keys(
    // Get the stat keys for this platform from the translation
    (() => {
      const statsMap: Record<string, string[]> = {
        network: ["fortune", "customers"],
        secops: ["integrations", "endpoints"],
        cloud: ["visibility", "defense"],
        identity: ["protected", "controls"],
      };
      return statsMap[platformKey] || [];
    })()
  );

  // Define stat keys per platform
  const statsKeysMap: Record<string, string[]> = {
    network: ["fortune", "customers"],
    secops: ["integrations", "endpoints"],
    cloud: ["visibility", "defense"],
    identity: ["protected", "controls"],
  };

  const currentStatKeys = statsKeysMap[platformKey] || [];

  return (
    <div
      className={isActive ? "pointer-events-auto" : "pointer-events-none"}
    >
      {/* Heading row */}
      <AnimatedContentBlock
        isActive={isActive}
        preset="fadeIn"
        className="mb-10 flex items-start justify-between"
      >
        <h3 className="text-[22px] font-semibold uppercase leading-[1.18] tracking-[0.08em] text-white sm:text-[26px] lg:text-[30px]">
          {t(`items.${platformKey}.heading`)}
        </h3>
        <a
          href="#contact"
          className="mt-2 flex shrink-0 items-center gap-2 text-[14.8px] font-semibold text-white/70 transition hover:text-white"
        >
          {t("seeAll")}
          <ArrowRight size={16} />
        </a>
      </AnimatedContentBlock>

      {/* Content: left text + right awards */}
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(360px,0.42fr)]">
        <AnimatedContentBlock
          isActive={isActive}
          preset="fadeIn"
          delay={0.08}
          className="flex min-w-0 flex-col"
        >
          <p className="mb-10 text-[14px] font-medium leading-[1.65] text-white/68 sm:text-[15px] lg:text-[17px]">
            {t(`items.${platformKey}.desc`)}
          </p>

          <div className="mb-10 flex gap-8">
            {currentStatKeys.map((statKey) => (
              <div key={statKey}>
                <div className="text-[32px] font-medium leading-none text-white sm:text-[40px] lg:text-[52px]">
                  {t(`items.${platformKey}.stats.${statKey}.value`)}
                </div>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55">
                  {t(`items.${platformKey}.stats.${statKey}.label`)}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center rounded-full border-2 border-[#2563eb] px-7 py-4 text-[14.8px] font-semibold leading-[1.4] text-white transition duration-300 hover:bg-[#2563eb]"
          >
            {t(`items.${platformKey}.cta`)}
            <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-1" />
          </a>
        </AnimatedContentBlock>

        <AnimatedContentBlock
          isActive={isActive}
          preset="fadeIn"
          delay={0.12}
          className="grid min-w-0 grid-cols-2 content-start gap-2 sm:gap-3 lg:gap-4"
        >
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex min-h-[148px] flex-col justify-between rounded-lg bg-[linear-gradient(115deg,#2563eb_0%,#2563eb_100%)] p-4 text-white transition duration-300 hover:bg-[#2563eb]"
            >
              <p className="text-[14px] font-bold leading-[1.2] sm:text-[15px] lg:text-[17px]">
                {award.source}
              </p>
              <p className="mt-6 text-[11px] font-medium leading-[1.35] text-white/78 sm:text-[13px]">
                {award.title}
              </p>
            </div>
          ))}
        </AnimatedContentBlock>
      </div>
    </div>
  );
}

// Awards data stays hardcoded as they are proper nouns / brand names
const awardsData: Record<string, Array<{ source: string; title: string }>> = {
  network: [
    { source: "Gartner", title: "2025 Gartner\u00AE Magic Quadrant\u2122 for Hybrid Mesh Firewall" },
    { source: "Gartner", title: "2025 Gartner\u00AE Magic Quadrant\u2122 for SASE Platforms" },
    { source: "Forrester", title: "The Forrester Wave\u2122: Enterprise Firewall Solutions" },
    { source: "Gartner", title: "Gartner\u00AE Magic Quadrant\u2122 for Single-Vendor SASE" },
    { source: "Gartner", title: "Gartner\u00AE Magic Quadrant\u2122 for Network Firewalls" },
    { source: "Gartner", title: "Gartner\u00AE Magic Quadrant\u2122 for SD-WAN" },
  ],
  secops: [
    { source: "Gartner", title: "2026 Gartner\u00AE Magic Quadrant\u2122 for Endpoint Protection Platforms" },
    { source: "Forrester", title: "Forrester Cybersecurity IR Services Wave" },
    { source: "Frost & Sullivan", title: "Frost & Sullivan MDR Radar" },
    { source: "Forrester", title: "Forrester Wave\u2122: Extended Detection And Response Platforms, Q2 2024" },
  ],
  cloud: [
    { source: "Gartner", title: "Gartner\u00AE Magic Quadrant\u2122 for Cloud-Native Application Protection" },
    { source: "Forrester", title: "The Forrester Wave\u2122: Cloud Workload Security" },
    { source: "Gartner", title: "Gartner\u00AE Magic Quadrant\u2122 for Cloud Security Posture Management" },
    { source: "IDC", title: "IDC MarketScape for Cloud Security" },
  ],
  identity: [
    { source: "Gartner", title: "Gartner\u00AE Magic Quadrant\u2122 for Identity Governance and Administration" },
    { source: "Forrester", title: "The Forrester Wave\u2122: Identity as a Service" },
  ],
};

export function CoreServicesSection() {
  const t = useTranslations("platforms");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileTabOpen, setMobileTabOpen] = useState(false);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportH = window.innerHeight;
      let nextIndex = 0;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportH * 0.25) {
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
    <section id="platforms" className="relative bg-primary-dark text-white">
      {/* Heading area */}
      <div className="mx-auto w-full max-w-[1720px] px-4 pt-12 sm:px-8 sm:pt-16 lg:px-[10rem] lg:pt-24">
        <motion.div ref={headingRef} {...headingAnim} className="mb-8 max-w-5xl sm:mb-12 lg:mb-16">
          <div className="mb-6 h-px w-40 bg-[#2563eb] sm:w-80" />
          <h2 className="whitespace-pre-line text-[28px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">
            {t("heading")}
          </h2>
        </motion.div>
      </div>

      {/* Tabs — sticky below SubNav */}
      <div className="sticky top-[49px] z-50 border-b border-white/12 bg-primary-dark/95 backdrop-blur">
        <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-[10rem]">
          {/* Desktop tabs */}
          <div className="hidden gap-0 sm:flex">
            {platformKeys.map((key, index) => {
              const TabIcon = platformIcons[index];
              const isActive = activeIndex === index;
              return (
                <a
                  key={key}
                  href={`#platform-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`flex shrink-0 items-center gap-3 border-b-2 px-6 py-4 text-[15px] font-semibold leading-[1.4] transition-colors ${
                    isActive
                      ? "border-[#2563eb] text-white"
                      : "border-transparent text-white/52 hover:border-[#2563eb] hover:text-white"
                  }`}
                >
                  <TabIcon
                    size={20}
                    className={isActive ? "text-[#2563eb]" : "text-white/38"}
                  />
                  {t(`items.${key}.tab`)}
                </a>
              );
            })}
          </div>

          {/* Mobile: active tab + More dropdown */}
          <div className="relative flex items-center justify-between sm:hidden">
            <div className="flex items-center gap-2 border-b-2 border-[#2563eb] py-3 text-[13px] font-semibold text-white">
              {(() => { const Icon = platformIcons[activeIndex]; return <Icon size={18} className="text-[#2563eb]" />; })()}
              {t(`items.${platformKeys[activeIndex]}.tab`)}
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setMobileTabOpen((v) => !v)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-semibold text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                {t.has("more") ? t("more") : "More"}
                <ChevronDown size={14} />
              </button>
              {mobileTabOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 rounded-xl border border-white/12 bg-[#1a1a1a] py-1 shadow-2xl">
                  {platformKeys.map((key, index) => {
                    const TabIcon = platformIcons[index];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setActiveIndex(index);
                          setMobileTabOpen(false);
                          const el = document.getElementById(`platform-${index}`);
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-[13px] font-semibold transition ${
                          activeIndex === index
                            ? "bg-[#2563eb]/15 text-white"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <TabIcon size={16} />
                        {t(`items.${key}.tab`)}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {platformKeys.map((key, index) => (
        <div
          key={key}
          id={`platform-${index}`}
          ref={(node) => {
            sectionRefs.current[index] = node;
          }}
          data-platform-index={index}
          className="relative z-0 scroll-mt-[100px] border-t border-white/12"
        >
          {/* Animated background — grid zoom + glow */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div
              className="bg-grid-zoom absolute inset-0"
              style={{
                maskImage: "radial-gradient(ellipse at 70% 50%, black 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -right-[8%] top-[10%] h-[80%] w-[50%]"
              style={{
                background: "radial-gradient(circle at 60% 40%, rgba(37,99,235,0.14), transparent 55%)",
                animation: "ai-world-drift 16s ease-in-out infinite alternate",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-[10rem] lg:pb-24 lg:pt-32">
            <TabContent platformKey={key} isActive={activeIndex === index} awards={awardsData[key]} />
          </div>
        </div>
      ))}
    </section>
  );
}
