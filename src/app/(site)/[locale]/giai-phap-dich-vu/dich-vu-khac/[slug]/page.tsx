import { notFound } from "next/navigation";
import { solutionCategories } from "@/data/solutions";
import { getSolutionArticles } from "@/sanity/queries";
import { SolutionArticlesPage } from "@/components/sections/SolutionArticlesPage";

export default async function OtherServiceArticlesPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = solutionCategories.find((c) => c.slug === "dich-vu-khac")!;
  const solution = category.children.find((c) => c.href === slug);

  if (!solution) return notFound();

  const lang = locale as "vi" | "en";
  const articles = await getSolutionArticles(locale, slug);

  const basePath =
    locale === "vi"
      ? `/${locale}/giai-phap-dich-vu/dich-vu-khac/${slug}`
      : `/${locale}/solutions/dich-vu-khac/${slug}`;

  const categoryPath =
    locale === "vi"
      ? `/${locale}/giai-phap-dich-vu/dich-vu-khac`
      : `/${locale}/solutions/dich-vu-khac`;

  return (
    <SolutionArticlesPage
      locale={locale}
      solutionTitle={solution.title[lang]}
      solutionDescription={solution.description[lang]}
      articles={articles}
      basePath={basePath}
      categoryPath={categoryPath}
    />
  );
}
