"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PARTNER_LOGOS } from "@/lib/constants";

const categories = ["all", "global", "network", "security", "ai"] as const;

export default function PartnersPage() {
  const t = useTranslations("partners");
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? PARTNER_LOGOS
      : PARTNER_LOGOS.filter((p) =>
          p.logo.toLowerCase().includes(
            filter === "global"
              ? "global"
              : filter === "network"
                ? "net"
                : filter === "security"
                  ? "security"
                  : "ai"
          )
        );

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("kicker")} title={t("title")} className="!text-left" />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-surface-lighter hover:text-surface hover:bg-slate-200"
              }`}
            >
              {cat === "all" ? "Tất cả" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-4 group hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-sm font-medium text-surface-lighter group-hover:text-surface transition-colors text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-surface mb-8">
            Chứng Chỉ Chuyên Gia
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HPE Accredited Solutions Expert", img: "/assets/svtech/why/certificates/HPE-Accredited-Solutions-Expert.png" },
              { name: "IBM Certified Database Administrator", img: "/assets/svtech/why/certificates/IBM-Certified-Database-Administrator-DB2.png" },
              { name: "Juniper JNCIE-DC", img: "/assets/svtech/why/certificates/Juniper-Networks-Certified-Expert-Data-Center-JNCIE-DC.png" },
              { name: "Oracle Database Professional", img: "/assets/svtech/why/certificates/Oracle-Database-Administration-Certified-Professional.png" },
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-lg transition-all"
              >
                <div className="relative w-full h-24 mb-3">
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-surface-lighter">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
