import Link from "next/link";
import { nav, site } from "@/content/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-hand text-[2rem] font-bold leading-none text-rust ${className}`}>
      {site.name}
    </span>
  );
}

export function Header() {
  return (
    <header className="no-print sticky top-0 z-40 border-b-2 border-ink bg-ledger/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.975rem] font-semibold text-ink hover:text-rust-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={site.phone.href} className="font-slab text-lg font-bold text-ink hover:text-rust-deep">
            {site.phone.display}
          </a>
          <Link href="/claim-a-spot" className="btn btn-primary !min-h-[2.6rem] !py-2">
            Claim a spot
          </Link>
        </div>

        {/* Mobile menu: a native disclosure, so it works without JavaScript */}
        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded border-2 border-ink bg-sheet px-3 font-semibold [&::-webkit-details-marker]:hidden">
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-5 bg-ink" />
              <span className="block h-[2px] w-5 bg-ink" />
              <span className="block h-[2px] w-5 bg-ink" />
            </span>
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 w-[min(19rem,calc(100vw-2.3rem))] rounded border-2 border-ink bg-sheet p-2 shadow-[5px_5px_0_var(--color-ink)]"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded px-3 py-3 font-semibold hover:bg-canary-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/faq" className="block rounded px-3 py-3 font-semibold hover:bg-canary-soft">
              Fair questions
            </Link>
            <a
              href={site.phone.href}
              className="mt-1 block rounded border-t border-rule px-3 py-3 font-slab text-lg font-bold"
            >
              Call {site.phone.display}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
