"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hexagon } from "@/components/ui/Hexagon";
import { PARTNER_LOGOS } from "@/lib/constants";

export function PartnersSlider() {
  const t = useTranslations("partners");
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  const itemW = 200;
  const gap = 32;

  return (
    <section className="pt-20 pb-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <SectionHeading
          kicker={t("kicker")}
          title={t("title")}
          className="[&_span]:text-primary !text-left"
        />
      </div>

      <div className="relative overflow-hidden border-t border-b border-slate-200 py-10">
        <motion.div
          className="flex items-center"
          style={{ gap }}
          animate={{ x: [0, -(itemW + gap) * PARTNER_LOGOS.length] }}
          transition={{
            x: { duration: 28, repeat: Infinity, ease: "linear" },
          }}
        >
          {logos.map((partner, i) => (
            <Hexagon key={`${partner.name}-${i}`} size="lg">
              <div className="relative w-36 h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Hexagon>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
