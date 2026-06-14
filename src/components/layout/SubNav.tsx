"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const navKeys = [
  { key: "whyPalo", href: "#why-palo" },
  { key: "platforms", href: "#platforms" },
  { key: "solutions", href: "#solutions" },
  { key: "provenSuccess", href: "#proven-success" },
  { key: "engageWithUs", href: "#engage" },
] as const;

export function SubNav() {
  const t = useTranslations("subNav");
  const [activeId, setActiveId] = useState<string | null>(null);
  const isPrimarySurface = activeId !== null;

  useEffect(() => {
    const sectionIds = navKeys.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      const mid = window.innerHeight / 2;
      let found: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < mid && rect.bottom > mid) {
          found = id;
        }
      }

      setActiveId(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItem = navKeys.find((item) => item.href === `#${activeId}`);
  const activeLabel = activeItem ? t(activeItem.key) : t(navKeys[0].key);

  return (
    <div
      className={`sticky top-0 z-40 backdrop-blur-xl transition-colors duration-300 ${
        isPrimarySurface ? "bg-primary-dark/95" : "bg-black/72"
      }`}
    >
      <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-[10rem]">
        <div className="flex h-[49px] items-center justify-between gap-4">

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-between gap-8 sm:flex">
            {navKeys.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap border-b-2 py-[13px] text-[16px] font-semibold leading-[1.4] tracking-[0.22em] transition-colors hover:text-[#2563eb] ${
                    isActive
                      ? "border-[#2563eb] text-white"
                      : "border-transparent text-white/65"
                  }`}
                >
                  {t(item.key)}
                </a>
              );
            })}
          </nav>

          {/* Mobile: just show active section label */}
          <div className="flex flex-1 items-center sm:hidden">
            <span className="py-[13px] text-[13px] font-semibold tracking-[0.12em] text-white">
              {activeLabel}
            </span>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#2563eb] px-5 py-2 text-[13px] font-semibold leading-[1.4] tracking-[0.01rem] text-white transition hover:bg-[#2563eb] sm:px-7 sm:py-3 sm:text-[14.8px]"
          >
            {t("demosAndTrials")}
          </a>
        </div>
      </div>
    </div>
  );
}
