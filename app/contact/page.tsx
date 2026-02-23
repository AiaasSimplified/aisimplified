import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with AISimplified for enterprise AI voice platform and training programs."
};

const statusCopy: Record<string, string> = {
  ok: "Message received. Our team will contact you shortly.",
  invalid: "Please provide valid name, email, and message details.",
  spam_blocked: "Submission blocked by spam filter.",
  rate_limited: "Too many requests. Please retry after a minute."
};

export default function ContactPage({ searchParams }: { searchParams?: { status?: string } }) {
  const status = searchParams?.status;
  const emails = Array.from(new Set(siteConfig.contactEmails));

  return (
    <div className="space-y-12">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Contact"
          title="Talk to our team"
          description="Share your requirements and we will help you design the right AI voice and agentic AI strategy."
        />
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <form action="/api/contact" method="post" className="surface-card rounded-2xl p-6">
            {status ? (
              <p className="mb-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {statusCopy[status] ?? "Request processed."}
              </p>
            ) : null}
            <div className="grid gap-4">
              <label className="text-sm">
                Name
                <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900" />
              </label>
              <label className="text-sm">
                Email
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900" />
              </label>
              <label className="text-sm">
                Company
                <input name="company" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900" />
              </label>
              <label className="text-sm">
                Message
                <textarea name="message" required rows={5} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900" />
              </label>
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <button type="submit" className="rounded-full bg-ai-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ai-500">Send Message</button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="surface-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Contact Emails</h3>
              <div className="mt-3 space-y-1">
                {emails.map((email) => (
                  <p key={email} className="text-sm text-slate-600 dark:text-slate-300">
                    <a href={`mailto:${email}`} className="text-ai-700 underline-offset-4 hover:underline dark:text-ai-300">
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900">
              Google Map Placeholder
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
