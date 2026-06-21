"use client";

import { useState } from "react";

interface Solution {
  key: string;
  label: string;
}

interface ContactFormProps {
  formTitle: string;
  formNameLabel: string;
  formCompanyLabel: string;
  formPhoneEmailLabel: string;
  formSolutionLabel: string;
  formMessageLabel: string;
  formSubmitLabel: string;
  formSuccessMessage: string;
  solutions: Solution[];
}

export function ContactForm({
  formTitle,
  formNameLabel,
  formCompanyLabel,
  formPhoneEmailLabel,
  formSolutionLabel,
  formMessageLabel,
  formSubmitLabel,
  formSuccessMessage,
  solutions,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneEmail, setPhoneEmail] = useState("");
  const [solution, setSolution] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, phoneEmail, solution, message }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setName("");
      setCompany("");
      setPhoneEmail("");
      setSolution("");
      setMessage("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
        <div
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(34,197,94,0.2)" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-white">{formSuccessMessage}</p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-lg px-6 py-2 text-sm font-medium text-white"
          style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
        >
          {formSubmitLabel}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-blue-500";

  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold text-white">{formTitle}</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">{formNameLabel}</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={formNameLabel}
            className={inputClass}
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">{formCompanyLabel}</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={formCompanyLabel}
            className={inputClass}
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">{formPhoneEmailLabel}</label>
          <input
            type="text"
            required
            value={phoneEmail}
            onChange={(e) => setPhoneEmail(e.target.value)}
            placeholder={formPhoneEmailLabel}
            className={inputClass}
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">{formSolutionLabel}</label>
          <select
            required
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            className={inputClass}
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <option value="" disabled>
              -- {formSolutionLabel} --
            </option>
            {solutions.map((s) => (
              <option key={s.key} value={s.key} style={{ backgroundColor: "#1e1e2e", color: "#fff" }}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">{formMessageLabel}</label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={formMessageLabel}
            className={inputClass}
            style={{ backgroundColor: "rgba(255,255,255,0.05)", resize: "vertical" }}
          />
        </div>

        {error && <p style={{ color: "#ef4444" }} className="text-sm">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
        >
          {submitting ? "..." : formSubmitLabel}
        </button>
      </form>
    </div>
  );
}
