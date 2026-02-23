import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">The requested page does not exist.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-ai-600 px-5 py-2 text-sm font-medium text-white">
        Go Home
      </Link>
    </div>
  );
}
