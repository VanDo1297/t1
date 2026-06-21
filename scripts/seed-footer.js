const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skz8wmmR7q1SY3Hi1SBcdgBHqPcNkn9GLvPkLpSilSgUrdx8fHW0gwNBZYogY2M1VfvK6dWSJ3XsfHyZ1dHREkbqqvRiAP1q4z9I91Bt7uskqUBDdT0VmpcEyXLe09uyw6caf1hMGCiM1NSFI7rLnkHRsQGYpkJ2WpVMnmYIy82ePlZ0L4Ce",
  useCdn: false,
});

const footerVi = {
  _type: "footer",
  language: "vi",
  hotline: "1800 1537",
  email: "support@dts.com.vn",
  socialLinks: [
    { _key: "fb", platform: "facebook", url: "#" },
    { _key: "li", platform: "linkedin", url: "#" },
    { _key: "yt", platform: "youtube", url: "#" },
  ],
  offices: [
    {
      _key: "hcm",
      name: "Trụ sở chính",
      address:
        "Tòa nhà DTS, 287B Điện Biên Phủ, P. Xuân Hòa, TP. Hồ Chí Minh, Việt Nam",
      phone: "+(84) 28 3933 6666",
      fax: "+(84) 28 3932 2369",
    },
    {
      _key: "hn",
      name: "Văn phòng Hà Nội",
      address:
        "Tòa nhà Sao Bắc, 04 Dã Tượng, P. Cửa Nam, TP. Hà Nội, Việt Nam",
      phone: "+(84) 24 3942 6568",
      fax: "+(84) 24 3942 6566",
    },
    {
      _key: "dn",
      name: "Văn phòng Đà Nẵng",
      address:
        "Tòa nhà Danabook, Phòng 6.4.5 tầng 6, Tòa nhà 76 Bạch Đằng, P. Hải Châu, TP. Đà Nẵng, Việt Nam",
      phone: "+(84) 236 381 2936",
    },
  ],
};

const footerEn = {
  _type: "footer",
  language: "en",
  hotline: "1800 1537",
  email: "support@dts.com.vn",
  socialLinks: [
    { _key: "fb", platform: "facebook", url: "#" },
    { _key: "li", platform: "linkedin", url: "#" },
    { _key: "yt", platform: "youtube", url: "#" },
  ],
  offices: [
    {
      _key: "hcm",
      name: "Headquarters",
      address:
        "DTS Building, 287B Dien Bien Phu, Xuan Hoa Ward, Ho Chi Minh City, Vietnam",
      phone: "+(84) 28 3933 6666",
      fax: "+(84) 28 3932 2369",
    },
    {
      _key: "hn",
      name: "Hanoi Office",
      address:
        "Sao Bac Building, 04 Da Tuong, Cua Nam Ward, Hanoi, Vietnam",
      phone: "+(84) 24 3942 6568",
      fax: "+(84) 24 3942 6566",
    },
    {
      _key: "dn",
      name: "Da Nang Office",
      address:
        "Danabook Building, Room 6.4.5, 6th Floor, 76 Bach Dang, Hai Chau Ward, Da Nang, Vietnam",
      phone: "+(84) 236 381 2936",
    },
  ],
};

async function seed() {
  console.log("Seeding footer data...");
  const viResult = await client.create(footerVi);
  console.log("Created Vietnamese footer:", viResult._id);
  const enResult = await client.create(footerEn);
  console.log("Created English footer:", enResult._id);
  console.log("Done!");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
