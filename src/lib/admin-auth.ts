import { cookies } from "next/headers";

const COOKIE_NAME = "meridian_admin_session";

export async function hasAdminSession() {
  const jar = await cookies();
  return jar.get(COOKIE_NAME)?.value === "authenticated";
}

export { COOKIE_NAME };
