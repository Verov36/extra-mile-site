export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date */
  date: string;
  readMinutes: number;
  sections: { heading?: string; paragraphs: string[] }[];
  related: { href: string; label: string }[];
};

export const posts: Post[] = [
  {
    slug: "how-to-reply-to-a-bad-google-review",
    title: "How to reply to a bad Google review without making it worse",
    description:
      "A plain five-part reply that works for one-star and three-star reviews, written for owners who would rather be on the job than on Google.",
    date: "2026-09-19",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "A bad review stings more when you did the work yourself. The urge is to explain, in detail, why the customer is wrong. Resist it. The reply is not really for that customer. It is for the next fifty people who read it while deciding whether to call you.",
        ],
      },
      {
        heading: "Wait until tomorrow, then keep it short",
        paragraphs: [
          "Nothing good gets written in the first hour. Draft it the next day, keep it under five sentences, and have someone else read it before it goes up.",
        ],
      },
      {
        heading: "The five parts",
        paragraphs: [
          "First, use their name and thank them for saying something. Second, name the specific problem so it is clear a person read the review. Third, say what you have done or will do about it, in one sentence. Fourth, give a direct phone number and the name of who will pick up. Fifth, stop. No discount offers in public, no argument about the invoice, no mention of how long you have been in business.",
        ],
      },
      {
        heading: "Answer the good ones too",
        paragraphs: [
          "A page where only the complaints get a response looks defensive. Two sentences on a five-star review, mentioning the actual job, shows that a real person is paying attention. Do it weekly and it takes ten minutes. Skip a few months and it becomes a project.",
          "If it has already become a project, that is the kind of chore Extra Mile takes on: every review gets a drafted reply, and you change and approve each one before it is posted.",
        ],
      },
    ],
    related: [
      { href: "/services/review-replies", label: "Review replies" },
      { href: "/claim-a-spot", label: "Claim a spot" },
    ],
  },
  {
    slug: "what-a-same-day-quote-is-worth",
    title: "What a same-day quote is worth to a small shop",
    description:
      "Why the speed of your estimate matters as much as the number on it, and how to get quotes out the door without giving up your evenings.",
    date: "2026-09-19",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Most customers ask two or three businesses for a price. The first clear, professional quote to arrive sets the bar the others are judged against. The one that shows up four days later is competing against a decision that may already be made.",
        ],
      },
      {
        heading: "Why quotes run late",
        paragraphs: [
          "It is rarely the estimating. You knew the price before you left the driveway. It is the typing: turning shorthand on a ticket into something a customer can read, with the right line items, terms and logo. That part gets pushed to the evening, and evenings fill up.",
        ],
      },
      {
        heading: "Three ways to speed it up yourself",
        paragraphs: [
          "Keep one master quote for each of your five most common jobs and edit from there. Record a voice memo before you leave the site, while the details are fresh. And set a fixed time, the same every day, when quotes go out, so they never depend on how tired you are.",
        ],
      },
      {
        heading: "Or hand off the typing",
        paragraphs: [
          "Five hours of desk work a week is roughly 250 hours a year. With Extra Mile you send the notes as a text, photo or voice memo and get the finished quote back the same day, with your prices and your wording. You still make every decision. You just stop doing the typing.",
        ],
      },
    ],
    related: [
      { href: "/services/quotes-and-proposals", label: "Quotes and proposals" },
      { href: "/how-it-works", label: "How it works" },
    ],
  },
  {
    slug: "the-250-hour-paperwork-problem",
    title: "The 250-hour paperwork problem",
    description:
      "Five hours of desk work a week adds up to six working weeks a year. Here is how to find out where yours goes and what to hand off first.",
    date: "2026-09-19",
    readMinutes: 3,
    sections: [
      {
        paragraphs: [
          "Ask an owner how much time paperwork takes and the answer is usually a shrug and the words a few hours. Run the number. Five hours a week, fifty weeks a year, is 250 hours. At forty hours a week, that is more than six weeks of full-time work spent on quotes, email and follow-ups.",
        ],
      },
      {
        heading: "Find your biggest time sink in one week",
        paragraphs: [
          "For one week, keep a tally on a sticky note: a mark for every fifteen minutes spent on quotes, on email, on reviews, on social posts, and on recurring paperwork like renewals and reminders. At the end of the week the longest row is your answer.",
          "When we asked Southeastern small-business owners the same question in our September survey, six of seven named vendor briefing as the first chore they would hand off, with email triage and review replies close behind. Large and small businesses were equally interested in cutting their biggest time sinks.",
        ],
      },
      {
        heading: "Hand off the drafting, keep the deciding",
        paragraphs: [
          "The part of paperwork that needs you is the judgment: the price, the promise, the tone with a difficult customer. The part that does not need you is the typing and formatting. Split the two and most of the 250 hours comes back.",
        ],
      },
    ],
    related: [
      { href: "/services", label: "What we take on" },
      { href: "/founding-members", label: "The founding-member offer" },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
