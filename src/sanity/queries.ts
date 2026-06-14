import { client } from "./client";

type TranslationEntry = {
  key: string;
  value: string;
};

type TranslationGroup = {
  namespace: string;
  entries: TranslationEntry[];
};

function unflatten(entries: TranslationEntry[]): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const { key, value } of entries) {
    const keys = key.split(".");
    let current = result as Record<string, any>;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current)) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    // Try to parse JSON arrays
    const lastKey = keys[keys.length - 1];
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        current[lastKey] = parsed;
        continue;
      }
    } catch {
      // not JSON, use as string
    }
    current[lastKey] = value;
  }

  return result;
}

export async function getTranslations(
  locale: string
): Promise<Record<string, unknown>> {
  const groups = await client.fetch<TranslationGroup[]>(
    `*[_type == "translationGroup" && language == $locale]{
      namespace,
      "entries": entries[]{key, value}
    }`,
    { locale },
    { next: { revalidate: 60 } }
  );

  const messages: Record<string, unknown> = {};

  for (const group of groups) {
    messages[group.namespace] = unflatten(group.entries);
  }

  return messages;
}
