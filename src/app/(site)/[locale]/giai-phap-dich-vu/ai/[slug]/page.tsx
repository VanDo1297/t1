import { notFound } from "next/navigation";
import { solutionCategories } from "@/data/solutions";
import { getSolutionArticleDetail } from "@/sanity/queries";
import { SolutionDetailPage } from "@/components/sections/SolutionDetailPage";

export default async function AISolutionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = locale as "vi" | "en";
  const category = solutionCategories.find((c) => c.slug === "ai")!;
  const solution = category.children.find((c) => c.href === slug);

  if (!solution) return notFound();

  const article = await getSolutionArticleDetail(locale, slug);

  const categoryPath =
    locale === "vi"
      ? `/${locale}/giai-phap-dich-vu/ai`
      : `/${locale}/solutions/ai`;

  return (
    <SolutionDetailPage
      locale={locale}
      title={solution.title[lang]}
      description={solution.description[lang]}
      fallbackBody={article?.fallbackBody || []}
      body={article?.body || []}
      breadcrumbs={[
        { label: locale === "vi" ? "TRANG CHỦ" : "HOME", href: `/${locale}` },
        { label: locale === "vi" ? "GIẢI PHÁP AI" : "AI SOLUTIONS", href: categoryPath },
        { label: solution.title[lang].toUpperCase(), href: "" },
      ]}
      backHref={categoryPath}
      backLabel={locale === "vi" ? "Quay lại Giải pháp AI" : "Back to AI Solutions"}
    />
  );
}
