import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="container-page py-20">
      <h1 className="text-h1">That page isn&apos;t here</h1>
      <p className="measure mt-5 text-xl text-ink-soft">
        The link may be old or mistyped. Start from the home page, see what we take on, or call{" "}
        <a href={site.phone.href} className="link">
          {site.phone.display}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Go to the home page
        </Link>
        <Link href="/services" className="btn btn-secondary">
          What we take on
        </Link>
      </div>
    </section>
  );
}
