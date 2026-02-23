import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal-template";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalTemplate title="Refund Policy" updated="February 23, 2026">
      <p>Refund eligibility depends on the plan type and signed commercial agreement.</p>
      <h2>1. Subscription Plans</h2>
      <p>Monthly and annual subscriptions are generally non-refundable after billing cycle initiation unless required by law.</p>
      <h2>2. Enterprise Contracts</h2>
      <p>Refunds, credits, and service remedies are governed by executed MSA/SOW terms.</p>
      <h2>3. Billing Disputes</h2>
      <p>Billing disputes should be raised within 30 days of invoice date at hello@aisimplified.co.in.</p>
    </LegalTemplate>
  );
}
