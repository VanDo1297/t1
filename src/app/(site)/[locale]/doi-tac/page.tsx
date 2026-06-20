import Image from "next/image";
import Link from "next/link";
import { getPartnersPageData, urlFor } from "@/sanity/queries";
import { ClientsFilter } from "@/components/sections/ClientsFilter";

const BG_IMAGES = [
  "/assets/bg/1.jpg",
  "/assets/bg/2.jpg",
  "/assets/bg/3.jpg",
  "/assets/bg/4.jpg",
  "/assets/bg/5.jpg",
];
const HERO_FALLBACK_IMAGE = BG_IMAGES[0];
const LOGO_FALLBACK = "/assets/dtg-logo.png";

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPartnersPageData(locale);

  const heroBgUrl = data.heroBackgroundImage
    ? urlFor(data.heroBackgroundImage).width(1920).quality(80).url()
    : HERO_FALLBACK_IMAGE;

  return (
    <main className="pt-[80px]">
      {/* ── Hero Section ── */}
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBgUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2a3a4a]/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {data.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {data.heroDescription}
          </p>
          <Link
            href={data.ctaButtonHref}
            className="mt-8 inline-block rounded-full bg-[#4db6ac] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3da396]"
          >
            {data.ctaButtonLabel}
          </Link>
        </div>
      </section>

      {/* ── Đối tác chiến lược ── */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <Image
          src={BG_IMAGES[1]}
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.strategicPartnersTitle}
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {data.strategicPartners.map((partner) => {
              const logoUrl = partner.logo
                ? urlFor(partner.logo).width(200).height(100).fit("max").url()
                : LOGO_FALLBACK;

              return (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Image
                    src={logoUrl}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mạng lưới đối tác công nghệ ── */}
      <section className="relative overflow-hidden bg-white px-5 pb-20 sm:px-8">
        <Image
          src={BG_IMAGES[2]}
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="relative z-10 mx-auto max-w-6xl border-t border-gray-100 pt-16">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.networkPartnersTitle}
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {data.networkPartners.map((partner) => {
              const logoUrl = partner.logo
                ? urlFor(partner.logo).width(200).height(100).fit("max").url()
                : LOGO_FALLBACK;

              return (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-lg p-6 transition-shadow hover:shadow-md"
                >
                  <Image
                    src={logoUrl}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Khách hàng đa lĩnh vực ── */}
      <section className="relative overflow-hidden bg-[#f9f9f7] px-5 py-20 sm:px-8">
        <Image
          src={BG_IMAGES[3]}
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.clientsTitle}
          </h2>

          <ClientsFilter
            categories={data.clientCategories}
            clients={data.clients}
            allLabel={data.clientCategories[0] || ""}
          />
        </div>
      </section>
    </main>
  );
}
