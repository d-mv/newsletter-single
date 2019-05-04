import styled from "styled-components";

import { darkMediumGrey, statusFont } from "./_definitions";

const Card = styled.article`
  @media (min-width: 499px) {
    .text {
      max-height: 50rem;
    }
  }

  margin: 0 auto;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  border-bottom: 1px solid ${darkMediumGrey};
  @media (max-width: 699px) {
    width: 90%;
  }

  @media (min-width: 700px) and (max-width: 949px) {
    width: 45%;
  }

  @media (min-width: 950px) and (max-width: 1199px) {
    width: 30%;
  }

  @media (min-width: 1200px) and (max-width: 1599px) {
    width: 23%;
  }

  @media (min-width: 1599px) and (max-width: 4000px) {
    width: 18%;
  }
`;
const Title = styled.h3`
  cursor: pointer;
  font-weight: 500;
  margin: 0;
  line-height: 1.6rem;
  font-size: 1.3rem;
  @media (max-width: 499px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

const Text = styled.main`
  font-size: 1.1rem;
  padding: 0 0 0.3rem 0;
  cursor: pointer;
  margin-bottom: 5px;
  line-height: 1.4rem;

  @media (max-width: 499px) {
    font-size: 1.3rem;
  }
`;
const Line = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  font-weight: 300;
  font-family: ${statusFont};
  letter-spacing: 0.03rem;
  font-size: 0.8rem;
  padding-top: 0.6rem;
`;
const Footer = styled.footer`
  display: flex;
  font-family: ${statusFont};
  justify-content: space-between;
  font-size: 80%;
  font-weight: 300;
  padding: 0 0.3rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Card, Title, Line, Wrapper, Text, Footer };
