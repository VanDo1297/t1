const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skz8wmmR7q1SY3Hi1SBcdgBHqPcNkn9GLvPkLpSilSgUrdx8fHW0gwNBZYogY2M1VfvK6dWSJ3XsfHyZ1dHREkbqqvRiAP1q4z9I91Bt7uskqUBDdT0VmpcEyXLe09uyw6caf1hMGCiM1NSFI7rLnkHRsQGYpkJ2WpVMnmYIy82ePlZ0L4Ce",
  useCdn: false,
});

const historyYearsVi = [
  { _key: "y2021", year: "2021", milestones: [
    { _key: "m1", month: "Tháng 07", content: 'DTG tổ chức hội thảo trực tuyến: "Chuyển Đổi Số cùng DTG Corp với các giải pháp công nghệ từ Dell Technologies".' },
    { _key: "m2", month: "Tháng 04", content: 'Chính thức đổi tên từ Công Ty Cổ Phần Công Nghệ Đại Trần Gia sang "Công Ty Cổ Phần Công Nghệ DTG".' },
    { _key: "m3", month: "Tháng 03", content: 'DTG tổ chức cuộc thi "AI thông minh hơn phụ nữ DTG Corp".' },
    { _key: "m4", month: "Tháng 01", content: 'DTG tổ chức hội thảo: "Định hướng CBS và an toàn thông tin trong tổ chức CBS".' },
  ]},
  { _key: "y2020", year: "2020", milestones: [
    { _key: "m1", month: "Tháng 06", content: "DTG mở rộng văn phòng tại Đà Nẵng." },
  ]},
  { _key: "y2019", year: "2019", milestones: [
    { _key: "m1", month: "Tháng 03", content: "DTG đạt chứng nhận đối tác Gold của Dell Technologies." },
  ]},
  { _key: "y2010", year: "2010", milestones: [
    { _key: "m1", month: "", content: "Mở rộng sang lĩnh vực giải pháp hạ tầng CNTT cho doanh nghiệp." },
  ]},
  { _key: "y2007", year: "2007", milestones: [
    { _key: "m1", month: "", content: "Đổi tên thành Công Ty Thương Mại Đại Trần Gia." },
  ]},
  { _key: "y2000", year: "2000", milestones: [
    { _key: "m1", month: "", content: "Thành lập Tracinet Computer — tiền thân của DTG Corp." },
  ]},
];

const historyYearsEn = [
  { _key: "y2021", year: "2021", milestones: [
    { _key: "m1", month: "Jul", content: "DTG held online seminar on Digital Transformation with Dell Technologies." },
    { _key: "m2", month: "Apr", content: "Officially renamed to DTG Technology Joint Stock Company." },
    { _key: "m3", month: "Jan", content: "DTG held seminar on CBS orientation and information security." },
  ]},
  { _key: "y2007", year: "2007", milestones: [
    { _key: "m1", month: "", content: "Renamed to Dai Tran Gia Trading Company." },
  ]},
  { _key: "y2000", year: "2000", milestones: [
    { _key: "m1", month: "", content: "Founded Tracinet Computer — predecessor of DTG Corp." },
  ]},
];

async function sync() {
  const docs = await client.fetch(`*[_type == "veChungToiPage"]{ _id, language }`);

  for (const doc of docs) {
    const data = doc.language === "vi" ? historyYearsVi : historyYearsEn;
    await client
      .patch(doc._id)
      .unset(["historyEvents"])
      .set({ historyYears: data })
      .commit();
    console.log(`Patched [${doc.language}]: ${doc._id}`);
  }

  console.log("Done!");
}

sync().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
