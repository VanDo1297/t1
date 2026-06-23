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
  const viResult = await client.create({
    _type: "solutionCategoryPage",
    language: "vi",
    categorySlug: "dich-vu-khac",
    title: "Giải pháp dich-vu-khac — VI",
    goals: [],
  });
  console.log("Created VI:", viResult._id);

  const enResult = await client.create({
    _type: "solutionCategoryPage",
    language: "en",
    categorySlug: "dich-vu-khac",
    title: "Giải pháp dich-vu-khac — EN",
    goals: [],
  });
  console.log("Created EN:", enResult._id);

  console.log("Done!");
}

sync().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
