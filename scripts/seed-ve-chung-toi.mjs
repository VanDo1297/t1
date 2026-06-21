import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

function key() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 12);
}

const data = {
  vi: {
    language: "vi",
    brandStoryTitle: "CÂU CHUYỆN THƯƠNG HIỆU",
    brandStoryContent: "Tại DTG CORP, chúng tôi không chỉ nhìn nhận công nghệ như một công cụ, mà là nền tảng cốt yếu để doanh nghiệp bứt phá. Giữa làn sóng chuyển đổi số mạnh mẽ, DTG Tiền thân của Công Ty Cổ Phần Công Nghệ DTG (DTG CORP) là của hàng kinh doanh sản phẩm Công Nghệ Thông Tin (CNTT) Tracinet Computer do Ông Trần Quốc Hoàn - Chủ Tịch Hội Đồng Quản Trị kiêm Tổng Giám Đốc sáng lập năm 2000. Năm 2007, đổi tên thành Công Ty Thương Mại Đại Trần Gia. Năm 2007, và sự phát triển vượt bậc công ty đã chính thức đổi tên thành Công ty CP Công nghệ DTG (DTG).\n\nChúng tôi tin rằng công nghệ phải phục vụ con người và mang lại hiệu quả thực tế, minh bạch, an toàn và bền vững. Đó là kim chỉ nam cho mọi sản phẩm và dịch vụ mang thương hiệu DTG.",
    slogan: "VỮNG MÃI MỘT NIỀM TIN",
    learnMoreLabel: "Tìm hiểu thêm",
    learnMoreHref: "/ve-chung-toi",
    visionCards: [
      { _key: key(), title: "TẦM NHÌN", description: "Trở thành Tập đoàn kinh doanh với 4 trụ cột chiến lược là Công Nghệ Thông Tin, Thiết bị điện, Thiết bị Led cao cấp, Nhà hàng và giải trí." },
      { _key: key(), title: "SỨ MỆNH", description: "Cung cấp mọi yêu cầu của Khách Hàng, nhằm đem lại lợi ích tốt nhất cho sự phồn vinh của Khách Hàng, của Cổ Đông, của Nhân Viên và của Cộng Đồng." },
      { _key: key(), title: "PHƯƠNG CHÂM", description: "Luôn tiến về phía trước, dựa trên nền tảng CNTT không ngừng đổi mới." },
    ],
    historyTitle: "LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN",
    historyEvents: [
      { _key: key(), year: "2021", month: "Tháng 07/2021", content: "DTG tổ chức hội thảo trực tuyến: \"Chuyển Đổi Số cùng DTG Corp với các giải pháp công nghệ từ Dell Technologies\"." },
      { _key: key(), year: "2021", month: "Tháng 04/2021", content: "Chính thức đổi tên từ Công Ty Cổ Phần Công Nghệ Đại Trần Gia sang \"Công Ty Cổ Phần Công Nghệ DTG\"." },
      { _key: key(), year: "2021", month: "Tháng 03/2021", content: "DTG tổ chức cuộc thi \"AI thông minh hơn phụ nữ DTG Corp\"." },
      { _key: key(), year: "2021", month: "Tháng 01/2021", content: "DTG tổ chức hội thảo: \"Định hướng CBS và an toàn thông tin trong tổ chức CBS\"." },
      { _key: key(), year: "2020", month: "Tháng 06/2020", content: "DTG mở rộng văn phòng tại Đà Nẵng." },
      { _key: key(), year: "2019", month: "Tháng 03/2019", content: "DTG đạt chứng nhận đối tác Gold của Dell Technologies." },
      { _key: key(), year: "2010", month: "Năm 2010", content: "Mở rộng sang lĩnh vực giải pháp hạ tầng CNTT cho doanh nghiệp." },
      { _key: key(), year: "2007", month: "Năm 2007", content: "Đổi tên thành Công Ty Thương Mại Đại Trần Gia." },
      { _key: key(), year: "2000", month: "Năm 2000", content: "Thành lập Tracinet Computer — tiền thân của DTG Corp." },
    ],
    leadershipTitle: "BAN LÃNH ĐẠO",
    leaders: [
      { _key: key(), name: "Trần Quốc Hoàn", role: "Chủ tịch Hội đồng Quản trị — Tổng Giám đốc" },
      { _key: key(), name: "Trần Lê Khải", role: "Thành viên HĐQT — Phó Tổng Giám đốc Quản lý nội bộ" },
      { _key: key(), name: "Trần Thị Hoài Hương", role: "Phó Tổng Giám đốc Tài chính — Văn phòng" },
      { _key: key(), name: "Huỳnh Đình Tú", role: "Thành viên HĐQT — Phó Tổng Giám đốc Thị trường" },
      { _key: key(), name: "Nguyễn Thị Liên", role: "Thành viên HĐQT — Phó Tổng Giám đốc Kinh doanh" },
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
    certificatesTitle: "CHỨNG NHẬN NỔI BẬT",
    certificates: [
      { _key: key(), year: "2021", title: "Chứng nhận Đối tác Silver của Aruba 2021" },
      { _key: key(), year: "2021", title: "Chứng nhận Đối tác Gold của Dell Technologies 2021-2022" },
      { _key: key(), year: "2021", title: "Chứng nhận Đối tác Silver của HPE 2021" },
      { _key: key(), year: "2021", title: "Chứng nhận Đối tác Chính thức của Cisco 2021" },
      { _key: key(), year: "2021", title: "Chứng nhận Bronze của Trend Micro" },
      { _key: key(), year: "2021", title: "Chứng nhận Đối tác Silver IBM 2021" },
      { _key: key(), year: "2020", title: "Chứng nhận Đối tác Gold của Dell Technologies 2020" },
      { _key: key(), year: "2020", title: "Chứng nhận Đối tác Silver của HPE 2020" },
      { _key: key(), year: "2020", title: "Chứng nhận Đối tác Cisco Select 2020" },
      { _key: key(), year: "2019", title: "Chứng nhận Đối tác Silver của Dell EMC 2019" },
      { _key: key(), year: "2019", title: "Chứng nhận Đối tác của Aruba 2019" },
      { _key: key(), year: "2019", title: "Chứng nhận Đối tác HPE 2019" },
      { _key: key(), year: "2016", title: "Chứng nhận Đối tác Dell 2016" },
      { _key: key(), year: "2016", title: "Chứng nhận Đối tác HP 2016" },
      { _key: key(), year: "2015", title: "Chứng nhận Đối tác Dell 2015" },
      { _key: key(), year: "2015", title: "Chứng nhận Đối tác HP Silver 2015" },
      { _key: key(), year: "2013", title: "Chứng nhận Đối tác Dell 2013" },
      { _key: key(), year: "2013", title: "Chứng nhận Đối tác HP Preferred 2013" },
    ],
  },
  en: {
    language: "en",
    brandStoryTitle: "BRAND STORY",
    brandStoryContent: "At DTG CORP, we do not merely see technology as a tool, but as a vital foundation for business breakthroughs.\n\nWe believe technology must serve people and deliver practical, transparent, safe, and sustainable results.",
    slogan: "STEADFAST IN TRUST",
    learnMoreLabel: "Learn more",
    learnMoreHref: "/ve-chung-toi",
    visionCards: [
      { _key: key(), title: "VISION", description: "To become a conglomerate with 4 strategic pillars: IT, Electrical equipment, Premium LED, Restaurant & Entertainment." },
      { _key: key(), title: "MISSION", description: "To fulfill every customer need, bringing the best benefits for the prosperity of Customers, Shareholders, Employees, and the Community." },
      { _key: key(), title: "MOTTO", description: "Always moving forward, built on a constantly innovative IT foundation." },
    ],
    historyTitle: "HISTORY & DEVELOPMENT",
    historyEvents: [
      { _key: key(), year: "2021", month: "Jul 2021", content: "DTG held online seminar on Digital Transformation with Dell Technologies." },
      { _key: key(), year: "2021", month: "Apr 2021", content: "Officially renamed to DTG Technology Joint Stock Company." },
      { _key: key(), year: "2021", month: "Mar 2021", content: "DTG organized \"AI Smarter than DTG Corp Women\" contest." },
      { _key: key(), year: "2021", month: "Jan 2021", content: "DTG held seminar on CBS orientation and information security." },
      { _key: key(), year: "2020", month: "Jun 2020", content: "DTG expanded office to Da Nang." },
      { _key: key(), year: "2019", month: "Mar 2019", content: "DTG achieved Dell Technologies Gold Partner certification." },
      { _key: key(), year: "2010", month: "2010", content: "Expanded into IT infrastructure solutions for enterprises." },
      { _key: key(), year: "2007", month: "2007", content: "Renamed to Dai Tran Gia Trading Company." },
      { _key: key(), year: "2000", month: "2000", content: "Founded Tracinet Computer — predecessor of DTG Corp." },
    ],
    leadershipTitle: "LEADERSHIP",
    leaders: [
      { _key: key(), name: "Tran Quoc Hoan", role: "Chairman & CEO" },
      { _key: key(), name: "Tran Le Khai", role: "Board Member — Deputy CEO, Internal Management" },
      { _key: key(), name: "Tran Thi Hoai Huong", role: "Deputy CEO, Finance & Administration" },
      { _key: key(), name: "Huynh Dinh Tu", role: "Board Member — Deputy CEO, Market Development" },
      { _key: key(), name: "Nguyen Thi Lien", role: "Board Member — Deputy CEO, Business" },
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
    certificatesTitle: "NOTABLE CERTIFICATIONS",
    certificates: [
      { _key: key(), year: "2021", title: "Aruba Silver Partner 2021" },
      { _key: key(), year: "2021", title: "Dell Technologies Gold Partner 2021-2022" },
      { _key: key(), year: "2021", title: "HPE Silver Partner 2021" },
      { _key: key(), year: "2021", title: "Cisco Official Partner 2021" },
      { _key: key(), year: "2021", title: "Trend Micro Bronze Partner" },
      { _key: key(), year: "2021", title: "IBM Silver Partner 2021" },
      { _key: key(), year: "2020", title: "Dell Technologies Gold Partner 2020" },
      { _key: key(), year: "2020", title: "HPE Silver Partner 2020" },
      { _key: key(), year: "2020", title: "Cisco Select Partner 2020" },
      { _key: key(), year: "2019", title: "Dell EMC Silver Partner 2019" },
      { _key: key(), year: "2019", title: "Aruba Partner 2019" },
      { _key: key(), year: "2019", title: "HPE Partner 2019" },
      { _key: key(), year: "2016", title: "Dell Partner 2016" },
      { _key: key(), year: "2016", title: "HP Partner 2016" },
      { _key: key(), year: "2015", title: "Dell Partner 2015" },
      { _key: key(), year: "2015", title: "HP Silver Partner 2015" },
      { _key: key(), year: "2013", title: "Dell Partner 2013" },
      { _key: key(), year: "2013", title: "HP Preferred Partner 2013" },
    ],
  },
};

async function seed() {
  // Delete old documents first
  const existing = await client.fetch('*[_type == "veChungToiPage"]{ _id }');
  for (const doc of existing) {
    await client.delete(doc._id);
    console.log(`🗑️  Deleted old: ${doc._id}`);
  }

  for (const [lang, doc] of Object.entries(data)) {
    try {
      const result = await client.createOrReplace({
        _id: `veChungToiPage-${lang}`,
        _type: "veChungToiPage",
        ...doc,
      });
      console.log(`✅ Về chúng tôi [${lang}] synced: ${result._id}`);
    } catch (err) {
      console.error(`❌ [${lang}] failed:`, err.message);
    }
  }
}

seed();
