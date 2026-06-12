import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  company: z.string().min(2, "Tên công ty phải có ít nhất 2 ký tự"),
  phoneEmail: z.string().min(5, "Vui lòng nhập số điện thoại hoặc email"),
  solution: z.string().min(1, "Vui lòng chọn mảng giải pháp"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
