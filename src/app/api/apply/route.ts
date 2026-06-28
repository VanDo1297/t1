import { NextResponse } from "next/server";

// CV: tối đa 10MB, chỉ nhận pdf/doc/docx
const MAX_CV_SIZE = 10 * 1024 * 1024;
const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const name = String(form.get("name") || "").trim();
    const dob = String(form.get("dob") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const position = String(form.get("position") || "").trim();
    const jobSlug = String(form.get("jobSlug") || "").trim();
    const consent = String(form.get("consent") || "") === "true";
    const optionalConsent = String(form.get("optionalConsent") || "") === "true";
    const cv = form.get("cv");

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: "Consent is required" }, { status: 400 });
    }
    if (!(cv instanceof File) || cv.size === 0) {
      return NextResponse.json({ error: "CV file is required" }, { status: 400 });
    }
    if (cv.size > MAX_CV_SIZE) {
      return NextResponse.json({ error: "CV file too large" }, { status: 400 });
    }
    if (cv.type && !ALLOWED_CV_TYPES.includes(cv.type)) {
      return NextResponse.json({ error: "Invalid CV file type" }, { status: 400 });
    }

    // Log for now — replace with email/CRM/storage integration later
    console.log("[Job Application]", {
      position,
      jobSlug,
      name,
      dob,
      phone,
      email,
      consent,
      optionalConsent,
      cv: { name: cv.name, size: cv.size, type: cv.type },
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
