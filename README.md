# Syncore Website

Syncore — Your Digital Partners.

This is a production-ready Next.js App Router website scaffold for Syncore, built with TypeScript, Tailwind CSS, ESLint, and lightweight client-side interactions only where needed.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- lucide-react icons
- Static/SSR-friendly structure
- Lazy-loaded AI chat placeholder
- Lazy-loaded Calendly iframe

## Setup

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open http://localhost:3000.

Production checks:

```bash
npm run lint
npm run build
```

## Environment Variables

Create `.env.local` for local overrides. The site works without these values, but production should set them in Vercel.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
```

Future contact/email integrations should use server-only environment variables, not `NEXT_PUBLIC_` keys. Add those only when an email provider, CRM, or Google Sheet integration is implemented.

## Editing Content

Most editable content and placeholders live in:

```text
src/lib/site.ts
```

Edit this file for:

- Brand name, tagline, and colors
- Email, WhatsApp, and Calendly placeholders
- Social links
- Navigation and legal links
- Services
- Work/case-study placeholder data
- Trust-strip placeholder logo labels
- Testimonials
- Contact form dropdown options
- Privacy and terms placeholder copy
- SEO metadata
- Organization and LocalBusiness schema details

The testimonials array is intentionally empty. The testimonials section hides automatically until real testimonials are added.

The trust strip uses clearly labeled placeholder logo pills. Replace them with real client logos only after permission is available.

## Project Structure

```text
src/
  app/
  components/
    layout/
    sections/
      contact/
      home/
      work/
  lib/
public/
  images/
  logos/
```

## Routes

- `/`
- `/services`
- `/work`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `not-found.tsx` handles missing pages
- `/sitemap.xml`
- `/robots.txt`

## Contact Form

The contact form posts JSON to:

```text
src/app/api/contact/route.ts
```

The route validates required fields, rejects invalid email addresses, checks the honeypot field, and returns JSON responses. Development logging is intentionally limited to the cleaned lead object.

Production TODOs are marked in the route for:

- Email delivery
- Google Sheet or CRM storage
- Analytics events

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Set the production environment variables listed above.
4. Confirm the build command is `npm run build`.
5. Deploy.
6. After deployment, submit `/sitemap.xml` in Google Search Console.

Before launch, replace placeholder contact details, social links, Calendly URL, legal copy, business address, and any work/testimonial data in `src/lib/site.ts`.
