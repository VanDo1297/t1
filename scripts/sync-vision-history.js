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
  const docs = await client.fetch(`*[_type == "veChungToiPage"]{ _id, language, historyYears }`);

  for (const doc of docs) {
    const patch = client.patch(doc._id);

    // Remove old historyEvents field if exists
    patch.unset(["historyEvents"]);

    // Clean image from milestones (move to year level)
    if (doc.historyYears) {
      const updated = doc.historyYears.map((y) => {
        const { milestones, ...rest } = y;
        return {
          ...rest,
          milestones: (milestones || []).map((m) => {
            const { image, imageUrl, ...mRest } = m;
            return mRest;
          }),
        };
      });
      patch.set({ historyYears: updated });
    }

    await patch.commit();
    console.log(`Patched [${doc.language}]: ${doc._id}`);
  }

  console.log("Done!");
}

sync().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
