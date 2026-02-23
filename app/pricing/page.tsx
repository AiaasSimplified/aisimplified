import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { apiUsageRows, pricingTiers } from "@/data/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flexible pricing tiers for startups, developers, and enterprise voice AI deployments."
};

export default function PricingPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible pricing for every stage of AI voice adoption"
          description="Choose a plan built for individual prototyping, production rollout, or enterprise-wide transformation."
        />
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pricingTiers.map((tier) => (
            <article key={tier.name} className="surface-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-2xl font-bold text-ai-700 dark:text-ai-300">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tier.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading eyebrow="Comparison" title="Feature comparison across tiers" />
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200 dark:border-slate-700">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">Capability</th>
                <th className="px-4 py-3 font-semibold">Starter</th>
                <th className="px-4 py-3 font-semibold">Pro</th>
                <th className="px-4 py-3 font-semibold">Enterprise</th>
                <th className="px-4 py-3 font-semibold">Custom</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Concurrent Agents", "1", "10", "Unlimited", "Unlimited"],
                ["Voice Cloning", "—", "Limited", "Advanced", "Advanced + Custom"],
                ["SSO / RBAC", "—", "—", "Included", "Included"],
                ["Dedicated Support", "Community", "Priority", "SLA", "Dedicated TAM"],
                ["Deployment Model", "Shared Cloud", "Shared Cloud", "Dedicated Cloud", "Hybrid / Private"]
              ].map((row) => (
                <tr key={row[0]} className="border-b border-slate-100 dark:border-slate-800">
                  {row.map((col) => (
                    <td key={`${row[0]}-${col}`} className="px-4 py-3">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading eyebrow="API Usage" title="Transparent usage-based API pricing" />
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200 dark:border-slate-700">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">Service</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {apiUsageRows.map((row) => (
                <tr key={row[0]} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      <AnimatedSection className="surface-card rounded-3xl p-8">
        <h3 className="text-2xl font-semibold">Need procurement-ready enterprise plans?</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Get custom legal, deployment, and governance options aligned with your organization.</p>
        <div className="mt-6 flex gap-3">
          <ButtonLink href="/contact">Contact Sales</ButtonLink>
          <ButtonLink href={siteConfig.playgroundUrl} variant="secondary" external>
            Try Playground
          </ButtonLink>
        </div>
      </AnimatedSection>
    </div>
  );
}
