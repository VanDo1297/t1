/**
 * Gỡ field "title" thừa khỏi các document solutionCategoryPage.
 * Field này được tạo nhầm bởi sync-dich-vu-khac-category.js nhưng schema không khai báo,
 * nên Sanity Studio báo "Unknown field found".
 */
const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skz8wmmR7q1SY3Hi1SBcdgBHqPcNkn9GLvPkLpSilSgUrdx8fHW0gwNBZYogY2M1VfvK6dWSJ3XsfHyZ1dHREkbqqvRiAP1q4z9I91Bt7uskqUBDdT0VmpcEyXLe09uyw6caf1hMGCiM1NSFI7rLnkHRsQGYpkJ2WpVMnmYIy82ePlZ0L4Ce",
  useCdn: false,
});

async function run() {
  const docs = await client.fetch(
    `*[_type == "solutionCategoryPage" && defined(title)]{ _id, title }`
  );
  if (!docs.length) {
    console.log("Không có document nào còn field title. Không cần làm gì.");
    return;
  }
  for (const doc of docs) {
    await client.patch(doc._id).unset(["title"]).commit();
    console.log(`Đã gỡ title khỏi ${doc._id} (was: "${doc.title}")`);
  }
  console.log("Done!");
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
