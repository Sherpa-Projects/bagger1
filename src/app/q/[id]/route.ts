import { NextResponse } from "next/server";
import { qrRedirects } from "@/lib/content/qr-redirects";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const destination = qrRedirects[id];

  if (!destination) {
    return NextResponse.redirect(new URL("/", request.url), 307);
  }

  return NextResponse.redirect(destination, 307);
}
