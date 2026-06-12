"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { Lightbulb, Users, ShieldCheck, Handshake } from "lucide-react";

const orbitItems = [
  { key: "cloud", Icon: Lightbulb },
  { key: "security", Icon: ShieldCheck },
  { key: "data", Icon: Users },
  { key: "network", Icon: Handshake },
];

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="py-24 relative bg-white text-surface">
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
            <h2 className="text-3xl md:text-4xl font-bold text-surface mb-6">
              {t("title")}
            </h2>
            <p className="text-surface-lighter leading-relaxed mb-4">
              {t("description1")}
            </p>
            <p className="text-surface-lighter leading-relaxed mb-8">
              {t("description2")}
            </p>
            <Link href="/about">
              <Button variant="outline">
                {t("cta")}
              </Button>
            </Link>
          </motion.div>

          {/* Right: Orbit Infographic - 420x420 grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative" style={{ width: 500, height: 420 }}>
              {/* 4 corners - items */}
              {/* Top-left */}
              <div className="absolute top-10 left-0 flex items-center gap-2 flex-row">
                <div className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center">
                  <Lightbulb size={18} className="text-surface" />
                </div>
                <div className="">
                  <h4 className="text-xs font-bold text-surface uppercase">{t("orbit.cloud")}</h4>
                  <p className="text-[11px] text-surface-lighter">{t("orbit.cloudDesc")}</p>
                </div>
              </div>

              {/* Top-right */}
              <div className="absolute top-10 right-0 flex items-center gap-2  flex-row-reverse">
                <div className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-surface" />
                </div>
                <div className="text-right">
                  <h4 className="text-xs font-bold text-surface uppercase">{t("orbit.security")}</h4>
                  <p className="text-[11px] text-surface-lighter">{t("orbit.securityDesc")}</p>
                </div>
              </div>

              {/* Bottom-left */}
              <div className="absolute bottom-10 left-0 flex items-center gap-2 flex-row">
                <div className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center">
                  <Users size={18} className="text-surface" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-surface uppercase">{t("orbit.data")}</h4>
                  <p className="text-[11px] text-surface-lighter">{t("orbit.dataDesc")}</p>
                </div>
              </div>

              {/* Bottom-right */}
              <div className="absolute bottom-10 right-0 flex items-center gap-2 flex-row-reverse">
                <div className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center">
                  <Handshake size={18} className="text-surface" />
                </div>
                <div className="text-right">
                  <h4 className="text-xs font-bold text-surface uppercase">{t("orbit.network")}</h4>
                  <p className="text-[11px] text-surface-lighter">{t("orbit.networkDesc")}</p>
                </div>
              </div>

              <div className="absolute" style={{ width: 320, height: 320, top: 60, left: 90 }}>
                {/* Rings via SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 360" fill="none">
                  <circle cx="180" cy="180" r="175" stroke="#0f172a" strokeWidth="2" strokeDasharray="8 6" opacity="0.3" />
                  <circle cx="180" cy="180" r="130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.4" />
                  <circle cx="180" cy="180" r="85" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
                </svg>

                {/* Animated dots */}
                <motion.div
                  className="absolute inset-[2%]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute w-5 h-5 rounded-full bg-surface/50" style={{ top: "50%", left: 0, transform: "translate(-50%, -50%)" }} />
                </motion.div>
                <motion.div
                  className="absolute inset-[15%]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute w-5 h-5 rounded-full bg-orange-400" style={{ bottom: 0, left: "50%", transform: "translate(-50%, 50%)" }} />
                </motion.div>
                <motion.div
                  className="absolute inset-[28%]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute w-4 h-4 rounded-full bg-primary" style={{ top: 0, left: "50%", transform: "translate(-50%, -50%)" }} />
                </motion.div>

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-surface">{t("orbitCenter")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
