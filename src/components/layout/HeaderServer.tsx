import { getHeaderData } from "@/sanity/queries";
import { Header } from "./Header";

export async function HeaderServer({ locale = "vi" }: { locale?: string }) {
  const data = await getHeaderData(locale);
  return <Header data={data} locale={locale} />;
}
