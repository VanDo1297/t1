"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="border-t border-white/12 bg-primary-dark text-white">
      <div className="mx-auto w-full max-w-[1720px] px-5 py-20 sm:px-8 lg:px-[10rem]">
        <div className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
          <div>
            <h2 className="mb-6 max-w-3xl text-[40px] font-medium leading-[1.2] sm:text-[52px] lg:text-[58px]">
              {t("ctaHeading")}
            </h2>
            <p className="max-w-2xl text-[17px] font-medium leading-[1.55] text-white/68">
              {t("description")}
            </p>
          </div>
          <form className="flex flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t("newsletterPlaceholder")}
              className="min-h-14 flex-1 border-b border-white/35 bg-transparent px-0 text-[18px] text-white placeholder-white/45 outline-none transition focus:border-[#2563eb]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#2563eb] px-8 py-4 text-[14.8px] font-semibold leading-[1.4] text-white transition hover:bg-[#2563eb]"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-white/12 pt-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/assets/svtech/dtg-logo.png"
              alt="DTG"
              width={140}
              height={45}
              className="brightness-0 invert"
            />
            <div className="space-y-3 text-[14px] font-medium leading-[1.5] text-white/62">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-[#2563eb]" />
                <span>41 Trần Khắc Chân, Phường Cầu Kiệu, Thành phố Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-1 text-[#2563eb]" />
                <div>
                  <p>DTG TP.HCM: (028) 3865 9999</p>
                  <p>DTG Hà Nội: 0916 868 989</p>
                  <p>DTG Hải Phòng: 0912 193 833</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#2563eb]" />
                <span>Fax: (028) 3868 3639</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#2563eb]" />
                <span>info@dtgcorp.com.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              {["about", "solutions", "process", "partners", "news", "contact"].map(
                (key) => (
                  <li key={key}>
                    <Link
                      href={`/${key}`}
                      className="text-[15px] font-medium text-white/68 transition-colors hover:text-white"
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
            <h4 className="mb-5 text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
              {t("services")}
            </h4>
            <ul className="space-y-3 text-[15px] font-medium text-white/68">
              {(["network", "server", "security", "cloud", "conference", "ai"] as const).map((key) => (
                <li key={key}>{t(`servicesList.${key}`)}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
              {t("newsletter")}
            </h4>
            <p className="text-[15px] font-medium leading-[1.55] text-white/68">
              {t("description")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/12">
        <div className="mx-auto flex w-full max-w-[1720px] flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8 lg:px-[10rem]">
          <p className="text-[13px] font-medium text-white/48">{t("copyright")}</p>
          <div className="flex gap-6 text-[13px] font-medium text-white/48">
            <span className="cursor-pointer transition-colors hover:text-white">
              {t("privacy")}
            </span>
            <span className="cursor-pointer transition-colors hover:text-white">
              {t("terms")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
