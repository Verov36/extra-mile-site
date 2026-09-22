/**
 * CONFIRM WITH TYLER BEFORE LAUNCH.
 *
 * The live site only says "the Southeast". These starter cities were inferred
 * from the (386) area code on the business phone number, which covers Volusia
 * and Flagler counties in Florida. Swap in the towns Tyler actually wants to
 * win first. Each page needs its own `local` paragraphs; copy-pasted city
 * pages with the name swapped do not rank and can drag the whole site down.
 *
 * The copy says Extra Mile *serves* these towns. It never claims an office
 * there. Keep it that way unless there is one.
 */
export type Location = {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  metaDescription: string;
  intro: string;
  local: { heading: string; text: string }[];
  /** Industry slugs most common among local owners, used for internal links */
  industries: string[];
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: "daytona-beach-fl",
    city: "Daytona Beach",
    state: "Florida",
    stateAbbr: "FL",
    county: "Volusia County",
    metaDescription:
      "Daytona Beach business owners hand quotes, review replies, email and recurring paperwork to Extra Mile. Flat monthly price and a real person on the phone.",
    intro:
      "Daytona Beach businesses work around a calendar most towns never deal with. Race weeks and bike weeks pack the area, and the paperwork from the rush lands right when you are most tired.",
    local: [
      {
        heading: "Event weeks fill the schedule and the inbox",
        text: "When the city fills up, service calls, rental turnovers and rush jobs spike together. Send the notes in as you go and let the quotes and replies get drafted while you keep working.",
      },
      {
        heading: "Visitors read your reviews before they call",
        text: "A large share of your customers may be from out of town and choosing from a phone screen. A business that answers its reviews looks like one that will answer its phone.",
      },
    ],
    industries: ["hvac-contractors", "plumbers", "auto-repair-shops"],
    nearby: ["ormond-beach-fl", "port-orange-fl", "new-smyrna-beach-fl"],
  },
  {
    slug: "palm-coast-fl",
    city: "Palm Coast",
    state: "Florida",
    stateAbbr: "FL",
    county: "Flagler County",
    metaDescription:
      "Palm Coast contractors and service businesses hand off quotes, review replies and paperwork to Extra Mile. One flat monthly price, month to month.",
    intro:
      "Palm Coast keeps adding rooftops, and every new home is a future customer for a plumber, an electrician, a landscaper and an HVAC company. The owners who quote fastest tend to get the work.",
    local: [
      {
        heading: "New neighbors are choosing their trades now",
        text: "People who just moved in have no go-to plumber or lawn crew yet. A same-day quote and a well-kept review page are often the whole difference between you and the next name on the list.",
      },
      {
        heading: "Growth means more quotes per week",
        text: "More requests is a good problem until each one costs you an evening. Hand the writing to us and keep the estimating, the pricing and the decision.",
      },
    ],
    industries: ["landscapers", "general-contractors", "electricians"],
    nearby: ["ormond-beach-fl", "daytona-beach-fl"],
  },
  {
    slug: "deland-fl",
    city: "DeLand",
    state: "Florida",
    stateAbbr: "FL",
    county: "Volusia County",
    metaDescription:
      "DeLand small-business owners hand quotes, review replies and recurring paperwork to Extra Mile. Nothing is sent without your OK. Flat monthly price.",
    intro:
      "DeLand runs on relationships. Customers know the owner by name, and they expect a reply that sounds like the person they shook hands with downtown.",
    local: [
      {
        heading: "Word of mouth now lives in your reviews",
        text: "In a town this size, a thoughtful reply to a review gets read by people who know both you and the customer. We draft every reply in your voice and you approve the wording.",
      },
      {
        heading: "Older homes, longer quotes",
        text: "Work on DeLand's older houses means more line items and more explaining. Dictate the walkthrough and get back a quote that lays the job out clearly.",
      },
    ],
    industries: ["electricians", "general-contractors", "plumbers"],
    nearby: ["deltona-fl", "daytona-beach-fl"],
  },
  {
    slug: "ormond-beach-fl",
    city: "Ormond Beach",
    state: "Florida",
    stateAbbr: "FL",
    county: "Volusia County",
    metaDescription:
      "Ormond Beach service businesses hand quotes, review replies, email and recurring paperwork to Extra Mile for one flat monthly price.",
    intro:
      "Ormond Beach homeowners keep their places up and expect the businesses they hire to be just as buttoned-up. A quote that arrives the same day, cleanly laid out, says a lot before you ever start the job.",
    local: [
      {
        heading: "Repeat customers and standing work",
        text: "Maintenance agreements, seasonal service and annual renewals are steady money and steady paperwork. We prepare the reminders and renewals on schedule for your approval.",
      },
      {
        heading: "Salt air keeps the trades busy",
        text: "Coastal homes wear faster, which means more service calls and more estimates. Send the notes from the driveway and review the finished quote that evening.",
      },
    ],
    industries: ["hvac-contractors", "landscapers", "plumbers"],
    nearby: ["daytona-beach-fl", "palm-coast-fl"],
  },
  {
    slug: "port-orange-fl",
    city: "Port Orange",
    state: "Florida",
    stateAbbr: "FL",
    county: "Volusia County",
    metaDescription:
      "Port Orange small businesses hand off quotes, customer review replies and inbox sorting to Extra Mile. Month to month, no contract.",
    intro:
      "Port Orange is a town of neighborhoods, and neighborhoods talk. One good job turns into three requests on the same street, usually in the same week.",
    local: [
      {
        heading: "Neighborhood groups move fast",
        text: "A recommendation on Nextdoor or Facebook can send several inquiries your way overnight. We help you answer all of them with real quotes before the thread moves on.",
      },
      {
        heading: "Show the work you just finished",
        text: "Photos of a job two streets over are the most convincing ad you have. Send them in and get a week of captions ready to post.",
      },
    ],
    industries: ["landscapers", "plumbers", "auto-repair-shops"],
    nearby: ["daytona-beach-fl", "new-smyrna-beach-fl"],
  },
  {
    slug: "new-smyrna-beach-fl",
    city: "New Smyrna Beach",
    state: "Florida",
    stateAbbr: "FL",
    county: "Volusia County",
    metaDescription:
      "New Smyrna Beach contractors and service businesses hand quotes, review replies and recurring paperwork to Extra Mile. Flat monthly price.",
    intro:
      "Between year-round residents, second homes and vacation rentals, New Smyrna Beach businesses often deal with owners who are not in town. Everything happens by email and estimate.",
    local: [
      {
        heading: "Absentee owners need it in writing",
        text: "When the customer is three states away, the quote and the follow-up email are the whole relationship. We draft both so they go out the same day.",
      },
      {
        heading: "Rental turnovers run on reminders",
        text: "Recurring service for rental properties means recurring paperwork: schedules, confirmations and renewals. That is the kind of drudgery we want first.",
      },
    ],
    industries: ["general-contractors", "hvac-contractors", "landscapers"],
    nearby: ["port-orange-fl", "daytona-beach-fl"],
  },
  {
    slug: "deltona-fl",
    city: "Deltona",
    state: "Florida",
    stateAbbr: "FL",
    county: "Volusia County",
    metaDescription:
      "Deltona owner-operators hand off quotes, review replies and paperwork to Extra Mile so evenings stay free. One flat monthly price, quit anytime.",
    intro:
      "Deltona is full of owner-operators: one truck, one phone, one person doing the work and the paperwork. There is no office manager to hand things to.",
    local: [
      {
        heading: "Built for a business of one",
        text: "You do not need software, a login to learn, or an employee. Text a photo of your notes and get the finished document back.",
      },
      {
        heading: "Someone to call",
        text: "When something is not right, you call a person who knows your setup. No ticket queue and no help forum.",
      },
    ],
    industries: ["plumbers", "electricians", "landscapers"],
    nearby: ["deland-fl", "daytona-beach-fl"],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
