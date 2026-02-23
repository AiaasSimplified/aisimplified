import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Platform",
  description: "AI Voice Engine, voice customization, agent builder, APIs, and enterprise-grade scaling architecture."
};

const modules = [
  ["AI Voice Engine", "Neural voice synthesis optimized for natural prosody, interruption handling, and dynamic emphasis."],
  ["Voice Customization", "Define persona, speaking style, emotion profiles, and domain lexicon tuning for each use case."],
  ["Agent Builder", "Compose workflows, tool integrations, memory policies, fallback behavior, and escalation logic."],
  ["API Integration", "REST + streaming APIs and webhook orchestration for CRM, ERP, telephony, and internal systems."],
  ["Enterprise Deployment", "VPC options, region-aware routing, SSO, RBAC, observability pipelines, and SLA-backed reliability."],
  ["Scalability Architecture", "Auto-scaling runtime with queue isolation and fault-tolerant service mesh for global traffic."],
];

export default function PlatformPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Platform"
          title="Enterprise-grade AI voice platform for secure global deployment"
          description="AISimplified provides a complete voice agent stack from model layer to runtime orchestration and observability."
        />
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map(([title, text]) => (
            <article key={title} className="surface-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading eyebrow="Architecture" title="Reference deployment architecture" />
        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900">
          Architecture Diagram Placeholder: Edge Voice Gateway → ASR/TTS Layer → Agent Runtime → Enterprise Integrations → Observability + Governance
        </div>
      </AnimatedSection>

      <CtaBanner
        title="Deploy voice AI with confidence"
        description="Move from pilot to enterprise production with hardened platform controls and globally distributed runtime performance."
      />
    </div>
  );
}
