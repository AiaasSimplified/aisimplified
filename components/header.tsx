"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { SiteLogo } from "@/components/site-logo";
import { ButtonLink } from "@/components/button-link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/75">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <SiteLogo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <ButtonLink href={siteConfig.playgroundUrl} variant="ghost" external>
            Sign In
          </ButtonLink>
          <ButtonLink href={siteConfig.playgroundUrl} external>
            Sign Up
          </ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm md:hidden dark:border-slate-700"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 px-4 py-4 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <ThemeToggle />
              <ButtonLink href={siteConfig.playgroundUrl} variant="ghost" external>
                Sign In
              </ButtonLink>
              <ButtonLink href={siteConfig.playgroundUrl} external>
                Sign Up
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
