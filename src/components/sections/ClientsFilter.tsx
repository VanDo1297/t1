"use client";

import { useState } from "react";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/queries";

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

  return (
    <>
      {/* Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative pb-2 text-base font-medium transition-colors ${
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

      {/* Grid */}
      <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((client, idx) => {
          const logoUrl = client.logo
            ? urlFor(client.logo).width(200).height(100).fit("max").url()
            : LOGO_FALLBACK;

          const card = (
            <div className="group flex flex-col items-center gap-4 rounded-lg p-4 transition-transform hover:scale-105">
              <div className="flex h-20 w-full items-center justify-center">
                <Image
                  src={logoUrl}
                  alt={client.name}
                  width={140}
                  height={70}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <span className="text-center text-sm font-medium leading-tight text-[#1a6b5a]">
                {client.name}
              </span>
            </div>
          );

          if (client.url) {
            return (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card}
              </a>
            );
          }

          return <div key={idx}>{card}</div>;
        })}
      </div>
    </>
  );
}
