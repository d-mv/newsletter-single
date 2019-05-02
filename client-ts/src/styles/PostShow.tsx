import styled from "styled-components";

import {
  darkMediumGrey,
  baseFont
} from "./_definitions";

const Show = styled.article`
  font-family: ${baseFont};
  padding: 0 20px;
  padding-bottom: 1rem;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
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

interface IProps {
  className: any;
}

const Text = styled.main<IProps>`
  border-bottom: 1px solid ${darkMediumGrey};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export { Show, Title, Text }
