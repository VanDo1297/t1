"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/assets/svtech/dtg-logo.png"
              alt="DTG"
              width={140}
              height={45}
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("description")}
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>(028) 3636 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>info@dtgsoft.vn</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {["about", "solutions", "process", "partners", "news", "contact"].map(
                (key) => (
                  <li key={key}>
                    <Link
                      href={`/${key}`}
                      className="text-sm text-slate-400 hover:text-primary transition-colors"
                    >
                      {tNav(key)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("services")}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Hạ tầng mạng & Viễn thông</li>
              <li>Máy chủ & Lưu trữ</li>
              <li>Bảo mật toàn diện</li>
              <li>Điện toán đám mây</li>
              <li>Hội nghị truyền hình</li>
              <li>AI & Solutions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("newsletter")}
            </h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("newsletterPlaceholder")}
                className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary hover:bg-primary-dark px-4 py-2.5 text-sm font-medium text-white transition-colors"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">{t("copyright")}</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">
              {t("privacy")}
            </span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">
              {t("terms")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
