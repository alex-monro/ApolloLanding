"use client";

/* uiverse component, generalised so the GitHub and live-site buttons share one
   styled block instead of duplicating it. Takes an icon and a label.

   Changes from the original: it renders an <a> because it navigates, the icon
   and label are props, and colour is set once on .button rather than separately
   on the text and the svg. That last one matters: the original filled the svg
   path directly, which works for the GitHub mark but not for a lucide icon,
   which is stroked rather than filled. Both follow currentColor. */

import styled from "styled-components";

const LinkButton = ({ href, icon, label }) => {
  return (
    <StyledWrapper>
      <a className="button" href={href}>
        {icon}
        <p className="text">{label}</p>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
    background-color: #181717;
    color: white;
    outline: 3px #181717 solid;
    outline-offset: -3px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 400ms;
    width: fit-content;
    text-decoration: none;
  }

  .button .text {
    font-weight: 700;
    font-size: 1em;
  }

  /* Guarded, because on a touch screen :hover latches after a tap and the
     button would sit inverted until something else was tapped. Tailwind wraps
     its own hover: utilities this way already; these rules are plain CSS, so
     they need it spelled out. */
  @media (hover: hover) {
    .button:hover {
      background-color: transparent;
      color: #181717;
    }
  }

  /* The component shipped with an unconditional outline the same colour as its
     own fill, drawn inside it by a negative offset. That silently replaced the
     browser's focus ring, leaving no visible focus state. Positive offset,
     outside the fill. */
  .button:focus-visible {
    outline: 3px solid #181717;
    outline-offset: 3px;
  }
`;

export default LinkButton;
