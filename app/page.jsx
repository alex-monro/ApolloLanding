import Image from "next/image";
import Container from "@/components/Container";
import GridBackground from "@/components/GridBackground";
import WhatItSolves from "@/components/WhatItSolves";
import HowItWorks from "@/components/HowItWorks";
import GitHubButton from "@/components/ui/GitHubButton";
import { REPO_URL } from "@/lib/constants";

/* Opening: title, standfirst, and the link, stacked left in one column, then
   the app full width below.

   The reference (inspiration/image.png) splits these across two columns with a
   billboard-sized heading. That shape only exists because its right column held
   two CTA buttons. With no CTAs the split has nothing to do, and the scale made
   the words compete with the screenshot, which is the actual evidence. */

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20 lg:pt-28">
        <GridBackground />
        <Container>
          <div className="flex max-w-3xl flex-col items-start gap-6">
            <h1 className="font-heading text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-semibold tracking-tight text-balance text-ink">
              Apollo turns a wholesale buyer&rsquo;s pasted list into a priced
              order
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              It sits in front of the distributor&rsquo;s ERP, so buyers reorder
              without emailing a rep or clicking through a catalog. They paste
              whatever they have: product codes, plain descriptions, a PO
              number. Apollo prices it against their account, checks stock, and
              says plainly when it can&rsquo;t.
            </p>

            <div className="mt-2">
              <GitHubButton href={REPO_URL} />
            </div>
          </div>
        </Container>

        {/* Unlike the reference, this sits clear of the heading, so no glyphs get
          covered, and it shows its full height rather than being clipped. */}
        <Container className="relative mt-16 pb-20 lg:mt-20 lg:pb-28">
          <div>
            <div className="overflow-hidden rounded-xl border border-line bg-raised shadow-[0_2px_50px_-12px_rgb(0_0_0/0.15)]">
              <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                {/* The one place colour appears on the page. It reads as
                    browser chrome rather than as a palette choice, which is
                    why it does not count against the monochrome rule. */}
                <div className="flex gap-2" aria-hidden="true">
                  <span className="size-3 rounded-full bg-[#ff5f57]" />
                  <span className="size-3 rounded-full bg-[#febc2e]" />
                  <span className="size-3 rounded-full bg-[#28c840]" />
                </div>
              </div>
              <Image
                src="/screenshots/image.png"
                alt="The Apollo reorder page: a cart of five priced line items showing stock, lead time and warehouse per row, with an activity log alongside it."
                width={1901}
                height={947}
                priority
                sizes="100vw"
                className="w-full"
              />
            </div>

            {/* Sits under the evidence rather than before it. As a standfirst
                this read as a hedge; as a caption it is a label on what the
                reader is looking at. */}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              A demo build, running against a mock ERP: the system a distributor
              runs its inventory on.
            </p>
          </div>
        </Container>
      </section>

      <HowItWorks />
      <WhatItSolves />
    </>
  );
}
