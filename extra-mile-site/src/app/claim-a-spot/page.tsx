import Link from "next/link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { LeadForm } from "@/components/LeadForm";
import { Check } from "@/components/Promises";

export const metadata = pageMetadata({
  title: "Claim a Founding Spot: 30 Days Free, No Card",
  description:
    "Sign up online, on paper or with a photo. Founding members get 30 days free with no payment info and a founders' discount kept forever.",
  path: "/claim-a-spot",
});

type Props = { searchParams: Promise<{ error?: string }> };

export default async function ClaimPage({ searchParams }: Props) {
  const { error } = await searchParams;
  const serverError =
    error === "1"
      ? "Some answers were missing. Fill in every question marked below and try again."
      : error === "2"
        ? `We couldn't save your sign-up. Call ${site.phone.display} and we'll add you by hand.`
        : undefined;

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Claim a spot", path: "/claim-a-spot" }]}
        title="Claim a spot"
        intro="Online, on paper or with a photo, whatever suits you. Same list, same rate, same spot either way."
      />

      <section className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-sm border-2 border-ink bg-sheet shadow-[6px_6px_0_var(--color-ink)]">
          <div className="perforation" />
          <div className="p-6 md:p-9">
            <LeadForm serverError={serverError} />
          </div>
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="text-[1.4rem]">What you are signing up for</h2>
            <ul className="mt-4 space-y-3">
              {[
                "30 days free. No card, no payment info, nothing to cancel.",
                "A founders' discount that is kept forever.",
                "Direct contact with the founder. Not a queue.",
                "Month to month after that. Quit anytime.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1.5 text-pine" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded border-2 border-dashed border-ink-soft p-6">
            <h2 className="text-[1.4rem]">Rather use paper?</h2>
            <p className="mt-2 text-ink-soft">
              Print the form, fill it out by hand, and send us a photo of it.
            </p>
            <p className="mt-4">
              <Link href="/claim-a-spot/print" className="btn btn-secondary">
                Open the paper form
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-[1.4rem]">Rather talk?</h2>
            <p className="mt-2">
              <a href={site.phone.href} className="font-slab text-2xl font-bold hover:text-rust-deep">
                {site.phone.display}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
