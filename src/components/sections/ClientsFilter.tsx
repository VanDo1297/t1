"use client";

import { useState } from "react";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/queries";
import { LogoCarousel, type CarouselItem } from "@/components/sections/DoiTacSection";

const LOGO_FALLBACK = "/assets/dtg-logo.png";

interface ClientItem {
  name: string;
  logo: SanityImageSource | null;
  category?: string;
  url?: string;
}

interface ClientsFilterProps {
  categories: string[];
  clients: ClientItem[];
  allLabel: string;
}

export function ClientsFilter({ categories, clients, allLabel }: ClientsFilterProps) {
  const [active, setActive] = useState(allLabel || categories[0] || "");

  const filtered =
    active === allLabel || active === categories[0]
      ? clients
      : clients.filter((c) => c.category === active);
  const carouselItems: CarouselItem[] = filtered.map((client) => ({
    name: client.name,
    logoUrl: client.logo
      ? urlFor(client.logo).url()
      : LOGO_FALLBACK,
    url: client.url,
  }));

  return (
    <>
      {/* Tabs */}
      <div className="scrollbar-none mt-8 overflow-x-auto pb-2">
        <div className="mx-auto flex w-max min-w-max items-center gap-8 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative shrink-0 pb-2 text-base font-medium transition-colors ${
                active === cat
                  ? "text-[#1a1a1a]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat}
              {active === cat && (
                <span className="absolute bottom-0 left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      <LogoCarousel items={carouselItems} showName />
    </>
  );
}
