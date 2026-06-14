import { defineType, defineField } from "sanity";

export const sectionCtaBox = defineType({
  name: "sectionCtaBox",
  title: "Phần CTA Box",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề", type: "string" }),
    defineField({ name: "cta", title: "Nút kêu gọi", type: "string" }),
    defineField({ name: "playLabel", title: "Nhãn nút phát video", type: "string" }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `CTA Box — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});

export const sectionPartnersSlider = defineType({
  name: "sectionPartnersSlider",
  title: "Phần Đối tác (Slider)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề", type: "string" }),
    defineField({ name: "headingAccent", title: "Phần nhấn mạnh", type: "string" }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Đối tác Slider — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});

export const sectionPartners = defineType({
  name: "sectionPartners",
  title: "Phần Đối tác chiến lược",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "kicker", title: "Nhãn phía trên", type: "string" }),
    defineField({ name: "title", title: "Tiêu đề", type: "string" }),
    defineField({
      name: "danhSachDoiTac",
      title: "Logo đối tác",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "ten", title: "Tên đối tác", type: "string" }),
          defineField({ name: "logo", title: "Logo", type: "image" }),
        ],
        preview: { select: { title: "ten", media: "logo" } },
      }],
    }),
    defineField({
      name: "danhSachKhachHang",
      title: "Logo khách hàng",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "ten", title: "Tên khách hàng", type: "string" }),
          defineField({ name: "logo", title: "Logo", type: "image" }),
        ],
        preview: { select: { title: "ten", media: "logo" } },
      }],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Đối tác chiến lược — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});

export const sectionSearch = defineType({
  name: "sectionSearch",
  title: "Tìm kiếm (Search)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "placeholder", title: "Placeholder ô tìm kiếm", type: "string" }),
    defineField({ name: "noResults", title: "Thông báo không có kết quả", type: "string", description: 'Dùng {query} cho từ khoá tìm kiếm' }),
    defineField({ name: "hint", title: "Gợi ý tìm kiếm", type: "string" }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Tìm kiếm — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});

export const sectionCommon = defineType({
  name: "sectionCommon",
  title: "Nhãn chung (Common)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "learnMore", title: "Tìm hiểu thêm", type: "string" }),
    defineField({ name: "readMore", title: "Đọc thêm", type: "string" }),
    defineField({ name: "backToHome", title: "Về trang chủ", type: "string" }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Nhãn chung — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
