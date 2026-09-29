import { NextResponse } from "next/server";
import { COOKIE_NAME, createAdminSessionValue } from "@/lib/admin-auth";

export async function GET(request: Request) {
  const secret = process.env.MERIDIAN_ADMIN_KEY;
  if (!secret) return NextResponse.json({ authenticated: false }, { status: 503 });
  const cookie = request.headers.get("cookie") ?? "";
  const expected = await createAdminSessionValue(secret);
  const authenticated = cookie.split(";").some((part) => part.trim() === `${COOKIE_NAME}=${expected}`);
  return NextResponse.json({ authenticated });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const expected = process.env.MERIDIAN_ADMIN_KEY;
  if (!expected) return NextResponse.json({ authenticated: false, error: "Admin authentication is not configured." }, { status: 503 });
  if (typeof body.key !== "string" || body.key !== expected) return NextResponse.json({ authenticated: false, error: "Invalid admin credentials." }, { status: 401 });

  const response = NextResponse.json({ authenticated: true });
  response.cookies.set(COOKIE_NAME, await createAdminSessionValue(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
