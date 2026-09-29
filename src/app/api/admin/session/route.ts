import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/admin-auth";

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const authenticated = cookie.split(";").some((part) => part.trim() === `${COOKIE_NAME}=authenticated`);
  return NextResponse.json({ authenticated });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const expected = process.env.MERIDIAN_ADMIN_KEY;
  if (!expected || typeof body.key !== "string" || body.key !== expected) {
    return NextResponse.json({ authenticated: false, error: "Invalid admin credentials." }, { status: 401 });
  }
  const response = NextResponse.json({ authenticated: true });
  response.cookies.set(COOKIE_NAME, "authenticated", {
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
  response.cookies.set(COOKIE_NAME, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 0 });
  return response;
}
