import styled from "styled-components";

import {
  silverSand,
  boxShadow,
  boxShadowHover,
  boxTransition,
  borderBottomArsL,
  borderBottomSilL
} from "./_definitions";

import { scaleUp } from "./_animations";

const Card = styled.section`
  animation: 0.3s ease-out 0s 1 ${scaleUp};
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  @media (max-width: 499px) {
    width: 90%;
  }
  @media (min-width: 500px) {
    width: 80%;
    max-width: 800px;
    border-radius: 2px;
  }

  z-index: 100;
  border-radius: 1px;
  display: flex;
  margin: 0.3rem auto;
  padding: 0.7rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${silverSand};
  border-bottom: ${borderBottomSilL};
  box-shadow: ${boxShadow};
  transition: ${boxTransition};

  &:hover {
    box-shadow: ${boxShadowHover};
    border-bottom: ${borderBottomArsL};
  }
`;

const NameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const Name = styled.div`
  @media (max-width: 599px) {
    margin-top: 0.3rem;
    font-size: 1rem;
  }

  margin: 0;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.07rem;
`;

const Url = styled.div`
  @media (max-width: 599px) {
    display: none;
  }

  margin: 0;
  letter-spacing: 0.05rem;
  font-family: "Open Sans";
  white-space: pre-wrap;
  font-weight: 400;
  font-size: 0.7rem;
`;

export {
  Card,
  CardWrapper,
  NameWrapper,
  Name,
  Url
  // Edit,
  // Submit,
  // Error,
  // Add,
  // Cancel,
  // ButtonsWrapper
};
