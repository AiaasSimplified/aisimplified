import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", external = false, className = "" }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-400";
  const styles =
    variant === "primary"
      ? "bg-ai-600 text-white hover:bg-ai-500"
      : variant === "secondary"
        ? "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        : "text-ai-700 hover:bg-ai-50 dark:text-ai-300 dark:hover:bg-ai-900/30";

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`.trim()}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
