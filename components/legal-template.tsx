import type { ReactNode } from "react";

type LegalTemplateProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalTemplate({ title, updated, children }: LegalTemplateProps) {
  return (
    <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Last updated: {updated}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{title}</h1>
      <div className="mt-6 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{children}</div>
    </article>
  );
}
