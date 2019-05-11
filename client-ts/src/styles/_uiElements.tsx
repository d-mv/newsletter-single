import styled from "styled-components";

import {
  arsenic,
  lightGrey,
  baseFont,
  boxTransition,
  boxShadow,
  boxShadowHover,
  borderBottomArs,
  borderBottomLG
} from "./_definitions";

const Button = styled.button`
  font-weight: 300;
  background: none;
  border: none;
  border-bottom: ${borderBottomArs};
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
    border-bottom: ${borderBottomLG};
  }
  &:active {
    transform: scale(0.95);
    box-shadow: ${boxShadow};
    border-bottom: ${borderBottomLG};
  }
`;

export { Button };
