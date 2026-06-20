import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { HeaderServer } from "@/components/layout/HeaderServer";

const validLocales = ["vi", "en"];

export function generateStaticParams() {
  return validLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!validLocales.includes(locale)) notFound();

  return (
    <>
      <HeaderServer locale={locale} />
      {children}
    </>
  );
}
