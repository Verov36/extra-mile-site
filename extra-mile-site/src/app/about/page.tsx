import Link from "next/link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "About Extra Mile and Founder Tyler Warner",
  description:
    "Extra Mile is a Southeastern business built by Tyler Warner to give busy owners local, human help with quotes, reviews, email and paperwork.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}/about`,
          mainEntity: { "@id": `${site.url}/#organization` },
        }}
      />
      <PageHeader
        crumbs={[{ name: "About", path: "/about" }]}
        title="Technology built for you the person, not just a computer screen"
        intro="Most business software assumes the owner wants to sit down and learn software. The owners we talk to want their evenings back."
      />

      <section className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="measure prose-em text-ink-soft">
          <p>
            Extra Mile takes the desk work that piles up behind a busy local business, the quotes,
            review replies, email and recurring paperwork, and hands it back finished. You keep
            taking notes the way you always have. You keep every decision. What you lose is the
            typing at 9 p.m.
          </p>
          <p>
            It is deliberately old-fashioned in the ways that matter. There is a phone number, and a
            person who knows your setup answers it. You can sign up on paper. Your information is
            kept in one local place and is not shared or sold. The price is one flat monthly rate,
            and you can quit any month you like.
          </p>
          <p>
            We started by asking owners across the region which tasks eat their week, and we let
            their answers decide what got built first. Founding members keep that vote.{" "}
            <Link href="/founding-members">See the founding-member offer</Link>.
          </p>
        </div>

        <aside className="rounded border-2 border-rust bg-sheet p-7 md:p-8">
          <h2 className="text-[1.6rem]">The pledge</h2>
          <blockquote className="mt-4 space-y-4 text-ink-soft">
            <p>
              I&apos;m building this partly as a hobby, and partly as a serious business
              opportunity. I am currently living in the Southeast, and I look forward to building
              more relationships so we can expand our data shops to more locations.
            </p>
            <p>Please keep checking back to catch our latest updates.</p>
          </blockquote>
          <p className="mt-6 font-hand text-4xl font-bold text-rust">{site.founder.name}</p>
          <p className="text-[0.95rem] text-ink-soft">{site.founder.title}</p>
        </aside>
      </section>

      <CtaBand title="Talk to the founder" text="Founding members get direct contact with Tyler for priority support. Not a queue." />
    </>
  );
}
