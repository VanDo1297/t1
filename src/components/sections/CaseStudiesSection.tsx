"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASE_STUDIES, CLIENT_LOGOS } from "@/lib/constants";

export function CaseStudiesSection() {
  const t = useTranslations("caseStudies");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("kicker")} title={t("title")} />

        {/* Client logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {CLIENT_LOGOS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative w-24 h-14 group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Case study cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={cs.image}
                  alt={t(`${cs.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {t(`${cs.key}.title`)}
                </h3>
                <p className="text-sm text-slate-400">{t(`${cs.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
