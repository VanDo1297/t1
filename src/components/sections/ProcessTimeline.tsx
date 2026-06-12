"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const steps = [1, 2, 3, 4, 5] as const;

export function ProcessTimeline() {
  const t = useTranslations("whyChoose.process.steps");

  return (
    <div className="relative">
      {/* Horizontal line (desktop) */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            {/* Node */}
            <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-primary">
                0{step}
              </span>
            </div>

            {/* Vertical connector (mobile) */}
            {i < steps.length - 1 && (
              <div className="md:hidden absolute left-1/2 top-16 w-0.5 h-8 bg-primary -translate-x-1/2" />
            )}

            <h4 className="text-sm font-semibold text-primary mb-1">
              {t(`${step}.title`)}
            </h4>
            <p className="text-xs text-surface-lighter leading-relaxed">
              {t(`${step}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
