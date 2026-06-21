import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

async function sync() {
  // 1. GiaiPhap — add sectionHeading
  const giaiPhapDocs = await client.fetch(`*[_type == "giaiPhap"]{ _id, language }`);
  for (const doc of giaiPhapDocs) {
    const heading = doc.language === "vi"
      ? "Giới thiệu các Nền tảng,\nđược hỗ trợ bởi Precision AI"
      : "Introducing the Platforms,\npowered by Precision AI";
    await client.patch(doc._id).set({ sectionHeading: heading }).commit();
    console.log(`✓ giaiPhap (${doc.language}) — sectionHeading`);
  }

  // 2. Partners — add sectionTitle
  const partnersDocs = await client.fetch(`*[_type == "trangDoiTac"]{ _id, ngonNgu }`);
  for (const doc of partnersDocs) {
    const title = doc.ngonNgu === "vi" ? "Đối tác đồng hành cùng chúng tôi" : "Our Partners";
    await client.patch(doc._id).set({ sectionTitle: title }).commit();
    console.log(`✓ partners (${doc.ngonNgu}) — sectionTitle`);
  }

  // Note: TinTucPageData is returned from getTinTucPageData() which is a local function (not fetched from Sanity)
  // The fallback data already has homeSectionTitle/homeSectionSubtitle — no CMS sync needed for this

  console.log("\nDone! All home page texts synced to CMS.");
}

sync().catch(console.error);
