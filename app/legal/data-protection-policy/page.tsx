import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal-template";

export const metadata: Metadata = { title: "Data Protection Policy" };

export default function DataProtectionPolicyPage() {
  return (
    <LegalTemplate title="Data Protection Policy" updated="February 23, 2026">
      <p>AISimplified follows a security-first and privacy-by-design model for customer data handling.</p>
      <h2>1. Governance</h2>
      <p>Defined ownership for data lifecycle management, controls validation, and incident response.</p>
      <h2>2. Data Classification</h2>
      <p>Customer data is categorized by sensitivity to enforce least-privilege access and handling controls.</p>
      <h2>3. Technical Controls</h2>
      <p>Encryption, authentication controls, logging, backup protections, and vulnerability management processes.</p>
      <h2>4. Vendor Management</h2>
      <p>Third-party subprocessors are assessed for security posture and contractual safeguards.</p>
      <h2>5. Incident Response</h2>
      <p>Security incidents are tracked, contained, and communicated according to contractual and regulatory obligations.</p>
    </LegalTemplate>
  );
}
