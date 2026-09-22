import type { Faq } from "@/content/services";
import { JsonLd } from "./JsonLd";
import { faqLd } from "@/lib/seo";

/**
 * Native <details> keeps every answer in the HTML, which is what search
 * engines and AI crawlers read. Pass withSchema once per page at most.
 */
export function FaqList({ faqs, withSchema = false }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema ? <JsonLd data={faqLd(faqs)} /> : null}
      <div className="divide-y-2 divide-ink border-y-2 border-ink">
        {faqs.map((f) => (
          <details key={f.q} className="group bg-sheet">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-5 font-slab text-xl font-semibold hover:bg-canary-soft md:px-6 [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 font-sans text-2xl leading-none text-rust transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="measure px-4 pb-6 text-ink-soft md:px-6">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
