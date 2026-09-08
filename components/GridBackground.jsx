/* Ruled ground. Cells are wider than tall so it reads as rows rather than graph
   paper, which is the right association: Apollo is a table of line items.

   The mask does the work. Without it the grid ends at a hard rectangle and
   looks pasted on.

   Two placements, each with a job. "top" sits under the opening, centred low on
   the screenshot so the app has something to sit on and the heading stays on
   clean white. "bottom" sits under the footer, which is otherwise two lines
   floating on white, and gives the page a floor. Deliberately not used behind
   body copy, where it would be decoration and would cost legibility.

   Both class strings are written out in full rather than composed, because
   Tailwind scans source text: a class built by interpolation is never
   compiled. */

const base =
  "pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] [background-size:72px_36px]";

const variants = {
  top: "[mask-image:radial-gradient(ellipse_85%_65%_at_50%_88%,#000_35%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_85%_65%_at_50%_88%,#000_35%,transparent_100%)]",
  bottom:
    "[mask-image:radial-gradient(ellipse_90%_110%_at_50%_100%,#000_25%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_90%_110%_at_50%_100%,#000_25%,transparent_100%)]",
};

export default function GridBackground({ anchor = "top" }) {
  return <div aria-hidden="true" className={`${base} ${variants[anchor]}`} />;
}
