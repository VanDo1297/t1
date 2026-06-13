"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    <section className="relative min-h-svh overflow-hidden bg-black text-white [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif]">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-y-0 left-0 w-[72%] bg-[linear-gradient(to_right,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.84)_34%,rgba(0,0,0,0.28)_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.35),rgba(0,0,0,0.18)_45%,rgba(0,0,0,0.32))]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/65 to-transparent" />
      </div>

      <div className="pointer-events-none absolute right-[5vw] top-[11svh] hidden h-[64svh] w-[38vw] opacity-55 lg:block">
        <div className="relative h-full w-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute bottom-0 top-0 w-[0.74rem] bg-[#c75435]"
              style={{
                left: `${index * 4.05}%`,
                clipPath:
                  index < 6
                    ? "polygon(48% 30%, 100% 22%, 100% 84%, 48% 76%)"
                    : index > 17
                      ? "polygon(0 7%, 82% 15%, 82% 71%, 0 82%)"
                      : "polygon(0 0, 100% 8%, 100% 95%, 0 87%)",
                height: `${66 + Math.sin(index / 2.2) * 17}%`,
                top: `${Math.max(0, 22 - index * 1.15)}%`,
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.025 }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-auto flex min-h-svh w-full max-w-[1720px] items-end px-5 pb-28 sm:px-8 lg:px-[10rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[960px]"
        >
          <h1 className="mb-6 text-[3rem] font-medium leading-[1.12] tracking-[-0.048em] sm:text-[3.45rem] lg:text-[3.85rem] xl:text-[4.15rem]">
            <span className="block text-white">{t("title")}</span>
          </h1>

          <p className="mb-8 max-w-[780px] text-[1.18rem] font-semibold leading-[1.42] tracking-[0.01rem] text-white sm:text-[1.35rem]">
            {t("subtitle")}
          </p>

          <div className="mb-10 flex h-7 items-center">
            <motion.span
              key={currentKeyword}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.22em] text-[#b9f3ff]"
            >
              {keywords[currentKeyword]}
            </motion.span>
          </div>

          <div className="flex flex-wrap items-center gap-9">
            <Link href="/about">
              <Button
                variant="primary"
                size="lg"
                className="!h-[58px] !rounded-full !bg-[#c75435] !px-9 !text-[0.925rem] !font-semibold !leading-[1.4] !tracking-[0.01rem] !text-white hover:!bg-[#d96547]"
              >
                {t("ctaProfile")}
                <ArrowRight size={22} className="ml-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="lg"
                className="!rounded-none !px-0 !text-[0.925rem] !font-semibold !leading-[1.4] !tracking-[0.01rem] !text-white underline decoration-white decoration-2 underline-offset-[10px] hover:!bg-transparent hover:!text-[#d96547]"
              >
                {t("ctaContact")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
