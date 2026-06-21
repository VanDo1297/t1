"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { SolutionArticleItem } from "@/sanity/queries";

interface SolutionArticlesPageProps {
  locale: string;
  solutionTitle: string;
  solutionDescription: string;
  articles: SolutionArticleItem[];
  basePath: string;
  categoryPath: string;
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

export function SolutionArticlesPage({
  locale,
  solutionTitle,
  solutionDescription,
  articles,
  basePath,
  categoryPath,
}: SolutionArticlesPageProps) {
  const latestArticle = articles[0] || null;
  const olderArticles = articles.slice(1);

  return (
    <main className="solution-articles-mobile pt-[80px]">
      {/* Hero */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <Image src="/assets/bg/1.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="site-hero-content">
          {/* Breadcrumb */}
          <div className="site-breadcrumb">
            <Link href={`/${locale}`}>
              {locale === "vi" ? "TRANG CHỦ" : "HOME"}
            </Link>
            <span>&rarr;</span>
            <Link href={categoryPath}>
              {locale === "vi" ? "GIẢI PHÁP CÔNG NGHỆ" : "TECHNOLOGY SOLUTIONS"}
            </Link>
            <span>&rarr;</span>
            <span>{solutionTitle.toUpperCase()}</span>
          </div>

          <h1 className="site-hero-title">
            {solutionTitle}
          </h1>
          <p className="site-hero-description">
            {solutionDescription}
          </p>
        </div>
      </section>

      {/* Latest article */}
      {latestArticle && (
        <section className="bg-white px-5 py-16 sm:px-8">
          <div className="w-full">
            <h2 className="mb-10 font-bold uppercase tracking-[0.15em] text-[#1a2b4a]" style={{ fontSize: 20 }}>
              {locale === "vi" ? "BÀI VIẾT MỚI NHẤT" : "LATEST ARTICLE"}
            </h2>
            <LatestArticle article={latestArticle} locale={locale} basePath={basePath} />
          </div>
        </section>
      )}

      {/* Older articles grid */}
      {olderArticles.length > 0 && (
        <section className="bg-[#f8f9fb] px-5 py-16 sm:px-8">
          <div className="w-full">
            <h2 className="mb-10 font-bold uppercase tracking-[0.15em] text-[#1a2b4a]" style={{ fontSize: 20 }}>
              {locale === "vi" ? "BÀI VIẾT TRƯỚC ĐÓ" : "PREVIOUS ARTICLES"}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {olderArticles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} locale={locale} index={i} basePath={basePath} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {articles.length === 0 && (
        <section className="bg-white px-5 py-24 sm:px-8">
          <div className="w-full text-center">
            <p className="text-[16px] text-gray-400">
              {locale === "vi"
                ? "Chưa có bài viết nào trong mục này."
                : "No articles in this section yet."}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

function LatestArticle({
  article,
  locale,
  basePath,
}: {
  article: SolutionArticleItem;
  locale: string;
  basePath: string;
}) {
  const { ref, animationProps } = useScrollAnimation({ preset: "fadeUp" });

  return (
    <motion.div ref={ref} {...animationProps} className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
        {article.thumbnailUrl ? (
          <Image src={article.thumbnailUrl} alt={article.title} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <Image src="/assets/dtg-logo.png" alt="DTG" width={200} height={67} className="opacity-30" />
          </div>
        )}
      </div>

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
          href={`${basePath}/${article.slug}`}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1a2b4a] px-6 py-2.5 text-[14px] font-semibold text-[#1a2b4a] transition-all hover:bg-[#1a2b4a] hover:text-white"
        >
          {locale === "vi" ? "Chi tiết" : "Details"}
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
  basePath,
}: {
  article: SolutionArticleItem;
  locale: string;
  index: number;
  basePath: string;
}) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUp",
    delay: index * 0.1,
  });

  return (
    <motion.div ref={ref} {...animationProps}>
      <Link
        href={`${basePath}/${article.slug}`}
        className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
      >
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
              <Image src="/assets/dtg-logo.png" alt="DTG" width={120} height={40} className="opacity-20" />
            </div>
          )}
        </div>

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
