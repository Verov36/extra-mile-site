import Link from "next/link";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "Who Extra Mile Is For: Trades and Local Service Businesses",
  description:
    "Plumbers, HVAC contractors, electricians, landscapers, remodelers and auto shops hand their quotes, reviews and paperwork to Extra Mile.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Who it's for", path: "/industries" }]}
        title="For owners who work with their hands and do paperwork with what's left"
        intro="Large and small businesses told us the same thing: the desk work is the part they would give up first. Here is how that looks trade by trade."
      />
      <section className="container-page">
        <ul className="grid gap-6 md:grid-cols-2">
          {industries.map((i) => (
            <li key={i.slug} className="rounded border-2 border-ink bg-sheet p-6 md:p-8">
              <h2 className="text-[1.5rem]">
                <Link href={`/industries/${i.slug}`} className="hover:text-rust-deep hover:underline">
                  {i.name}
                </Link>
              </h2>
              <p className="mt-3 text-ink-soft">{i.intro}</p>
            </li>
          ))}
        </ul>
        <p className="measure mt-10 text-ink-soft">
          Don&apos;t see your trade? The list is where we started, not where we stop. If you run a
          business in the Southeast and paperwork is eating your evenings,{" "}
          <Link href="/claim-a-spot" className="link">
            tell us what you do
          </Link>
          .
        </p>
      </section>
      <CtaBand />
    </>
  );
}
