import styled from "styled-components";

import { darkMediumGrey, lightGrey, baseFont } from "./_definitions";

const LogInButton = styled.button`
  font-weight: 300;
  background: none;
  border: none;
  background-color: ${lightGrey};
  font-family: ${baseFont};
  border-radius: 2px;
  margin: 0.2rem auto;
  padding: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: ${darkMediumGrey};
  }
  &:active {
    transform: scale(0.9);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export { LogInButton };
