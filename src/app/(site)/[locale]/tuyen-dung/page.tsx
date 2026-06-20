export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="pt-[80px]">
      <section className="min-h-screen bg-primary-dark px-5 py-20 sm:px-8">
        <h1 className="text-4xl font-bold text-white">
          {locale === "vi" ? "Tuyển dụng" : "Careers"}
        </h1>
        <p className="mt-4 text-lg text-white/60">
          {locale === "vi"
            ? "Cơ hội nghề nghiệp tại DTG."
            : "Career opportunities at DTG."}
        </p>
      </section>
    </main>
  );
}
