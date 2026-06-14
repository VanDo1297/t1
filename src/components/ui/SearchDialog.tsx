"use client";

import { useEffect, useRef, useMemo } from "react";
import { useMessages, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/hooks/useSearch";
import { buildSearchIndex } from "@/lib/search-index";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const messages = useMessages();
  const locale = useLocale();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo(
    () => buildSearchIndex(messages as Record<string, unknown>, locale),
    [messages, locale]
  );

  const { query, setQuery, results, reset } = useSearch(items);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      reset();
    }
  }, [open, reset]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 top-[12vh] z-[101] w-[90vw] max-w-[640px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/12 bg-[#1a1a1a] shadow-2xl"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search size={20} className="shrink-0 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent text-[17px] text-white placeholder-white/35 outline-none"
              />
              {query && (
                <button
                  onClick={reset}
                  className="shrink-0 text-white/40 transition hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
              <kbd className="hidden shrink-0 rounded border border-white/15 px-2 py-0.5 text-[11px] font-medium text-white/35 sm:inline-block">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <div className="px-5 py-10 text-center text-[15px] text-white/40">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              )}

              {results.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-white/[0.06]"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.section}
                    </p>
                    <p className="mt-1 truncate text-[15px] font-medium text-white">
                      {item.title}
                    </p>
                    {item.content && (
                      <p className="mt-0.5 truncate text-[13px] text-white/45">
                        {item.content}
                      </p>
                    )}
                  </div>
                  <ArrowRight size={16} className="shrink-0 text-white/25" />
                </button>
              ))}
            </div>

            {/* Footer hint */}
            {!query.trim() && (
              <div className="border-t border-white/10 px-5 py-3 text-[12px] text-white/30">
                Type to search across all pages and sections
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
