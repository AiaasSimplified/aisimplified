import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ai-700 text-sm font-bold text-white">AI</span>
      <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">AISimplified</span>
    </Link>
  );
}
