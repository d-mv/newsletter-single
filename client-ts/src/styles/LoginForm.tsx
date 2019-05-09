import styled from "styled-components";

import {
  arsenic,
  accent,
  darkMediumGrey,
  lightGrey,
  silverSand,
  baseFont,
  statusFont,
  boxShadow,
  boxTransition,
  boxShadowHover
} from "./_definitions";

interface props {
  height: string;
}

const LoginForm = styled.section<props>`
  height: ${props => props.height};

  @media (max-width: 499px) {
    width: 80%;
    margin-top: 25vh;
  }
  @media (min-width: 500px) {
    width: 50%;
    margin-top: 30vh;
  }
  margin: 0 auto;
  padding: 1rem;
  text-align: center;

  border-radius: 2px;
  background-color: ${silverSand};
  box-shadow: ${boxShadow};
  transition: ${boxTransition};
  &:hover {
    box-shadow: ${boxShadowHover};
  }

  label {
    display: grid;
    border: 1px solid ${darkMediumGrey};
    border-radius: 2px;
    padding: 10px 20px;
    margin: 1rem 0;

    input {
      background-color: ${lightGrey};
      font-family: ${statusFont};
      font-weight: 300;
      font-size: 1rem;
      border: none;
      margin: 0.5rem 0;
      border-radius: 2px;
      padding: 3px 2px;
    }
  }
`;
const Title = styled.h1``;

const Label = styled.span`
  margin-top: -1.4rem;
  background-color: ${silverSand};
  color: black;
  display: inline-block;
  max-width: 5rem;
  margin-left: 1rem;
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
`;
const Submit = styled.button`
  input {
    font-weight: 300;
    background: none;
    border: none;
    background-color: ${arsenic};
    color: ${lightGrey};
    font-family: ${baseFont};
    border-radius: 2px;
    /* margin: 0.2rem auto; */
    padding: 10px;
    font-size: 1rem;
    letter-spacing: 1px;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      background-color: ${darkMediumGrey};
      color: ${arsenic};
    }
    &:active {
      transform: scale(0.9);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;

const Error = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  color: ${accent};
  list-style: none;
  text-align: center;
  li {
    padding: 5px 0;
  }
`;

export { LoginForm, Title, Label, Submit, Error };
