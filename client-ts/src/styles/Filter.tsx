import styled from "styled-components";

import {
  arsenicSemiTrans,
  lightGrey,
  arsenic,
  dimGrey,
  baseFont
} from "./_definitions";

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: ${arsenicSemiTrans};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const buttonTemplate = styled.button`
  font-family: ${baseFont};
  font-size: 1.1rem;
  padding: 5px;
  padding-top: 7px;
  letter-spacing: 1px;
  border-radius: 1px;
  width: 180px;
  margin: 3px auto;
  text-align: center;
`;

interface IProps {
  accent: boolean;
}

const ButtonSource = styled(buttonTemplate)<IProps>`
  background-color: ${props => (props.accent ? dimGrey : lightGrey)};
  color: ${props => (props.accent ? lightGrey : arsenic)};
  border-bottom: 3px solid ${props => (props.accent ? dimGrey : lightGrey)};

  &:hover {
    border-bottom: 3px solid ${props => (props.accent ? lightGrey : dimGrey)};
  }
`;

const ButtonClear = styled(buttonTemplate)`
  color: ${lightGrey};
  background-color: ${arsenic};
  border-bottom: 3px solid ${arsenic};

  &:hover {
    color: ${lightGrey};
    border-bottom: 3px solid ${lightGrey};
  }
`;

export { Menu, ButtonsWrapper, ButtonClear, ButtonSource };
