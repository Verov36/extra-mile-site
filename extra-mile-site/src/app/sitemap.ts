import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, lastModified: Date = now) => ({
    url: abs(path),
    lastModified,
    priority,
  });

  return [
    page("/", 1),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/how-it-works", 0.8),
    page("/founding-members", 0.8),
    page("/claim-a-spot", 0.8),
    page("/industries", 0.7),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.7)),
    page("/areas", 0.7),
    ...locations.map((l) => page(`/areas/${l.slug}`, 0.7)),
    page("/about", 0.6),
    page("/faq", 0.6),
    page("/blog", 0.5),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.5, new Date(`${p.date}T12:00:00Z`))),
    page("/claim-a-spot/print", 0.3),
    page("/privacy", 0.2),
  ];
}
