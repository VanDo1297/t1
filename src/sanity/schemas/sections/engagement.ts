import { defineType, defineField } from "sanity";

export const sectionEngagement = defineType({
  name: "sectionEngagement",
  title: "Phần Kết nối (Engagement)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề chính", type: "text", rows: 2 }),
    defineField({
      name: "danhSachThe",
      title: "Danh sách thẻ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "tab", title: "Tên tab", type: "string" }),
            defineField({ name: "tieuDe", title: "Tiêu đề", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả", type: "text", rows: 3 }),
            defineField({ name: "cta", title: "Nút kêu gọi", type: "string" }),
          ],
          preview: { select: { title: "tab", subtitle: "tieuDe" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Kết nối — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
