import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal-template";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalTemplate title="Cookie Policy" updated="February 23, 2026">
      <p>This policy explains how AISimplified uses cookies and similar technologies.</p>
      <h2>1. Essential Cookies</h2>
      <p>Required for authentication, security, and basic platform operation.</p>
      <h2>2. Analytics Cookies</h2>
      <p>Used to understand service performance and user journeys, subject to regional consent requirements.</p>
      <h2>3. Preference Cookies</h2>
      <p>Store settings such as language or theme preferences.</p>
      <h2>4. Consent Management</h2>
      <p>Users can manage cookie preferences through browser settings or future in-product consent controls.</p>
    </LegalTemplate>
  );
}
