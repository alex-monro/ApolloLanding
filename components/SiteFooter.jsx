import Container from "./Container";
import GridBackground from "./GridBackground";
import { REPO_URL, TEAM_URL, TEAM_NAME } from "@/lib/constants";

const linkStyle =
  "text-ink underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export default function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-line py-12">
      <GridBackground anchor="bottom" />
      <Container>
        <p className="font-heading text-base font-semibold tracking-tight text-ink">
          Apollo
        </p>

        <p className="mt-2 text-sm text-muted">
          Built by{" "}
          <a href={TEAM_URL} className={linkStyle}>
            {TEAM_NAME}
          </a>
          . Source on{" "}
          <a href={REPO_URL} className={linkStyle}>
            GitHub
          </a>
          .
        </p>
      </Container>
    </footer>
  );
}
