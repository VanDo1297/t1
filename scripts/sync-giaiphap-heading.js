const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skz8wmmR7q1SY3Hi1SBcdgBHqPcNkn9GLvPkLpSilSgUrdx8fHW0gwNBZYogY2M1VfvK6dWSJ3XsfHyZ1dHREkbqqvRiAP1q4z9I91Bt7uskqUBDdT0VmpcEyXLe09uyw6caf1hMGCiM1NSFI7rLnkHRsQGYpkJ2WpVMnmYIy82ePlZ0L4Ce",
  useCdn: false,
});

async function sync() {
  const docs = await client.fetch(
    `*[_type == "giaiPhap"]{ _id, language }`
  );

  for (const doc of docs) {
    const heading =
      doc.language === "vi"
        ? "Giới thiệu Giải pháp\nvà Dịch vụ của DTG"
        : "Introducing DTG's Solutions\nand Services";

    await client.patch(doc._id).set({ sectionHeading: heading }).commit();
    console.log(`Patched giaiPhap [${doc.language}]: ${doc._id}`);
  }

  console.log("Done!");
}

sync().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
