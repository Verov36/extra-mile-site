import Link from "next/link";
import { footerNav, nav, site } from "@/content/site";
import { services } from "@/content/services";
import { Wordmark } from "./Header";

export function Footer() {
  return (
    <footer className="no-print mt-24 border-t-2 border-ink bg-ink text-ledger">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Wordmark className="!text-canary" />
          <p className="mt-3 max-w-xs text-[0.975rem] text-ledger/85">
            A Southeastern business serving Southeastern businesses. {site.tagline}
          </p>
          <p className="mt-5">
            <a href={site.phone.href} className="font-slab text-2xl font-bold text-white hover:text-canary">
              {site.phone.display}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-canary">
              {site.email}
            </a>
          </p>
        </div>

        <FooterList title="What we take on">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
            </FooterLink>
          ))}
        </FooterList>

        <FooterList title="Extra Mile">
          {nav.slice(1).map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
          <FooterLink href="/claim-a-spot">Claim a spot</FooterLink>
        </FooterList>

        <FooterList title="More">
          {footerNav.map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
        </FooterList>
      </div>
      <div className="border-t border-ledger/20">
        <p className="container-page py-5 pb-24 text-sm text-ledger/70 lg:pb-5">
          © {new Date().getFullYear()} {site.legalName}. Nothing sent without your OK.
        </p>
      </div>
    </footer>
  );
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-slab text-lg font-bold text-white">{title}</h2>
      <ul className="mt-3 space-y-2">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[0.975rem] text-ledger/85 hover:text-canary hover:underline">
        {children}
      </Link>
    </li>
  );
}
