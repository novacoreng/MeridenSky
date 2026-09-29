import { cookies } from "next/headers";

export const COOKIE_NAME = "meridian_admin_session";
const PAYLOAD = "authenticated";

async function signature(secret: string) {
  const bytes = new TextEncoder().encode(`${PAYLOAD}.${secret}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function createAdminSessionValue(secret: string) {
  return `${PAYLOAD}.${await signature(secret)}`;
}

export async function hasAdminSession() {
  const secret = process.env.MERIDIAN_ADMIN_KEY;
  if (!secret) return false;
  const value = (await cookies()).get(COOKIE_NAME)?.value ?? "";
  const expected = await createAdminSessionValue(secret);
  return value === expected;
}

export { signature };
