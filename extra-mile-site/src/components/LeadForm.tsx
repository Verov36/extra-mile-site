"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  contactOptions,
  flattenErrors,
  heardOptions,
  hoursOptions,
  leadSchema,
  taskOptions,
  type LeadErrors,
} from "@/lib/lead";

export function LeadForm({ serverError }: { serverError?: string }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [message, setMessage] = useState(serverError ?? "");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = { ...Object.fromEntries(fd.entries()), heard: fd.getAll("heard") };

    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const errs = flattenErrors(parsed.error);
      setErrors(errs);
      setMessage("Check the highlighted answers.");
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setMessage("");
    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (data.ok) {
        router.push("/claim-a-spot/thanks");
        return;
      }
      setErrors(data.errors ?? {});
      setMessage(data.message ?? "Your sign-up didn't go through. Try again, or call us.");
    } catch {
      setMessage("Your sign-up didn't go through. Check your connection and try again, or call us.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form ref={formRef} action="/api/lead" method="post" onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Text name="name" label="Your name" placeholder="John Doe" autoComplete="name" error={errors.name} />
        <Text
          name="business"
          label="Business name"
          placeholder="Doe's Plumbing"
          autoComplete="organization"
          error={errors.business}
        />
        <Text
          name="email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
          inputMode="email"
          error={errors.email}
        />
        <Text
          name="phone"
          label="Phone"
          type="tel"
          placeholder="(555) 555-1234"
          autoComplete="tel"
          inputMode="tel"
          error={errors.phone}
        />
      </div>

      <Choice
        type="radio"
        name="task"
        legend="Which task would you most like handed back to you finished?"
        options={taskOptions}
        error={errors.task}
      />
      <Choice
        type="radio"
        name="hours"
        legend="About how many hours a week does that take you?"
        options={hoursOptions}
        error={errors.hours}
      />
      <Choice
        type="radio"
        name="contact"
        legend="Best way to reach you"
        options={contactOptions}
        error={errors.contact}
      />
      <Choice type="checkbox" name="heard" legend="How did you hear about us? (Optional)" options={heardOptions} />

      <div>
        <label htmlFor="notes" className="block font-bold">
          Anything else we should know? (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="A sentence or two is plenty."
          className="field mt-2"
          aria-invalid={errors.notes ? true : undefined}
          aria-describedby={errors.notes ? "notes-error" : undefined}
        />
        {errors.notes ? <FieldError id="notes-error">{errors.notes}</FieldError> : null}
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto">
          {sending ? "Claiming your spot" : "Claim my spot"}
        </button>
        <p role="alert" aria-live="assertive" className="mt-4 min-h-6 font-semibold text-serial">
          {message}
        </p>
        <p className="text-[0.95rem] text-ink-soft">
          No card and no payment info. We use your answers to contact you about Extra Mile, and we
          do not share or sell them.
        </p>
      </div>
    </form>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-[0.95rem] font-semibold text-serial">
      {children}
    </p>
  );
}

function Text({
  name,
  label,
  error,
  type = "text",
  ...rest
}: {
  name: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="block font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="field mt-2"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        {...rest}
      />
      {error ? <FieldError id={`${name}-error`}>{error}</FieldError> : null}
    </div>
  );
}

function Choice({
  type,
  name,
  legend,
  options,
  error,
}: {
  type: "radio" | "checkbox";
  name: string;
  legend: string;
  options: readonly string[];
  error?: string;
}) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="font-bold">{legend}</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label
            key={o}
            className="flex min-h-12 cursor-pointer items-center gap-3 rounded border-2 border-rule bg-sheet px-3 py-2 has-checked:border-ink has-checked:bg-canary-soft"
          >
            <input type={type} name={name} value={o} className="h-5 w-5 shrink-0 accent-[var(--color-rust)]" />
            <span>{o}</span>
          </label>
        ))}
      </div>
      {error ? <FieldError id={`${name}-error`}>{error}</FieldError> : null}
    </fieldset>
  );
}
