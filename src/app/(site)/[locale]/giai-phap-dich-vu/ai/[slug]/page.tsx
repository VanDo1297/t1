import { solutionCategories } from "@/data/solutions";
import { SolutionCategoryPage } from "@/components/sections/SolutionCategoryPage";

export default async function AISubSolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = solutionCategories.find((c) => c.slug === "ai")!;

  return (
    <SolutionCategoryPage
      category={category}
      locale={locale}
      activeSlug={slug}
    />
  );
}
