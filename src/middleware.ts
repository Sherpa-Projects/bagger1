import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function decodeBase64(str: string) {
  return Buffer.from(str, "base64").toString("utf-8");
}

export function middleware(request: NextRequest) {
  const basicAuthUser = process.env.BASIC_AUTH_USER || "";
  const basicAuthPass = process.env.BASIC_AUTH_PASS || "";

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const base64Credentials = authHeader.split(" ")[1];
    const [user, pass] = decodeBase64(base64Credentials).split(":");

    if (user === basicAuthUser && pass === basicAuthPass) {
      return NextResponse.next();
    }
  }

  return new Response("Hello from middleware", { status: 200 });

//   return new NextResponse("Authentication required", {
//     status: 401,
//     headers: {
//       "WWW-Authenticate": 'Basic realm="Secure Area"',
//     },
//   });
}

export const config = {
  matcher: ["/", "/((?!_next|api|favicon.ico|assets).*)"],
};