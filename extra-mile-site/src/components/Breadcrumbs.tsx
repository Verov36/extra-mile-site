import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbLd(items)} />
      <nav aria-label="Breadcrumb" className="no-print text-[0.925rem] text-ink-soft">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-rust-deep hover:underline">
              Home
            </Link>
          </li>
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {last ? (
                  <span aria-current="page" className="font-semibold text-ink">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-rust-deep hover:underline">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
