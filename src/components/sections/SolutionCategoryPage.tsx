"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Server,
  Wifi,
  Database,
  Search,
  ShieldCheck,
  Eye,
  Bug,
  Settings,
  Swords,
  AlertTriangle,
  Brain,
  Bot,
  Monitor,
  TreePalm,
  ScanText,
  Headphones,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { SolutionCategory, SolutionGoal } from "@/data/solutions";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Server,
  Wifi,
  Database,
  Search,
  ShieldCheck,
  Eye,
  Bug,
  Settings,
  Swords,
  AlertTriangle,
  Brain,
  Bot,
  Monitor,
  TreePalm,
  ScanText,
  Headphones,
};

interface CmsData {
  cardBgImageUrl: string | null;
  goals: { title: string; description: string; imageUrl: string | null }[];
  cardImages?: (string | null)[];
}

export function SolutionCategoryPage({
  category,
  locale,
  activeSlug,
  cmsData,
}: {
  category: SolutionCategory;
  locale: string;
  activeSlug?: string;
  cmsData?: CmsData;
}) {
  const basePath =
    locale === "vi"
      ? `/${locale}/giai-phap-dich-vu/${category.slug}`
      : `/${locale}/solutions/${category.slug}`;

  return (
    <main className="solution-category-mobile pt-[80px]">
      {/* Hero */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="site-hero-content">
          <h1 className="site-hero-title">
            {category.title[locale as "vi" | "en"]}
          </h1>
          <p className="site-hero-description">
            {category.heroDescription[locale as "vi" | "en"]}
          </p>
          <Link
            href={`/${locale}/lien-he`}
            className="site-hero-cta"
          >
            {locale === "vi" ? "Tư vấn ngay" : "Get in touch"}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Solutions */}
      <section className="px-5 py-20 sm:px-8" style={{ backgroundColor: "#fff" }}>
        <div>
          <SectionTitle locale={locale} />
          <SolutionsCarousel
            category={category}
            locale={locale}
            basePath={basePath}
            activeSlug={activeSlug}
            cardBgImage={cmsData?.cardBgImageUrl || "/assets/bg/5.jpg"}
            cardImages={cmsData?.cardImages}
          />
        </div>
      </section>

      {/* Goals + Lộ trình */}
      {category.goals.length > 0 && (
        <GoalsSection goals={category.goals} locale={locale as "vi" | "en"} cmsGoals={cmsData?.goals} />
      )}

      <LoTrinhSection locale={locale as "vi" | "en"} />
    </main>
  );
}

function GoalsSection({
  goals,
  locale,
  cmsGoals,
}: {
  goals: SolutionGoal[];
  locale: "vi" | "en";
  cmsGoals?: { title: string; description: string; imageUrl: string | null }[];
}) {
  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8">
      <div className="absolute inset-0">
        <Image
          src="/assets/bg/5.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0f2] via-[#e8f0f2]/95 to-[#e8f0f2]" />
      </div>

      <div className="relative z-10">
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="solution-section-heading text-center font-bold uppercase tracking-wider"
          style={{ fontSize: 42, color: "#1a1a1a" }}
        >
          {locale === "vi" ? "Mục tiêu giải pháp" : "Solution Goals"}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, i) => {
            const cmsImage = cmsGoals?.[i]?.imageUrl;
            return (
              <GoalCard key={i} goal={goal} locale={locale} index={i} imageOverride={cmsImage || undefined} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GoalCard({
  goal,
  locale,
  index,
  imageOverride,
}: {
  goal: SolutionGoal;
  locale: "vi" | "en";
  index: number;
  imageOverride?: string;
}) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUp",
    delay: index * 0.1,
  });

  return (
    <motion.div ref={ref} {...animationProps}>
      <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageOverride || goal.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold" style={{ fontSize: 20, color: "#1a1a1a" }}>
            {goal.title[locale]}
          </h3>
          <p className="mt-2 leading-relaxed" style={{ fontSize: 16, color: "#555" }}>
            {goal.description[locale]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const loTrinhSteps = [
  {
    title: { vi: "KHẢO SÁT HIỆN TRẠNG", en: "SITE SURVEY" },
    desc: { vi: "Đo không gian, ánh sáng, hạ tầng mạng & điện.", en: "Measure space, lighting, network & electrical infrastructure." },
  },
  {
    title: { vi: "THIẾT KẾ & MÔ PHỎNG", en: "DESIGN & SIMULATION" },
    desc: { vi: "Bố cục pixel, tính toán khoảng nhìn và vật tư.", en: "Pixel layout, viewing distance and material calculation." },
  },
  {
    title: { vi: "CUNG CẤP & LẮP ĐẶT", en: "SUPPLY & INSTALLATION" },
    desc: { vi: "Thi công chuẩn hàng, hiệu chỉnh màu và góc nhìn.", en: "Precision mounting, color and viewing angle calibration." },
  },
  {
    title: { vi: "TÍCH HỢP PHẦN MỀM", en: "SOFTWARE INTEGRATION" },
    desc: { vi: "Kết nối CMS, KVM, SCADA theo yêu cầu.", en: "Connect CMS, KVM, SCADA as required." },
  },
  {
    title: { vi: "BÀN GIAO & VẬN HÀNH", en: "HANDOVER & OPERATION" },
    desc: { vi: "Đào tạo, tài liệu và hỗ trợ bảo hành.", en: "Training, documentation and warranty support." },
  },
];

function LoTrinhSection({ locale }: { locale: "vi" | "en" }) {
  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({
    preset: "ttb",
  });

  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div>
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="solution-section-heading mb-16 text-center font-medium leading-[1.2]"
          style={{ fontSize: 42, color: "#1a1a1a" }}
        >
          {locale === "vi" ? "Lộ trình triển khai 5 giai đoạn" : "5-Phase Deployment Roadmap"}
        </motion.h2>

        <div className="relative grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {loTrinhSteps.map((step, i) => (
            <LoTrinhStepCard key={i} step={step} index={i} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LoTrinhStepCard({
  step,
  index,
  locale,
}: {
  step: (typeof loTrinhSteps)[number];
  index: number;
  locale: "vi" | "en";
}) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "btt",
    delay: index * 0.15,
  });

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="relative flex flex-1 flex-col items-center text-center pt-[32px] transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Number badge - centered on top border of card */}
      <div className="absolute top-0 z-10 flex h-16 w-16 items-center justify-center rounded-xl border-[2.5px] border-[#0f1d3a] bg-white font-bold text-[#0f1d3a]" style={{ fontSize: 24 }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      {/* Card with border */}
      <div className="flex w-full flex-col items-center rounded-2xl border-[2px] border-[#0f1d3a] px-4 pb-16 pt-18">
        <h3 className="font-bold uppercase tracking-[0.05em] text-[#0f1d3a]" style={{ fontSize: 18 }}>
          {step.title[locale]}
        </h3>
        <p className="mt-2 max-w-[240px] leading-[1.6]" style={{ fontSize: 16, color: "#555" }}>
          {step.desc[locale]}
        </p>
      </div>
    </motion.div>
  );
}

