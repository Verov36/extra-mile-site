import Link from "next/link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Your Spot Is Claimed",
  description: "Your founding-member sign-up was received.",
  path: "/claim-a-spot/thanks",
  noindex: true,
});

export default function ThanksPage() {
  return (
    <section className="container-page py-20">
      <h1 className="text-h1">Your spot is claimed</h1>
      <p className="measure mt-5 text-xl text-ink-soft">
        We have your answers and will reach out the way you asked. If you would rather not wait,
        call <a href={site.phone.href} className="link">{site.phone.display}</a>.
      </p>
      <p className="mt-8">
        <Link href="/how-it-works" className="btn btn-secondary">
          See how the first week works
        </Link>
      </p>
    </section>
  );
}
