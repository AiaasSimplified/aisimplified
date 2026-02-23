# AISimplified Website

Production-ready Next.js marketing website for AISimplified AI Agents & AI Voice Agent Platform.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

## Run
```bash
npm install
npm run dev
```

## Routes
- `/` Home
- `/platform`
- `/training`
- `/pricing`
- `/developers`
- `/blog`
- `/blog/[slug]`
- `/about`
- `/contact`
- `/legal/privacy-policy`
- `/legal/terms-and-conditions`
- `/legal/cookie-policy`
- `/legal/refund-policy`
- `/legal/data-protection-policy`
- `/sign-in` (redirect)
- `/sign-up` (redirect)

## SEO
- Metadata configured in `app/layout.tsx`
- Structured data in `lib/schema.ts`
- Dynamic sitemap `app/sitemap.ts`
- Robots rules `app/robots.ts`
- OpenGraph image route `app/opengraph-image.tsx`
- Web app manifest `app/manifest.ts`

## Security
- Security headers in `middleware.ts`
- Contact form anti-spam honeypot and in-memory rate limit in `app/api/contact/route.ts`
- For production, move rate limiting to Redis/edge KV and integrate secure email/CRM delivery.

## Brand Assets
- Logos and favicon in `public/brand` and `public/favicon.svg`
- PNG logo variants, social image, apple touch icon, and favicon ICO are included in `public/`
- Lightweight guidelines in `docs/brand-guidelines.md`
