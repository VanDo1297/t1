import { solutionCategories } from "@/data/solutions";
import { SolutionCategoryPage } from "@/components/sections/SolutionCategoryPage";

export default async function AISolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const category = solutionCategories.find((c) => c.slug === "ai")!;

  return <SolutionCategoryPage category={category} locale={locale} />;
}
