import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/content/industries";
import { getService } from "@/content/services";
import { locations } from "@/content/locations";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => industries.map((i) => ({ slug: i.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return pageMetadata({ title: i.metaTitle, description: i.metaDescription, path: `/industries/${i.slug}` });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();

  const path = `/industries/${i.slug}`;
  const linked = i.services.map(getService).filter((s) => s !== undefined);
  const towns = locations.filter((l) => l.industries.includes(i.slug));

  return (
    <>
      <JsonLd
        data={serviceLd({
          name: `Administrative support for ${i.name.toLowerCase()}`,
          description: i.metaDescription,
          path,
          audience: i.name,
        })}
      />
      <PageHeader
        crumbs={[
          { name: "Who it's for", path: "/industries" },
          { name: i.name, path },
        ]}
        title={i.h1}
        intro={i.intro}
      />

      <section className="container-page">
        <ul className="grid gap-6 md:grid-cols-3">
          {i.pains.map((p) => (
            <li key={p.heading} className="rounded border-2 border-ink bg-sheet p-6">
              <h2 className="text-[1.3rem]">{p.heading}</h2>
              <p className="mt-3 text-ink-soft">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page mt-16">
        <div className="ruled measure rounded-sm border border-ink/25 p-6 md:p-8">
          <h2 className="text-xl">What a day looks like</h2>
          <p className="mt-2 font-hand text-[1.6rem] leading-8">{i.scenario}</p>
        </div>
      </section>

      <section className="container-page mt-16">
        <h2 className="text-[1.6rem]">Where {i.name.toLowerCase()} usually start</h2>
        <ul className="mt-5 border-t-2 border-ink">
          {linked.map((s) => (
            <li key={s.slug} className="border-b border-rule py-5">
              <Link href={`/services/${s.slug}`} className="font-slab text-xl font-semibold hover:text-rust-deep hover:underline">
                {s.name}
              </Link>
              <p className="measure mt-1 text-ink-soft">{s.short}</p>
            </li>
          ))}
        </ul>
      </section>

      {towns.length > 0 ? (
        <section className="container-page mt-16">
          <h2 className="text-[1.6rem]">Towns we serve</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {towns.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/areas/${t.slug}`}
                  className="inline-block rounded border-2 border-ink bg-sheet px-4 py-2 font-semibold hover:bg-canary-soft"
                >
                  {t.city}, {t.stateAbbr}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
