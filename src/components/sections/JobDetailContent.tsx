"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, Mail, Phone } from "lucide-react";
import type { JobListing } from "@/sanity/queries";

export function JobDetailContent({
  job,
  locale,
  contactEmail,
  contactPhone,
}: {
  job: JobListing;
  locale: string;
  contactEmail: string;
  contactPhone: string;
}) {
  const isVi = locale === "vi";
  const email = job.contactEmail || contactEmail;
  const phone = job.contactPhone || contactPhone;

  return (
    <>
      {/* Job Header */}
      <div className="border-b border-gray-100 bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-[22px] font-bold text-[#1a1a1a] sm:text-2xl">
                {job.title}
              </h2>
              {job.isNew && (
                <span className="rounded bg-emerald-500 px-2 py-0.5 text-[15px] font-semibold text-white">
                  {isVi ? "Mới" : "New"}
                </span>
              )}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-[17px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <Briefcase size={14} />
                {job.department}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {job.location}
              </span>
            </div>
          </div>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(job.title)}`}
            className="inline-flex items-center justify-center rounded-lg bg-[#f97316] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]"
          >
            {isVi ? "Nộp đơn" : "Apply Now"}
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-5">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* Left */}
          <div className="space-y-10">
            {job.jobDescription && (
              <JobSection
                title={isVi ? "Mô tả công việc" : "Job Description"}
                content={job.jobDescription}
              />
            )}
            {job.requirements && (
              <JobSection
                title={isVi ? "Yêu cầu công việc" : "Requirements"}
                content={job.requirements}
              />
            )}
            {job.preferred && (
              <JobSection
                title={isVi ? "Tiêu chí ưu tiên" : "Preferred Qualifications"}
                content={job.preferred}
              />
            )}
            {job.benefits && (
              <JobSection
                title={isVi ? "Quyền lợi" : "Benefits"}
                content={job.benefits}
              />
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <SidebarCard
              label={isVi ? "Hình thức làm việc" : "Work Type"}
              value={job.type}
            />
            {job.salary && (
              <SidebarCard
                label={isVi ? "Mức lương" : "Salary"}
                value={job.salary}
              />
            )}
            {job.deadline && (
              <SidebarCard
                label={isVi ? "Hạn nộp hồ sơ" : "Deadline"}
                value={job.deadline}
              />
            )}

            <div className="rounded-xl border border-gray-100 bg-[#f9fafb] p-6">
              <h3 className="mb-4 text-[17px] font-semibold uppercase tracking-wider text-gray-400">
                {isVi ? "Liên hệ" : "Contact"}
              </h3>
              <div className="space-y-3">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-[17px] text-primary hover:underline"
                  >
                    <Mail size={14} />
                    {email}
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-2 text-[17px] text-primary hover:underline"
                  >
                    <Phone size={14} />
                    {phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#f9fafb] p-6">
      <h3 className="mb-3 text-[17px] font-semibold uppercase tracking-wider text-gray-400">
        {label}
      </h3>
      <p className="text-[19px] font-semibold text-[#1a1a1a]">{value}</p>
    </div>
  );
}

function JobSection({ title, content }: { title: string; content: string }) {
  const lines = content.split("\n").filter(Boolean);

  return (
    <div>
      <h3 className="mb-4 text-[19px] font-bold text-[#1a1a1a]">{title}</h3>
      <ul className="space-y-2">
        {lines.map((line, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[17px] leading-relaxed text-gray-600"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
