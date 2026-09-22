import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Faq } from "@/content/services";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Skip the " | Extra Mile" suffix (used on the home page) */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

export const abs = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

export function pageMetadata(m: PageMeta): Metadata {
  const title = m.absoluteTitle ? { absolute: m.title } : m.title;
  return {
    title,
    description: m.description,
    alternates: { canonical: m.path },
    robots: m.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.path,
      siteName: site.name,
      locale: "en_US",
      type: m.type ?? "website",
      ...(m.publishedTime ? { publishedTime: m.publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

/* ---------- JSON-LD builders ---------- */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    // ProfessionalService is a LocalBusiness subtype. No street address is
    // published, so the business is described by the area it serves instead.
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    telephone: site.phone.e164,
    email: site.email,
    founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.title },
    areaServed: site.areaServedStates.map((name) => ({ "@type": "State", name })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.e164,
      email: site.email,
      contactType: "customer support",
      availableLanguage: "English",
    },
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: { type: "City" | "State"; name: string }[];
  audience?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": ORG_ID },
    serviceType: "Administrative support for small businesses",
    areaServed: (
      opts.areaServed ?? site.areaServedStates.map((name) => ({ type: "State" as const, name }))
    ).map((a) => ({ "@type": a.type, name: a.name })),
    ...(opts.audience ? { audience: { "@type": "BusinessAudience", name: opts.audience } } : {}),
  };
}

export function articleLd(opts: { title: string; description: string; path: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    mainEntityOfPage: abs(opts.path),
    author: { "@type": "Organization", "@id": ORG_ID, name: site.name },
    publisher: { "@id": ORG_ID },
  };
}
