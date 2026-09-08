import StarField from "./StarField";
import { REPO_URL, DEMO_URL, TEAM_URL, TEAM_NAME } from "@/lib/constants";

/* Same shape as Radar's footer: dark ground, stars behind, centred stack. */

const linkStyle =
  "underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ground";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink px-8 py-24 text-ground">
      <StarField />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <span className="font-heading text-xl font-semibold tracking-tight">
          Apollo
        </span>

        <span>A reordering tool for wholesale buyers.</span>

        <span>
          Built by{" "}
          <a href={TEAM_URL} className={linkStyle}>
            {TEAM_NAME}
          </a>
          .{" "}
          <a href={DEMO_URL} className={linkStyle}>
            Live demo
          </a>
          {" · "}
          <a href={REPO_URL} className={linkStyle}>
            Source
          </a>
        </span>
      </div>
    </footer>
  );
}
