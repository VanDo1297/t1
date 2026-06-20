import { defineField, defineType } from "sanity";

const navChildFields = [
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
    name: "description",
    title: "Description",
    type: "string",
  }),
];

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
              title: "Sub Items (Dropdown)",
              description: "Simple dropdown menu items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: navChildFields,
                  preview: {
                    select: { title: "label", subtitle: "href" },
                  },
                },
              ],
            }),
            defineField({
              name: "megaMenu",
              title: "Mega Menu Columns",
              description:
                "Full-width mega menu with columns. If set, this takes priority over Sub Items.",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Column Title",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "href",
                      title: "Column Link",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "description",
                      title: "Column Description",
                      type: "string",
                    }),
                    defineField({
                      name: "children",
                      title: "Column Items",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          fields: navChildFields,
                          preview: {
                            select: { title: "label", subtitle: "href" },
                          },
                        },
                      ],
                    }),
                  ],
                  preview: {
                    select: { title: "title", subtitle: "description" },
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
