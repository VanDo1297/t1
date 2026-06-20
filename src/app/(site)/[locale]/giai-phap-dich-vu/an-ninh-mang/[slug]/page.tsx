import { solutionCategories } from "@/data/solutions";
import { SolutionCategoryPage } from "@/components/sections/SolutionCategoryPage";

export default async function CyberSubSolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = solutionCategories.find((c) => c.slug === "an-ninh-mang")!;

  return (
    <SolutionCategoryPage
      category={category}
      locale={locale}
      activeSlug={slug}
    />
  );
}
