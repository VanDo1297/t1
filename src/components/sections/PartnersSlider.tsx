"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PARTNER_LOGOS } from "@/lib/constants";

export function PartnersSlider() {
  const t = useTranslations("partners");
  // Double the logos for infinite scroll effect
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("kicker")} title={t("title")} />
      </div>

      {/* Infinite slider */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -50 * PARTNER_LOGOS.length] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {logos.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 w-32 h-20 relative group"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
