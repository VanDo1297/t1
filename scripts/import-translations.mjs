import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { randomUUID } from "crypto";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

// Label map for marketing-friendly descriptions
const labelMap = {
  "nav.home": "Menu: Trang chủ",
  "nav.about": "Menu: Về chúng tôi",
  "nav.solutions": "Menu: Giải pháp",
  "nav.process": "Menu: Quy trình",
  "nav.partners": "Menu: Đối tác",
  "nav.news": "Menu: Tin tức",
  "nav.contact": "Menu: Liên hệ",
  "hero.title": "Tiêu đề chính Hero",
  "hero.titleHighlight": "Dòng highlight Hero",
  "hero.subtitle": "Mô tả phụ Hero",
  "hero.ctaProfile": "Nút: Xem hồ sơ",
  "hero.ctaContact": "Nút: Liên hệ",
};

function flatten(obj, prefix = "") {
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      result.push(...flatten(value, fullKey));
    } else {
      const strValue =
        Array.isArray(value) ? JSON.stringify(value) : String(value);
      result.push({
        _key: randomUUID().replace(/-/g, "").slice(0, 12),
        _type: "object",
        key: fullKey.includes(".") ? fullKey.split(".").slice(1).join(".") : fullKey,
        label: labelMap[fullKey] || fullKey,
        value: strValue,
      });
    }
  }
  return result;
}

async function importTranslations() {
  const viData = JSON.parse(readFileSync("src/messages/vi.json", "utf-8"));
  const enData = JSON.parse(readFileSync("src/messages/en.json", "utf-8"));

  const namespaces = Object.keys(viData);
  let transaction = client.transaction();
  let count = 0;

  for (const ns of namespaces) {
    // Vietnamese
    if (viData[ns]) {
      const entries = flatten(viData[ns], ns).map((e) => ({
        ...e,
        key: e.key, // remove namespace prefix since it's in the document
      }));

      transaction = transaction.createOrReplace({
        _id: `translation-${ns}-vi`,
        _type: "translationGroup",
        namespace: ns,
        language: "vi",
        entries,
      });
      count++;
    }

    // English
    if (enData[ns]) {
      const entries = flatten(enData[ns], ns).map((e) => ({
        ...e,
        key: e.key,
      }));

      transaction = transaction.createOrReplace({
        _id: `translation-${ns}-en`,
        _type: "translationGroup",
        namespace: ns,
        language: "en",
        entries,
      });
      count++;
    }
  }

  console.log(`Importing ${count} translation documents...`);
  const result = await transaction.commit();
  console.log(`Done! Imported ${result.results.length} documents.`);
}

importTranslations().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
