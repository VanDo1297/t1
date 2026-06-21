"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { TinTucItem, TinTucCategory, TinTucPageData } from "@/sanity/queries";

interface TinTucPageProps {
  locale: string;
  pageData: TinTucPageData;
  articlesByCategory: Record<string, TinTucItem[]>;
  initialCategory: string;
}

function formatDate(dateStr: string, locale: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function LatestArticle({
  article,
  locale,
  detailLabel,
}: {
  article: TinTucItem;
  locale: string;
  detailLabel: string;
}) {
  const { ref, animationProps } = useScrollAnimation({ preset: "fadeUp" });

  return (
    <motion.div ref={ref} {...animationProps} className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
        {article.thumbnailUrl ? (
          <Image
            src={article.thumbnailUrl}
            alt={article.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src="/assets/dtg-logo.png"
              alt="DTG"
              width={200}
              height={67}
              className="opacity-30"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <div className="mb-4 flex items-center gap-2 text-[13px] text-gray-400">
          <Calendar size={14} />
          {formatDate(article.publishedAt, locale)}
        </div>

        <h2 className="mb-4 text-[22px] font-bold leading-[1.35] text-[#1a2b4a] sm:text-[26px] lg:text-[28px]">
          {article.title}
        </h2>

        <p className="mb-6 text-[15px] leading-relaxed text-gray-500 line-clamp-4">
          {article.excerpt}
        </p>

        <Link
          href={`/${locale}/tin-tuc/${article.slug}`}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1a2b4a] px-6 py-2.5 text-[14px] font-semibold text-[#1a2b4a] transition-all hover:bg-[#1a2b4a] hover:text-white"
        >
          {detailLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
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
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUp",
    delay: index * 0.1,
  });

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

          <h3 className="mb-2 text-[15px] font-bold leading-[1.4] text-[#1a2b4a] line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          <p className="text-[13px] leading-relaxed text-gray-500 line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function TinTucPage({
  locale,
  pageData,
  articlesByCategory,
  initialCategory,
}: TinTucPageProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const articles = activeCategory === "all"
    ? Object.values(articlesByCategory)
        .flat()
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    : articlesByCategory[activeCategory] || [];

  const latestArticle = articles[0] || null;
  const olderArticles = articles.slice(1);

  const activeCategoryLabel =
    activeCategory === "all"
      ? pageData.allLabel
      : pageData.categories.find((c) => c.value === activeCategory)?.label || "";

  return (
    <main className="pt-[80px] [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif]">
      {/* Hero / breadcrumb */}
      <section className="relative overflow-hidden bg-[#09162a] px-5 pb-12 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-[12px] font-medium tracking-wider text-white/40">
            <Link href={`/${locale}`} className="transition-colors hover:text-white/70">
              {pageData.breadcrumbHome}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/tin-tuc`} className="transition-colors hover:text-white/70">
              {pageData.breadcrumbNews}
            </Link>
            <span>/</span>
            <span className="text-primary">{activeCategoryLabel.toUpperCase()}</span>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-3">
            {pageData.categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full px-5 py-2 text-[14px] font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-primary text-white"
                    : "bg-white/8 text-white/60 hover:bg-white/15 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest article */}
      {latestArticle && (
        <section className="bg-white px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 text-[15px] font-bold uppercase tracking-[0.15em] text-[#1a2b4a]">
              {pageData.latestLabel}
            </h2>
            <LatestArticle
              article={latestArticle}
              locale={locale}
              detailLabel={pageData.detailLabel}
            />
          </div>
        </section>
      )}

      {/* Older articles grid */}
      {olderArticles.length > 0 && (
        <section className="bg-[#f8f9fb] px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 text-[15px] font-bold uppercase tracking-[0.15em] text-[#1a2b4a]">
              {pageData.previousLabel}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {olderArticles.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  locale={locale}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {articles.length === 0 && (
        <section className="bg-white px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-[16px] text-gray-400">
              {locale === "vi"
                ? "Chưa có bài viết nào trong danh mục này."
                : "No articles in this category yet."}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
