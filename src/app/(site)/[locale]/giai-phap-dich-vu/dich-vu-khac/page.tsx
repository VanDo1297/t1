import { solutionCategories } from "@/data/solutions";
import { getSolutionCategoryPageData } from "@/sanity/queries";
import { SolutionCategoryPage } from "@/components/sections/SolutionCategoryPage";

export default async function OtherServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const category = solutionCategories.find((c) => c.slug === "dich-vu-khac")!;
  const cmsData = await getSolutionCategoryPageData(locale, "dich-vu-khac");

  return <SolutionCategoryPage category={category} locale={locale} cmsData={cmsData} />;
}
