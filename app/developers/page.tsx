import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Developers",
  description: "Developer-first API, SDK access, code examples, integration guides, and playground access."
};

const guides = [
  "Quickstart: Build your first voice agent in 10 minutes",
  "Connect telephony providers and webhook routing",
  "Integrate CRM and ticketing platforms",
  "Implement observability and policy guardrails"
];

const codeSample = `import { AgentClient } from "@aisimplified/sdk";

const client = new AgentClient({ apiKey: process.env.AI_API_KEY! });

await client.agents.create({
  name: "support-agent",
  voice: "aria-pro",
  language: "en-IN",
  tools: ["crm.lookup", "tickets.create"]
});`;

export default function DevelopersPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Developers"
          title="Build and ship production voice agents with API-first workflows"
          description="Use SDKs, APIs, and deployment guides to integrate AI voice agents directly into your product stack."
        />
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">API Documentation Preview</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">REST and streaming endpoints for agent lifecycle, voice runtime, analytics, and policy controls.</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-100"><code>{codeSample}</code></pre>
          </div>
          <div className="space-y-4">
            <div className="surface-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold">SDK Access</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">TypeScript-first SDK with typed resources, retries, and streaming helpers.</p>
            </div>
            <div className="surface-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Integration Guides</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {guides.map((guide) => (
                  <li key={guide}>• {guide}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="surface-card rounded-3xl p-8">
        <h3 className="text-2xl font-semibold">Start in Playground</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Prototype voice interactions, inspect logs, and iterate before production rollout.</p>
        <div className="mt-6">
          <ButtonLink href={siteConfig.playgroundUrl} external>
            Open Playground
          </ButtonLink>
        </div>
      </AnimatedSection>
    </div>
  );
}
