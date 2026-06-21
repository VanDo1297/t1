import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { HeaderServer } from "@/components/layout/HeaderServer";
import { FooterServer } from "@/components/layout/FooterServer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ChatButton } from "@/components/ui/ChatButton";

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
      <FooterServer locale={locale} />
      <ScrollToTop />
      <ChatButton locale={locale} />
    </>
  );
}
