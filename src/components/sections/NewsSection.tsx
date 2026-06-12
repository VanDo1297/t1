"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";

const tagColors: Record<string, string> = {
  event: "bg-cyan/20 text-cyan",
  technology: "bg-accent/20 text-accent",
  company: "bg-primary/20 text-primary",
  press: "bg-green-500/20 text-green-400",
};

export function NewsSection() {
  const t = useTranslations("news");

  return (
    <section className="py-24 bg-surface-light/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              {t("kicker")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-flex items-center text-sm text-primary hover:underline group"
          >
            {t("viewAll")}
            <ArrowRight
              size={14}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/news/${item.slug}`}>
                <div className="group rounded-2xl overflow-hidden bg-surface-light/50 border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
                      <span className="text-xs text-slate-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {t(`items.${item.slug}`)}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center text-sm text-primary"
          >
            {t("viewAll")}
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
