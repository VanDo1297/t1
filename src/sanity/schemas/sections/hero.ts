import { defineType, defineField } from "sanity";

export const sectionHero = defineType({
  name: "sectionHero",
  title: "Phần Hero (Banner chính)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "title", title: "Tiêu đề chính", type: "string" }),
    defineField({ name: "titleHighlight", title: "Dòng highlight", type: "string" }),
    defineField({ name: "subtitle", title: "Mô tả phụ", type: "text", rows: 3 }),
    defineField({ name: "ctaProfile", title: "Nút: Xem hồ sơ năng lực", type: "string" }),
    defineField({ name: "ctaContact", title: "Nút: Liên hệ tư vấn", type: "string" }),
    defineField({
      name: "keywords",
      title: "Từ khoá hiển thị",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "videoUrl", title: "URL video nền", type: "url" }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Hero Banner — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
