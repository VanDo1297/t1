import { solutionCategories } from "@/data/solutions";
import { getSolutionCategoryPageData, getGiaiPhapData } from "@/sanity/queries";
import { SolutionCategoryPage } from "@/components/sections/SolutionCategoryPage";

export default async function TechnologySolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const category = solutionCategories.find((c) => c.slug === "cong-nghe")!;
  const [cmsData, giaiPhapData] = await Promise.all([
    getSolutionCategoryPageData(locale, "cong-nghe"),
    getGiaiPhapData(locale),
  ]);

  const tab = giaiPhapData.tabs[0];
  const cardImages = tab?.awards?.map((a) => a.imageUrl || null) || [];

  return <SolutionCategoryPage category={category} locale={locale} cmsData={{ ...cmsData, cardImages }} />;
}
