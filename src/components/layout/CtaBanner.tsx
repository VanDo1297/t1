import Image from "next/image";
import Link from "next/link";

export function CtaBanner({
  title,
  buttonLabel,
  locale,
}: {
  title: string;
  buttonLabel: string;
  locale: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8">
      <div className="absolute inset-0 bg-white">
        <Image
          src="/assets/bg/red-wave-3.jpg"
          alt=""
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <div className="rounded-2xl px-8 py-12 sm:px-16 sm:py-16" style={{ backgroundColor: "rgba(255,255,255,0.3)", backdropFilter: "blur(4px)" }}>
          <h2 className="text-2xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl" style={{ color: "#1a2d3d" }}>
            {title}
          </h2>
          <Link
            href={`/${locale}/lien-he`}
            className="mt-8 inline-block rounded-xl px-10 py-4 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to right, #2563eb, #7c3aed)" }}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
