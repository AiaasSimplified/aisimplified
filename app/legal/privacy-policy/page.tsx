import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal-template";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalTemplate title="Privacy Policy" updated="February 23, 2026">
      <p>AISimplified collects only data necessary to deliver, secure, and improve our services.</p>
      <h2>1. Data We Collect</h2>
      <p>Account details, usage telemetry, support communications, and optional voice interaction records where contractually enabled.</p>
      <h2>2. Purpose of Processing</h2>
      <p>Service delivery, reliability monitoring, security protection, fraud prevention, legal compliance, and customer support.</p>
      <h2>3. Lawful Basis (GDPR)</h2>
      <p>Contractual necessity, legitimate interests, legal obligations, and consent where required.</p>
      <h2>4. Data Retention</h2>
      <p>Data is retained according to contractual obligations and deletion schedules; customers may request deletion subject to legal constraints.</p>
      <h2>5. Security</h2>
      <p>We apply encryption in transit, controlled access, logging, and periodic security reviews.</p>
      <h2>6. International Transfers</h2>
      <p>Where cross-border transfer occurs, AISimplified uses approved safeguards such as SCCs.</p>
      <h2>7. Your Rights</h2>
      <p>Users may request access, correction, deletion, portability, or objection to specific processing.</p>
      <h2>8. Contact</h2>
      <p>For privacy requests: alok@aisimplified.co.in</p>
    </LegalTemplate>
  );
}
