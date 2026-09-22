import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "What Extra Mile collects through this website, why, and who to call about it.",
  path: "/privacy",
});

/**
 * DRAFT. Written from the promises on the live site ("one local place, not
 * shared or sold"). Tyler should confirm it matches what actually happens to
 * sign-up and customer data, and have it reviewed before launch.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Privacy", path: "/privacy" }]}
        title="Privacy, in plain terms"
        intro="Short version: we collect what you give us, we use it to serve you, and we do not share or sell it."
      />
      <section className="container-page">
        <div className="measure prose-em space-y-8 text-ink-soft">
          <div>
            <h2 className="text-[1.4rem] text-ink">What this website collects</h2>
            <p className="mt-2">
              When you claim a spot, we receive what you type into the form: your name, business
              name, email, phone number, and your answers about which task you want handed off. We
              use it to contact you about Extra Mile.
            </p>
          </div>
          <div>
            <h2 className="text-[1.4rem] text-ink">Your business&apos;s information</h2>
            <p className="mt-2">
              Notes, photos, voice memos and documents you send us as a customer are kept in one
              local place. They are used to prepare your work and for nothing else. They are not
              shared or sold.
            </p>
          </div>
          <div>
            <h2 className="text-[1.4rem] text-ink">Questions, corrections, deletion</h2>
            <p className="mt-2">
              Call <a href={site.phone.href}>{site.phone.display}</a> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> and a person will help you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
