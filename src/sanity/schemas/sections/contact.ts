import { defineType, defineField } from "sanity";

export const sectionContact = defineType({
  name: "sectionContact",
  title: "Trang Liên hệ",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "title", title: "Tiêu đề trang", type: "string" }),

    // Info
    defineField({ name: "infoTitle", title: "Thông tin LH: Tiêu đề", type: "string" }),
    defineField({ name: "infoPhone", title: "Thông tin LH: Nhãn Hotline", type: "string" }),
    defineField({ name: "infoEmail", title: "Thông tin LH: Nhãn Email", type: "string" }),
    defineField({ name: "infoAddress", title: "Thông tin LH: Nhãn Địa chỉ", type: "string" }),

    // Form
    defineField({ name: "formTitle", title: "Form: Tiêu đề", type: "string" }),
    defineField({ name: "formName", title: "Form: Họ và tên", type: "string" }),
    defineField({ name: "formCompany", title: "Form: Tên công ty", type: "string" }),
    defineField({ name: "formPhoneEmail", title: "Form: SĐT / Email", type: "string" }),
    defineField({ name: "formSolution", title: "Form: Mảng giải pháp", type: "string" }),
    defineField({ name: "formMessage", title: "Form: Nội dung yêu cầu", type: "string" }),
    defineField({ name: "formSubmit", title: "Form: Nút gửi", type: "string" }),
    defineField({ name: "formSuccess", title: "Form: Thông báo thành công", type: "string" }),
    defineField({
      name: "danhSachGiaiPhap",
      title: "Form: Danh sách giải pháp",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "nhan", title: "Tên giải pháp", type: "string" }),
          ],
          preview: { select: { title: "nhan" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Liên hệ — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
