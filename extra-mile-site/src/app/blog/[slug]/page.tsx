import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/posts";
import { articleLd, pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMetadata({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    type: "article",
    publishedTime: p.date,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}`;

  return (
    <>
      <JsonLd data={articleLd({ title: p.title, description: p.description, path, date: p.date })} />
      <article className="container-page pt-8 md:pt-12">
        <Breadcrumbs
          items={[
            { name: "Shop talk", path: "/blog" },
            { name: p.title, path },
          ]}
        />
        <h1 className="mt-6 max-w-[24ch] text-h1">{p.title}</h1>
        <p className="mt-4 text-[0.95rem] text-ink-soft">
          <time dateTime={p.date}>{formatDate(p.date)}</time>, {p.readMinutes} minute read
        </p>

        <div className="measure prose-em mt-10 space-y-10 text-[1.125rem] leading-[1.75]">
          {p.sections.map((s, i) => (
            <section key={s.heading ?? i}>
              {s.heading ? <h2 className="mb-3 text-[1.6rem]">{s.heading}</h2> : null}
              {s.paragraphs.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="measure mt-12 border-t-2 border-ink pt-6">
          <h2 className="text-xl">Related</h2>
          <ul className="mt-3 space-y-2">
            {p.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="link font-semibold">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
      <CtaBand />
    </>
  );
}
