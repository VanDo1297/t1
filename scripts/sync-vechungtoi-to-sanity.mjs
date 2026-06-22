import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const viData = {
  brandStoryTitle: "CÂU CHUYỆN THƯƠNG HIỆU",
  brandStoryContent: "Tại DTG CORP, chúng tôi không chỉ nhìn nhận công nghệ như một công cụ, mà là nền tảng cốt yếu để doanh nghiệp bứt phá. Giữa làn sóng chuyển đổi số mạnh mẽ, DTG Tiền thân của Công Ty Cổ Phần Công Nghệ DTG (DTG CORP) là của hàng kinh doanh sản phẩm Công Nghệ Thông Tin (CNTT) Tracinet Computer do Ông Trần Quốc Hoàn - Chủ Tịch Hội Đồng Quản Trị kiêm Tổng Giám Đốc sáng lập năm 2000. Năm 2007, đổi tên thành Công Ty Thương Mại Đại Trần Gia. Năm 2007, và sự phát triển vượt bậc công ty đã chính thức đổi tên thành Công ty CP Công nghệ DTG (DTG).\n\nChúng tôi tin rằng công nghệ phải phục vụ con người và mang lại hiệu quả thực tế, minh bạch, an toàn và bền vững. Đó là kim chỉ nam cho mọi sản phẩm và dịch vụ mang thương hiệu DTG.",
  slogan: "VỮNG MÃI MỘT NIỀM TIN",
  learnMoreLabel: "Tìm hiểu thêm",
  learnMoreHref: "/ve-chung-toi",
  visionCards: [
    { _type: "object", _key: "v0", title: "TẦM NHÌN", description: "Trở thành Tập đoàn kinh doanh với 4 trụ cột chiến lược là Công Nghệ Thông Tin, Thiết bị điện, Thiết bị Led cao cấp, Nhà hàng và giải trí." },
    { _type: "object", _key: "v1", title: "SỨ MỆNH", description: "Cung cấp mọi yêu cầu của Khách Hàng, nhằm đem lại lợi ích tốt nhất cho sự phồn vinh của Khách Hàng, của Cổ Đông, của Nhân Viên và của Cộng Đồng." },
    { _type: "object", _key: "v2", title: "PHƯƠNG CHÂM", description: "Luôn tiến về phía trước, dựa trên nền tảng CNTT không ngừng đổi mới." },
  ],
  historyTitle: "LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN",
  historyEvents: [
    { _type: "object", _key: "h0", year: "2021", month: "Tháng 07/2021", content: "DTG tổ chức hội thảo trực tuyến: \"Chuyển Đổi Số cùng DTG Corp với các giải pháp công nghệ từ Dell Technologies\"." },
    { _type: "object", _key: "h1", year: "2021", month: "Tháng 04/2021", content: "Chính thức đổi tên từ Công Ty Cổ Phần Công Nghệ Đại Trần Gia sang \"Công Ty Cổ Phần Công Nghệ DTG\"." },
    { _type: "object", _key: "h2", year: "2021", month: "Tháng 03/2021", content: "DTG tổ chức cuộc thi \"AI thông minh hơn phụ nữ DTG Corp\"." },
    { _type: "object", _key: "h3", year: "2021", month: "Tháng 01/2021", content: "DTG tổ chức hội thảo: \"Định hướng CBS và an toàn thông tin trong tổ chức CBS\"." },
    { _type: "object", _key: "h4", year: "2020", month: "Tháng 06/2020", content: "DTG mở rộng văn phòng tại Đà Nẵng." },
    { _type: "object", _key: "h5", year: "2019", month: "Tháng 03/2019", content: "DTG đạt chứng nhận đối tác Gold của Dell Technologies." },
    { _type: "object", _key: "h6", year: "2010", month: "Năm 2010", content: "Mở rộng sang lĩnh vực giải pháp hạ tầng CNTT cho doanh nghiệp." },
    { _type: "object", _key: "h7", year: "2007", month: "Năm 2007", content: "Đổi tên thành Công Ty Thương Mại Đại Trần Gia." },
    { _type: "object", _key: "h8", year: "2000", month: "Năm 2000", content: "Thành lập Tracinet Computer — tiền thân của DTG Corp." },
  ],
  leadershipTitle: "BAN LÃNH ĐẠO",
  leaders: [
    { _type: "object", _key: "l0", name: "Trần Quốc Hoàn", role: "Chủ tịch Hội đồng Quản trị — Tổng Giám đốc" },
    { _type: "object", _key: "l1", name: "Trần Lê Khải", role: "Thành viên HĐQT — Phó Tổng Giám đốc Quản lý nội bộ" },
    { _type: "object", _key: "l2", name: "Trần Thị Hoài Hương", role: "Phó Tổng Giám đốc Tài chính — Văn phòng" },
    { _type: "object", _key: "l3", name: "Huỳnh Đình Tú", role: "Thành viên HĐQT — Phó Tổng Giám đốc Thị trường" },
    { _type: "object", _key: "l4", name: "Nguyễn Thị Liên", role: "Thành viên HĐQT — Phó Tổng Giám đốc Kinh doanh" },
  ],
  cultureTitle: "VĂN HÓA DTG",
  coreValuesTitle: "GIÁ TRỊ CỐT LÕI",
  coreValues: [
    "DTG là một gia đình lớn, và hồ thu nhỏ của những con người trẻ tuổi, nhiệt huyết, năng động, giàu ý thức, đoàn kết, sáng tạo, cùng chung một mục tiêu và vì phần đâu không ngừng nghỉ cho sự phát triển thịnh vượng, bền vững của Công Ty DTG.",
    "Đối với DTG, mỗi cá nhân là một bộ phận không thể tách rời ra khỏi tất cả con người, cùng nỗ lực không ngừng tạo lên sự phát triển bền vững cho Công Ty.",
    "DTG được đáp ứng đầy đủ các chính sách phúc lợi theo luật pháp, đào tạo lâu dài, và sự minh bạch rõ ràng.",
    "Chúng tôi là một tập thể giàu truyền thống văn hóa, tinh thần doanh nghiệp mạnh mẽ, cùng nhau gắn kết, gìn giữ và phát triển các giá trị truyền thống tươi sáng mãi với thời gian.",
  ],
  companyCultureTitle: "VĂN HÓA CÔNG TY",
  companyCultureItems: [
    "Ngày Hội Kỷ Niệm Ngày Thành Lập Công Ty 12 tháng 5",
    "13 cuộc Sinh Nhật Tập Thể theo công Quý",
    "Tham gia các đội bóng Nội bộ",
    "DTG bình chọn Cá Nhân xuất sắc",
  ],
};

