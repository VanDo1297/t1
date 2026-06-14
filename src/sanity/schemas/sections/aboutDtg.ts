import { defineType, defineField } from "sanity";

export const sectionAboutDtg = defineType({
  name: "sectionAboutDtg",
  title: "Phần Giới thiệu DTG (About DTG)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "kicker", title: "Nhãn phía trên tiêu đề", type: "string" }),
    defineField({ name: "heading", title: "Tiêu đề chính (dùng <accent> cho highlight)", type: "string" }),
    defineField({ name: "subtitle", title: "Mô tả ngắn", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      title: "Thống kê nổi bật",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "value", title: "Giá trị (VD: 23+)", type: "string" }),
          defineField({ name: "label", title: "Nhãn (VD: Years Experience)", type: "string" }),
          defineField({ name: "desc", title: "Mô tả ngắn", type: "string" }),
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }],
    }),
    defineField({ name: "commitmentKicker", title: "Commitment - Nhãn", type: "string" }),
    defineField({ name: "commitmentHeading", title: "Commitment - Tiêu đề", type: "string" }),
    defineField({ name: "commitmentDesc", title: "Commitment - Mô tả", type: "text", rows: 4 }),
    defineField({ name: "recognitionKicker", title: "Recognition - Nhãn", type: "string" }),
    defineField({
      name: "recognitionItems",
      title: "Recognition - Danh sách",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Tên giải thưởng", type: "string" }),
        ],
        preview: { select: { title: "label" } },
      }],
    }),
    defineField({ name: "whyKicker", title: "Why DTG - Nhãn", type: "string" }),
    defineField({ name: "whyHeading", title: "Why DTG - Tiêu đề", type: "string" }),
    defineField({
      name: "whyPoints",
      title: "Why DTG - Điểm nổi bật",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `About DTG — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
