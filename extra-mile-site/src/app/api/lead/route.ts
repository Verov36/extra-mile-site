import { NextResponse } from "next/server";
import { flattenErrors, leadSchema, type Lead } from "@/lib/lead";
import { site } from "@/content/site";

export const runtime = "nodejs";

const CALL_US = `We couldn't save your sign-up. Call ${site.phone.display} and we'll add you by hand.`;

export async function POST(req: Request) {
  const isJson = (req.headers.get("content-type") ?? "").includes("application/json");

  let raw: Record<string, unknown>;
  try {
    if (isJson) {
      raw = await req.json();
    } else {
      // No-JavaScript fallback: a plain HTML form post
      const fd = await req.formData();
      raw = Object.fromEntries(fd.entries());
      raw.heard = fd.getAll("heard");
    }
  } catch {
    return NextResponse.json({ ok: false, message: CALL_US }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    if (!isJson) return NextResponse.redirect(new URL("/claim-a-spot?error=1", req.url), 303);
    return NextResponse.json(
      { ok: false, message: "Check the highlighted answers.", errors: flattenErrors(parsed.error) },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  // Bots that fill the hidden field get a success response and nothing is sent.
  if (!lead.company_website) {
    const delivered = await deliver(lead);
    if (!delivered) {
      if (!isJson) return NextResponse.redirect(new URL("/claim-a-spot?error=2", req.url), 303);
      return NextResponse.json({ ok: false, message: CALL_US }, { status: 503 });
    }
  }

  if (!isJson) return NextResponse.redirect(new URL("/claim-a-spot/thanks", req.url), 303);
  return NextResponse.json({ ok: true });
}

async function deliver(lead: Lead): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL ?? site.email;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!key || !from) {
    if (process.env.NODE_ENV === "production") {
      console.error("[lead] RESEND_API_KEY or LEAD_FROM_EMAIL is missing. Sign-up was NOT delivered.");
      return false;
    }
    console.log("[lead] (dev, not emailed)", lead);
    return true;
  }

  // Plain text only, so nothing a visitor types can be rendered as HTML.
  const text = [
    `New founding-member sign-up`,
    ``,
    `Name: ${lead.name}`,
    `Business: ${lead.business}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    ``,
    `Task to hand off: ${lead.task}`,
    `Hours a week: ${lead.hours}`,
    `Best way to reach: ${lead.contact}`,
    `Heard about us: ${lead.heard.join(", ") || "not answered"}`,
    ``,
    `Notes:`,
    lead.notes || "(none)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: `Claim a spot: ${lead.business} (${lead.task})`,
        text,
      }),
    });
    if (!res.ok) console.error("[lead] Resend error", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[lead] Resend request failed", err);
    return false;
  }
}
