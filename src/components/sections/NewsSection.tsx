"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const insights = [
  {
    type: "ARTICLE",
    title: "Securing Your AI-Powered Network Transformation: A Guide for C-Suite Leaders",
    image: "/assets/svtech/news/news-1.jpg",
  },
  {
    type: "ARTICLE",
    title: "A New Era of Cybersecurity with AI",
    image: "/assets/svtech/news/news-2.jpg",
  },
  {
    type: "ARTICLE",
    title: "When It Comes to Cyber Resilience and AI, Be Sure to Stretch the Limits of Your Imagination",
    image: "/assets/svtech/news/news-3.jpg",
  },
  {
    type: "MAGAZINE",
    title: "Quarterly thought leadership on the issues that matter most to cybersecurity executives",
    image: "/assets/svtech/services/service-4.jpg",
  },
];

function InsightCard({ item, index }: { item: (typeof insights)[number]; index: number }) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUpSm",
    delay: index * 0.08,
    once: true,
  });

  return (
    <motion.article
      ref={ref}
      {...animationProps}
      className="group flex min-h-[560px] flex-col overflow-hidden border border-[#141414]/12 bg-[#141414]/[0.03] transition duration-300 hover:border-[#c75435]/75"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-82 transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <span className="mb-6 text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.22em] text-[#c75435]">
          {item.type}
        </span>
        <h3 className="text-[24px] font-medium leading-[1.22] text-[#141414]">
          {item.title}
        </h3>
        <span className="mt-auto inline-flex items-center pt-10 text-[14.8px] font-semibold leading-[1.4] text-[#141414] underline decoration-[#141414]/80 decoration-2 underline-offset-[10px] transition group-hover:text-[#c75435] group-hover:decoration-[#c75435]">
          Read more
          <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </motion.article>
  );
}

export function NewsSection() {
  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section className="relative overflow-hidden bg-white py-24 text-[#141414] sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(199,84,53,0.14),transparent_24%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <div className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            ref={headingRef}
            {...headingAnim}
            className="max-w-5xl text-[40px] font-medium leading-[1.15] text-[#141414] sm:text-[58px] lg:text-[70px]"
          >
            Staying ahead demands
            <br />
            perspectives you can trust.
          </motion.h2>
          <a
            href="/news"
            className="inline-flex items-center text-[14.8px] font-semibold leading-[1.4] tracking-[0.01rem] text-[#141414] underline decoration-[#141414] decoration-2 underline-offset-[10px] transition hover:text-[#c75435] hover:decoration-[#c75435]"
          >
            View all
            <ArrowRight size={18} className="ml-3" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {insights.map((item, index) => (
            <InsightCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
