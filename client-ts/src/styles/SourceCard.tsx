import styled from "styled-components";

import {
  silverSand,
  lightGrey,
  arsenic,
  darkMediumGrey,
  arsenicSemiTrans,
  statusFont,
  baseFont,
  boxShadow,
  boxTransition
} from "./_definitions";
import { textSourceEditMobile, textSourceEditDesktop } from "./_typography";

import { scaleUp, slideDown } from "./_animations";

const Card = styled.section`
  animation: 0.3s ease-out 0s 1 ${scaleUp};
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  z-index: 100;
  border-radius: 1px;
  display: flex;
  border-radius: 1px;
  width: 80%;
  max-width: 800px;
  margin: 0.2rem auto;
  padding: 0.7rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${silverSand};
  border-bottom: 3px solid ${silverSand};

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    /* transform: scale(1.02); */
    /* transform: scale(1.05); */
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    border-bottom: 3px solid ${arsenic};
  }
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } */
`;

const NameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const Name = styled.div`
  @media (max-width: 599px) {
    margin-top: 0.7rem;
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
const Edit = styled.div`
  animation: 0.3s ease-out 0s 1 ${slideDown};
  border-radius: 0 0 2px 2px;
  width: 75%;
  max-width: 750px;
  margin: 0 auto;
  /* margin-top: -0.2rem; */
  margin-top: 10rem;
  margin-bottom: 1rem;
  background-color: ${arsenic};
  color: ${lightGrey};

  padding: 1rem;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-areas: "title" "field";
      font-family: ${statusFont};

      margin: 5px 0;

      span {
        font-size: 1rem;
        padding-top: 5px;
      }

      input {
        grid-area: "field";
        border: none;
        font-family: ${statusFont};
        font-size: 1rem;
        font-weight: 300;
        background-color: ${lightGrey};
        padding: 5px 3px;
        border-radius: 1px;
      }
    }
  }
`;
const Submit = styled.button`
  input {
    font-weight: 300;
    background: none;
    border: none;
    background-color: ${lightGrey};
    font-family: ${baseFont};
    border-radius: 2px;
    margin: 0.2rem auto;
    padding: 10px 15px;
    font-size: 1rem;
    letter-spacing: 1px;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      background-color: ${darkMediumGrey};
    }
  }
`;

const Error = styled.div`
  color: red;
  font-family: ${statusFont};
  font-size: 0.8rem;
  font-weight: 300;
`;

const Add = styled.section`
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

  /*  */
  form {
    animation: 0.3s ease-out 0s 1 ${slideDown};
    border-radius: 2px;

    @media (max-width: 499px) {
      position: absolute;
      height: 25vh;
      top: 30vh;
      width: 100vw;
      padding: 1rem 0;
    }
    @media (min-width: 500px) {
      position: absolute;
      height: 30vh;
      top: 30vh;
      width: 75%;
      max-width: 750px;
      padding: 1rem 1rem;
    }

    margin: 0 auto;
    background-color: ${arsenic};
    color: ${lightGrey};
    box-shadow: ${boxShadow};
    transition: ${boxTransition};
    display: flex;
    flex-direction: column;

    label {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-areas: "title" "field";
      margin: 5px auto;

      span {
        @media (max-width: 499px) {
          font: ${textSourceEditMobile};
        }
        @media (min-width: 500px) {
          font: ${textSourceEditDesktop};
        }
        padding-top: 5px;
      }

      input {
        grid-area: "field";
        border: none;
        @media (max-width: 499px) {
          font: ${textSourceEditMobile};
        }
        @media (min-width: 500px) {
          font: ${textSourceEditDesktop};
        }

        background-color: ${lightGrey};
        padding: 5px 3px;
        border-radius: 1px;
      }
    }
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin: 1rem auto;

`;
const Cancel = styled.button`
  font-weight: 300;
  background: none;
  border: none;
  background-color: ${lightGrey};
  font-family: ${baseFont};
  border-radius: 2px;
  margin: 0.2rem auto;
  padding: 10px 15px;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: ${darkMediumGrey};
  }
`;

export {
  Card,
  CardWrapper,
  NameWrapper,
  Name,
  Url,
  Edit,
  Submit,
  Error,
  Add,
  Cancel,
  ButtonsWrapper
};
