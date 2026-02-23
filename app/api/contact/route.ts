import { NextRequest, NextResponse } from "next/server";

type Entry = { count: number; resetAt: number };

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;
const memoryRateLimit = new Map<string, Entry>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = memoryRateLimit.get(ip);

  if (!current || current.resetAt < now) {
    memoryRateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) return true;

  current.count += 1;
  memoryRateLimit.set(ip, current);
  return false;
}

function redirectWithStatus(request: NextRequest, status: string) {
  const url = request.nextUrl.clone();
  url.pathname = "/contact";
  url.search = "";
  url.searchParams.set("status", status);
  return NextResponse.redirect(url);
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) return redirectWithStatus(request, "rate_limited");

  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  if (honeypot) return redirectWithStatus(request, "spam_blocked");
  if (!name || !email || !message || !email.includes("@")) return redirectWithStatus(request, "invalid");

  // Replace with transactional email/CRM integration in production.
  console.info("New contact form submission", { name, email, company, messageLength: message.length });
  return redirectWithStatus(request, "ok");
}
