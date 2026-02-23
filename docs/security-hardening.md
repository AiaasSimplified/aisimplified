# Security Hardening Checklist

## Current implementation
- Security headers via `middleware.ts`
- Contact endpoint honeypot + in-memory rate limiting
- Basic server-side validation for contact submissions

## Production recommendations
1. Replace in-memory rate limiter with shared store (Redis/Upstash/KV) for multi-instance consistency.
2. Add CAPTCHA or Turnstile for public contact forms.
3. Integrate secure transactional provider (SES/Resend) with signed webhooks.
4. Add centralized audit logging and alerting for abuse spikes.
5. Configure strict CSP and HSTS at edge/load balancer.
6. Add WAF rules for common bot and injection patterns.
7. Enable Sentry (or equivalent) with PII-safe scrubbing.
8. Run dependency and container scans in CI (npm audit, SCA tool).
9. Enforce secret management via platform vault and rotate keys regularly.
10. Add DPA/SOC2 mapping artifacts for enterprise procurement.
