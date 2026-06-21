import { getTinTucPageData, getTinTucList } from "@/sanity/queries";
import { TinTucPage } from "@/components/sections/TinTucPage";

export default async function NewsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ "danh-muc"?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const categoryParam = sp["danh-muc"] || "tin-du-an";

  const pageData = getTinTucPageData(locale);

  const [tinDuAn, tinNoiBo, tinCongNghe] = await Promise.all([
    getTinTucList(locale, "tin-du-an"),
    getTinTucList(locale, "tin-noi-bo"),
    getTinTucList(locale, "tin-cong-nghe"),
  ]);

  const articlesByCategory: Record<string, typeof tinDuAn> = {
    "tin-du-an": tinDuAn,
    "tin-noi-bo": tinNoiBo,
    "tin-cong-nghe": tinCongNghe,
  };

  return (
    <TinTucPage
      locale={locale}
      pageData={pageData}
      articlesByCategory={articlesByCategory}
      initialCategory={categoryParam}
    />
  );
}
