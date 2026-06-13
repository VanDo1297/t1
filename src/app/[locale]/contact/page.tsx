"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("title")} className="!text-left" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-surface">
              {t("info.title")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-surface-lighter mb-1">{t("info.address")}</p>
                  <p className="text-base font-medium text-surface">
                    41 Trần Khắc Chân, Phường Cầu Kiệu, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-surface-lighter mb-1">{t("info.phone")}</p>
                  <p className="text-base font-medium text-surface">DTG TP.HCM: (028) 3865 9999</p>
                  <p className="text-base font-medium text-surface">DTG Hà Nội: 0916 868 989</p>
                  <p className="text-base font-medium text-surface">DTG Hải Phòng: 0912 193 833</p>
                  <p className="text-sm text-surface-lighter mt-1">Fax: (028) 3868 3639</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-surface-lighter mb-1">{t("info.email")}</p>
                  <p className="text-base font-medium text-surface">info@dtgcorp.com.vn</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-slate-200 h-64">
              <iframe
                src="https://maps.google.com/maps?q=41+Tr%E1%BA%A7n+Kh%E1%BA%AFc+Ch%C3%A2n,+C%E1%BA%A7u+Ki%E1%BB%87u,+Ph%C3%BA+Nhu%E1%BA%ADn,+H%E1%BB%93+Ch%C3%AD+Minh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-[#141414]/10 bg-white p-8"
          >
            <h3 className="text-2xl font-bold text-[#141414] mb-6">
              {t("form.title")}
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
