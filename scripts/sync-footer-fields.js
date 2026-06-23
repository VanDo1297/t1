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
  // Find existing footer documents
  const footers = await client.fetch(
    `*[_type == "footer"]{ _id, language }`
  );

  for (const footer of footers) {
    const isVi = footer.language === "vi";
    await client
      .patch(footer._id)
      .set({
        companyName: isVi
          ? "CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG"
          : "Service Support Center",
        phoneLabel: isVi ? "Điện thoại" : "Tel",
      })
      .commit();
    console.log(`Patched footer [${footer.language}]: ${footer._id}`);
  }

  console.log("Done!");
}

sync().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
