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

  // UTM-Parameter, damit Scans pro QR-Code in Vercel Analytics auswertbar sind
  const url = new URL(destination);
  url.searchParams.set("utm_source", "qr");
  url.searchParams.set("utm_medium", "print");
  url.searchParams.set("utm_campaign", id);

  return NextResponse.redirect(url, 307);
}
