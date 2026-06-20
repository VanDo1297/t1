export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="pt-[80px]">
      <section className="min-h-screen bg-primary-dark px-5 py-20 sm:px-8">
        <h1 className="text-4xl font-bold text-white">
          {locale === "vi" ? "Liên hệ" : "Contact"}
        </h1>
        <p className="mt-4 text-lg text-white/60">
          {locale === "vi"
            ? "Liên hệ với DTG."
            : "Get in touch with DTG."}
        </p>
      </section>
    </main>
  );
}
