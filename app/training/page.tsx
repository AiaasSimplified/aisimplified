import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agentic AI Training & Upskilling",
  description: "Upskill teams with AI agent development, voice AI specialization, certification tracks, and enterprise workshops."
};

const modules = [
  "Foundations of Agentic AI",
  "Voice Agent Architecture",
  "Prompting, Memory, and Tool Calling",
  "Enterprise AI Governance",
  "Evaluation and Observability",
  "Production Deployment Patterns"
];

const offerings = [
  "AI Agent Development training",
  "Voice AI specialization",
  "Enterprise AI upskilling",
  "Certification programs",
  "Hands-on workshops",
  "Corporate training cohorts"
];

export default function TrainingPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Training"
          title="Agentic AI training programs for enterprise teams"
          description="Build deep internal capability across voice AI architecture, secure deployment, and agent system design."
        />
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Program Tracks</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {offerings.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Course Modules</h3>
            <ol className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {modules.map((item, idx) => (
                <li key={item}>{idx + 1}. {item}</li>
              ))}
            </ol>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="surface-card rounded-3xl p-8">
        <h3 className="text-2xl font-semibold">Enrollment</h3>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Enroll individuals or entire business units. Programs are delivered virtually or on-site with enterprise-ready assessments.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.playgroundUrl} external>
            Apply for Training
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Talk to Program Team
          </ButtonLink>
        </div>
      </AnimatedSection>
    </div>
  );
}
