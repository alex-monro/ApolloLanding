"use client";

import { useEffect, useRef, useState } from "react";
import {
  ClipboardPaste,
  Sparkles,
  ListChecks,
  Table2,
  Receipt,
  ArrowRight,
  ArrowDown,
  Check,
} from "lucide-react";

/* What happens to a paste.

   Fluid: the steps share the container width rather than sitting at a fixed
   size. Below lg they stack and the connectors turn to point down, minus the
   trailing line and checkmark, which have nothing to lead to once stacked.

   The connectors draw in left to right, once, when the diagram is actually
   scrolled into view. Only the lines and arrowheads move: icons, headings and
   body text are visible at rest, so a reader who never sees it loses nothing.

   The dotted run is the model step: the ring around Claude and the line leaving
   it, because what leaves it is a guess. Arrows stay solid ink throughout, so
   the eye follows one path. */

const steps = [
  {
    icon: ClipboardPaste,
    title: "The buyer pastes anything",
    body: "Codes, plain words, a PO number, or all three at once.",
    inference: false,
  },
  {
    icon: Sparkles,
    title: "Claude organizes it",
    body: "Reads the paste into line items: a quantity, a unit, and which product is meant.",
    inference: true,
  },
  {
    icon: ListChecks,
    title: "Apollo checks it",
    body: "Codes are looked up, misses come back with close matches, pricing and stock come from the account.",
    inference: false,
  },
  {
    icon: Table2,
    title: "The buyer reviews",
    body: "Adjust quantities, swap in a suggestion, remove a line. The cart reprices after every change.",
    inference: false,
  },
  {
    icon: Receipt,
    title: "The buyer places the order",
    body: "It saves to the account's order history.",
    inference: false,
  },
];

// Fires once, the first time the diagram is meaningfully on screen.
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No observer (or already past it) means show the finished state.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function RequestFlow() {
  const [ref, inView] = useInView();

  return (
    <ol
      ref={ref}
      role="list"
      className="flex w-full flex-col gap-10 xl:flex-row xl:gap-0"
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;
        const line = step.inference
          ? "border-dotted border-ink"
          : "border-solid border-ink";

        const lineAnim = inView
          ? "animate-[draw-line_0.55s_ease-out_forwards]"
          : "";
        const markAnim = inView
          ? "animate-[fade-in_0.35s_ease-out_forwards]"
          : "";
        const lineStyle = {
          animationDelay: `${index * 0.3}s`,
          transform: inView ? undefined : "scaleX(0)",
        };
        const markStyle = {
          animationDelay: `${index * 0.3 + 0.5}s`,
          opacity: inView ? undefined : 0,
        };

        return (
          <li key={step.title} className="min-w-0 flex-1 xl:pr-8 xl:last:pr-0">
            <div className="flex items-center">
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-full border-2 text-ink ${
                  step.inference
                    ? "border-dotted border-ink"
                    : "border-solid border-line"
                }`}
              >
                <Icon className="size-[18px]" aria-hidden="true" />
              </span>

              {/* Across, at lg and up. The last step runs into a filled stop
                  rather than trailing off, which also stops the row ending in
                  dead space. */}
              <span
                aria-hidden="true"
                className="ml-4 hidden flex-1 items-center xl:flex"
              >
                <span
                  className={`h-0 flex-1 origin-left border-t-2 ${line} ${lineAnim}`}
                  style={lineStyle}
                />
                {isLast ? (
                  <span
                    className={`ml-4 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-solid border-ink bg-ink text-ground ${markAnim}`}
                    style={markStyle}
                  >
                    <Check className="size-[18px]" strokeWidth={2.5} />
                  </span>
                ) : (
                  <ArrowRight
                    className={`-ml-px size-4 shrink-0 text-ink ${markAnim}`}
                    style={markStyle}
                    strokeWidth={2.5}
                  />
                )}
              </span>
            </div>

            <h3 className="font-heading mt-5 text-xl leading-snug font-semibold tracking-tight text-balance text-ink">
              {step.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{step.body}</p>

            {/* Down, below lg. Nothing after the last step: a line running to a
                checkmark reads as a terminus across a row, but as a dangling
                tail down a phone screen. */}
            {!isLast && (
              <span
                aria-hidden="true"
                className="mt-6 flex w-10 flex-col items-center xl:hidden"
              >
                <span className={`h-8 w-0 border-l-2 ${line}`} />
                <ArrowDown
                  className="-mt-px size-4 shrink-0 text-ink"
                  strokeWidth={2.5}
                />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
