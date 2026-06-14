import { defineType, defineField } from "sanity";

export const translationGroup = defineType({
  name: "translationGroup",
  title: "Translations",
  type: "document",
  fields: [
    defineField({
      name: "namespace",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "Navigation", value: "nav" },
          { title: "Hero Section", value: "hero" },
          { title: "About Section", value: "about" },
          { title: "Why Choose DTG", value: "whyChoose" },
          { title: "Services", value: "services" },
          { title: "Partners", value: "partners" },
          { title: "Case Studies", value: "caseStudies" },
          { title: "News", value: "news" },
          { title: "Contact", value: "contact" },
          { title: "Footer", value: "footer" },
          { title: "Sub Navigation", value: "subNav" },
          { title: "Stats Section", value: "stats" },
          { title: "Why Palo Alto", value: "whyPalo" },
          { title: "Platforms", value: "platforms" },
          { title: "Services Response", value: "servicesResponse" },
          { title: "Solutions Matrix", value: "solutionsMatrix" },
          { title: "CTA Box", value: "ctaBox" },
          { title: "Partners Slider", value: "partnersSlider" },
          { title: "Engagement", value: "engagement" },
          { title: "Insights", value: "insights" },
          { title: "Search", value: "search" },
          { title: "Common", value: "common" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "entries",
      title: "Translations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "key",
              title: "Key",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "Description",
              type: "string",
              description: "Mô tả ngắn để team marketing hiểu field này là gì",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "text",
              rows: 2,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
              key: "key",
            },
            prepare({ title, subtitle, key }) {
              return {
                title: title || key,
                subtitle: subtitle?.substring(0, 80),
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      namespace: "namespace",
      language: "language",
    },
    prepare({ namespace, language }) {
      const langLabel = language === "vi" ? "🇻🇳 Tiếng Việt" : "🇬🇧 English";
      return {
        title: `${namespace} — ${langLabel}`,
      };
    },
  },
});
