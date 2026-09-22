# SEO playbook for Extra Mile

The code makes the site findable. These are the steps that make it found.

## 1. Launch checklist (do these in order)

1. **Remove the old robots.txt block.** The current site disallows every crawler, which is
   why goextramile.tech does not appear in Google at all. This repo ships an open one. After
   deploy, load `/robots.txt` and confirm it says `Allow: /`.
2. **Google Search Console.** Add the domain property, put the token in
   `GOOGLE_SITE_VERIFICATION`, submit `/sitemap.xml`, then use URL Inspection to request
   indexing for the home page and the five service pages.
3. **Bing Webmaster Tools.** Import from Search Console. Bing's index feeds several AI
   assistants, so this step matters more than Bing's market share suggests.
4. **Google Business Profile, if eligible.** Google only allows profiles for businesses
   that meet customers in person. If Tyler does setup visits at the customer's shop, create
   a service-area profile (address hidden), list the real service towns, and use the same
   name, phone and URL as `src/content/site.ts`, character for character. If the service is
   fully remote, skip this: an ineligible profile gets suspended, and the town pages plus
   Bing Places, Nextdoor and Facebook carry the local signal instead.
5. **Validate schema.** Run the home page, one service page and one town page through
   Google's Rich Results Test and validator.schema.org.
6. **Add profile URLs to `sameAs`** in `site.ts` as each one goes live.

## 2. Keyword map (one target per page, no overlaps)

| Page | Primary phrase | Also answers |
| --- | --- | --- |
| `/` | done for you admin help for small business | paperwork help for small business owners |
| `/services/quotes-and-proposals` | quote writing service for contractors | estimate writing service, proposal writing for small business |
| `/services/review-replies` | google review response service | yelp review reply service, respond to reviews for me |
| `/services/email-triage` | email management for small business owners | inbox management service |
| `/services/social-media-posts` | social media posts for local businesses | social captions for contractors |
| `/services/recurring-paperwork` | small business admin help | renewal reminders service, follow-up emails service |
| `/industries/plumbers` | admin help for plumbers | plumbing estimate writing |
| `/industries/hvac-contractors` | admin help for hvac contractors | hvac maintenance agreement renewals |
| `/industries/electricians` | admin help for electricians | electrical quote writing |
| `/industries/landscapers` | admin help for landscaping businesses | landscaping proposal writing |
| `/industries/general-contractors` | admin help for general contractors | remodeling proposal writing |
| `/industries/auto-repair-shops` | admin help for auto repair shops | auto shop review replies |
| `/areas/[town]` | small business admin help in [town] | virtual assistant for contractors [town] |
| `/founding-members` | (brand and offer searches) | extra mile founding member |

These are low-volume, high-intent phrases. Nobody is competing hard for "quote writing
service for contractors in Palm Coast", and the owner who types it is ready to buy. Check
real volumes in Search Console after 60 days and retarget pages that get impressions but
no clicks.

## 3. Town pages: the rule

A town page earns its place only if its `local` paragraphs could not be pasted onto another
town's page. Before adding one, write two true, specific things about doing business there.
If you cannot, do not add the page. Ten real pages beat fifty swapped-name pages, which
Google treats as doorway spam.

## 4. Reviews and proof (the biggest gap right now)

The site has no testimonials because there are no customers yet, and it does not fake any.
As founding members come on:

- Ask each one for a Google review at the end of the free month.
- With permission, add a `testimonials.ts` content file and show two or three on the home
  page and the matching trade page, with first name, business and town.
- Replace the hero's example quote with a real before-and-after from a member who agrees.
- Do NOT add `aggregateRating` schema for reviews collected on your own site. Google
  ignores self-serving review markup for local businesses and it can trigger a manual action.

## 5. Off-site, in order of payoff

1. Google Business Profile (if eligible, see above), with weekly posts that reuse the blog.
2. Nextdoor business page and Facebook page. The sign-up form already asks about both, so
   you will learn which one works.
3. Local chambers of commerce in the first two or three target towns. The member-directory
   link is a genuine local citation.
4. Supply houses and trade associations where your customers already are. A flyer with a QR
   code to `/claim-a-spot/print` fits the brand.
5. Consistent name, phone and URL everywhere. Mismatched listings are the most common
   reason a local business fails to rank.

## 6. Being the answer in AI assistants

- `/llms.txt` gives assistants a clean summary. It regenerates from the content files.
- FAQ answers are written as complete sentences that make sense when quoted alone.
- Keep facts consistent across the site, the Business Profile and social pages. Assistants
  cross-check, and contradictions lower confidence.
- Third-party mentions carry the most weight: a chamber listing, a local news piece about a
  founder building tech for tradespeople, a guest spot on a trades podcast.

## 7. Monthly routine (30 minutes)

- Search Console: which queries show impressions with no clicks? Rewrite that page's title
  and description.
- Publish one article from `CONTENT-BRIEFS.md`.
- Add any new town or trade that a real customer came from.
