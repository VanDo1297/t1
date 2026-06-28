import { defineField, defineType } from "sanity";

export const thongBaoDuLieu = defineType({
  name: "thongBaoDuLieu",
  title: "Thông báo sử dụng dữ liệu",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Ngôn ngữ",
      type: "string",
      options: { list: ["vi", "en"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "formSectionTitle",
      title: "Form Section Title",
      type: "string",
    }),
    defineField({
      name: "nameLabel",
      title: "Name Label",
      type: "string",
    }),
    defineField({
      name: "phoneLabel",
      title: "Phone Label",
      type: "string",
    }),
    defineField({
      name: "emailLabel",
      title: "Email Label",
      type: "string",
    }),
    defineField({
      name: "positionLabel",
      title: "Position Label",
      type: "string",
    }),
    defineField({
      name: "positions",
      title: "Position Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "contentTitle",
      title: "Content Section Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Nội dung điều khoản",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "consentLabel",
      title: "Consent Checkbox Label",
      type: "string",
    }),
    defineField({
      name: "submitLabel",
      title: "Submit Button Label",
      type: "string",
    }),

    /* ── Dialog ứng tuyển (popup ở trang chi tiết tuyển dụng) ── */
    defineField({
      name: "positionPrefixLabel",
      title: "[Dialog] Nhãn 'Vị trí ứng tuyển'",
      type: "string",
    }),
    defineField({
      name: "deadlinePrefixLabel",
      title: "[Dialog] Nhãn 'Hạn nộp hồ sơ'",
      type: "string",
    }),
    defineField({
      name: "instruction",
      title: "[Dialog] Câu hướng dẫn (dưới tiêu đề)",
      type: "string",
    }),
    defineField({
      name: "dobLabel",
      title: "[Dialog] Nhãn 'Ngày sinh'",
      type: "string",
    }),
    defineField({
      name: "cvLabel",
      title: "[Dialog] Nhãn 'Đính kèm CV'",
      type: "string",
    }),
    defineField({
      name: "attachButtonLabel",
      title: "[Dialog] Nhãn nút 'Chọn file đính kèm'",
      type: "string",
    }),
    defineField({
      name: "consentBoxTitle",
      title: "[Dialog] Tiêu đề khung nội dung đồng ý",
      type: "string",
    }),
    defineField({
      name: "optionalConsentLabel",
      title: "[Dialog] Nhãn ô đồng ý (tùy chọn)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "applyButtonLabel",
      title: "[Dialog] Nhãn nút 'Ứng tuyển'",
      type: "string",
    }),
    defineField({
      name: "successMessage",
      title: "[Dialog] Thông báo gửi thành công",
      type: "string",
    }),
  ],
  preview: {
    select: { lang: "language" },
    prepare: ({ lang }) => ({
      title: `Thông báo dữ liệu — ${lang === "vi" ? "VI" : "EN"}`,
    }),
  },
});
