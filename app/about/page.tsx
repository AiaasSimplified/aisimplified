import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn the mission and vision behind AISimplified, the enterprise voice-first AI platform."
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection>
        <SectionHeading
          eyebrow="About AISimplified"
          title="A voice-first AI future platform for enterprises and developers"
          description="AISimplified is not just another AI tool. We are building scalable AI infrastructure for the next generation of conversational systems."
        />
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Vision</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Enable every enterprise to operate with intelligent, reliable, and human-like AI agents.</p>
          </article>
          <article className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Deliver a secure, scalable platform that turns voice AI and agentic automation into business outcomes.</p>
          </article>
          <article className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Why AISimplified</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We unify product, platform, and upskilling into one execution layer for enterprise AI transformation.</p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="surface-card rounded-3xl p-8">
        <h3 className="text-2xl font-semibold">Leadership Team</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Team Placeholder: Add leadership bios, credentials, and regional offices.</p>
        <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">Contact: {siteConfig.contactEmails.join(" | ")}</p>
      </AnimatedSection>
    </div>
  );
}
