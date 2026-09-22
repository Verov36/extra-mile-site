import Link from "next/link";
import { site } from "@/content/site";

export function CtaBand({
  title = "Claim a founding spot",
  text = "30 days free. No card, no payment info, nothing to cancel. After that, one flat monthly rate with a founders' discount you keep forever.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="no-print container-page mt-20">
      <div className="rounded border-2 border-ink bg-canary p-7 shadow-[6px_6px_0_var(--color-ink)] md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-h2">{title}</h2>
            <p className="measure mt-3">{text}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href="/claim-a-spot" className="btn btn-primary w-full md:w-auto">
              Claim a spot
            </Link>
            <a href={site.phone.href} className="btn btn-secondary w-full md:w-auto">
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
