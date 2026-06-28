"use client";

import { useEffect, useRef, useState } from "react";
import { X, Paperclip, Check } from "lucide-react";
import { PortableText } from "@portabletext/react";
import type { JobListing, ThongBaoDuLieuData } from "@/sanity/queries";

export function JobApplicationDialog({
  job,
  locale,
  data,
  triggerLabel,
  triggerClassName,
}: {
  job: JobListing;
  locale: string;
  data: ThongBaoDuLieuData;
  triggerLabel: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [optionalConsent, setOptionalConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // Khoá scroll nền + đóng bằng phím Esc khi mở
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function resetForm() {
    setName("");
    setDob("");
    setPhone("");
    setEmail("");
    setCv(null);
    setConsent(false);
    setOptionalConsent(false);
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  }

  function close() {
    setOpen(false);
    setSuccess(false);
    resetForm();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent || !cv) return;
    setSubmitting(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("dob", dob);
      fd.append("phone", phone);
      fd.append("email", email);
      fd.append("position", job.title);
      fd.append("jobSlug", job.slug);
      fd.append("consent", String(consent));
      fd.append("optionalConsent", String(optionalConsent));
      fd.append("cv", cv);

      const res = await fetch("/api/apply", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      resetForm();
    } catch {
      setError(
        locale === "vi"
          ? "Có lỗi xảy ra. Vui lòng thử lại."
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const hasRichBody = data.body && data.body.length > 0;
  const paragraphs = hasRichBody ? [] : data.fallbackBody || [];

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:items-center"
          onClick={close}
        >
          <div
            className="relative my-4 w-full max-w-3xl rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            {success ? (
              <div className="px-6 py-16 text-center sm:px-10">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <Check size={32} className="text-emerald-600" />
                </div>
                <p className="text-lg font-semibold text-[#1a1a1a]">{data.successMessage}</p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-8 rounded-full bg-[#1a6b5a] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#155749]"
                >
                  {locale === "vi" ? "Đóng" : "Close"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10">
                {/* Header */}
                <div className="flex flex-col gap-1 pr-8 sm:flex-row sm:items-start sm:justify-between">
                  <p className="text-[15px] text-[#1a1a1a]">
                    {data.positionPrefixLabel} : <strong>{job.title}</strong>
                  </p>
                  {job.deadline && (
                    <p className="shrink-0 text-[15px] text-gray-600">
                      {data.deadlinePrefixLabel} : <strong>{job.deadline}</strong>
                    </p>
                  )}
                </div>
                <p className="mt-1 text-[13px] italic text-gray-400">{data.instruction}</p>

                {/* Section title */}
                <h3 className="mb-5 mt-6 text-[18px] font-bold text-[#1a6b5a]">
                  {data.formSectionTitle}
                </h3>

                {/* Fields */}
                <div className="space-y-4">
                  <Field
                    label={data.nameLabel}
                    required
                    value={name}
                    onChange={setName}
                    placeholder={locale === "vi" ? "Nhập họ tên" : "Enter full name"}
                  />
                  <Field
                    label={data.dobLabel}
                    type="date"
                    value={dob}
                    onChange={setDob}
                    placeholder="dd/mm/yyyy"
                  />
                  <Field
                    label={data.phoneLabel}
                    required
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                    placeholder={locale === "vi" ? "Nhập số điện thoại" : "Enter phone number"}
                  />
                  <Field
                    label={data.emailLabel}
                    required
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder={locale === "vi" ? "Nhập email" : "Enter email"}
                  />

                  {/* CV upload */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="flex w-full items-center gap-1.5 text-[14px] font-medium text-gray-600 sm:w-40 sm:shrink-0">
                      {data.cvLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex-1">
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={(e) => setCv(e.target.files?.[0] || null)}
                        className="hidden"
                        id="cv-upload"
                      />
                      <label
                        htmlFor="cv-upload"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1a6b5a] px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#155749]"
                      >
                        <Paperclip size={16} />
                        {cv ? cv.name : data.attachButtonLabel}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Consent content box */}
                <h4 className="mb-3 mt-7 text-center text-[14px] font-bold uppercase text-[#1a1a1a]">
                  {data.consentBoxTitle}
                </h4>
                <div className="max-h-56 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-[13px] leading-relaxed text-gray-600">
                  {hasRichBody ? (
                    <div className="prose prose-sm max-w-none prose-p:text-[13px] prose-p:leading-relaxed prose-p:text-gray-600">
                      <PortableText value={data.body as never} />
                    </div>
                  ) : (
                    paragraphs.map((p, i) => (
                      <p key={i} className="mb-3 whitespace-pre-line last:mb-0">
                        {p}
                      </p>
                    ))
                  )}
                </div>

                {/* Checkboxes */}
                <div className="mt-5 space-y-3">
                  <label className="flex cursor-pointer items-start gap-2.5 text-[13px] leading-relaxed text-gray-600">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0"
                    />
                    <span>
                      <span className="text-red-500">* </span>
                      {data.consentLabel}
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-2.5 text-[13px] leading-relaxed text-gray-600">
                    <input
                      type="checkbox"
                      checked={optionalConsent}
                      onChange={(e) => setOptionalConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0"
                    />
                    <span>{data.optionalConsentLabel}</span>
                  </label>
                </div>

                {error && <p className="mt-4 text-[13px] text-red-500">{error}</p>}

                {/* Submit */}
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting || !consent || !cv}
                    className="rounded-full bg-[#1a6b5a] px-10 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#155749] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {submitting ? "..." : data.applyButtonLabel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <label className="flex w-full items-center gap-1.5 text-[14px] font-medium text-gray-600 sm:w-40 sm:shrink-0">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full flex-1 rounded-lg border border-gray-300 px-4 py-3 text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#1a6b5a]"
      />
    </div>
  );
}
