"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO_VIDEO_URL } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
  const t = useTranslations("hero");
  const keywords = t.raw("keywords") as string[];
  const [currentKeyword, setCurrentKeyword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <section className="relative min-h-svh lg:min-h-[max(100svh,800px)] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-svh lg:min-h-[max(100svh,800px)] flex items-end pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-primary/90 font-medium mb-2">
            {t("titleHighlight")}
          </p>

          {/* Typing effect keywords */}
          <div className="h-10 mb-6 flex items-center">
            <span className="text-slate-400 text-lg mr-2">{">"}</span>
            <motion.span
              key={currentKeyword}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg font-mono text-cyan"
            >
              {keywords[currentKeyword]}
            </motion.span>
            <span className="animate-pulse text-cyan ml-0.5">|</span>
          </div>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button variant="gradient" size="lg" className="glow-border">
                {t("ctaProfile")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                {t("ctaContact")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
