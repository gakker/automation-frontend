import React from "react";
import styled from "styled-components";
import { ReactComponent as Slack } from "../../assets/images/slack.svg";
const SlackIon = () => {
  return (
    <>
      <SlackIonStlyed>
        <Slack />
      </SlackIonStlyed>
    </>
  );
};

export default SlackIon;
const SlackIonStlyed = styled.section`
  margin-right: 10px;
  line-height: 0;
  svg {
    user-select: none;
    /* width: 0.7em; */
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
  }
`;
