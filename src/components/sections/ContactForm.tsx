"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const t = useTranslations("contact.form");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => onSuccess?.(), 2000);
      }
    } catch {
      // handle error silently
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle size={48} className="text-green-400 mb-4" />
        <p className="text-lg font-medium text-white">{t("success")}</p>
      </div>
    );
  }

  const solutionOptions = t.raw("solutionOptions") as Record<string, string>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label={t("name")}
        placeholder={t("name")}
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        label={t("company")}
        placeholder={t("company")}
        error={errors.company?.message}
        {...register("company")}
      />
      <Input
        label={t("phoneEmail")}
        placeholder={t("phoneEmail")}
        error={errors.phoneEmail?.message}
        {...register("phoneEmail")}
      />
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-300">
          {t("solution")}
        </label>
        <select
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("solution")}
        >
          <option value="">-- {t("solution")} --</option>
          {Object.entries(solutionOptions).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        {errors.solution && (
          <p className="text-sm text-red-400">{errors.solution.message}</p>
        )}
      </div>
      <Textarea
        label={t("message")}
        placeholder={t("message")}
        {...register("message")}
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin mr-2" />
        ) : null}
        {t("submit")}
      </Button>
    </form>
  );
}
