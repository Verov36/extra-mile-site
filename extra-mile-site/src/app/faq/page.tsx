import { faqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "Fair Questions About Extra Mile",
  description:
    "Straight answers about cost, contracts, turnaround, your business's information and what happens when you do not like a draft.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Fair questions", path: "/faq" }]}
        title="Fair questions"
        intro="These are the things a careful owner asks before handing anything off. If yours is not here, call and ask it."
      />
      <section className="container-page">
        <div className="max-w-3xl">
          <FaqList faqs={faqs} withSchema />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
