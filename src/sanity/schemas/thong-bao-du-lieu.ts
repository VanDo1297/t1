import { defineField, defineType } from "sanity";

export const thongBaoDuLieu = defineType({
  name: "thongBaoDuLieu",
  title: "Thông báo sử dụng dữ liệu",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Ngôn ngữ",
      type: "string",
      options: { list: ["vi", "en"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "formSectionTitle",
      title: "Form Section Title",
      type: "string",
    }),
    defineField({
      name: "nameLabel",
      title: "Name Label",
      type: "string",
    }),
    defineField({
      name: "phoneLabel",
      title: "Phone Label",
      type: "string",
    }),
    defineField({
      name: "emailLabel",
      title: "Email Label",
      type: "string",
    }),
    defineField({
      name: "positionLabel",
      title: "Position Label",
      type: "string",
    }),
    defineField({
      name: "positions",
      title: "Position Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "contentTitle",
      title: "Content Section Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Nội dung điều khoản",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "consentLabel",
      title: "Consent Checkbox Label",
      type: "string",
    }),
    defineField({
      name: "submitLabel",
      title: "Submit Button Label",
      type: "string",
    }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Thông báo dữ liệu — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
