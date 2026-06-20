import { defineField, defineType } from "sanity";

export const veDtg = defineType({
  name: "veDtg",
  title: "Về DTG",
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
      name: "kicker",
      title: "Kicker (small label)",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "number" }),
            defineField({ name: "suffix", title: "Suffix (+, %, etc)", type: "string" }),
            defineField({ name: "specialValue", title: "Special Value (e.g. 24/7)", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "number" },
          },
        },
      ],
    }),
    defineField({
      name: "commitmentKicker",
      title: "Commitment Kicker",
      type: "string",
    }),
    defineField({
      name: "commitmentHeading",
      title: "Commitment Heading",
      type: "string",
    }),
    defineField({
      name: "commitmentDesc",
      title: "Commitment Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "recognitionKicker",
      title: "Recognition Kicker",
      type: "string",
    }),
    defineField({
      name: "recognitions",
      title: "Recognitions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "width", title: "Bar Width (%)", type: "number" }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Về DTG — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
