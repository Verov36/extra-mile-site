import Link from "next/link";
import { locations } from "@/content/locations";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "Areas We Serve Across the Southeast",
  description:
    "Extra Mile is a Southeastern business serving Southeastern businesses, with founding-member spots open across North America. See the towns we serve.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Areas we serve", path: "/areas" }]}
        title="A Southeastern business serving Southeastern businesses"
        intro="The work happens by text, photo and phone, so distance is not the limit. Being local is about answering the phone as a neighbor who knows how business gets done here."
      />
      <section className="container-page">
        <h2 className="text-[1.6rem]">Towns</h2>
        <ul className="mt-5 grid gap-x-10 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <li key={l.slug} className="border-b border-rule py-4">
              <Link href={`/areas/${l.slug}`} className="font-slab text-xl font-semibold hover:text-rust-deep hover:underline">
                {l.city}, {l.stateAbbr}
              </Link>
              <p className="text-[0.95rem] text-ink-soft">{l.county}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-[1.6rem]">States</h2>
        <p className="measure mt-3 text-ink-soft">
          {site.areaServedStates.join(", ")}. Founding-member status is open to business owners
          anywhere in North America.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
