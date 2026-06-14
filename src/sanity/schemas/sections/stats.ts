import { defineType, defineField } from "sanity";

export const sectionStats = defineType({
  name: "sectionStats",
  title: "Phần Thống kê AI",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề chính (hỗ trợ <accent>)", type: "string" }),
    defineField({ name: "goodNews", title: "Nhãn: Tin tốt", type: "string" }),
    defineField({ name: "goodNewsTitle", title: "Tiêu đề tin tốt", type: "text", rows: 3 }),
    defineField({ name: "growth", title: "Tăng trưởng", type: "string" }),
    defineField({ name: "growthSub", title: "Mô tả tăng trưởng", type: "text", rows: 2 }),
    defineField({ name: "development", title: "Phát triển", type: "string" }),
    defineField({ name: "developmentSub", title: "Mô tả phát triển", type: "text", rows: 2 }),
    defineField({ name: "zeroDay", title: "Thống kê: Zero-day", type: "string" }),
    defineField({ name: "ransomware", title: "Thống kê: Ransomware", type: "string" }),
    defineField({ name: "dataBreaches", title: "Thống kê: Rò rỉ dữ liệu", type: "string" }),
    defineField({ name: "badNews", title: "Nhãn: Tin xấu", type: "string" }),
    defineField({ name: "badNewsTitle", title: "Tiêu đề tin xấu", type: "text", rows: 3 }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Thống kê AI — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
