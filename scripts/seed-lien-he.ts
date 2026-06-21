import { createClient } from "next-sanity";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skz8wmmR7q1SY3Hi1SBcdgBHqPcNkn9GLvPkLpSilSgUrdx8fHW0gwNBZYogY2M1VfvK6dWSJ3XsfHyZ1dHREkbqqvRiAP1q4z9I91Bt7uskqUBDdT0VmpcEyXLe09uyw6caf1hMGCiM1NSFI7rLnkHRsQGYpkJ2WpVMnmYIy82ePlZ0L4Ce",
  useCdn: false,
});

const viDoc = {
  _id: "lienHe-vi",
  _type: "lienHe",
  language: "vi",
  title: "Liên hệ",
  infoTitle: "Thông tin liên hệ",
  address: "Tòa nhà DTS, 287B Điện Biên Phủ, P. Xuân Hòa, TP. Hồ Chí Minh",
  phones: [
    { _key: "hcm", label: "DTS HCM", number: "+(84) 28 3933 6666" },
    { _key: "hn", label: "DTS Hà Nội", number: "+(84) 24 3942 6568" },
    { _key: "dn", label: "DTS Đà Nẵng", number: "+(84) 236 381 2936" },
  ],
  email: "support@dts.com.vn",
  fax: "+(84) 28 3932 2369",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1267!2d106.6944!3d10.8006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAyLjIiTiAxMDbCsDQxJzM5LjgiRQ!5e0!3m2!1svi!2svn!4v1700000000000",
  formTitle: "Gửi yêu cầu tư vấn",
  formNameLabel: "Họ và tên",
  formCompanyLabel: "Tên công ty",
  formPhoneEmailLabel: "SĐT / Email",
  formSolutionLabel: "Mảng giải pháp",
  formMessageLabel: "Nội dung yêu cầu",
  formSubmitLabel: "Gửi yêu cầu",
  formSuccessMessage:
    "Cảm ơn bạn! Yêu cầu đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.",
  solutions: [
    { _key: "cs", key: "cyber-security", label: "An ninh mạng" },
    { _key: "it", key: "it-infrastructure", label: "Hạ tầng CNTT" },
    { _key: "ai", key: "ai-solutions", label: "Giải pháp AI" },
    { _key: "soc", key: "soc-services", label: "Dịch vụ SOC" },
    { _key: "other", key: "other", label: "Khác" },
  ],
};

const enDoc = {
  _id: "lienHe-en",
  _type: "lienHe",
  language: "en",
  title: "Contact",
  infoTitle: "Contact Information",
  address: "DTS Building, 287B Dien Bien Phu, Xuan Hoa Ward, Ho Chi Minh City",
  phones: [
    { _key: "hcm", label: "DTS HCM", number: "+(84) 28 3933 6666" },
    { _key: "hn", label: "DTS Hanoi", number: "+(84) 24 3942 6568" },
    { _key: "dn", label: "DTS Da Nang", number: "+(84) 236 381 2936" },
  ],
  email: "support@dts.com.vn",
  fax: "+(84) 28 3932 2369",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1267!2d106.6944!3d10.8006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAyLjIiTiAxMDbCsDQxJzM5LjgiRQ!5e0!3m2!1sen!2svn!4v1700000000000",
  formTitle: "Send a consultation request",
  formNameLabel: "Full name",
  formCompanyLabel: "Company name",
  formPhoneEmailLabel: "Phone / Email",
  formSolutionLabel: "Solution area",
  formMessageLabel: "Message",
  formSubmitLabel: "Send request",
  formSuccessMessage:
    "Thank you! Your request has been sent successfully. We will get back to you shortly.",
  solutions: [
    { _key: "cs", key: "cyber-security", label: "Cyber Security" },
    { _key: "it", key: "it-infrastructure", label: "IT Infrastructure" },
    { _key: "ai", key: "ai-solutions", label: "AI Solutions" },
    { _key: "soc", key: "soc-services", label: "SOC Services" },
    { _key: "other", key: "other", label: "Other" },
  ],
};

async function seed() {
  console.log("Seeding lienHe vi...");
  await client.createOrReplace(viDoc);
  console.log("Seeding lienHe en...");
  await client.createOrReplace(enDoc);
  console.log("Done!");
}

seed().catch(console.error);
