import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { faqs } from "@/content/faqs";
import { abs } from "@/lib/seo";

export const dynamic = "force-static";

/** A plain-text summary for AI assistants, following the llms.txt convention. */
export function GET() {
  const lines = [
    `# ${site.name}`,
    ``,
    `> ${site.description}`,
    ``,
    `${site.name} is a Southeastern business serving Southeastern businesses, founded by ${site.founder.name}. Owners send job notes as text, photos or voice memos and get finished drafts back the same day. Every draft is approved by the owner before it is sent. Pricing is one flat monthly rate, month to month, with no contract. Founding members get 30 days free with no card on file and a permanent founders' discount. Founding status is open across North America.`,
    ``,
    `Contact: ${site.phone.display}, ${site.email}`,
    ``,
    `## Services`,
    ...services.map((s) => `- [${s.name}](${abs(`/services/${s.slug}`)}): ${s.short}`),
    ``,
    `## Who it is for`,
    ...industries.map((i) => `- [${i.name}](${abs(`/industries/${i.slug}`)}): ${i.metaDescription}`),
    ``,
    `## Areas served`,
    `States: ${site.areaServedStates.join(", ")}.`,
    ...locations.map((l) => `- [${l.city}, ${l.stateAbbr}](${abs(`/areas/${l.slug}`)})`),
    ``,
    `## Key pages`,
    `- [How it works](${abs("/how-it-works")})`,
    `- [Founding-member offer](${abs("/founding-members")})`,
    `- [Claim a spot](${abs("/claim-a-spot")})`,
    `- [About](${abs("/about")})`,
    ``,
    `## Common questions`,
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, ``]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
