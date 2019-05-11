import styled from "styled-components";

import {
  arsenic,
  darkMediumGrey,
  lightGrey,
  baseFont,
  boxTransition,
  boxShadow,
  boxShadowHover
} from "./_definitions";

const Button = styled.button`
  /* position: absolute;
  top: 44vh;
  left: 10vw; */
  font-weight: 300;
  background: none;
  border: none;
  background-color: ${arsenic};
  color: ${lightGrey};
  font-family: ${baseFont};
  border-radius: 2px;
  margin: 0.2rem auto;
  padding: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  box-shadow: ${boxShadow};
  transition: ${boxTransition};
  user-select: none;
  cursor: pointer;
  &:hover {
    box-shadow: ${boxShadowHover};
    background-color: ${darkMediumGrey};
  }
  &:active {
    transform: scale(0.9);
    box-shadow: ${boxShadow};
  }
`;

export { Button };
