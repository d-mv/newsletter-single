import styled from "styled-components";

import {
  arsenic,
  lightGrey,
  darkMediumGrey,
  boxShadow,
  boxTransition,
  statusFont,
  baseFont,
  lightGreyTrans
} from "./_definitions";
import { textSourceEditMobile, textSourceEditDesktop } from "./_typography";
import { slideDown } from "./_animations";

const Add = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: ${lightGreyTrans};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-content: center;

  /*  */
  form {
    animation: 0.3s ease-out 0s 1 ${slideDown};

    @media (max-width: 499px) {
      position: absolute;
      height: 180px;
      top: 30vh;
      width: 100vw;
      padding: 1rem 0;
    }
    @media (min-width: 500px) {
      border-radius: 2px;
      position: absolute;
      height: 195px;
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
        border-radius: 2px;
      }
    }
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  width: 50%;
  margin: 1rem auto;

  @media (max-width: 499px) {
  }
  @media (min-width: 500px) {
  }
`;
const Cancel = styled.button`
  font-weight: 300;
  background: none;
  border: none;
  background-color: ${lightGrey};
  font-family: ${baseFont};
  border-radius: 2px;
  margin: 0.2rem auto;
  padding: 5px 10px;

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

const Edit = styled.div`
  form {
    animation: 0.3s ease-out 0s 1 ${slideDown};
    border-radius: 0 0 2px 2px;
    margin: 0 auto;
    background-color: ${arsenic};
    color: ${lightGrey};
    @media (max-width: 499px) {
      width: 90%;
      margin-top: -0.4rem;
    }
    @media (min-width: 500px) {
      margin-top: -0.2rem;

      width: 75%;
      max-width: 750px;
    }
    padding: 2%;
    display: flex;
    flex-direction: column;

    label {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-areas: "title" "field";
      margin: 5px 0;
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
        border-radius: 2px;
      }
    }
  }
`;
const Submit = styled.button`
  margin: 0 auto;
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

export { Add, Cancel, ButtonsWrapper, Edit, Submit, Error };
