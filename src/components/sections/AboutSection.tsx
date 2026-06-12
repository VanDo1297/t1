"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { Shield, Database, Cloud, Network } from "lucide-react";

const orbitItems = [
  { key: "security", Icon: Shield, angle: 0, color: "#ef4444" },
  { key: "data", Icon: Database, angle: 90, color: "#3b82f6" },
  { key: "cloud", Icon: Cloud, angle: 180, color: "#8b5cf6" },
  { key: "network", Icon: Network, angle: 270, color: "#06b6d4" },
] as const;

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              {t("kicker")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              {t("title")}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              {t("description1")}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {t("description2")}
            </p>
            <Link href="/about">
              <Button variant="outline" className="glow-border-hover">
                {t("cta")}
              </Button>
            </Link>
          </motion.div>

          {/* Right: Orbit Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Center Logo Pulse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center"
                >
                  <span className="text-2xl font-bold gradient-text">DTG</span>
                </motion.div>
              </div>

              {/* Orbit ring */}
              <div className="absolute inset-4 rounded-full border border-white/5" />

              {/* Orbit items */}
              {orbitItems.map(({ key, Icon, angle, color }, i) => {
                const radius = 140;
                const rad = ((angle - 90) * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div
                    key={key}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ x, y }}
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        backgroundColor: `${color}15`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon size={28} style={{ color }} />
                    </div>
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap group-hover:text-white transition-colors">
                      {t(`orbit.${key}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
