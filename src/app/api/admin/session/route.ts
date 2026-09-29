import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/admin-auth";

function sessionValue() {
  const secret = process.env.MERIDIAN_ADMIN_KEY;
  if (!secret) return null;
  const payload = "authenticated";
  const bytes = new TextEncoder().encode(`${payload}.${secret}`);
  return crypto.subtle.digest("SHA-256", bytes).then((digest) => `${payload}.${Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("")}`);
}

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const authenticated = cookie.includes(`${COOKIE_NAME}=authenticated.`);
  return NextResponse.json({ authenticated });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const expected = process.env.MERIDIAN_ADMIN_KEY;
  if (!expected || typeof body.key !== "string" || body.key !== expected) return NextResponse.json({ authenticated: false, error: "Invalid admin credentials." }, { status: 401 });
  const value = await sessionValue();
  if (!value) return NextResponse.json({ authenticated: false, error: "Admin authentication is not configured." }, { status: 503 });
  const response = NextResponse.json({ authenticated: true });
  response.cookies.set(COOKIE_NAME, value, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 8 });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(COOKIE_NAME, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 0 });
  return response;
}
