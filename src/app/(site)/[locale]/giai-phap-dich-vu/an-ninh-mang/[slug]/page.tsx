import { notFound } from "next/navigation";
import Link from "next/link";
import { solutionCategories } from "@/data/solutions";
import { getSolutionArticleDetail } from "@/sanity/queries";
import { SolutionDetailPage } from "@/components/sections/SolutionDetailPage";

export default async function CyberServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = locale as "vi" | "en";
  const category = solutionCategories.find((c) => c.slug === "an-ninh-mang")!;
  const solution = category.children.find((c) => c.href === slug);

  if (!solution) return notFound();

  const article = await getSolutionArticleDetail(locale, slug);

  const categoryPath =
    locale === "vi"
      ? `/${locale}/giai-phap-dich-vu/an-ninh-mang`
      : `/${locale}/solutions/an-ninh-mang`;

  return (
    <SolutionDetailPage
      locale={locale}
      title={solution.title[lang]}
      description={solution.description[lang]}
      fallbackBody={article?.fallbackBody || []}
      body={article?.body || []}
      breadcrumbs={[
        { label: locale === "vi" ? "TRANG CHỦ" : "HOME", href: `/${locale}` },
        { label: locale === "vi" ? "DỊCH VỤ AN NINH MẠNG" : "CYBER SECURITY SERVICES", href: categoryPath },
        { label: solution.title[lang].toUpperCase(), href: "" },
      ]}
      backHref={categoryPath}
      backLabel={locale === "vi" ? "Quay lại Dịch vụ An ninh mạng" : "Back to Cyber Security Services"}
    />
  );
}
