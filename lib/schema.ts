import { siteConfig } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/brand/logo-horizontal-dark.svg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmails[0],
        availableLanguage: ["English"]
      }
    ]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}
