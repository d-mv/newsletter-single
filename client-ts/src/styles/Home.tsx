import styled from "styled-components";

import {
  arsenic,
  darkMediumGrey,
  lightGrey,
  baseFont,
  boxTransition,
  boxShadow
} from "./_definitions";

const HomeScreen = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: ${baseFont};
  background-color: ${lightGrey};
  color: ${arsenic};
`;

const Title = styled.h1`
  position: absolute;
  top: 20vh;
  left: 10vw;
  margin: 0;
  padding: 0;
  font-weight: 500;
  @media (max-width: 399px) {
    font-size: 2.5rem;
  }
  @media (min-width: 400px) {
    font-size: 3.3rem;
  }
`;
const SubTitle = styled.h2`
  position: absolute;
  top: 30vh;
  left: 10vw;
  font-style: italic;
  @media (max-width: 399px) {
    font-size: 2rem;
  }
  @media (min-width: 400px) {
    font-size: 2.2rem;
  }
  font-size: 2.2rem;
`;
const Screenshot = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  @media (max-width: 499px) {
    display: none;
  }
  @media (min-width: 800px) {
    left: 50vw;
    top: 20vh;
    height: 50vh;
    width: 45vw;
    border-radius: 2px;
    border: 1px solid ${darkMediumGrey};
    background: rgba(0, 0, 0, 0)
      url("https://res.cloudinary.com/diciu4xpu/image/upload/v1557432341/newsletter/homepage/screenshot_desktop.jpg");
  }
  background-color: white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  box-shadow: ${boxShadow};
  transition: ${boxTransition};
`;


export { HomeScreen, Title, SubTitle, Screenshot };
