import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "meridian_admin_session";

async function isValidSession(value: string | undefined) {
  const secret = process.env.MERIDIAN_ADMIN_KEY;
  if (!secret || !value) return false;
  const [payload, signature] = value.split(".");
  if (!payload || !signature) return false;
  const data = new TextEncoder().encode(`${payload}.${secret}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const expected = Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return signature === expected && payload === "authenticated";
}

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin") || request.nextUrl.pathname === "/admin/login") return NextResponse.next();
  const valid = await isValidSession(request.cookies.get(COOKIE_NAME)?.value);
  if (valid) return NextResponse.next();
  const login = new URL("/admin/login", request.url);
  login.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(login);
}

export const config = { matcher: ["/admin/:path*"] };
