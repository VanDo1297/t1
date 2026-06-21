import { defineField, defineType } from "sanity";

export const solutionCategoryPage = defineType({
  name: "solutionCategoryPage",
  title: "Giải pháp - Trang danh mục",
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
      name: "categorySlug",
      title: "Category Slug",
      description: "cong-nghe | an-ninh-mang | ai",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "cardBgImage",
      title: "Card Background Image",
      description: "Background image for solution cards",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "goals",
      title: "Goals (Mục tiêu giải pháp)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    select: { slug: "categorySlug", lang: "language" },
    prepare: ({ slug, lang }) => ({
      title: `Giải pháp ${slug} — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
