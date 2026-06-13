"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as "vi" | "en" });
    setIsLangOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif]">
      <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <div className="flex h-[104px] items-center justify-between">
          <div className="flex items-center gap-[3rem]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/assets/svtech/dtg-logo.png"
                alt="DTG"
                width={120}
                height={40}
                className="transition-all brightness-0 invert group-hover:opacity-80"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_ITEMS.filter((item) => item.key !== "contact").map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`py-2 text-[14.5px] font-semibold leading-[1.4] tracking-[0.01rem] transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right side: Language + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex min-w-[176px] justify-center rounded-full bg-[#f76f4f] px-7 py-4 text-[14.5px] font-semibold leading-[1.4] tracking-[0.01rem] text-black transition hover:bg-[#ff815f]"
            >
              {t("contact")}
            </Link>
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-full text-[14px] font-semibold leading-[1.4] tracking-[0.02rem] text-white/88 hover:bg-white/10 hover:text-white transition-colors"
              >
                {locale === "vi" ? "🇻🇳 VI" : "🇺🇸 EN"}
                <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 w-36 rounded-2xl bg-white border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => switchLocale("vi")}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        locale === "vi"
                          ? "text-primary bg-primary/10"
                          : "text-surface hover:bg-surface/5"
                      }`}
                    >
                      🇻🇳 Tiếng Việt
                    </button>
                    <button
                      onClick={() => switchLocale("en")}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        locale === "en"
                          ? "text-primary bg-primary/10"
                          : "text-surface hover:bg-surface/5"
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
              className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
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
            className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
