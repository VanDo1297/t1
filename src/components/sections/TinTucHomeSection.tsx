"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { TinTucItem } from "@/sanity/queries";

interface TinTucHomeSectionProps {
  locale: string;
  articles: TinTucItem[];
  title: string;
  subtitle: string;
}

const MONTHS_VI = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(dateStr: string, locale: string) {
  const d = new Date(dateStr);
  const day = d.getUTCDate().toString().padStart(2, "0");
  const month = locale === "vi" ? MONTHS_VI[d.getUTCMonth()] : MONTHS_EN[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return locale === "vi" ? `${day}/${month}/${year}` : `${month} ${day}, ${year}`;
}

export function TinTucHomeSection({ locale, articles, title, subtitle }: TinTucHomeSectionProps) {
  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({ preset: "ttb" });

  if (articles.length === 0) return null;

  // Chỉ hiện 3 bài mới nhất
  const visible = articles.slice(0, 3);

  return (
    <section id="tin-tuc" className="overflow-hidden bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <motion.div ref={titleRef} {...titleAnim}>
            <h2
              className="font-bold uppercase tracking-wider text-[#1a1a1a]"
              style={{ fontSize: "clamp(24px, 2vw, 42px)" }}
            >
              {title}
            </h2>
            <p
              className="mt-2 text-gray-500"
              style={{ fontSize: "clamp(14px, 0.9vw, 18px)" }}
            >
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Mobile: cột dọc — Desktop: hàng ngang */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visible.map((article, i) => (
            <ArticleCard key={article.slug} article={article} locale={locale} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  locale,
  index,
}: {
  article: TinTucItem;
  locale: string;
  index: number;
}) {
  const { ref, animationProps } = useScrollAnimation({ preset: "fadeUp", delay: index * 0.1 });

  return (
    <motion.div ref={ref} {...animationProps}>
      <Link
        href={`/${locale}/tin-tuc/${article.slug}`}
        className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          {article.thumbnailUrl ? (
            <Image
              src={article.thumbnailUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <Image
                src="/assets/dtg-logo.png"
                alt="DTG"
                width={120}
                height={40}
                className="opacity-20"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-2 flex items-center gap-2 text-[12px] text-gray-400">
            <Calendar size={12} />
            {formatDate(article.publishedAt, locale)}
          </div>

          <h3 className="mb-2 text-[15px] font-bold uppercase leading-[1.4] text-[#1a2b4a] line-clamp-2 transition-colors group-hover:text-primary">
            {article.title}
          </h3>

          {article.excerpt && (
            <p className="text-[13px] leading-relaxed text-gray-500 line-clamp-3">
              {article.excerpt}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
