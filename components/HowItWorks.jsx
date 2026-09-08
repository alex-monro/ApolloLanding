import Container from "./Container";
import RequestFlow from "./RequestFlow";

/* Describes what happens to a paste. Does not argue for it.

   An earlier draft was defending plain code against a charge nobody had made,
   which is what makes plain code sound like the consolation prize. It also said
   the same thing three times: prose, then the diagram, then a numbered list. */

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] leading-tight font-semibold tracking-tight text-balance text-ink">
            How a paste becomes an order
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            A pasted list arrives in whatever shape the buyer sent it, so the
            first job is organizing it. That is the part Claude does, through
            custom tools that hold its answer to a fixed shape: a quantity, a
            unit, a product, and how confident it is.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted">
            From there Apollo&rsquo;s own logic takes over. Lookups, discounts,
            and who may see which field each have exactly one correct answer, so
            Apollo works them out directly. The rest is failure handling. A
            stock check that times out falls back to the cached figure and shows
            its age, or says plainly that stock cannot be confirmed. A code that
            matches nothing returns the closest few products rather than a dead
            end. Every step writes a line to the activity log.
          </p>
        </div>

        <div className="mt-14">
          <RequestFlow />
        </div>
      </Container>
    </section>
  );
}
