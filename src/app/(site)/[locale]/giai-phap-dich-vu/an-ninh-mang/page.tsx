import { solutionCategories } from "@/data/solutions";
import { getSolutionCategoryPageData, getGiaiPhapData } from "@/sanity/queries";
import { SolutionCategoryPage } from "@/components/sections/SolutionCategoryPage";

export default async function CyberSecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const category = solutionCategories.find((c) => c.slug === "an-ninh-mang")!;
  const [cmsData, giaiPhapData] = await Promise.all([
    getSolutionCategoryPageData(locale, "an-ninh-mang"),
    getGiaiPhapData(locale),
  ]);

  const tab = giaiPhapData.tabs[1];
  const cardImages = tab?.awards?.map((a) => a.imageUrl || null) || [];

  return <SolutionCategoryPage category={category} locale={locale} cmsData={{ ...cmsData, cardImages }} />;
}
