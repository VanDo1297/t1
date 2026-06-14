import { defineType, defineField } from "sanity";

export const sectionAbout = defineType({
  name: "sectionAbout",
  title: "Phần Giới thiệu (About)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "kicker", title: "Nhãn phía trên tiêu đề", type: "string" }),
    defineField({ name: "title", title: "Tiêu đề section", type: "string" }),
    defineField({ name: "description1", title: "Đoạn mô tả 1", type: "text", rows: 4 }),
    defineField({ name: "description2", title: "Đoạn mô tả 2", type: "text", rows: 4 }),
    defineField({ name: "cta", title: "Nút kêu gọi hành động", type: "string" }),
    defineField({ name: "orbitCenter", title: "Tiêu đề trung tâm (Orbit)", type: "string" }),
    defineField({
      name: "orbit",
      title: "Giá trị cốt lõi (Orbit)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "ten", title: "Tên giá trị", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả", type: "string" }),
          ],
          preview: {
            select: { title: "ten", subtitle: "moTa" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Giới thiệu — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
