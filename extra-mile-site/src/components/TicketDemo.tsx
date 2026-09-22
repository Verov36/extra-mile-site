/**
 * The hero: a scrawled job note on the yellow copy, and the finished quote it
 * becomes. "Doe's Plumbing" is the placeholder business from the sign-up form.
 * All figures are an illustration, not a price list.
 */
const lines = [
  { item: "Supply and install 40-gal gas water heater", price: "1,390" },
  { item: "Expansion tank and drain pan", price: "285" },
  { item: "Remove and haul away old unit", price: "95" },
  { item: "Permit", price: "80" },
];

export function TicketDemo() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <figcaption className="sr-only">
        Example: a handwritten job note for a water heater replacement, and the finished itemized
        quote Extra Mile sends back the same day for the owner to approve.
      </figcaption>

      {/* The note you send */}
      <div className="ruled relative z-10 w-[80%] -rotate-2 rounded-sm border border-ink/25 px-5 pt-3 pb-5 shadow-[3px_4px_0_rgba(24,38,59,0.18)] sm:w-[64%]">
        <p className="font-sans text-[0.8rem] font-semibold text-ink-soft">5:15 p.m. You send this</p>
        <p className="mt-1 font-hand text-[1.55rem] leading-8 text-ink">
          Miller, 114 Oak St
          <br />
          swap 40 gal gas WH
          <br />
          new exp tank + pan
          <br />
          haul old one. permit!
          <br />
          2 guys ~3 hrs = 1850
        </p>
      </div>

      {/* The quote you get back */}
      <div className="ticket-in relative z-20 -mt-6 ml-auto w-[92%] rounded-sm border-2 border-ink bg-sheet shadow-[6px_6px_0_var(--color-ink)] sm:-mt-14 sm:w-[72%]">
        <div className="perforation" />
        <div className="px-5 pt-2 pb-5 sm:px-6">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-sans text-[0.8rem] font-semibold text-ink-soft">7:00 p.m. You get this</p>
            <p className="font-slab text-sm font-bold text-serial">No. 0412</p>
          </div>
          <div className="mt-2 flex items-end justify-between gap-3 border-b-2 border-ink pb-2">
            <p className="font-slab text-xl font-bold leading-tight">Doe&apos;s Plumbing</p>
            <p className="text-sm text-ink-soft">Quote for J. Miller</p>
          </div>
          <table className="mt-1 w-full text-[0.9rem]">
            <caption className="sr-only">Example quote line items</caption>
            <tbody>
              {lines.map((l) => (
                <tr key={l.item} className="border-b border-rule">
                  <th scope="row" className="py-2 pr-3 text-left font-normal leading-snug">
                    {l.item}
                  </th>
                  <td className="py-2 text-right align-top tabular-nums">${l.price}</td>
                </tr>
              ))}
              <tr>
                <th scope="row" className="pt-3 text-left font-slab text-lg font-bold">
                  Total
                </th>
                <td className="pt-3 text-right font-slab text-lg font-bold tabular-nums">$1,850</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-[0.8rem] leading-snug text-ink-soft">
              Your prices, your wording, your logo.
            </p>
            <p className="-rotate-3 whitespace-nowrap rounded-sm border-2 border-serial px-2.5 py-1 font-slab text-sm font-bold text-serial">
              Waiting for your OK
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
