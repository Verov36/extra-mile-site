export type Industry = {
  slug: string;
  /** Plural noun used in headings: "Plumbers" */
  name: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  pains: { heading: string; text: string }[];
  /** Service slugs, most useful first */
  services: string[];
  scenario: string;
};

export const industries: Industry[] = [
  {
    slug: "plumbers",
    name: "Plumbers",
    keyword: "admin help for plumbers",
    metaTitle: "Quotes, Reviews and Paperwork Help for Plumbers",
    metaDescription:
      "Plumbers send job notes from the truck and get finished quotes back the same day. Extra Mile also drafts review replies and sorts the inbox. Flat monthly price.",
    h1: "Paperwork help for plumbers who are done quoting at 9 p.m.",
    intro:
      "A plumbing business runs on emergency calls during the day and estimates at night. The repipe quote you promised on Tuesday is still a note on a supply-house receipt on Thursday.",
    pains: [
      {
        heading: "Estimates written from the truck",
        text: "Text us the ticket, a photo of your notes, or a voice memo between calls. The quote comes back the same day with your rates and your wording.",
      },
      {
        heading: "Reviews after every emergency call",
        text: "Emergency work earns reviews fast, good and bad. Each one gets a drafted reply for you to approve, so none of them sit.",
      },
      {
        heading: "Supplier and warranty email",
        text: "Parts confirmations, backorders and warranty claims get batched together in your inbox report, so you can clear them in one sitting.",
      },
    ],
    services: ["quotes-and-proposals", "review-replies", "email-triage"],
    scenario:
      "You finish a water heater swap at 4:40, photograph the ticket, and send it in from the driveway. By the time the truck is unloaded, a clean quote for the next customer's repipe is waiting for your approval.",
  },
  {
    slug: "hvac-contractors",
    name: "HVAC contractors",
    keyword: "admin help for hvac contractors",
    metaTitle: "Quotes, Renewals and Review Replies for HVAC Contractors",
    metaDescription:
      "HVAC contractors hand off replacement quotes, maintenance agreement renewals and review replies. Extra Mile prepares them, you approve them. Flat monthly price.",
    h1: "Paperwork help for HVAC contractors in the busy season",
    intro:
      "When the first heat wave hits the Southeast, the phones do not stop and the paperwork does not shrink. Replacement quotes, maintenance renewals and review replies all pile up in the same two months.",
    pains: [
      {
        heading: "Replacement quotes with options",
        text: "Send your notes on the system and the home. Get back a quote laid out the way you present it, with your equipment tiers and your prices.",
      },
      {
        heading: "Maintenance agreement renewals",
        text: "Renewal reminders and follow-ups are the definition of recurring paperwork. We prepare them on schedule and you approve the batch.",
      },
      {
        heading: "Reviews during peak season",
        text: "Summer is when most of your reviews arrive and when you have the least time to answer them. Drafts are waiting when you come up for air.",
      },
    ],
    services: ["quotes-and-proposals", "recurring-paperwork", "review-replies"],
    scenario:
      "In July you run eleven calls in a day and send photos of all eleven tickets at once. That evening the three replacement quotes are drafted and the week's renewal reminders are queued for your OK.",
  },
  {
    slug: "electricians",
    name: "Electricians",
    keyword: "admin help for electricians",
    metaTitle: "Quote Writing and Admin Help for Electricians",
    metaDescription:
      "Electricians send walkthrough notes and get itemized quotes back the same day. Extra Mile also handles review replies and inbox sorting for one flat monthly price.",
    h1: "Paperwork help for electricians",
    intro:
      "A panel upgrade, a kitchen remodel and a service call all need different paperwork, and you are the only one who knows what was said on the walkthrough.",
    pains: [
      {
        heading: "Itemized quotes from walkthrough notes",
        text: "Your notes list the circuits, fixtures and gear. We turn them into an itemized quote in your format so the customer sees exactly what they are paying for.",
      },
      {
        heading: "General contractor and supplier email",
        text: "Schedule changes from builders and quotes from supply houses get grouped in your inbox report, with the time-sensitive ones on top.",
      },
      {
        heading: "Follow-ups on quotes that went quiet",
        text: "A polite nudge a week after a quote wins jobs. We draft the follow-ups and you send the ones you want.",
      },
    ],
    services: ["quotes-and-proposals", "email-triage", "recurring-paperwork"],
    scenario:
      "After a Thursday walkthrough you record a two-minute voice memo in the van. Friday morning the itemized quote is ready, and you adjust one line before sending it.",
  },
  {
    slug: "landscapers",
    name: "Landscapers and lawn care",
    keyword: "admin help for landscaping businesses",
    metaTitle: "Proposals, Posts and Paperwork Help for Landscapers",
    metaDescription:
      "Landscapers turn site notes into proposals and job photos into a week of social posts. Extra Mile prepares them, you approve them. Flat monthly price.",
    h1: "Paperwork help for landscapers and lawn care crews",
    intro:
      "Your work photographs better than almost any other trade, and the growing season in the Southeast barely pauses. The photos stay on your phone because the daylight goes to the jobs.",
    pains: [
      {
        heading: "Job photos that actually get posted",
        text: "Send a handful of before-and-after shots. Get back a week of captions ready for Facebook, Nextdoor and Instagram.",
      },
      {
        heading: "Design and install proposals",
        text: "Site notes and measurements become a proposal with your plant list, your pricing and your terms.",
      },
      {
        heading: "Seasonal contract renewals",
        text: "Maintenance contract renewals and seasonal service reminders are prepared ahead of time, so they go out before the customer starts shopping around.",
      },
    ],
    services: ["social-media-posts", "quotes-and-proposals", "recurring-paperwork"],
    scenario:
      "You send six photos of a finished paver patio on Friday afternoon. Monday's post is ready before the weekend, along with four more for the week.",
  },
  {
    slug: "general-contractors",
    name: "General contractors and remodelers",
    keyword: "admin help for general contractors",
    metaTitle: "Proposal Writing and Admin Help for General Contractors",
    metaDescription:
      "General contractors and remodelers hand off proposals, vendor briefing and inbox sorting. Extra Mile prepares the drafts, you keep the final say. Flat monthly price.",
    h1: "Paperwork help for general contractors and remodelers",
    intro:
      "A remodel is a hundred small messages: subs, suppliers, the homeowner, the inspector. Most of your evening goes to repeating the same job details to different people.",
    pains: [
      {
        heading: "Briefing vendors and subs",
        text: "Six of seven owners in our survey named vendor briefing as the first chore they would hand off. Give us the job details once and get the briefs drafted for each trade.",
      },
      {
        heading: "Proposals with real scope",
        text: "Walkthrough notes become a proposal with scope, allowances and exclusions laid out in your format.",
      },
      {
        heading: "An inbox sorted by job",
        text: "Your inbox report groups messages so everything about the Miller kitchen is in one place, with anything blocking the schedule at the top.",
      },
    ],
    services: ["email-triage", "quotes-and-proposals", "recurring-paperwork"],
    scenario:
      "You dictate the scope of a bathroom remodel on the drive home. The proposal draft and the briefs for the plumber, electrician and tile setter are waiting in the morning.",
  },
  {
    slug: "auto-repair-shops",
    name: "Auto repair shops",
    keyword: "admin help for auto repair shops",
    metaTitle: "Review Replies and Admin Help for Auto Repair Shops",
    metaDescription:
      "Independent auto repair shops hand off review replies, service reminders and parts-vendor email. Extra Mile drafts them, you approve them. Flat monthly price.",
    h1: "Paperwork help for independent auto repair shops",
    intro:
      "An independent shop lives on reviews and repeat customers, and both depend on follow-through that happens at the counter computer after the bays close.",
    pains: [
      {
        heading: "Reviews answered, every one",
        text: "Shops collect reviews faster than most businesses. Each gets a drafted reply that sounds like the person behind your counter.",
      },
      {
        heading: "Service reminders and follow-ups",
        text: "Oil change intervals, declined-work follow-ups and inspection reminders are prepared on schedule for your approval.",
      },
      {
        heading: "Parts-vendor email",
        text: "Backorders, core returns and price updates are batched so you deal with each vendor once.",
      },
    ],
    services: ["review-replies", "recurring-paperwork", "email-triage"],
    scenario:
      "On Monday morning your inbox report shows two customers waiting on estimates at the top and nine vendor messages batched underneath. You are done with email before the first car is on the lift.",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
