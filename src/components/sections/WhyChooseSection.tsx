"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Lightbulb,
  Globe,
  HeadphonesIcon,
  ShieldCheck,
} from "lucide-react";
import { MetricsSection } from "./MetricsSection";
import { ProcessTimeline } from "./ProcessTimeline";
import { CtaBox } from "./CtaBox";
import { Card } from "@/components/ui/Card";

const valueIcons = [Award, Users, Lightbulb, Globe, HeadphonesIcon, ShieldCheck];
const valueKeys = [
  "experience",
  "experts",
  "solutions",
  "nationwide",
  "support",
  "quality",
] as const;

export function WhyChooseSection() {
  const t = useTranslations("whyChoose");

  return (
    <section className="py-24 bg-white text-surface relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface">
            {t("title")}
          </h2>
        </motion.div>

        {/* Tier 1: Metrics */}
        <MetricsSection />

        {/* Tier 2: 6 Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {valueKeys.map((key, i) => {
            const Icon = valueIcons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t(`values.${key}.desc`)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tier 3: Process */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-surface mb-12"
          >
            {t("process.title")}
          </motion.h3>
          <ProcessTimeline />
        </div>

        {/* CTA */}
        <div className="mt-16">
          <CtaBox />
        </div>
      </div>
    </section>
  );
}
