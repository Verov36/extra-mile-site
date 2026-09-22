import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * The old site blocked every crawler, which is why it could not be found in
 * search at all. This one welcomes search engines and AI assistants and only
 * keeps them out of the form endpoint and the thank-you page.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/claim-a-spot/thanks"] }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
