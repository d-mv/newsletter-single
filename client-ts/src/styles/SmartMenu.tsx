import styled from "styled-components";

import { baseFont } from "./_definitions";
import { slideDown } from "./_animations";

const SmartMenu = styled.nav`
  animation: 0.7s ease-out 0s 1 ${slideDown};
  position: absolute;
  left: 10vw;
  top: 3.2rem;
  transition: 0.7s;
  width: 80vw;
  height: 2rem;
  font-family: ${baseFont};
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  user-select: none;

  @media (max-width: 435px) {
    top: 4.5rem;
    width: 100vw;
    left: 0;
  }
`;

export default SmartMenu;
