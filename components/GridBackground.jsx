/* Ruled ground behind the opening. Cells are wider than tall so it reads as
   rows rather than graph paper, which is the right association: Apollo is a
   table of line items.

   The mask does the work. Without it the grid ends at a hard rectangle and
   looks pasted on. It is centred low, on the screenshot rather than the
   heading, so the app has something to sit on while the heading stays on clean
   white.

   Written as one literal class string rather than composed, because Tailwind
   scans source text: a class built by interpolation is never compiled. */

export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] [background-size:72px_36px] [mask-image:radial-gradient(ellipse_85%_65%_at_50%_88%,#000_35%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_85%_65%_at_50%_88%,#000_35%,transparent_100%)]"
    />
  );
}
