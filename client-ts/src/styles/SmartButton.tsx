import styled from "styled-components";

import { arsenic, accent, baseFont } from "./_definitions";

interface IProps {
  accent: boolean;
}

const SmartButton = styled.button<IProps>`
  color: ${props => (props.accent ? accent : arsenic)};
  transition: 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  margin: 0 5px;
  padding: {
    top: 3px;
    left: 10px;
    right: 10px;
  }
  font-family: ${baseFont};
  font-size: 0.9rem;
  letter-spacing: 1px;

  &:hover {
    color: ${accent};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default SmartButton;
