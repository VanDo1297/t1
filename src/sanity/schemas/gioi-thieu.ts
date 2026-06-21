import { defineField, defineType } from "sanity";

export const gioiThieu = defineType({
  name: "gioiThieu",
  title: "Giới thiệu",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Tiếng Việt", value: "vi" },
          { title: "English", value: "en" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      title: "Label (small text)",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA Button Link",
      type: "string",
    }),
  ],
  preview: {
    select: { lang: "language", title: "title" },
    prepare: ({ lang, title }) => ({
      title: `Giới thiệu — ${lang === "vi" ? "VI" : "EN"}`,
      subtitle: title,
    }),
  },
});
