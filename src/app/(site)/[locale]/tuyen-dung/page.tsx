import Image from "next/image";
import Link from "next/link";
import { getTuyenDungData } from "@/sanity/queries";
import { CareersSearch } from "@/components/sections/CareersSearch";
import { Briefcase, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getTuyenDungData(locale);

  return (
    <main className="pt-[80px]">
      {/* Hero + Search */}
      <section className="relative min-h-[480px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/bg/2.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-10 pt-24 text-center sm:px-8 md:pt-32">
          <h1 className="text-3xl font-bold italic text-[#1a1a1a] sm:text-4xl md:text-5xl">
            {data.heroTitle}
          </h1>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
          <CareersSearch
            searchPlaceholder={data.searchPlaceholder}
            industryLabel={data.industryLabel}
            locationLabel={data.locationLabel}
            searchButtonLabel={data.searchButtonLabel}
            industries={data.industries}
            locations={data.locations}
          />
        </div>
      </section>

      {/* Quote */}
      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-start justify-center gap-4">
            <span className="text-5xl leading-none text-primary font-serif">
              &ldquo;
            </span>
            <p className="text-[15px] leading-relaxed text-gray-600 italic">
              {data.quote}
            </p>
            <span className="text-5xl leading-none text-primary font-serif">
              &rdquo;
            </span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <a
              href={`tel:${data.contactPhone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {data.contactPhone} ({data.contactName})
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={`mailto:${data.contactEmail}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {data.contactEmail}
            </a>
          </div>
        </div>
      </section>
      {/* Job Listings */}
      {data.jobs.length > 0 && (
        <section className="bg-[#f5f7fa] px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-2xl font-bold italic text-[#1a1a1a] sm:text-3xl">
              {locale === "vi" ? "Các vị trí tuyển dụng" : "Job Openings"}
            </h2>

            <div className="space-y-4">
              {data.jobs.map((job, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-lg bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase size={20} className="shrink-0 text-gray-400" />
                    <span className="text-[15px] font-semibold text-[#1a1a1a]">
                      {job.title}
                    </span>
                    {job.isNew && (
                      <span className="rounded bg-emerald-500 px-2 py-0.5 text-[11px] font-semibold text-white">
                        {locale === "vi" ? "Mới" : "New"}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-[13px] text-gray-500 sm:gap-6">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {locale === "vi" ? "Ngày hết hạn:" : "Deadline:"} {job.deadline}
                    </span>
                    <span>
                      {locale === "vi" ? "Số lượng:" : "Qty:"} {job.quantity || 1}
                    </span>
                    <Link
                      href={`/${locale}/tuyen-dung/${job.slug}`}
                      className="rounded border border-[#4db6ac] px-4 py-1.5 text-[13px] font-semibold text-[#4db6ac] transition-colors hover:bg-[#4db6ac] hover:text-white"
                    >
                      {locale === "vi" ? "Xem chi tiết" : "View details"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Privacy consent */}
      <section className="bg-[#f5f7fa] px-5 pb-16 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-3 rounded-lg bg-[#4db6ac] px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#3da396]">
            <CheckCircle size={20} />
            {locale === "vi"
              ? "Đồng ý về Xử lý dữ liệu cá nhân"
              : "Agree to Personal Data Processing"}
          </button>
          <button className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-8 py-4 text-[14px] font-semibold text-gray-600 transition-colors hover:border-gray-400">
            <XCircle size={20} />
            {locale === "vi"
              ? "Yêu cầu thay đổi sự đồng ý xử lý dữ liệu cá nhân"
              : "Request to change data processing consent"}
          </button>
        </div>
      </section>
    </main>
  );
}
