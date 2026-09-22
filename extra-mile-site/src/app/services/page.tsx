import Link from "next/link";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Promises } from "@/components/Promises";

export const metadata = pageMetadata({
  title: "What We Take Off Your Plate: Admin Help for Small Businesses",
  description:
    "Quotes and proposals, review replies, email triage, social posts and recurring paperwork, prepared for you and approved by you. One flat monthly price.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "What we take on", path: "/services" }]}
        title="What we can take off your plate"
        intro="Five kinds of desk work that eat an owner's evenings. You send the raw material, we send back the finished draft, and nothing goes out without your OK."
      >
        <Promises className="mt-8" />
      </PageHeader>

      <section className="container-page">
        <ul className="border-t-2 border-ink">
          {services.map((s) => (
            <li key={s.slug} className="grid gap-4 border-b border-rule py-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <h2 className="text-[1.6rem]">
                <Link href={`/services/${s.slug}`} className="hover:text-rust-deep hover:underline">
                  {s.name}
                </Link>
              </h2>
              <div>
                <p className="measure text-ink-soft">{s.intro}</p>
                <p className="mt-3">
                  <Link href={`/services/${s.slug}`} className="link font-semibold">
                    How {s.name.toLowerCase()} works
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Not sure which one is yours?"
        text="The sign-up form asks one question that matters: which task would you most like handed back to you finished? Start there."
      />
    </>
  );
}
