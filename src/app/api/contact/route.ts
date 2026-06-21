import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phoneEmail, solution, message } = body;

    if (!name || !phoneEmail || !solution || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log for now — replace with email/CRM integration later
    console.log("[Contact Form]", {
      name,
      company: body.company || "",
      phoneEmail,
      solution,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
