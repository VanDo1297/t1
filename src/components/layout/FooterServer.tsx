import { getFooterData } from "@/sanity/queries";
import { Footer } from "./Footer";
import { CtaBanner } from "./CtaBanner";

export async function FooterServer({ locale = "vi" }: { locale?: string }) {
  const data = await getFooterData(locale);
  return (
    <>
      <CtaBanner
        title={data.ctaTitle}
        buttonLabel={data.ctaButtonLabel}
        locale={locale}
      />
      <Footer data={data} locale={locale} />
    </>
  );
}
