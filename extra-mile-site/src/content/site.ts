/**
 * Single source of truth for business facts.
 * Everything here came from the live goextramile.tech page. Change it here and
 * it updates in the header, footer, metadata, JSON-LD and llms.txt at once.
 */
export const site = {
  name: "Extra Mile",
  legalName: "Extra Mile",
  tagline: "Local help for busy businesses.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://goextramile.tech").replace(/\/$/, ""),
  description:
    "Extra Mile turns your job notes, photos and voice memos into finished quotes, review replies, inbox reports and social posts. One flat monthly price, a real person on the phone, and nothing goes out without your OK.",
  founder: {
    name: "Tyler Warner",
    title: "Founder of Extra Mile",
  },
  phone: {
    display: "(386) 243-5888",
    href: "tel:+13862435888",
    e164: "+13862435888",
  },
  email: "engagement@iwarner.com",
  // Where the service is sold. The live site says "a Southeastern business
  // serving Southeastern businesses", with founding spots open across North America.
  region: "the Southeast",
  areaServedStates: [
    "Florida",
    "Georgia",
    "Alabama",
    "South Carolina",
    "North Carolina",
    "Tennessee",
    "Mississippi",
    "Louisiana",
  ],
  offer: {
    short: "Founding members get 30 days free and a permanent founders' discount, while spots last.",
    trialDays: 30,
  },
  // Add profile URLs as they exist (Google Business Profile, Facebook, Nextdoor,
  // LinkedIn). They feed the `sameAs` field in the organization schema.
  sameAs: [] as string[],
} as const;

export const nav = [
  { href: "/services", label: "What we take on" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/industries", label: "Who it's for" },
  { href: "/founding-members", label: "Founding offer" },
  { href: "/about", label: "About" },
] as const;

export const footerNav = [
  { href: "/areas", label: "Areas we serve" },
  { href: "/faq", label: "Fair questions" },
  { href: "/blog", label: "Shop talk" },
  { href: "/claim-a-spot/print", label: "Paper sign-up form" },
  { href: "/privacy", label: "Privacy" },
] as const;
