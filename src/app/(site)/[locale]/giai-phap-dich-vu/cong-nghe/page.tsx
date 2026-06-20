import { solutionCategories } from "@/data/solutions";
import { SolutionCategoryPage } from "@/components/sections/SolutionCategoryPage";

export default async function TechnologySolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const category = solutionCategories.find((c) => c.slug === "cong-nghe")!;

  return <SolutionCategoryPage category={category} locale={locale} />;
}
