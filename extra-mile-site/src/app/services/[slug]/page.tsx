import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { industries } from "@/content/industries";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const usedBy = industries.filter((i) => i.services.includes(s.slug));
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={serviceLd({ name: s.name, description: s.metaDescription, path })} />
      <PageHeader
        crumbs={[
          { name: "What we take on", path: "/services" },
          { name: s.name, path },
        ]}
        title={s.h1}
        intro={s.intro}
      />

      <section className="container-page grid gap-6 md:grid-cols-2">
        <div className="ruled rounded-sm border border-ink/25 p-6 md:p-8">
          <h2 className="text-xl">You give</h2>
          <p className="mt-2 font-hand text-[1.6rem] leading-8">{s.youGive}</p>
        </div>
        <div className="rounded-sm border-2 border-ink bg-sheet p-6 shadow-[5px_5px_0_var(--color-ink)] md:p-8">
          <h2 className="text-xl">You get back</h2>
          <p className="mt-3 text-lg">{s.youGetBack}</p>
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="measure space-y-10">
          {s.body.map((b) => (
            <div key={b.heading}>
              <h2 className="text-[1.6rem]">{b.heading}</h2>
              <p className="mt-3 text-ink-soft">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {usedBy.length > 0 ? (
        <section className="container-page mt-16">
          <h2 className="text-[1.6rem]">Who hands this off most</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {usedBy.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="inline-block rounded border-2 border-ink bg-sheet px-4 py-2 font-semibold hover:bg-canary-soft"
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="container-page mt-16">
        <h2 className="text-[1.6rem]">Fair questions about {s.name.toLowerCase()}</h2>
        <div className="mt-6 max-w-3xl">
          <FaqList faqs={s.faqs} withSchema />
        </div>
      </section>

      <section className="container-page mt-16">
        <h2 className="text-[1.6rem]">Other work we take on</h2>
        <ul className="mt-5 grid gap-x-10 border-t-2 border-ink md:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug} className="border-b border-rule py-5">
              <Link href={`/services/${o.slug}`} className="font-slab text-xl font-semibold hover:text-rust-deep hover:underline">
                {o.name}
              </Link>
              <p className="mt-1 text-ink-soft">{o.short}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
