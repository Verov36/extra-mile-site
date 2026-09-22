# Extra Mile website

Marketing site for Extra Mile (goextramile.tech), rebuilt so search engines and AI assistants
can find it. Next.js 16 App Router, TypeScript, Tailwind 4, Zod. Every page is statically
rendered except the sign-up form endpoint.

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run build      # production build, 43 routes
```

## Deploy (Vercel)

1. Push this folder to a new GitHub repo and import it in Vercel.
2. Set the environment variables from `.env.example`. `RESEND_API_KEY` and `LEAD_FROM_EMAIL`
   are required in production. Without them the form tells visitors to call instead of
   silently dropping the sign-up.
3. Point `goextramile.tech` at the project.
4. Work through `docs/SEO-PLAYBOOK.md`, starting with the launch checklist.

## Before launch: things only Tyler can confirm

| What | Where | Why |
| --- | --- | --- |
| Starter cities | `src/content/locations.ts` | Inferred from the (386) area code. The live site only says "the Southeast". |
| FAQ answers | `src/content/faqs.ts` | The answers were collapsed in the screenshots, so they were written from facts elsewhere on the page. |
| Contact options and "heard about us" options | `src/lib/lead.ts` | Only some options were visible in the screenshots. |
| Privacy page | `src/app/privacy/page.tsx` | A plain-language draft. Needs a real review. |
| Whether the phone takes texts | `src/app/claim-a-spot/print/page.tsx` | The paper form currently says to email the photo. |
| Social and listing URLs | `sameAs` in `src/content/site.ts` | Feeds the organization schema. |

Nothing on the site is invented: no fake testimonials, prices, addresses or customer counts.
Keep it that way. The survey is reported as seven respondents because that is what it was.

## Where things live

```
src/content/     All copy and business facts. Edit here, not in page files.
  site.ts        Name, phone, email, founder, states served, nav
  services.ts    The five services (each becomes /services/[slug])
  industries.ts  Six trades (each becomes /industries/[slug])
  locations.ts   Towns (each becomes /areas/[slug])
  faqs.ts        FAQ page and FAQ schema
  posts.ts       Blog posts
src/lib/seo.ts   Metadata builder and JSON-LD builders
src/lib/lead.ts  Sign-up form schema, shared by the browser and the API route
src/app/         Routes, plus sitemap.ts, robots.ts, llms.txt, opengraph-image.tsx
```

Adding a town, trade, service or post is one new object in the matching content file. The
page, sitemap entry, internal links, schema and llms.txt entry are generated from it.

## What is built in for search

- One canonical URL, title and description per page through `pageMetadata()`
- JSON-LD: ProfessionalService and WebSite sitewide, Service on service, trade and town
  pages, FAQPage wherever questions appear, BreadcrumbList on every inner page, BlogPosting
  on articles
- `sitemap.xml`, an open `robots.txt` (the old site blocked all crawlers), and `/llms.txt`
- Server-rendered HTML with FAQ answers in the markup, so crawlers that do not run
  JavaScript still read everything
- Self-hosted fonts, no third-party scripts, no layout shift from late-loading assets
- The sign-up form works without JavaScript and has a printable paper version
