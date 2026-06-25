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
- WhatsApp-first contact flow
- Floating WhatsApp chat button

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

Most editable content lives in:

```text
src/lib/site.ts
```

Edit this file for:

- Brand name, tagline, and colors
- Email and WhatsApp contact details
- Social links
- Navigation and legal links
- Services
- Work and case-study data
- Trust-strip logo assets
- Testimonials
- Contact form dropdown options
- Privacy and terms copy
- SEO metadata
- Organization and LocalBusiness schema details

The testimonials array is intentionally empty. The testimonials section hides automatically until real testimonials are added.

The trust strip uses local SVG logo assets so the page does not depend on third-party image delivery.

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

The contact form validates required fields in the browser, formats the lead details, and opens WhatsApp with the message prefilled for the configured Syncore number in `src/lib/site.ts`.

The legacy API route remains available at:

```text
src/app/api/contact/route.ts
```

Use it later if you add email delivery, Google Sheet storage, or CRM delivery.

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Set the production environment variables listed above.
4. Confirm the build command is `npm run build`.
5. Deploy.
6. After deployment, submit `/sitemap.xml` in Google Search Console.

Before launch, confirm the final domain in `NEXT_PUBLIC_SITE_URL`, verify contact details, and add real social profile links in `src/lib/site.ts` if Syncore wants them displayed.
