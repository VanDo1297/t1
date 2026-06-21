"use client";

import { useState, useEffect, useRef } from "react";

interface SubNavItem {
  label: string;
  href: string;
}

interface SubNavProps {
  items: SubNavItem[];
  ctaLabel: string;
  ctaHref: string;
  locale: string;
}

export function SubNav({ items, ctaLabel, ctaHref, locale }: SubNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (!activeId || !navRef.current) return;
    const activeTab = tabRefs.current.get(activeId);
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      const hero = document.querySelector("section");
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
      setVisible(heroBottom < 0);

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
  }, [items]);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-40 backdrop-blur-xl transition-all duration-300 [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif] ${
        visible
          ? "translate-y-0 opacity-100 bg-white/95 shadow-sm"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto w-full px-5 sm:px-8">
        <div className="flex h-[56px] items-center justify-center gap-8">
          {/* Nav items - horizontally scrollable on mobile */}
          <nav
            ref={navRef}
            className="flex w-full items-center gap-6 overflow-x-auto sm:justify-center sm:gap-10 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    if (el) tabRefs.current.set(id, el);
                  }}
                  className={`whitespace-nowrap border-b-2 py-[16px] text-[13px] font-medium tracking-[0.15em] transition-colors hover:text-[#1a1a1a] sm:text-[15px] ${
                    isActive
                      ? "border-[#2563eb] text-[#1a1a1a]"
                      : "border-transparent text-gray-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

        </div>
      </div>
    </div>
  );
}
