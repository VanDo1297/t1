import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Banner",
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
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "URL video nền. Để trống sẽ dùng video mặc định.",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Các từ khoá hiển thị xoay vòng.",
    }),
    defineField({
      name: "ctaProfileLabel",
      title: "CTA Profile Label",
      type: "string",
    }),
    defineField({
      name: "ctaProfileHref",
      title: "CTA Profile Link",
      type: "string",
    }),
    defineField({
      name: "ctaContactLabel",
      title: "CTA Contact Label",
      type: "string",
    }),
    defineField({
      name: "ctaContactHref",
      title: "CTA Contact Link",
      type: "string",
    }),
  ],
  preview: {
    select: { lang: "language", title: "title" },
    prepare: ({ lang, title }) => ({
      title: `Hero — ${lang === "vi" ? "VI" : "EN"}`,
      subtitle: title,
    }),
  },
});