function SolutionsCarousel({
  category,
  locale,
  basePath,
  activeSlug,
  cardBgImage,
  cardImages,
}: {
  category: SolutionCategory;
  locale: string;
  basePath: string;
  activeSlug?: string;
  cardBgImage: string;
  cardImages?: (string | null)[];
}) {
  const items = category.children;
  const perPage = 4;
  const needsCarousel = items.length > perPage;
  const [offset, setOffset] = useState(0);
  const maxOffset = items.length - perPage;

  if (!needsCarousel) {
    return (
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, i) => (
          <SolutionCard
            key={item.href}
            iconName={item.icon}
            title={item.title[locale as "vi" | "en"]}
            description={item.description[locale as "vi" | "en"]}
            href={`${basePath}/${item.href}`}
            index={i}
            isActive={activeSlug === item.href}
            slug={item.href}
            cardBgImage={cardImages?.[i] || cardBgImage}
          />
        ))}
      </div>
    );
  }

  const visibleItems = items.slice(offset, offset + perPage);

  return (
    <div className="mt-12 flex items-center gap-4">
      {/* Prev */}
      <button
        onClick={() => setOffset((o) => Math.max(0, o - 1))}
        disabled={offset === 0}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#1a1a1a] transition-all hover:bg-gray-100 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Cards */}
      <div className="flex-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleItems.map((item, i) => {
          const globalIndex = offset + i;
          return (
            <SolutionCard
              key={item.href}
              iconName={item.icon}
              title={item.title[locale as "vi" | "en"]}
              description={item.description[locale as "vi" | "en"]}
              href={`${basePath}/${item.href}`}
              index={i}
              isActive={activeSlug === item.href}
              slug={item.href}
              cardBgImage={cardImages?.[globalIndex] || cardBgImage}
            />
          );
        })}
      </div>

      {/* Next */}
      <button
        onClick={() => setOffset((o) => Math.min(maxOffset, o + 1))}
        disabled={offset >= maxOffset}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#1a1a1a] transition-all hover:bg-gray-100 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

function SectionTitle({ locale }: { locale: string }) {
  const { ref, animationProps } = useScrollAnimation({ preset: "fadeUp" });

  return (
    <motion.h2
      ref={ref}
      {...animationProps}
      className="solution-section-heading text-center font-bold"
      style={{ fontSize: 42, color: "#2563eb" }}
    >
      {locale === "vi" ? "Giải pháp" : "Solutions"}
    </motion.h2>
  );
}

function SolutionCard({
  iconName,
  title,
  description,
  href,
  index,
  isActive,
  slug,
  cardBgImage,
}: {
  iconName: string;
  title: string;
  description: string;
  href: string;
  index: number;
  isActive?: boolean;
  slug: string;
  cardBgImage: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUp",
    delay: index * 0.08,
  });

  const Icon = iconMap[iconName] || Shield;

  useEffect(() => {
    if (isActive && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }, [isActive]);

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      id={`solution-${slug}`}
    >
      <Link href={href} className="block h-full">
        <div
          ref={cardRef}
          className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-sm transition-all duration-300 ${
            isActive
              ? "border-primary/40 shadow-lg ring-2 ring-primary/20"
              : "border-gray-100 hover:border-primary/20 hover:shadow-lg hover:-translate-y-2"
          }`}
        >
          <div className="absolute inset-0">
            <Image src={cardBgImage} alt="" fill className="object-cover" />
          </div>
          <div
            className={`relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white"
            }`}
          >
            <Icon size={28} />
          </div>
          <h3
            className={`relative z-10 font-bold transition-colors ${
              isActive ? "text-primary" : "text-[#1a1a1a] group-hover:text-primary"
            }`}
            style={{ fontSize: 22 }}
          >
            {title}
          </h3>
          <p className="relative z-10 mt-3 flex-1 leading-relaxed" style={{ fontSize: 16, color: "#555" }}>
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
