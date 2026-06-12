"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hexagon } from "@/components/ui/Hexagon";
import { CASE_STUDIES, CLIENT_LOGOS } from "@/lib/constants";

export function CaseStudiesSection() {
  const t = useTranslations("caseStudies");
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  const itemW = 206;
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

      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center"
          style={{ gap }}
          animate={{ x: [-(itemW + gap) * CLIENT_LOGOS.length, 0] }}
          transition={{
            x: { duration: 22, repeat: Infinity, ease: "linear" },
          }}
        >
          {logos.map((client, i) => (
            <Hexagon key={`${client.name}-${i}`} size="lg">
              <div className="relative w-16 h-8 lg:w-28 lg:h-12">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Hexagon>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 border-b border-slate-200" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={cs.image}
                  alt={t(`${cs.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {t(`${cs.key}.title`)}
                </h3>
                <p className="text-sm text-slate-300">{t(`${cs.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
