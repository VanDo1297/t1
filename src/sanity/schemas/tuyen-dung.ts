import { defineField, defineType } from "sanity";

export const tuyenDung = defineType({
  name: "tuyenDung",
  title: "Tuyển dụng",
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
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "searchPlaceholder",
      title: "Search Placeholder",
      type: "string",
    }),
    defineField({
      name: "industryLabel",
      title: "Industry Label",
      type: "string",
    }),
    defineField({
      name: "locationLabel",
      title: "Location Label",
      type: "string",
    }),
    defineField({
      name: "searchButtonLabel",
      title: "Search Button Label",
      type: "string",
    }),
    defineField({
      name: "industries",
      title: "Industries",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quote",
      title: "Quote Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "contactName",
      title: "Contact Name",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "jobs",
      title: "Job Listings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "slug", title: "Slug (URL)", type: "string", validation: (r) => r.required() }),
            defineField({ name: "title", title: "Job Title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "department", title: "Department", type: "string" }),
            defineField({ name: "location", title: "Location", type: "string" }),
            defineField({ name: "type", title: "Type (Full-time, Part-time...)", type: "string" }),
            defineField({ name: "salary", title: "Salary", type: "string" }),
            defineField({ name: "deadline", title: "Deadline", type: "string" }),
            defineField({ name: "quantity", title: "Quantity", type: "number" }),
            defineField({ name: "isNew", title: "Show New Badge", type: "boolean" }),
            defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
            defineField({ name: "jobDescription", title: "Job Description (Detail)", type: "text", rows: 8 }),
            defineField({ name: "requirements", title: "Requirements", type: "text", rows: 8 }),
            defineField({ name: "preferred", title: "Preferred Qualifications", type: "text", rows: 6 }),
            defineField({ name: "benefits", title: "Benefits", type: "text", rows: 6 }),
            defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
            defineField({ name: "contactPhone", title: "Contact Phone", type: "string" }),
          ],
          preview: {
            select: { title: "title", subtitle: "department" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Tuyển dụng — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
