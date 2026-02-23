import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const features = [
  ["Human-like AI Voices", "Natural prosody, emotional range, and contextual delivery for lifelike conversations."],
  ["Ultra Low Latency", "Streaming architecture optimized for real-time interactions across channels."],
  ["Multi-language Support", "Deliver global voice experiences with multilingual agent behavior."],
  ["Agentic AI Framework", "Design autonomous flows with memory, actions, and governance."],
  ["Enterprise Scale Deployment", "Run thousands of concurrent sessions across regions with observability."],
  ["Secure & Compliant", "Enterprise controls with auditability, privacy protections, and access control."]
];

const useCases = ["Customer Support Automation", "BFSI", "E-commerce", "Healthcare", "Education", "Government"];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-8">
      <AnimatedSection className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-16 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:px-10 lg:px-14">
        <div className="absolute inset-0 -z-0 bg-gradient-to-br from-ai-100/50 via-transparent to-accent-500/10 dark:from-ai-900/30" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ai-600 dark:text-ai-300">Voice-First AI Infrastructure</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
            Build Intelligent AI Voice Agents. <span className="gradient-text">Scale Without Limits.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Human-like voices. Low latency. Enterprise scale. Agentic AI training.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.playgroundUrl} external>
              Build Your Agent
            </ButtonLink>
            <ButtonLink href={siteConfig.playgroundUrl} variant="secondary" external>
              Explore Playground
            </ButtonLink>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading eyebrow="Core Features" title="Built for enterprise reliability and developer velocity" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, text]) => (
            <article key={title} className="surface-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading eyebrow="How It Works" title="Go from prototype to global deployment in three steps" center />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Step 1: Choose Voice", "Step 2: Train Agent", "Step 3: Deploy at Scale"].map((step, i) => (
            <div key={step} className="surface-card rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ai-600">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading eyebrow="Use Cases" title="Adopted across high-impact enterprise domains" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading eyebrow="Trusted By" title="Built for teams that run mission-critical operations" />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="surface-card rounded-2xl p-6">
            <p className="text-sm italic text-slate-600 dark:text-slate-300">
              &ldquo;AISimplified reduced average support call resolution time by 42% while increasing CSAT with human-like voice quality.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium">VP Customer Experience, Enterprise Retail Brand</p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <p className="text-sm italic text-slate-600 dark:text-slate-300">
              &ldquo;The deployment model and governance controls gave us confidence to launch AI voice across regulated workflows.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium">Director of Innovation, BFSI Group</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="rounded-lg border border-dashed border-slate-300 bg-white px-3 py-4 text-center text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-900">
              Trusted Logo {idx + 1}
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CtaBanner title="Start Building Smarter Voice Agents Today." description="AISimplified is your scalable AI infrastructure layer for voice-first enterprise automation and agentic AI capability building." />
    </div>
  );
}
