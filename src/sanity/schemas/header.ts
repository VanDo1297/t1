import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
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
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "children",
              title: "Sub Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "href",
                      title: "Link",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                  ],
                  preview: {
                    select: { title: "label", subtitle: "href" },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "contactLabel",
      title: "Contact Label",
      type: "string",
    }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Header — ${lang === "vi" ? "Tiếng Việt" : "English"}`,
    }),
  },
});
