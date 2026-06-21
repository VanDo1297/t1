"use client";

import { useEffect, useState } from "react";
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

function MegaMenu({
  columns,
  locale,
}: {
  columns: MegaMenuColumn[];
  locale: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18 }}
      className="fixed left-0 right-0 top-[80px] z-50"
    >
      <div className="border-t border-gray-200 bg-white shadow-xl">
        <div className="mx-auto max-w-7xl px-8 py-10">
          <div className="grid grid-cols-3 gap-12">
            {columns.map((col) => (
              <div key={col.href} className="border-l border-gray-100 pl-8 first:border-l-0 first:pl-0">
                <Link
                  href={`/${locale}${col.href}`}
                  className="group/col mb-6 inline-flex items-center gap-2"
                >
                  <h3 className="text-[16px] font-bold text-[#1a1a1a] group-hover/col:text-primary transition-colors">
                    {col.title}
                  </h3>
                  <ArrowRight
                    size={16}
                    className="text-gray-400 transition-all group-hover/col:text-primary group-hover/col:translate-x-0.5"
                  />
                </Link>
                <div className="space-y-1">
                  {col.children.map((child) => (
                    <Link
                      key={child.href}
                      href={`/${locale}${child.href}`}
                      className="block py-2 text-[14px] text-gray-600 transition-colors hover:text-[#1a1a1a]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NavItemWithDropdown({
  item,
  locale,
  isOverHero,
}: {
  item: NavItem;
  locale: string;
  isOverHero: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const hasMegaMenu = item.megaMenu && item.megaMenu.length > 0;
  const hasDropdown = hasChildren || hasMegaMenu;

  return (
    <div
      className={hasMegaMenu ? "static" : "relative"}
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
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
        {hasDropdown && (
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      <AnimatePresence>
        {open && hasMegaMenu && (
          <MegaMenu columns={item.megaMenu!} locale={locale} />
        )}
        {open && hasChildren && !hasMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-2"
          >
            <div className="w-60 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="mx-4 mt-3 mb-1 h-[3px] w-8 rounded-full" style={{ backgroundColor: "#2563eb" }} />
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={`/${locale}${child.href}`}
                  className="group/item flex items-center justify-between px-4 py-3 text-[15px] transition-colors border-b border-gray-100 last:border-b-0"
                  style={{ color: "#555" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a", e.currentTarget.style.backgroundColor = "#f5f5f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555", e.currentTarget.style.backgroundColor = "transparent")}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header({ data, locale }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();

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

          {/* Desktop Nav - center column */}
          <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 static">
            {data.navItems.map((item) => (
              <NavItemWithDropdown
                key={item.href}
                item={item}
                locale={locale}
                isOverHero={isOverHero}
              />
            ))}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/12 bg-primary-dark/95 backdrop-blur-xl"
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
