"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NEWS_ITEMS } from "@/lib/constants";

const tagColors: Record<string, string> = {
  event: "bg-cyan/20 text-cyan",
  technology: "bg-accent/20 text-accent",
  company: "bg-primary/20 text-primary",
  press: "bg-green-500/20 text-green-400",
};

export default function NewsPage() {
  const t = useTranslations("news");
  const [activeTag, setActiveTag] = useState("all");

  const filtered =
    activeTag === "all"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.tag === activeTag);

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("kicker")} title={t("title")} className="!text-left" />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["all", "event", "technology", "company", "press"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTag === tag
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-surface-lighter hover:text-surface hover:bg-slate-200"
              }`}
            >
              {t(`tags.${tag}`)}
            </button>
          ))}
        </div>

        {/* News grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/news/${item.slug}`}>
                  <div className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={t(`items.${item.slug}`)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[item.tag]}`}
                        >
                          {t(`tags.${item.tag}`)}
                        </span>
                        <span className="text-xs text-surface-lighter">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-surface group-hover:text-primary transition-colors line-clamp-2">
                        {t(`items.${item.slug}`)}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
