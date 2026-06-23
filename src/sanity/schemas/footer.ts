import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
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
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "phoneLabel",
      title: "Phone Label",
      type: "string",
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA Banner Title",
      type: "string",
    }),
    defineField({
      name: "ctaButtonLabel",
      title: "CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "hotline",
      title: "Hotline",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "companyProfile",
      title: "Company Profile (PDF)",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "offices",
      title: "Offices",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Office Name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "address",
              title: "Address",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "phone",
              title: "Phone",
              type: "string",
            }),
            defineField({
              name: "fax",
              title: "Fax",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "address" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Footer — ${lang === "vi" ? "Tiếng Việt" : "English"}`,
    }),
  },
});
