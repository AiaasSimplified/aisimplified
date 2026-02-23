export const pricingTiers = [
  {
    name: "Starter",
    price: "$49/mo",
    description: "For individual builders and early-stage teams.",
    features: ["1 voice agent", "5k monthly voice minutes", "Basic analytics", "Community support"]
  },
  {
    name: "Pro",
    price: "$299/mo",
    description: "For product teams shipping production workflows.",
    features: ["10 voice agents", "75k monthly voice minutes", "API access", "Priority support"]
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    description: "For regulated industries and global operations.",
    features: ["Unlimited agents", "Dedicated infrastructure", "SSO + RBAC", "SLA + compliance"]
  },
  {
    name: "Custom",
    price: "Usage-based",
    description: "For complex deployment and procurement models.",
    features: ["Custom voice packs", "Hybrid cloud deployment", "Dedicated TAM", "Custom legal terms"]
  }
];

export const apiUsageRows = [
  ["Speech-to-Text", "$0.010 / min", "Language-aware streaming ASR"],
  ["Text-to-Speech", "$0.014 / min", "Human-like voice rendering"],
  ["Agent Runtime", "$0.002 / turn", "Tool-enabled reasoning turns"],
  ["Telephony Bridge", "$0.008 / min", "Carrier-grade voice delivery"]
];
