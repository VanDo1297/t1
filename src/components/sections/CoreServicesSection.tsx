"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  Network,
  Server,
  Shield,
  Cloud,
  Video,
  Brain,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_SERVICES } from "@/lib/constants";

const iconMap: Record<string, typeof Network> = {
  Network,
  Server,
  Shield,
  Cloud,
  Video,
  Brain,
};

export function CoreServicesSection() {
  const t = useTranslations("services");

  return (
    <section className="py-24 bg-white text-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("kicker")} title={t("title")} className="!text-left" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/solutions/${service.slug}`}>
                  <div className="bg-surface rounded-2xl p-6 h-full group cursor-pointer transition-all duration-300 border border-white/10 hover:border-primary/30 hover:shadow-xl shimmer-hover">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon
                        size={28}
                        className="text-primary group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                      {t(`${service.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {t(`${service.key}.desc`)}
                    </p>
                    <span className="inline-flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {t("viewDetail")}
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
