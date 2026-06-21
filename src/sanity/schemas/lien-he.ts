import { defineField, defineType } from "sanity";

export const lienHe = defineType({
  name: "lienHe",
  title: "Liên hệ",
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
    defineField({ name: "title", title: "Page Title", type: "string" }),
    defineField({ name: "infoTitle", title: "Info Section Title", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 2 }),
    defineField({
      name: "phones",
      title: "Phone Numbers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "number", title: "Number", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "number" },
          },
        },
      ],
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "fax", title: "Fax", type: "string" }),
    defineField({ name: "mapEmbedUrl", title: "Google Maps Embed URL", type: "url" }),
    defineField({ name: "formTitle", title: "Form Title", type: "string" }),
    defineField({ name: "formNameLabel", title: "Name Field Label", type: "string" }),
    defineField({ name: "formCompanyLabel", title: "Company Field Label", type: "string" }),
    defineField({ name: "formPhoneEmailLabel", title: "Phone/Email Field Label", type: "string" }),
    defineField({ name: "formSolutionLabel", title: "Solution Field Label", type: "string" }),
    defineField({ name: "formMessageLabel", title: "Message Field Label", type: "string" }),
    defineField({ name: "formSubmitLabel", title: "Submit Button Label", type: "string" }),
    defineField({ name: "formSuccessMessage", title: "Success Message", type: "string" }),
    defineField({
      name: "solutions",
      title: "Solution Options",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Key", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
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
      title: `Liên hệ — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
