export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** One line used on cards and in llms.txt */
  short: string;
  /** Primary search phrase this page is built to answer */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  youGive: string;
  youGetBack: string;
  body: { heading: string; text: string }[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "quotes-and-proposals",
    name: "Quotes and proposals",
    short: "Job notes in, a clean priced quote back the same day, ready for you to edit and send.",
    keyword: "quote writing service for contractors",
    metaTitle: "Quote and Proposal Writing for Small Businesses",
    metaDescription:
      "Send your job notes as a text, photo or voice memo. Extra Mile sends back a clean, priced quote in your wording the same day. You review it and hit send.",
    h1: "Quotes written from your job notes, back the same day",
    intro:
      "The quote is where the job is won, and it usually gets written last, at the kitchen table, from a scrap of paper you can barely read. Hand us the scrap instead.",
    youGive:
      "Your notes in whatever form they already exist: a few lines of text, a photo of a handwritten ticket, a voice memo from the truck.",
    youGetBack:
      "A finished quote with your prices, your wording and your logo, needing only small changes before it goes out with a proposal or reply in your name.",
    body: [
      {
        heading: "You keep your prices and your voice",
        text: "During setup you show us how you quote today: your rates, the phrases you use, the way you lay a job out. Every quote after that is built on that pattern, so customers hear you and not a template.",
      },
      {
        heading: "Same day, not the evening after",
        text: "Snap photos of the week's job notes at 5:15 and go home. The finished quote lands on your phone that evening. Look it over in the morning, change what needs changing, and send it. If you need turnaround within minutes, we are not the right fit, and we would rather say so now.",
      },
      {
        heading: "Paper still works",
        text: "Every quote can be printed, filled out by hand or mailed. Record-keeping is as simple as filing the document wherever you file things now.",
      },
    ],
    faqs: [
      {
        q: "Do you set my prices?",
        a: "No. Pricing is a decision, and decisions stay with you. We build each quote from the rates and rules you give us, and you approve the numbers before anything is sent.",
      },
      {
        q: "What if my notes are a mess?",
        a: "That is the normal case. Handwriting, shorthand and half-sentences are fine. If something cannot be read or a number is missing, we flag it in the draft instead of guessing.",
      },
    ],
  },
  {
    slug: "review-replies",
    name: "Review replies",
    short: "A drafted reply for every Google, Yelp and other review. You modify and approve each one.",
    keyword: "google review response service",
    metaTitle: "Google and Yelp Review Reply Service",
    metaDescription:
      "Extra Mile drafts a reply to every Google, Yelp and other customer review in your voice. You change and approve each one before it is posted.",
    h1: "A reply drafted for every customer review",
    intro:
      "An unanswered review does not stay neutral. Customers read the silence, and a three-star left alone tends to invite another. Keeping up is not hard work, it is just work nobody has time for.",
    youGive: "The sites where you are listed, and a few examples of how you like to talk to customers.",
    youGetBack:
      "A drafted reply for each new review on Google, Yelp and the other sites you are listed on, waiting for your changes and your approval.",
    body: [
      {
        heading: "Nothing is posted without your OK",
        text: "You read every reply before it goes anywhere. Change a word, rewrite the whole thing, or reject it. Your name is on it, so you have the final say.",
      },
      {
        heading: "The hard ones get the most care",
        text: "A one-star review needs a calm, specific answer that future customers will respect. We draft it without the heat of the moment, and you decide whether it says what you want said.",
      },
      {
        heading: "Why this matters for being found",
        text: "Owners who answer reviews regularly look active and trustworthy to the people reading them, and review activity is one of the signals local search pays attention to. It is one of the cheapest things a local business can do for its reputation.",
      },
    ],
    faqs: [
      {
        q: "Will the replies sound like a robot?",
        a: "They are written from examples of how you talk, and you edit each one. If a draft does not sound like you, send it back and tell us why. The next ones improve.",
      },
      {
        q: "Which review sites do you cover?",
        a: "Google and Yelp are the main two, plus the other sites where your customers leave reviews. Tell us where you are listed during setup.",
      },
    ],
  },
  {
    slug: "email-triage",
    name: "Email triage",
    short: "An inbox report sorted by what needs you, with similar messages batched for quicker replies.",
    keyword: "email management for small business owners",
    metaTitle: "Email Triage and Inbox Reports for Business Owners",
    metaDescription:
      "Get an inbox report sorted by what actually needs your attention, with similar messages batched so you can answer them in one pass.",
    h1: "An inbox report sorted by what actually needs you",
    intro:
      "Most of what lands in a business inbox does not need the owner. The trouble is that you have to read all of it to find the part that does.",
    youGive: "The business inbox you want sorted, and twenty minutes showing us what matters to you and what never does.",
    youGetBack:
      "A report that puts the messages needing your attention at the top and batches similar ones together, so ten supplier questions get one sitting instead of ten interruptions.",
    body: [
      {
        heading: "Sorted the way you would sort it",
        text: "A customer waiting on a quote outranks a newsletter. A vendor with a delivery problem outranks a vendor with a catalog. We learn your order of importance during setup and sort to it.",
      },
      {
        heading: "Vendor briefing, the chore owners want gone first",
        text: "In our September survey of Southeastern small-business owners, six of seven said briefing vendors is the first chore they would hand off, with email triage and review replies close behind. Batched vendor messages and drafted replies are built for exactly that.",
      },
      {
        heading: "You still press send",
        text: "We sort and we draft. You decide. No reply leaves your account without your approval.",
      },
    ],
    faqs: [
      {
        q: "Do you read all of my email?",
        a: "Only the business inbox you point us at, and only to sort it and draft replies. Your information is kept in one local place and is not shared or sold.",
      },
    ],
  },
  {
    slug: "social-media-posts",
    name: "Posts about your finished work",
    short: "A few photos of your products or jobs become a week of ready-to-post captions.",
    keyword: "social media posts for local businesses",
    metaTitle: "Social Media Captions for Local Businesses",
    metaDescription:
      "Send a few photos of finished jobs or products. Extra Mile turns them into a week of ready-to-post captions for Facebook, Nextdoor and Instagram.",
    h1: "A few photos become a week of ready-to-post captions",
    intro:
      "Your best advertising is already on your phone: the finished deck, the clean install, the before and after. It stays there because writing a post feels like homework.",
    youGive: "Some photos from your jobs, products or services, and a line or two about what we are looking at.",
    youGetBack: "A week of captions matched to those photos, ready to post wherever your customers already are.",
    body: [
      {
        heading: "Written for neighbors, not for an algorithm",
        text: "Local customers want to see real work from a real business nearby. The captions say what the job was, where in town it was, and how to reach you. No hashtag walls, no marketing voice.",
      },
      {
        heading: "You choose what goes up",
        text: "Use all seven, use two, rewrite one. The posts go out under your name, so they wait for your approval like everything else we do.",
      },
    ],
    faqs: [
      {
        q: "Do you post for me?",
        a: "We hand you captions that are ready to post. You stay in control of your accounts and of what goes public.",
      },
    ],
  },
  {
    slug: "recurring-paperwork",
    name: "Your recurring paperwork",
    short: "Renewals, reminders, follow-ups. Whatever your drudgery is, that is the one we want first.",
    keyword: "small business admin help",
    metaTitle: "Recurring Paperwork and Admin Help for Small Businesses",
    metaDescription:
      "Renewals, reminders and follow-ups prepared for you on schedule. Tell Extra Mile which recurring paperwork eats your week and we start there.",
    h1: "The recurring paperwork that eats your week",
    intro:
      "Every business has one chore that comes around like clockwork and gets put off every time: the renewal notices, the appointment reminders, the follow-ups on quotes that went quiet.",
    youGive: "Twenty minutes to show us how you do it today.",
    youGetBack: "Working reports and drafts shaped around your role, prepared on the schedule the chore actually runs on.",
    body: [
      {
        heading: "Your worst chore goes first",
        text: "We do not start from a menu. We ask which task you would most like handed back to you finished, and how many hours a week it takes. That answer decides what we set up first.",
      },
      {
        heading: "What five hours a week adds up to",
        text: "Five hours of desk work a week is roughly 250 hours a year, about six working weeks spent on paperwork. Handing it off is like adding 250 billable hours to your shop, or another customer's worth of capacity, without hiring.",
      },
    ],
    faqs: [
      {
        q: "What if my paperwork is not on your list?",
        a: "The list is a starting point. Founding members vote on what gets built next, and the whole point of the setup call is to find your particular drudgery.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
