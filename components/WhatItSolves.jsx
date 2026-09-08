import Container from "./Container";

/* First section below the opening.

   Paired rows with hairlines rather than a three-across card grid. Below the
   opening the page runs closer to prose with figures, and card rows are
   marketing furniture. The two-column pairing also echoes the app's own
   tables, which is the right visual grammar for the subject. */

const problems = [
  {
    problem: "Buyers do not browse. They reorder.",
    response:
      "A wholesale buyer already knows what they want, so there is no catalog to click through. One box takes product codes, a list written in plain words, or a previous PO number.",
  },
  {
    problem: "Stock numbers are stale by the time the buyer sees them.",
    response:
      "A live check can hand back a count that is already hours old. Apollo shows the number with the time it was taken and a note to confirm before ordering, rather than presenting it as current.",
  },
  {
    problem: "Price and availability depend on who is asking.",
    response:
      "The same product costs more, or shows different stock, to two different buyers. Apollo resolves both per account, so one paste produces a different table depending on who is signed in.",
  },
  {
    problem: "Errors arrive as codes, not explanations.",
    response:
      "Every failure gets a specific answer. A timeout says the service took too long. A code that matches nothing comes back with the two or three closest products to pick from instead.",
  },
];

export default function WhatItSolves() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] leading-tight font-semibold tracking-tight text-balance text-ink">
            What buyers put up with
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Four problems an agency owner watches repeat across client after
            client. Apollo fixes the buyer&rsquo;s experience of each.
          </p>
        </div>

        <dl className="mt-14 border-t border-line">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="grid grid-cols-1 gap-x-12 gap-y-3 border-b border-line py-8 lg:grid-cols-12"
            >
              <dt className="font-heading text-lg leading-snug font-medium text-balance text-ink lg:col-span-5">
                {item.problem}
              </dt>
              <dd className="leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
                {item.response}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
