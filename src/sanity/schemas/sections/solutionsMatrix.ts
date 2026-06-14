import { defineType, defineField } from "sanity";

export const sectionSolutionsMatrix = defineType({
  name: "sectionSolutionsMatrix",
  title: "Phần Ma trận giải pháp",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề chính", type: "text", rows: 3 }),
    defineField({ name: "featured", title: "Nhãn: Nổi bật", type: "string" }),
    defineField({ name: "featuredTitle", title: "Tiêu đề nổi bật", type: "string" }),
    defineField({ name: "exploreCta", title: "Nút: Khám phá", type: "string" }),
    defineField({
      name: "danhSachGiaiPhap",
      title: "Danh sách giải pháp",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "danhSachTinhNang",
      title: "Danh sách tính năng",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Ma trận giải pháp — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
