import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal-template";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalTemplate title="Terms & Conditions" updated="February 23, 2026">
      <p>These terms govern access to and use of AISimplified services.</p>
      <h2>1. Service Access</h2>
      <p>Access is provided under subscription or enterprise agreement terms and may require account verification.</p>
      <h2>2. Acceptable Use</h2>
      <p>Users must not misuse services, perform unlawful activity, bypass safeguards, or violate third-party rights.</p>
      <h2>3. Intellectual Property</h2>
      <p>AISimplified retains platform IP rights. Customer data and custom configurations remain owned by the customer as defined by contract.</p>
      <h2>4. Confidentiality</h2>
      <p>Both parties agree to protect confidential information and restrict unauthorized disclosure.</p>
      <h2>5. Warranty Disclaimer</h2>
      <p>Services are provided as agreed in the applicable order form or MSA; additional warranties are disclaimed to the extent permitted by law.</p>
      <h2>6. Limitation of Liability</h2>
      <p>Liability is limited in accordance with governing contract terms and applicable law.</p>
      <h2>7. Termination</h2>
      <p>Accounts may be suspended for violations, non-payment, or legal obligations, with reasonable notice where applicable.</p>
    </LegalTemplate>
  );
}
