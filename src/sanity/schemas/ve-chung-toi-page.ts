import { defineField, defineType } from "sanity";

export const veChungToiPage = defineType({
  name: "veChungToiPage",
  title: "Về chúng tôi (Trang)",
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
    // Brand Story
    defineField({ name: "brandStoryTitle", title: "Brand Story Title", type: "string" }),
    defineField({ name: "brandStoryContent", title: "Brand Story Content", type: "text", rows: 10 }),
    defineField({ name: "slogan", title: "Slogan", type: "string" }),
    defineField({ name: "learnMoreLabel", title: "Learn More Label", type: "string" }),
    defineField({ name: "learnMoreHref", title: "Learn More Href", type: "string" }),

    // Vision / Mission / Motto
    defineField({
      name: "visionCards",
      title: "Vision / Mission / Motto Cards",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // History Timeline
    defineField({ name: "historyTitle", title: "History Section Title", type: "string" }),
    defineField({
      name: "historyYears",
      title: "History Years",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "year", title: "Year", type: "string", validation: (r) => r.required() }),
          defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
          defineField({
            name: "milestones",
            title: "Milestones",
            type: "array",
            of: [{
              type: "object",
              fields: [
                defineField({ name: "month", title: "Month (e.g. Tháng 07)", type: "string" }),
                defineField({ name: "content", title: "Content", type: "string" }),
              ],
              preview: { select: { title: "month", subtitle: "content" } },
            }],
          }),
        ],
        preview: { select: { title: "year" } },
      }],
    }),

    // Leadership
    defineField({ name: "leadershipTitle", title: "Leadership Section Title", type: "string" }),
    defineField({
      name: "leaders",
      title: "Leaders",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "name", title: "Name", type: "string" }),
          defineField({ name: "role", title: "Role / Title", type: "string" }),
          defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
        ],
        preview: { select: { title: "name", subtitle: "role" } },
      }],
    }),

    // Culture
    defineField({ name: "cultureTitle", title: "Culture Title", type: "string" }),
    defineField({ name: "coreValuesTitle", title: "Core Values Title", type: "string" }),
    defineField({
      name: "coreValues",
      title: "Core Values",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "companyCultureTitle", title: "Company Culture Title", type: "string" }),
    defineField({
      name: "companyCultureItems",
      title: "Company Culture Items",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Gallery Images (positions 1-4: left→right, top→bottom)
    defineField({
      name: "galleryImages",
      title: "Gallery Images (1-4: trái→phải, trên→dưới)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (r) => r.max(4),
    }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Về chúng tôi — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
