import styled from "styled-components";

import { arsenic, baseFont } from "./_definitions";

const Title = styled.h1`
  font-family: ${baseFont};
  color: ${arsenic};

  @media (max-width: 302px) {
    font-size: 1.5rem;
  }

  @media (min-width: 303px) and (max-width: 340px) {
    font-size: 2rem;
  }

  @media (min-width: 341px) {
    font-size: 2.5rem;
  }
  font-weight: 700;
  margin: 0;
  height: 3rem;
`;

export default Title;
