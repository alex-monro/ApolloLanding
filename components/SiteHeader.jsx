import { Rocket } from "lucide-react";
import Container from "./Container";
import GitHubMark from "./GitHubMark";
import { REPO_URL } from "@/lib/constants";

/* Logo and one link. No anchor nav.

   There was one: four jump links across the top. On a page that is one heading,
   one screenshot and three short sections, in-page navigation is scaffolding,
   and it was doing more SaaS signalling than anything else left after the CTAs,
   the split, and the full-viewport hero were removed.

   Rocket is the same lucide icon Apollo uses in its own sidebar, per the
   logo/rocket-icon branch. */

export default function SiteHeader() {
  return (
    <header className="border-b border-line bg-ground">
      <Container className="flex h-20 items-center justify-between gap-8">
        <a
          href="/"
          className="flex items-center gap-2 text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <Rocket className="size-5" aria-hidden="true" />
          <span className="font-heading text-lg font-semibold tracking-tight">
            Apollo
          </span>
        </a>

        {/* Icon only. The accessible name is on the link, since the mark
            itself is aria-hidden. */}
        <a
          href={REPO_URL}
          aria-label="Apollo source on GitHub"
          title="Apollo source on GitHub"
          className="-m-2 rounded-md p-2 text-ink transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <GitHubMark className="size-5" />
        </a>
      </Container>
    </header>
  );
}
