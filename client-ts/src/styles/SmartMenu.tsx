import styled from "styled-components";

import { arsenic, accent, baseFont } from "./_definitions";

const SmartMenu = styled.nav`
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

  button {
    color: ${arsenic};
    transition: 0.7s;
    outline: none;
    padding: {
      top: 3px;
      left: 10px;
      right: 10px;
    }
    font-family: Alegreya;
    font-size: 0.9rem;
    letter-spacing: 1px;

    &:hover {
      transform: scale(1.1);
      color: ${arsenic};
    }

    &:active {
      transform: scale(0.9);
    }
  }
  .on {
    color: ${accent};
  }
`;

export default SmartMenu;
