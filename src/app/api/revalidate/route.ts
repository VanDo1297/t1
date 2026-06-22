import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-webhook-secret");
  const envSecret = process.env.SANITY_WEBHOOK_SECRET;

  console.log("[Revalidate] secret from header:", secret);
  console.log("[Revalidate] secret from env:", envSecret);
  console.log("[Revalidate] match:", secret === envSecret);

  if (secret !== envSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/", "layout");

  console.log("[Revalidate] Done");
  return NextResponse.json({ revalidated: true });
}
