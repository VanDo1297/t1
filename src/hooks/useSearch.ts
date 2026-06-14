"use client";

import { useMemo, useState, useCallback } from "react";
import Fuse, { type IFuseOptions } from "fuse.js";
import { type SearchItem } from "@/lib/search-index";

const fuseOptions: IFuseOptions<SearchItem> = {
  keys: [
    { name: "title", weight: 2 },
    { name: "content", weight: 1 },
    { name: "section", weight: 0.5 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
};

export function useSearch(items: SearchItem[]) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => new Fuse(items, fuseOptions), [items]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query, { limit: 8 }).map((r) => r.item);
  }, [fuse, query]);

  const reset = useCallback(() => setQuery(""), []);

  return { query, setQuery, results, reset };
}
