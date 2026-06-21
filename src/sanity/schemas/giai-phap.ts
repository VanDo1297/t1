import { defineField, defineType } from "sanity";

export const giaiPhap = defineType({
  name: "giaiPhap",
  title: "Giải pháp",
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
      name: "sectionHeading",
      title: "Section Heading (trên tab nav)",
      type: "string",
    }),
    defineField({
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Tab Label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
            defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
            defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
            defineField({
              name: "stats",
              title: "Stats",
              type: "array",
              of: [{
                type: "object",
                fields: [
                  defineField({ name: "value", title: "Value", type: "string" }),
                  defineField({ name: "label", title: "Label", type: "string" }),
                ],
              }],
            }),
            defineField({
              name: "awards",
              title: "Awards",
              type: "array",
              of: [{
                type: "object",
                fields: [
                  defineField({ name: "source", title: "Source", type: "string" }),
                  defineField({ name: "title", title: "Title", type: "string" }),
                  defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
                ],
                preview: { select: { title: "source", subtitle: "title" } },
              }],
            }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
    defineField({ name: "viewAllLabel", title: "View All Label", type: "string" }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Giải pháp — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
