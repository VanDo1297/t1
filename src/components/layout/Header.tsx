"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { HeaderData, NavItem, MegaMenuColumn } from "@/sanity/queries";

interface HeaderProps {
  data: HeaderData;
  locale: string;
}

/* ── Panel content renderers ── */

function MegaMenuContent({
  columns,
  locale,
}: {
  columns: MegaMenuColumn[];
  locale: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-12">
      {columns.map((col) => (
        <div key={col.href} className="border-l border-gray-100 pl-8 first:border-l-0 first:pl-0">
          <Link
            href={`/${locale}${col.href}`}
            className="group/col mb-5 inline-flex items-center gap-2"
          >
            <h3 className="text-[15px] font-bold text-[#1a1a1a] group-hover/col:text-[#2563eb] transition-colors">
              {col.title}
            </h3>
            <ArrowRight
              size={14}
              className="text-gray-300 transition-all group-hover/col:text-[#2563eb] group-hover/col:translate-x-0.5"
            />
          </Link>
          <div className="flex flex-col gap-0.5">
            {col.children.map((child) => (
              <Link
                key={child.href}
                href={`/${locale}${child.href}`}
                className="group/item flex items-center gap-2 rounded-lg px-4 py-2.5 text-[14px] text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#1a1a1a]"
              >
                <ArrowRight
                  size={13}
                  className="text-gray-300 transition-all group-hover/item:text-[#2563eb] group-hover/item:translate-x-0.5"
                />
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SimpleMenuContent({
  children,
  locale,
}: {
  children: { label: string; href: string }[];
  locale: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {children.map((child) => (
        <Link
          key={child.href}
          href={`/${locale}${child.href}`}
          className="group/item flex items-center gap-2 rounded-lg px-4 py-2.5 text-[14px] text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#1a1a1a]"
        >
          <ArrowRight
            size={13}
            className="text-gray-300 transition-all group-hover/item:text-[#2563eb] group-hover/item:translate-x-0.5"
          />
          {child.label}
        </Link>
      ))}
    </div>
  );
}

export function Header({ data, locale }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const activeItem = activeNavIndex !== null ? data.navItems[activeNavIndex] : null;
  const hasPanel = activeItem && ((activeItem.children && activeItem.children.length > 0) || (activeItem.megaMenu && activeItem.megaMenu.length > 0));

  const openNav = (index: number) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveNavIndex(index);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setActiveNavIndex(null);
    }, 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleLocaleChange = (newLocale: string) => {
    setIsLangOpen(false);
    const pathWithoutLocale = pathname.replace(/^\/(vi|en)/, "");
    window.location.href = `/${newLocale}${pathWithoutLocale || ""}`;
  };

  useEffect(() => {
    const updateHeaderTheme = () => {
      const hero = document.querySelector("section");
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
      setIsOverHero(heroBottom > 80);
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, []);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif]">
      <div className="mx-auto w-full px-5 sm:px-8">
        <div className="grid h-[80px] grid-cols-[auto_1fr_auto] items-center">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/assets/dtg-logo.png"
              alt="DTG"
              width={120}
              height={40}
              className="transition-all group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9">
            {data.navItems.map((item, index) => {
              const hasChildren = (item.children && item.children.length > 0) || (item.megaMenu && item.megaMenu.length > 0);
              const isActive = activeNavIndex === index;

              return (
                <div
                  key={item.href}
                  onMouseEnter={() => hasChildren ? openNav(index) : setActiveNavIndex(null)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={`/${locale}${item.href}`}
                    className={`flex items-center gap-1 py-2 text-[18px] font-medium leading-[1.4] tracking-[0.01rem] transition-colors ${
                      isOverHero
                        ? "text-white/82 hover:text-white"
                        : "text-white/72 hover:text-[#2563eb]"
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${isActive ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center justify-end gap-5">
            <Link
              href={`/${locale}/lien-he`}
              className="hidden sm:flex items-center gap-2 text-[18px] font-medium text-white/82 transition-colors hover:text-white"
            >
              {data.contactLabel}
              <ArrowRight size={18} className="animate-arrow-pulse" />
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[18px] font-medium leading-[1.4] tracking-[0.02rem] transition-colors ${
                  isOverHero
                    ? "text-white/88 hover:bg-white/10 hover:text-white"
                    : "text-white/72 hover:bg-white/10 hover:text-white"
                }`}
              >
                {locale === "vi" ? "🇻🇳 Tiếng Việt" : "🇺🇸 English"}
                <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-white/10 bg-primary-dark/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => handleLocaleChange("vi")}
                      className={`w-full px-4 py-2.5 text-left text-[14px] transition-colors ${
                        locale === "vi"
                          ? "text-primary bg-white/10 font-semibold"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      🇻🇳 Tiếng Việt
                    </button>
                    <button
                      onClick={() => handleLocaleChange("en")}
                      className={`w-full px-4 py-2.5 text-left text-[14px] transition-colors ${
                        locale === "en"
                          ? "text-primary bg-white/10 font-semibold"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      🇺🇸 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Shared Full-width Panel */}
      <AnimatePresence>
        {hasPanel && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="fixed left-0 right-0 top-[80px] z-50"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="border-t border-gray-200 bg-white shadow-xl">
              <div className="mx-auto max-w-7xl px-8 py-10">
                {activeItem!.megaMenu && activeItem!.megaMenu.length > 0 ? (
                  <MegaMenuContent columns={activeItem!.megaMenu} locale={locale} />
                ) : (
                  <SimpleMenuContent children={activeItem!.children!} locale={locale} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/12 bg-primary-dark/95 backdrop-blur-xl overflow-y-auto"
          >
            <nav className="px-4 py-4 space-y-1">
              {data.navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu?.map((col) => (
                    <div key={col.href} className="mt-1 mb-2">
                      <span className="block pl-6 pr-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary/70">
                        {col.title}
                      </span>
                      {col.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`/${locale}${child.href}`}
                          onClick={() => setIsMobileOpen(false)}
                          className="block pl-10 pr-4 py-2 rounded-xl text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  {!item.megaMenu &&
                    item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={`/${locale}${child.href}`}
                        onClick={() => setIsMobileOpen(false)}
                        className="block pl-8 pr-4 py-2.5 rounded-xl text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
