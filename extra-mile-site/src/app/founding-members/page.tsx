import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "@/components/Promises";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "The Founding-Member Offer: 30 Days Free, Discount Kept Forever",
  description:
    "Extra Mile founding members get 30 days free with no card on file, a permanent founders' discount, and direct contact with the founder. Open across North America while spots last.",
  path: "/founding-members",
});

const terms = [
  {
    lead: "Founding status is open to anyone in North America.",
    rest: "A deep starting discount, with a permanent founding discount applied after.",
  },
  {
    lead: "30 days free.",
    rest: "No card, no payment info, nothing to cancel. In return, we strongly ask that you give us feedback about your experience.",
  },
  { lead: "The founding discount is kept forever.", rest: "" },
  { lead: "Direct contact with the founder for priority support.", rest: "Not a queue." },
  { lead: "A vote on what gets built next.", rest: "Founding members vote on what Extra Mile takes on next." },
];

export default function FoundingMembersPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Founding offer", path: "/founding-members" }]}
        title="The founding-member offer"
        intro="Extra Mile is in alpha testing. The first customers shape the service, so they get the best terms it will ever have."
      />

      <section className="container-page">
        <div className="max-w-3xl rounded border-2 border-ink bg-canary p-6 shadow-[6px_6px_0_var(--color-ink)] md:p-10">
          <ul className="space-y-5">
            {terms.map((t) => (
              <li key={t.lead} className="flex gap-4 rounded-sm border-2 border-ink bg-sheet p-5">
                <Check className="mt-1.5 !h-5 !w-5 text-pine" />
                <p>
                  <strong>{t.lead}</strong> {t.rest}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-7 font-semibold">
            Applications for founding membership stay open until the list of founding customers is
            filled.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/claim-a-spot" className="btn btn-primary">
              Claim a spot
            </Link>
            <a href={site.phone.href} className="btn btn-secondary">
              Call {site.phone.display}
            </a>
          </div>
        </div>

        <div className="measure mt-14 space-y-8">
          <div>
            <h2 className="text-[1.6rem]">What it costs after the trial</h2>
            <p className="mt-3 text-ink-soft">
              One flat monthly rate, month to month, with no contract. It replaces the several
              subscriptions and the hours of training that doing this yourself would take. Ask for
              the current founding rate when you claim your spot.
            </p>
          </div>
          <div>
            <h2 className="text-[1.6rem]">What we ask of you</h2>
            <p className="mt-3 text-ink-soft">
              Honest feedback. Tell us what came back wrong, what saved you time and what you wish
              we handled. That is the whole price of the first 30 days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
