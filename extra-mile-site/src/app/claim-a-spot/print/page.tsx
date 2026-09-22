import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { contactOptions, heardOptions, hoursOptions, taskOptions } from "@/lib/lead";
import { PrintButton } from "@/components/PrintButton";

export const metadata = pageMetadata({
  title: "Paper Sign-Up Form",
  description: "Print this form, fill it out by hand, and send Extra Mile a photo to claim a founding spot.",
  path: "/claim-a-spot/print",
});

export default function PrintFormPage() {
  return (
    <section className="container-page py-10 print:p-0">
      <div className="no-print mb-8 flex flex-wrap items-center gap-4">
        <PrintButton />
        <p className="text-ink-soft">
          Fill it out by hand, then snap a photo and email it to {site.email}. Questions? Call {site.phone.display}.
        </p>
      </div>

      <div className="mx-auto max-w-[8in] border-2 border-ink bg-white p-8 print:border-0 print:p-0">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <p className="font-hand text-4xl font-bold text-rust">{site.name}</p>
            <h1 className="mt-1 text-2xl">Founding-member sign-up</h1>
          </div>
          <p className="text-right text-sm">
            {site.phone.display}
            <br />
            {site.email}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
          <Line label="Your name" />
          <Line label="Business name" />
          <Line label="Email" />
          <Line label="Phone" />
        </div>

        <Boxes title="Which task would you most like handed back to you finished?" options={taskOptions} />
        <Boxes title="About how many hours a week does that take you?" options={hoursOptions} />
        <Boxes title="Best way to reach you" options={contactOptions} />
        <Boxes title="How did you hear about us?" options={heardOptions} />

        <p className="mt-6 font-bold">Anything else we should know? A sentence or two is plenty.</p>
        <div className="mt-6 space-y-7">
          <div className="border-b border-ink" />
          <div className="border-b border-ink" />
          <div className="border-b border-ink" />
        </div>

        <p className="mt-8 text-sm">
          30 days free. No card, no payment info, nothing to cancel. Same list, same rate, same spot
          as signing up online. Email a photo of this page to {site.email}.
        </p>
      </div>
    </section>
  );
}

function Line({ label }: { label: string }) {
  return (
    <div>
      <div className="h-7 border-b border-ink" />
      <p className="mt-1 text-sm font-bold">{label}</p>
    </div>
  );
}

function Boxes({ title, options }: { title: string; options: readonly string[] }) {
  return (
    <div className="mt-6 break-inside-avoid">
      <p className="font-bold">{title}</p>
      <ul className="mt-2 grid grid-cols-2 gap-x-8 gap-y-2">
        {options.map((o) => (
          <li key={o} className="flex items-center gap-3">
            <span className="inline-block h-4 w-4 shrink-0 border-2 border-ink" />
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}
