import { defineType, defineField } from "sanity";

export const sectionCaseStudies = defineType({
  name: "sectionCaseStudies",
  title: "Phần Dự án tiêu biểu",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "kicker", title: "Nhãn phía trên tiêu đề", type: "string" }),
    defineField({ name: "title", title: "Tiêu đề section", type: "string" }),
    defineField({
      name: "danhSachDuAn",
      title: "Danh sách dự án",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã dự án (không đổi)", type: "string" }),
            defineField({ name: "tieuDe", title: "Tên dự án", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả ngắn", type: "text", rows: 2 }),
            defineField({ name: "hinhAnh", title: "Hình ảnh dự án", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "tieuDe", subtitle: "moTa" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Dự án tiêu biểu — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
