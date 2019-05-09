import styled from "styled-components";
import {
  arsenic,
  // light,
  // lightGrey,
  // silverSand,
  // dimGrey,
  darkMediumGrey
  // accent,
  // accentAlt,
  // arsenicTrans,
  // arsenicLightTrans,
  // arsenicSemiTrans,
  // baseFont,
  // statusFont
} from "./_definitions";

const Button = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
  margin: 0;
  transition: 0.3s;

  @media (max-width: 599px) {
    font-size: 1.2rem;
  }
`;
const Off = styled.span`
  transition: 0.3s;

  color: ${darkMediumGrey};
  &:hover {
    color: ${arsenic};
  }
`;
const On = styled.span`
  transition: 0.3s;

  color: ${arsenic};
  &:hover {
    color: ${darkMediumGrey};
  }
`;

// .delete {
//   @extend .button;
//   font-size: 1rem;
// }

export { Button, On, Off };
