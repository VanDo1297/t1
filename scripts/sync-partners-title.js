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
  const docs = await client.fetch(`*[_type == "trangDoiTac"]{ _id, ngonNgu }`);

  for (const doc of docs) {
    const title = doc.ngonNgu === "vi"
      ? "Đối tác đồng hành cùng chúng tôi"
      : "Our Partners";

    await client.patch(doc._id).set({ tieuDeMuc: title }).commit();
    console.log(`Patched [${doc.ngonNgu}]: ${doc._id}`);
  }

  console.log("Done!");
}

sync().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
