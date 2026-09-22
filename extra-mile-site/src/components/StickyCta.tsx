import Link from "next/link";
import { site } from "@/content/site";

/** Phone-first action bar, mobile only. Mirrors the bar on Tyler's original site. */
export function StickyCta() {
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-ink px-3 pt-2.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phone.href}
          className="flex min-h-11 items-center justify-center rounded border-2 border-ledger font-bold text-ledger"
        >
          Call us
        </a>
        <Link
          href="/claim-a-spot"
          className="flex min-h-11 items-center justify-center rounded border-2 border-rust bg-rust font-bold text-white"
        >
          Claim a spot
        </Link>
      </div>
    </div>
  );
}
