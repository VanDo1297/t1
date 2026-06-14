import { defineType, defineField } from "sanity";

export const sectionNav = defineType({
  name: "sectionNav",
  title: "Thanh điều hướng (Navigation)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({
      name: "danhSachMenu",
      title: "Danh sách menu",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi, vd: home, about)", type: "string", validation: (r) => r.required() }),
            defineField({ name: "nhan", title: "Tên hiển thị", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", title: "Đường dẫn (vd: /, /about)", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "nhan", subtitle: "key" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Thanh điều hướng — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});

export const sectionSubNav = defineType({
  name: "sectionSubNav",
  title: "Thanh điều hướng phụ (Sub Nav)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({
      name: "danhSachMenu",
      title: "Danh sách menu phụ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string", validation: (r) => r.required() }),
            defineField({ name: "nhan", title: "Tên hiển thị", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "nhan", subtitle: "key" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Thanh điều hướng phụ — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
