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
  transition: ${boxTransition});
`;

const LogInButton = styled.button`
  position: absolute;
  top: 44vh;
  left: 10vw;
  font-weight: 300;
  background: none;
  border: none;
  background-color: ${arsenic};
  color: ${lightGrey};
  font-family: ${baseFont};
  border-radius: 2px;
  margin: 0.2rem auto;
  padding: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  user-select: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: ${darkMediumGrey};
  }
  &:active {
    transform: scale(0.9);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export { HomeScreen, Title, SubTitle, Screenshot, LogInButton };
