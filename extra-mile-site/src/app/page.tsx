import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { faqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";
import { TicketDemo } from "@/components/TicketDemo";
import { Promises, Check } from "@/components/Promises";
import { Perforation } from "@/components/Perforation";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "Extra Mile | Quotes, Reviews and Paperwork Done for You",
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

const steps = [
  {
    title: "Don't change how you start prepping.",
    text: "Job tickets, handwritten notes, voice messages on the go. Send them in however they already exist.",
  },
  {
    title: "We finish it, organized your way.",
    text: "Your prices, your voice, your format, wrapped up so it is easy for you to track and store.",
  },
  {
    title: "You reject, change and approve.",
    text: "Your name goes on the work, so you get the final say on every piece of it.",
  },
];

const compare = [
  {
    row: "Getting started",
    diy: "Learn the tools, do the research, keep it all maintained",
    em: "Setup is our job. You tell us what success looks like.",
  },
  {
    row: "Something breaks",
    diy: "Help forums, how-to websites, maintenance calls",
    em: "A phone call to someone who knows your setup",
  },
  {
    row: "Your information",
    diy: "Scattered across tools and file storage",
    em: "One local place, not shared or sold",
  },
  {
    row: "Final say",
    diy: "Depends on the tool and its user agreement",
    em: "Guaranteed. Nothing leaves without your OK.",
  },
  {
    row: "The bill",
    diy: "Several subscriptions, plus hours of training",
    em: "One flat rate. Month to month. No contract.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container-page grid items-center gap-12 pt-10 pb-16 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div>
          <p className="text-lg font-semibold text-pine">{site.tagline}</p>
          <h1 className="mt-3 text-hero">
            You didn&apos;t start a business to do paperwork at 9&nbsp;p.m.
          </h1>
          <p className="measure mt-6 text-xl leading-relaxed text-ink-soft">
            Send us your job notes as a text, a photo or a voice memo. Extra Mile sends back the
            finished quote, review reply or inbox report the same day.{" "}
            <span className="highlight font-semibold text-ink">
              One flat monthly price, and a real, local person on the phone when you have questions.
            </span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/claim-a-spot" className="btn btn-primary">
              Claim a spot
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary">
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-[0.95rem] text-ink-soft">{site.offer.short}</p>
        </div>
        <TicketDemo />
      </section>

      <div className="container-page">
        <Promises />
      </div>

      <Perforation className="mt-16" />

      {/* Services */}
      <section className="container-page pt-16" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-h2">
          What we can take off your plate
        </h2>
        <p className="measure mt-4 text-ink-soft">
          Pick the chore that eats your week. That is the one we set up first.
        </p>
        <ul className="mt-8 grid gap-x-10 border-t-2 border-ink md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="border-b border-rule py-6">
              <h3 className="text-[1.35rem]">
                <Link href={`/services/${s.slug}`} className="hover:text-rust-deep hover:underline">
                  {s.name}
                </Link>
              </h3>
              <p className="mt-2 text-ink-soft">{s.short}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* The math */}
      <section className="container-page mt-20">
        <div className="grid gap-8 rounded border-2 border-ink bg-sheet p-7 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-10">
          <p className="font-slab text-[clamp(3.5rem,2rem+7vw,6.5rem)] font-bold leading-none text-rust">
            250
            <span className="block text-2xl text-ink">hours a year</span>
          </p>
          <div>
            <h2 className="text-h2">Five hours of desk work a week adds up</h2>
            <p className="measure mt-4 text-ink-soft">
              That is about six working weeks spent on paperwork. Hand it off and it is like adding
              250 hours of billed work to your shop, or another customer&apos;s worth of capacity,
              without the hiring.
            </p>
          </div>
        </div>
      </section>

      {/* One Thursday, two ways */}
      <section className="container-page mt-20" aria-labelledby="thursday-heading">
        <h2 id="thursday-heading" className="text-h2">
          One Thursday, two ways
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded border-2 border-dashed border-ink-soft bg-ledger p-6 md:p-8">
            <h3 className="text-2xl text-rust-deep">Thursday, today</h3>
            <dl className="mt-5 space-y-5">
              <Moment time="9:40 p.m.">
                At the kitchen table with the laptop open, dinner getting cold. It is your third
                quote of the night and you are typing prices from a scrap of paper you can barely
                read.
              </Moment>
              <Moment time="By Saturday">
                Another review sits unanswered. Left alone, a three-star tends to invite the next
                one.
              </Moment>
              <Moment time="Sunday night">
                The Sunday feeling. Tomorrow&apos;s quotes might be written, but the week is already
                off to a rough start.
              </Moment>
            </dl>
          </article>
          <article className="rounded border-2 border-pine bg-pine-soft p-6 md:p-8">
            <h3 className="text-2xl text-pine">Thursday, with Extra Mile</h3>
            <dl className="mt-5 space-y-5">
              <Moment time="5:15 p.m.">
                You snap photos of the week&apos;s job notes wherever you are and send them in.
                Done. You go home for the night.
              </Moment>
              <Moment time="7:00 p.m.">
                Your phone buzzes. The finished work is in: your prices, your wording, your logo.
                You decide to look it over in the morning.
              </Moment>
              <Moment time="Friday morning">
                Open it, make the changes you want, hit send. Print it, fill it out by hand or mail
                it if you prefer. The week ends and your weekend is wide open.
              </Moment>
            </dl>
          </article>
        </div>
      </section>

      <Perforation className="mt-20" />

      {/* How it works */}
      <section className="container-page pt-16" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-h2">
          How it works, in three steps
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded border-2 border-ink bg-sheet p-6">
              <span className="font-slab text-4xl font-bold text-rust">{i + 1}</span>
              <h3 className="mt-3 text-[1.3rem]">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          <Link href="/how-it-works" className="link font-semibold">
            Read the deal in plain terms
          </Link>
        </p>
      </section>

      {/* Survey */}
      <section className="container-page mt-20" aria-labelledby="survey-heading">
        <div className="rounded border-2 border-rust bg-sheet p-7 md:p-10">
          <h2 id="survey-heading" className="max-w-[26ch] text-h2">
            Seven owners already told us what they need
          </h2>
          <p className="measure mt-4 text-ink-soft">
            We asked business owners across the region which tasks eat their week. Their answers
            decide what gets built first.
          </p>
          <dl className="mt-8 grid gap-8 md:grid-cols-3">
            <Stat figure="6 of 7">
              named <strong>vendor briefing</strong> as the chore they would hand off first. Email
              triage and review replies were close behind.
            </Stat>
            <Stat figure="Large and small">
              businesses were equally interested in cutting their biggest time sinks.
            </Stat>
            <Stat figure="5 of 7">said they would pay to subscribe to this service.</Stat>
          </dl>
          <p className="mt-8 text-[0.95rem] text-ink-soft">
            From our September survey of Southeastern small-business owners. It is a small sample,
            and we say so. Founding members vote on what comes next.
          </p>
        </div>
      </section>

      {/* Compare */}
      <section className="container-page mt-20" aria-labelledby="compare-heading">
        <h2 id="compare-heading" className="text-h2">
          Us vs. doing it yourself
        </h2>
        <div className="mt-8 overflow-x-auto rounded border-2 border-ink bg-sheet">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-ink bg-canary-soft font-slab text-lg">
                <td className="p-4" />
                <th scope="col" className="p-4 font-bold">
                  Doing it yourself
                </th>
                <th scope="col" className="p-4 font-bold">
                  With Extra Mile
                </th>
              </tr>
            </thead>
            <tbody>
              {compare.map((c) => (
                <tr key={c.row} className="border-b border-rule align-top last:border-0">
                  <th scope="row" className="p-4 font-bold">
                    {c.row}
                  </th>
                  <td className="p-4 text-ink-soft">{c.diy}</td>
                  <td className="p-4">{c.em}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fit */}
      <section className="container-page mt-20" aria-labelledby="fit-heading">
        <h2 id="fit-heading" className="text-h2">
          Straight talk: is this for you?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded border-2 border-ink border-t-[10px] border-t-pine bg-sheet p-6 md:p-8">
            <h3 className="text-xl text-pine">It&apos;s a fit if you</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Run a business in the Southeast",
                "Are tired of giving evening and weekend hours to paperwork",
                "Want the work done without having to become a computer person",
                "Like knowing there is someone to call when something isn't right",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1.5 text-pine" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded border-2 border-ink border-t-[10px] border-t-ink-soft bg-sheet p-6 md:p-8">
            <h3 className="text-xl text-ink-soft">It&apos;s not a fit if you</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-ink-soft">
              <li>Enjoy your own paperwork and have time for it</li>
              <li>Need turnaround within minutes</li>
              <li>
                Want to hand off decisions, not just drafts. To be frank,{" "}
                <strong>you probably need to hire someone.</strong>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-5 text-ink-soft">We&apos;d rather tell you now than waste your time later.</p>
      </section>

      {/* Industries */}
      <section className="container-page mt-20" aria-labelledby="who-heading">
        <h2 id="who-heading" className="text-h2">
          Built for the businesses that keep a town running
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {industries.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/industries/${i.slug}`}
                className="inline-block rounded border-2 border-ink bg-sheet px-4 py-2 font-semibold hover:bg-canary-soft"
              >
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Perforation className="mt-20" />

      {/* FAQ */}
      <section className="container-page pt-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-h2">
          Fair questions
        </h2>
        <div className="mt-8 max-w-3xl">
          <FaqList faqs={faqs.slice(0, 5)} withSchema />
        </div>
        <p className="mt-6">
          <Link href="/faq" className="link font-semibold">
            See every question
          </Link>
        </p>
      </section>

      <CtaBand />
    </>
  );
}

function Moment({ time, children }: { time: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-slab text-lg font-bold">{time}</dt>
      <dd className="mt-1 text-ink-soft">{children}</dd>
    </div>
  );
}

function Stat({ figure, children }: { figure: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-slab text-4xl font-bold leading-tight text-rust">{figure}</dt>
      <dd className="mt-2 text-ink-soft">{children}</dd>
    </div>
  );
}
