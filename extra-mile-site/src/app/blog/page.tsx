import Link from "next/link";
import { posts } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { formatDate } from "@/lib/format";

export const metadata = pageMetadata({
  title: "Shop Talk: Plain Advice on Quotes, Reviews and Paperwork",
  description:
    "Short, practical articles for local business owners on quoting faster, answering reviews and getting evenings back from paperwork.",
  path: "/blog",
});

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Shop talk", path: "/blog" }]}
        title="Shop talk"
        intro="Plain advice on the desk work behind a local business. Useful whether or not you ever hire us."
      />
      <section className="container-page">
        <ul className="max-w-3xl border-t-2 border-ink">
          {sorted.map((p) => (
            <li key={p.slug} className="border-b border-rule py-7">
              <h2 className="text-[1.5rem]">
                <Link href={`/blog/${p.slug}`} className="hover:text-rust-deep hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-ink-soft">{p.description}</p>
              <p className="mt-2 text-[0.925rem] text-ink-soft">
                <time dateTime={p.date}>{formatDate(p.date)}</time>, {p.readMinutes} minute read
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
