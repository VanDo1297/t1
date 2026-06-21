"use client";

import { useEffect, useRef } from "react";
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

export function SolutionCategoryPage({
  category,
  locale,
  activeSlug,
}: {
  category: SolutionCategory;
  locale: string;
  activeSlug?: string;
}) {
  const basePath =
    locale === "vi"
      ? `/${locale}/giai-phap-dich-vu/${category.slug}`
      : `/${locale}/solutions/${category.slug}`;

  return (
    <main className="pt-[80px]">
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-8">
          <h1 className="max-w-xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {category.title[locale as "vi" | "en"]}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            {category.heroDescription[locale as "vi" | "en"]}
          </p>
          <Link
            href={`/${locale}/lien-he`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#4db6ac] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3da396]"
          >
            {locale === "vi" ? "Tư vấn ngay" : "Get in touch"}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle locale={locale} />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.children.map((item, i) => (
              <SolutionCard
                key={item.href}
                iconName={item.icon}
                title={item.title[locale as "vi" | "en"]}
                description={item.description[locale as "vi" | "en"]}
                href={`${basePath}/${item.href}`}
                index={i}
                isActive={activeSlug === item.href}
                slug={item.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      {category.goals.length > 0 && (
        <GoalsSection goals={category.goals} locale={locale as "vi" | "en"} />
      )}
    </main>
  );
}

function GoalsSection({
  goals,
  locale,
}: {
  goals: SolutionGoal[];
  locale: "vi" | "en";
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="text-center text-2xl font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-3xl"
        >
          {locale === "vi" ? "Mục tiêu giải pháp" : "Solution Goals"}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, i) => (
            <GoalCard key={i} goal={goal} locale={locale} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GoalCard({
  goal,
  locale,
  index,
}: {
  goal: SolutionGoal;
  locale: "vi" | "en";
  index: number;
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
            src={goal.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-[15px] font-bold text-[#1a1a1a]">
            {goal.title[locale]}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
            {goal.description[locale]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SectionTitle({ locale }: { locale: string }) {
  const { ref, animationProps } = useScrollAnimation({ preset: "fadeUp" });

  return (
    <motion.h2
      ref={ref}
      {...animationProps}
      className="text-center text-2xl font-bold text-primary sm:text-3xl"
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
}: {
  iconName: string;
  title: string;
  description: string;
  href: string;
  index: number;
  isActive?: boolean;
  slug: string;
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
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      {...animationProps}
      id={`solution-${slug}`}
    >
      <div
        className={`group flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
          isActive
            ? "border-primary/40 bg-primary/4 shadow-lg ring-2 ring-primary/20"
            : "border-gray-100 bg-white hover:border-primary/20 hover:shadow-lg hover:-translate-y-2"
        }`}
      >
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
            isActive
              ? "bg-primary text-white"
              : "bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white"
          }`}
        >
          <Icon size={24} />
        </div>
        <h3
          className={`text-[16px] font-semibold transition-colors ${
            isActive ? "text-primary" : "text-[#1a1a1a] group-hover:text-primary"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
