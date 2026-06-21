import { createClient } from "next-sanity";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skz8wmmR7q1SY3Hi1SBcdgBHqPcNkn9GLvPkLpSilSgUrdx8fHW0gwNBZYogY2M1VfvK6dWSJ3XsfHyZ1dHREkbqqvRiAP1q4z9I91Bt7uskqUBDdT0VmpcEyXLe09uyw6caf1hMGCiM1NSFI7rLnkHRsQGYpkJ2WpVMnmYIy82ePlZ0L4Ce",
  useCdn: false,
});

const articles = [
  // Tin dự án
  {
    _id: "tinTuc-vi-dtg-dong-hanh-cp-viet-nam",
    _type: "tinTuc",
    language: "vi",
    category: "tin-du-an",
    slug: { _type: "slug", current: "dtg-dong-hanh-cp-viet-nam" },
    title:
      "CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG ĐỒNG HÀNH CÙNG CÔNG TY CP CHĂN NUÔI C.P. VIỆT NAM NÂNG TẦM HỆ THỐNG PHẦN MỀM MÁY CHỦ",
    excerpt:
      "Trong bối cảnh chuyển đổi số đang trở thành ưu tiên hàng đầu, các doanh nghiệp không ngừng nâng cấp hệ thống nhằm nâng cao chất lượng quản lý và tối ưu hóa quy trình vận hành. Việc chuẩn bị cho bất kỳ sự thay đổi hạ tầng CNTT nào đều cần có sự tham vấn từ các chuyên gia uy tín. Thay vì đầu tư vào cơ sở hạ tầng và tự tổ chức hoạt động khôi phục sau thảm họa, lựa chọn dịch vụ và giải pháp hỗ trợ từ các chuyên gia là phương án tối ưu và được nhiều doanh nghiệp tin tưởng.",
    publishedAt: "2026-05-14T00:00:00Z",
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Trong bối cảnh chuyển đổi số đang trở thành ưu tiên hàng đầu, các doanh nghiệp không ngừng nâng cấp hệ thống nhằm nâng cao chất lượng quản lý và tối ưu hóa quy trình vận hành.",
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: "tinTuc-vi-dtg-hanh-trinh-ket-noi-tri-tue",
    _type: "tinTuc",
    language: "vi",
    category: "tin-du-an",
    slug: { _type: "slug", current: "dtg-hanh-trinh-ket-noi-tri-tue" },
    title: "DTG CORP – HÀNH TRÌNH KẾT NỐI TRI TUỆ, CẢM XÚC & CÔNG NGHỆ",
    excerpt:
      "Hội thảo AI THỰC TIỄN PHÒNG, THỰC SỰ đã diễn ra thành công với sự tham gia của hàng trăm chuyên gia và doanh nghiệp hàng đầu.",
    publishedAt: "2025-11-24T00:00:00Z",
    body: [],
  },
  {
    _id: "tinTuc-vi-dich-vu-tu-van-lap-ho-so-attt",
    _type: "tinTuc",
    language: "vi",
    category: "tin-du-an",
    slug: { _type: "slug", current: "dich-vu-tu-van-lap-ho-so-attt" },
    title:
      "DỊCH VỤ TƯ VẤN LẬP HỒ SƠ ĐỀ XUẤT CẤP ĐỘ AN TOÀN THÔNG TIN (HSĐXCĐ) THEO NĐ 85/2016 & TT 12/2022",
    excerpt:
      "Trong bối cảnh các quy định về an toàn và bảo mật thông tin (ATTT) ngày càng chặt chẽ, việc lập Hồ sơ đề xuất cấp độ An toàn Thông tin trở thành yêu cầu bắt buộc.",
    publishedAt: "2025-07-01T00:00:00Z",
    body: [],
  },
  {
    _id: "tinTuc-vi-dich-vu-cyber-security-assessment",
    _type: "tinTuc",
    language: "vi",
    category: "tin-du-an",
    slug: { _type: "slug", current: "dich-vu-cyber-security-assessment" },
    title: "DỊCH VỤ CYBER SECURITY ASSESSMENT | ĐÁNH GIÁ ATTT TOÀN DIỆN",
    excerpt:
      "Dịch vụ Đánh giá An toàn Thông tin (Cyber Security Assessment) của DTG là giải pháp đánh giá toàn diện mức độ an toàn của hệ thống CNTT, bao gồm hạ tầng, ứng dụng, kiến trúc thông tin, đào tạo.",
    publishedAt: "2025-06-15T00:00:00Z",
    body: [],
  },
  {
    _id: "tinTuc-vi-dich-vu-van-hanh-bao-mat",
    _type: "tinTuc",
    language: "vi",
    category: "tin-du-an",
    slug: { _type: "slug", current: "dich-vu-van-hanh-bao-mat" },
    title: "DỊCH VỤ VẬN HÀNH BẢO MẬT",
    excerpt:
      "Giải pháp vận hành bảo mật toàn diện giúp doanh nghiệp bảo vệ hệ thống 24/7 với đội ngũ chuyên gia hàng đầu.",
    publishedAt: "2025-05-20T00:00:00Z",
    body: [],
  },
  {
    _id: "tinTuc-vi-dich-vu-ung-cuu-su-co-attt",
    _type: "tinTuc",
    language: "vi",
    category: "tin-du-an",
    slug: { _type: "slug", current: "dich-vu-ung-cuu-su-co-attt" },
    title: "DỊCH VỤ ỨNG CỨU SỰ CỐ AN TOÀN THÔNG TIN",
    excerpt:
      "Ứng cứu sự cố an toàn thông tin nhanh chóng, chuyên nghiệp, giảm thiểu thiệt hại cho doanh nghiệp.",
    publishedAt: "2025-04-10T00:00:00Z",
    body: [],
  },
  // Tin nội bộ
  {
    _id: "tinTuc-vi-dtg-ky-niem-25-nam",
    _type: "tinTuc",
    language: "vi",
    category: "tin-noi-bo",
    slug: { _type: "slug", current: "dtg-ky-niem-25-nam" },
    title:
      "DTG KỶ NIỆM 25 NĂM THÀNH LẬP – HÀNH TRÌNH ĐỔI MỚI VÀ PHÁT TRIỂN",
    excerpt:
      "Nhân dịp kỷ niệm 25 năm thành lập, DTG nhìn lại chặng đường phát triển đáng tự hào và hướng tới tương lai với nhiều kế hoạch mới.",
    publishedAt: "2026-03-01T00:00:00Z",
    body: [],
  },
  {
    _id: "tinTuc-vi-dtg-team-building-2026",
    _type: "tinTuc",
    language: "vi",
    category: "tin-noi-bo",
    slug: { _type: "slug", current: "dtg-team-building-2026" },
    title: "DTG TEAM BUILDING 2026 – KẾT NỐI ĐỂ VƯƠN XA",
    excerpt:
      "Hoạt động team building thường niên giúp gắn kết đội ngũ và tạo động lực làm việc hiệu quả hơn.",
    publishedAt: "2026-02-15T00:00:00Z",
    body: [],
  },
  // Tin công nghệ
  {
    _id: "tinTuc-vi-xu-huong-ai-2026",
    _type: "tinTuc",
    language: "vi",
    category: "tin-cong-nghe",
    slug: { _type: "slug", current: "xu-huong-ai-2026" },
    title: "XU HƯỚNG AI NĂM 2026 – NHỮNG ĐIỀU DOANH NGHIỆP CẦN BIẾT",
    excerpt:
      "Trí tuệ nhân tạo tiếp tục là xu hướng công nghệ hàng đầu trong năm 2026, mở ra nhiều cơ hội cho doanh nghiệp chuyển đổi số.",
    publishedAt: "2026-04-20T00:00:00Z",
    body: [],
  },
  {
    _id: "tinTuc-vi-zero-trust-bao-mat-hien-dai",
    _type: "tinTuc",
    language: "vi",
    category: "tin-cong-nghe",
    slug: { _type: "slug", current: "zero-trust-bao-mat-hien-dai" },
    title: "ZERO TRUST – MÔ HÌNH BẢO MẬT HIỆN ĐẠI CHO DOANH NGHIỆP",
    excerpt:
      "Mô hình Zero Trust đang trở thành tiêu chuẩn mới trong bảo mật doanh nghiệp, thay thế các phương pháp truyền thống.",
    publishedAt: "2026-03-15T00:00:00Z",
    body: [],
  },
];

async function seed() {
  console.log("Seeding tin tức...");

  for (const article of articles) {
    try {
      await client.createOrReplace(article);
      console.log(`✓ ${article.slug.current}`);
    } catch (err) {
      console.error(`✗ ${article.slug.current}:`, err);
    }
  }

  console.log("Done!");
}

seed();
