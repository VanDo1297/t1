"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Why Palo Alto Networks?", href: "#why-palo" },
  { label: "Platforms", href: "#platforms" },
  { label: "Solutions", href: "#solutions" },
  { label: "Proven Success", href: "#proven-success" },
  { label: "Engage with Us", href: "#engage" },
];

export function SubNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isPrimarySurface = activeId !== null;

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

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

  return (
    <div
      className={`sticky top-0 z-40 backdrop-blur-xl transition-colors duration-300 ${
        isPrimarySurface ? "bg-primary-dark/95" : "bg-black/72"
      }`}
    >
      <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <div className="flex h-[49px] items-center justify-between gap-6">
          <nav className="flex flex-1 items-center justify-between gap-8 overflow-x-auto scrollbar-none">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap border-b-2 py-[13px] text-[16px] font-semibold leading-[1.4] tracking-[0.22em] transition-colors hover:text-[#2563eb] ${
                    isActive
                      ? isPrimarySurface
                        ? "border-[#2563eb] text-white"
                        : "border-[#2563eb] text-white"
                      : isPrimarySurface
                        ? "border-transparent text-white/65"
                        : "border-transparent text-white/72"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#2563eb] px-7 py-3 text-[14.8px] font-semibold leading-[1.4] tracking-[0.01rem] text-white transition hover:bg-[#2563eb]"
          >
            Demos and trials
          </a>
        </div>
      </div>
    </div>
  );
}
