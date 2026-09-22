import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocation, locations } from "@/content/locations";
import { getIndustry } from "@/content/industries";
import { services } from "@/content/services";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Promises } from "@/components/Promises";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => locations.map((l) => ({ slug: l.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return pageMetadata({
    title: `Small Business Admin Help in ${l.city}, ${l.stateAbbr}`,
    description: l.metaDescription,
    path: `/areas/${l.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();

  const path = `/areas/${l.slug}`;
  const trades = l.industries.map(getIndustry).filter((i) => i !== undefined);
  const nearby = l.nearby.map(getLocation).filter((n) => n !== undefined);

  return (
    <>
      <JsonLd
        data={serviceLd({
          name: `Small business administrative support in ${l.city}, ${l.stateAbbr}`,
          description: l.metaDescription,
          path,
          areaServed: [{ type: "City", name: `${l.city}, ${l.state}` }],
        })}
      />
      <PageHeader
        crumbs={[
          { name: "Areas we serve", path: "/areas" },
          { name: `${l.city}, ${l.stateAbbr}`, path },
        ]}
        title={`Paperwork help for ${l.city} business owners`}
        intro={l.intro}
      >
        <Promises className="mt-8" />
      </PageHeader>

      <section className="container-page">
        <div className="measure space-y-10">
          {l.local.map((b) => (
            <div key={b.heading}>
              <h2 className="text-[1.6rem]">{b.heading}</h2>
              <p className="mt-3 text-ink-soft">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <h2 className="text-[1.6rem]">What {l.city} owners hand off</h2>
        <ul className="mt-5 grid gap-x-10 border-t-2 border-ink md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="border-b border-rule py-5">
              <Link href={`/services/${s.slug}`} className="font-slab text-xl font-semibold hover:text-rust-deep hover:underline">
                {s.name}
              </Link>
              <p className="mt-1 text-ink-soft">{s.short}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[1.6rem]">Trades this fits in {l.county}</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {trades.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/industries/${t.slug}`}
                  className="inline-block rounded border-2 border-ink bg-sheet px-4 py-2 font-semibold hover:bg-canary-soft"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {nearby.length > 0 ? (
          <div>
            <h2 className="text-[1.6rem]">Nearby towns</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/areas/${n.slug}`}
                    className="inline-block rounded border-2 border-ink bg-sheet px-4 py-2 font-semibold hover:bg-canary-soft"
                  >
                    {n.city}, {n.stateAbbr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <CtaBand
        title={`Claim a founding spot in ${l.city}`}
        text="30 days free. No card, no payment info, nothing to cancel. Then one flat monthly rate with a founders' discount you keep forever."
      />
    </>
  );
}
