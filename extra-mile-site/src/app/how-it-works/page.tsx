import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Promises } from "@/components/Promises";

export const metadata = pageMetadata({
  title: "How Extra Mile Works: Three Steps and the Deal in Plain Terms",
  description:
    "Send your notes the way you already take them. Extra Mile finishes the work in your format, and you reject, change or approve it. Here is exactly what you give and get.",
  path: "/how-it-works",
});

const steps = [
  {
    title: "Don't change how you start prepping.",
    text: "Job tickets, handwritten notes, voice messages on the go. There is no app to learn and no new habit to build. Whatever you scribble on today is what you send.",
  },
  {
    title: "We finish it, organized your way.",
    text: "Your prices, your voice, your format. The finished work comes back wrapped up so it is easy for you to track and store, whether that is a folder on a computer or a drawer in the shop.",
  },
  {
    title: "You reject, change and approve.",
    text: "Your name goes on the work. You read it, fix what needs fixing and send it yourself. Nothing leaves without your OK.",
  },
];

const deal = [
  {
    give: "Your notes, in whatever form: a few lines of text, a photo of a handwritten note, a voice memo.",
    get: "A refined quote that needs only minimal changes before you send it with a proposal or reply, in your name.",
  },
  { give: "Twenty minutes to show us how you do it today.", get: "Working reports shaped around your role." },
  { give: "One flat monthly price.", get: "Service, and a final say on everything you need done." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "How it works", path: "/how-it-works" }]}
        title="How it works, in three steps"
        intro="We are building the first technology company that builds for you the person, not just a computer screen. So the process starts with how you already work."
      />

      <section className="container-page">
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded border-2 border-ink bg-sheet p-6 md:p-7">
              <span className="font-slab text-5xl font-bold text-rust">{i + 1}</span>
              <h2 className="mt-3 text-[1.4rem]">{s.title}</h2>
              <p className="mt-3 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page mt-20" aria-labelledby="deal-heading">
        <h2 id="deal-heading" className="text-h2">
          The deal, in plain terms
        </h2>
        <div className="mt-8 overflow-hidden rounded border-2 border-ink">
          <div className="hidden grid-cols-2 border-b-2 border-ink bg-canary-soft font-slab text-lg font-bold md:grid">
            <p className="p-4">You give</p>
            <p className="border-l-2 border-ink p-4">You get back</p>
          </div>
          {deal.map((d) => (
            <div key={d.give} className="grid border-b border-rule bg-sheet last:border-0 md:grid-cols-2">
              <p className="p-4 md:p-5">
                <span className="font-slab font-bold md:hidden">You give: </span>
                {d.give}
              </p>
              <p className="border-t border-rule p-4 md:border-t-0 md:border-l-2 md:border-ink md:p-5">
                <span className="font-slab font-bold md:hidden">You get back: </span>
                {d.get}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <h2 className="text-h2">Four things that do not change</h2>
        <Promises className="mt-6" />
        <p className="measure mt-8 text-ink-soft">
          If you need turnaround within minutes, or you want someone to make decisions for you,
          Extra Mile is the wrong tool and{" "}
          <Link href="/faq" className="link">
            we say so plainly
          </Link>
          . If you want the typing, sorting and drafting done so your evenings come back, see{" "}
          <Link href="/services" className="link">
            what we take on
          </Link>
          .
        </p>
      </section>

      <CtaBand />
    </>
  );
}
