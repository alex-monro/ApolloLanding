/* The one width the whole page agrees on.

   Deliberately wider than a typical marketing container (~1280px). The page's
   centrepiece is a screenshot of a three-column application, and a narrow
   column would force it down to a size where its own text stops being
   readable. */

export default function Container({
  as: Tag = "div",
  className = "",
  children,
}) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1600px] px-8 sm:px-10 lg:px-16 ${className}`}
    >
      {children}
    </Tag>
  );
}