const enData = {
  brandStoryTitle: "BRAND STORY",
  brandStoryContent: "At DTG CORP, we do not merely see technology as a tool, but as a vital foundation for business breakthroughs.\n\nWe believe technology must serve people and deliver practical, transparent, safe, and sustainable results.",
  slogan: "STEADFAST IN TRUST",
  learnMoreLabel: "Learn more",
  learnMoreHref: "/ve-chung-toi",
  visionCards: [
    { _type: "object", _key: "v0", title: "VISION", description: "To become a conglomerate with 4 strategic pillars: IT, Electrical equipment, Premium LED, Restaurant & Entertainment." },
    { _type: "object", _key: "v1", title: "MISSION", description: "To fulfill every customer need, bringing the best benefits for the prosperity of Customers, Shareholders, Employees, and the Community." },
    { _type: "object", _key: "v2", title: "MOTTO", description: "Always moving forward, built on a constantly innovative IT foundation." },
  ],
  historyTitle: "HISTORY & DEVELOPMENT",
  historyEvents: [
    { _type: "object", _key: "h0", year: "2021", month: "Jul 2021", content: "DTG held online seminar on Digital Transformation with Dell Technologies." },
    { _type: "object", _key: "h1", year: "2021", month: "Apr 2021", content: "Officially renamed to DTG Technology Joint Stock Company." },
    { _type: "object", _key: "h2", year: "2021", month: "Jan 2021", content: "DTG held seminar on CBS orientation and information security." },
    { _type: "object", _key: "h3", year: "2007", month: "2007", content: "Renamed to Dai Tran Gia Trading Company." },
    { _type: "object", _key: "h4", year: "2000", month: "2000", content: "Founded Tracinet Computer — predecessor of DTG Corp." },
  ],
  leadershipTitle: "LEADERSHIP",
  leaders: [
    { _type: "object", _key: "l0", name: "Tran Quoc Hoan", role: "Chairman & CEO" },
    { _type: "object", _key: "l1", name: "Tran Le Khai", role: "Board Member — Deputy CEO, Internal Management" },
    { _type: "object", _key: "l2", name: "Tran Thi Hoai Huong", role: "Deputy CEO, Finance & Administration" },
    { _type: "object", _key: "l3", name: "Huynh Dinh Tu", role: "Board Member — Deputy CEO, Market Development" },
    { _type: "object", _key: "l4", name: "Nguyen Thi Lien", role: "Board Member — Deputy CEO, Business" },
  ],
  cultureTitle: "DTG CULTURE",
  coreValuesTitle: "CORE VALUES",
  coreValues: [
    "DTG is a big family of young, enthusiastic, dynamic people united by a shared goal.",
    "Each individual is an inseparable part of the whole, working together for sustainable growth.",
    "DTG provides comprehensive welfare policies, long-term training, and transparency.",
    "We are a collective rich in cultural tradition and strong entrepreneurial spirit.",
  ],
  companyCultureTitle: "COMPANY CULTURE",
  companyCultureItems: [
    "Annual Founding Anniversary — May 12th",
    "13 quarterly group birthday celebrations",
    "Internal sports teams",
    "DTG Outstanding Individual Awards",
  ],
};

async function sync() {
  const existing = await client.fetch(
    `*[_type == "veChungToiPage"]{ _id, language }`
  );

  for (const lang of ["vi", "en"]) {
    const data = lang === "vi" ? viData : enData;
    const doc = existing.find((d) => d.language === lang);

    if (doc) {
      console.log(`Updating veChungToiPage (${lang}) — ${doc._id}`);
      await client.patch(doc._id).set(data).commit();
      console.log(`✓ Updated ${lang}`);
    } else {
      console.log(`Creating veChungToiPage (${lang})`);
      await client.create({
        _type: "veChungToiPage",
        language: lang,
        ...data,
      });
      console.log(`✓ Created ${lang}`);
    }
  }

  console.log("\nDone! CMS data synced.");
}

sync().catch(console.error);
