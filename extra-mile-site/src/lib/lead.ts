import { z } from "zod";

/** Options mirror the sign-up form on Tyler's original site. */
export const taskOptions = [
  "Writing quotes & proposals",
  "Replying to customer reviews",
  "Sorting & answering email",
  "Posts about my finished work",
  "Something else",
] as const;

export const hoursOptions = ["Under 1 hour", "1–3 hours", "3–5 hours", "5+ hours"] as const;

export const contactOptions = ["Phone, mornings", "Phone, afternoons", "Text message", "Email"] as const;

export const heardOptions = [
  "Google search",
  "A friend or fellow owner",
  "Facebook",
  "Nextdoor",
  "A flyer or card",
  "Other",
] as const;

export const leadSchema = z.object({
  name: z.string("Enter your name.").trim().min(2, "Enter your name.").max(100),
  business: z.string("Enter your business name.").trim().min(2, "Enter your business name.").max(140),
  email: z.email("Enter an email address like john@example.com.").max(200),
  phone: z
    .string("Enter a 10-digit phone number.")
    .trim()
    .max(40)
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Enter a 10-digit phone number."),
  task: z.enum(taskOptions, "Pick the task you most want handed off."),
  hours: z.enum(hoursOptions, "Pick roughly how many hours it takes."),
  contact: z.enum(contactOptions, "Pick the best way to reach you."),
  heard: z.array(z.enum(heardOptions)).max(heardOptions.length).default([]),
  notes: z.string().trim().max(1500, "Keep it under 1,500 characters.").default(""),
  // Honeypot. Real people never see or fill this field.
  company_website: z.string().max(0).optional().default(""),
});

export type Lead = z.infer<typeof leadSchema>;
export type LeadErrors = Partial<Record<keyof Lead, string>>;

export function flattenErrors(error: z.ZodError): LeadErrors {
  const out: LeadErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof Lead | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
