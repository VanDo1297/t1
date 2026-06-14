import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { getTranslations } from "@/sanity/queries";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "vi" | "en")) {
    locale = routing.defaultLocale;
  }

  let messages: Record<string, unknown>;
  try {
    messages = await getTranslations(locale);
  } catch {
    // Fallback to local JSON if Sanity is unavailable
    messages = (await import(`../messages/${locale}.json`)).default;
  }

  return {
    locale,
    messages,
  };
});
