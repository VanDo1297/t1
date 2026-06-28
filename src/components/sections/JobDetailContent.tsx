"use client";

import { MapPin, Briefcase, Mail, Phone, Wallet, CalendarClock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { JobListing, ThongBaoDuLieuData } from "@/sanity/queries";
import { JobApplicationDialog } from "@/components/sections/JobApplicationDialog";

export function JobDetailContent({
  job,
  locale,
  contactEmail,
  contactPhone,
  applyFormData,
}: {
  job: JobListing;
  locale: string;
  contactEmail: string;
  contactPhone: string;
  applyFormData: ThongBaoDuLieuData;
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
          <JobApplicationDialog
            job={job}
            locale={locale}
            data={applyFormData}
            triggerLabel={isVi ? "Nộp đơn" : "Apply Now"}
            triggerClassName="inline-flex items-center justify-center rounded-lg bg-[#f97316] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-5">
        <div className="grid gap-10 lg:grid-cols-[1fr_570px]">
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
          <div className="self-start rounded-2xl border border-[#cfe8e2] bg-[#f6fbfa] px-6">
            <SidebarRow
              icon={Briefcase}
              label={isVi ? "Hình thức làm việc" : "Work Type"}
              first
            >
              {job.type}
            </SidebarRow>
            {job.salary && (
              <SidebarRow icon={Wallet} label={isVi ? "Mức lương" : "Salary"}>
                {job.salary}
              </SidebarRow>
            )}
            {job.deadline && (
              <SidebarRow
                icon={CalendarClock}
                label={isVi ? "Hạn nộp hồ sơ" : "Deadline"}
              >
                {job.deadline}
              </SidebarRow>
            )}
            {(email || phone) && (
              <SidebarRow icon={Mail} label={isVi ? "Liên hệ" : "Contact"}>
                <div className="space-y-1.5">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 text-[15px] text-primary hover:underline"
                    >
                      <Mail size={14} className="shrink-0" />
                      {email}
                    </a>
                  )}
                  {phone && (
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="flex items-center gap-2 text-[15px] text-primary hover:underline"
                    >
                      <Phone size={14} className="shrink-0" />
                      {phone}
                    </a>
                  )}
                </div>
              </SidebarRow>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarRow({
  icon: Icon,
  label,
  children,
  first = false,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 py-5 ${
        first ? "" : "border-t border-[#dbeee9]"
      }`}
    >
      <Icon size={20} className="mt-0.5 shrink-0 text-[#1a6b5a]" />
      <div className="min-w-0">
        <p className="text-[16px] font-semibold text-[#1a6b5a]">{label}</p>
        <div className="mt-1 text-[15px] font-medium text-[#1a1a1a]">{children}</div>
      </div>
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
