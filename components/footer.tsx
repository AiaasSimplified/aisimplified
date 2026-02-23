import Link from "next/link";
import { ManageCookiesLink } from "@/components/manage-cookies-link";
import { navLinks, siteConfig } from "@/lib/site";

const legal = [
  { label: "Privacy", href: "/legal/privacy-policy" },
  { label: "Terms", href: "/legal/terms-and-conditions" },
  { label: "Cookies", href: "/legal/cookie-policy" },
  { label: "Refund", href: "/legal/refund-policy" },
  { label: "Data Protection", href: "/legal/data-protection-policy" }
];

export function Footer() {
  const emails = Array.from(new Set(siteConfig.contactEmails));

  return (
    <footer className="border-t border-slate-200 bg-white/70 py-10 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">AISimplified</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">AI Agents & Voice Agent Platform for enterprise scale.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            {emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {legal.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <ManageCookiesLink />
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} AISimplified. All rights reserved.</p>
      </div>
    </footer>
  );
}
