"use client";

/* uiverse component, kept as it came: styled-components, its own file, not
   mixed in with the Tailwind components.

   Two changes only: it renders an <a> rather than a <button> because it
   navigates, and the label and href are props. Styles are untouched. */

import styled from "styled-components";
import GitHubMark from "../GitHubMark";

const GitHubButton = ({ href, label = "View on GitHub" }) => {
  return (
    <StyledWrapper>
      <a className="button" href={href}>
        <GitHubMark className="size-6" />
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
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
  }

  /* The shared mark paints with currentColor, so the base fill is set here
     rather than baked into the path. */
  .button svg path {
    fill: white;
    transition: 400ms;
  }

  .button:hover {
    background-color: transparent;
  }

  .button:hover .text {
    color: #181717;
  }

  .button:hover svg path {
    fill: #181717;
  }
`;

export default GitHubButton;
