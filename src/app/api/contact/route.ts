import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate data
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Dữ liệu không hợp lệ", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 2. Send email (configure Resend or SMTP later)
    // For now, log the contact request
    console.log("New contact request:", data);

    // TODO: Uncomment and configure when Resend API key is available
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'DTG Website <noreply@dtgsoft.vn>',
    //   to: 'sales@dtgsoft.vn',
    //   subject: `[Website] Yêu cầu tư vấn từ ${data.name} - ${data.company}`,
    //   html: `
    //     <h2>Yêu cầu tư vấn mới từ website</h2>
    //     <p><strong>Họ tên:</strong> ${data.name}</p>
    //     <p><strong>Công ty:</strong> ${data.company}</p>
    //     <p><strong>Liên hệ:</strong> ${data.phoneEmail}</p>
    //     <p><strong>Giải pháp:</strong> ${data.solution}</p>
    //     <p><strong>Nội dung:</strong> ${data.message || 'Không có'}</p>
    //   `,
    // });

    // 3. Return success
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Đã xảy ra lỗi, vui lòng thử lại" },
      { status: 500 }
    );
  }
}
