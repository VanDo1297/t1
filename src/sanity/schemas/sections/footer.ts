import { defineType, defineField } from "sanity";

export const sectionFooter = defineType({
  name: "sectionFooter",
  title: "Chân trang (Footer)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Mô tả công ty", type: "text", rows: 3 }),
    defineField({ name: "quickLinks", title: "Nhãn: Liên kết nhanh", type: "string" }),
    defineField({ name: "services", title: "Nhãn: Dịch vụ", type: "string" }),
    defineField({ name: "newsletter", title: "Nhãn: Đăng ký bản tin", type: "string" }),
    defineField({ name: "newsletterPlaceholder", title: "Placeholder email", type: "string" }),
    defineField({ name: "subscribe", title: "Nút: Đăng ký", type: "string" }),
    defineField({ name: "copyright", title: "Bản quyền", type: "string" }),
    defineField({ name: "privacy", title: "Chính sách bảo mật", type: "string" }),
    defineField({ name: "terms", title: "Điều khoản sử dụng", type: "string" }),
    defineField({ name: "ctaHeading", title: "Tiêu đề kêu gọi đăng ký", type: "string" }),
    defineField({
      name: "danhSachDichVu",
      title: "Danh sách dịch vụ ở footer",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "ten", title: "Tên dịch vụ", type: "string" }),
          ],
          preview: { select: { title: "ten" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Chân trang — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
