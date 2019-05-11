import styled from "styled-components";

import {
  darkMediumGrey,
  baseFont,
  lightGrey,
  arsenic,
  dimGrey,
  silverSand
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
  className?: any;
}

const Text = styled.main<IProps>`
  border-bottom: 1px solid ${darkMediumGrey};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color: ${lightGrey}
  /* :root {
    --light: white;
    --lightGrey: #d3d3d3;
    --silverSand: #c4c4c4;
    --dimGrey: #6b6b6b;
    --arsenic: #444444;
    --darkMediumGrey: #aaaaaa;
    --accent: #6d6bc4;
    --accentAlt: #914992;
    --arsenicTrans: rgba(50, 50, 50, 0.8);
    --arsenicLightTrans: rgba(50, 50, 50, 0.3);
    --arsenicSemiTrans: rgba(50, 50, 50, 0.5);
  } */


    position: relative;
    font-size: 1.2rem;
    line-height: 25px;
    color: ${arsenic};

    @media (max-width: 499px) {
      font-size: 1.3rem;
    }

    h1,
    h2,
    h3,
    h4 {
      font-weight: 700;
    }

    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      margin: 0.1rem 0;
    }

    p,
    i {
      margin: 10px 0;
      padding: 0;
    }

    button,
    address,
    time,
    figure,
    hr,
    img,
    video,
    iframe,
    figcaption,
    .signature,
    .book-cta,
    .border-bottom {
      display: none;
    }

    article {
      header {
        display: none;
      }
    }

    br {
      margin: 5px;
    }

    em {
      font-weight: 300;
      font-style: italic;
    }

    strong {
      font-weight: 700;
    }

    li {
      margin: 5px 0;
      padding-left: 10px;
    }

    a {
      text-decoration: none;
      border-bottom: 0.03rem solid ${dimGrey};
      color: ${dimGrey};
      line-height: 0.85;
      text-shadow: 1px -1px ${lightGrey}, -1px 1px ${lightGrey},
        -1px -1px ${lightGrey}, 1px 0px ${lightGrey}, 1px 1px ${lightGrey},
        -2px 1px ${lightGrey};
    }

    blockquote {
      font-weight: 300;
      font-style: italic;
    }

    pre {
      font-weight: 300;
      font-family: "Open Sans";
      letter-spacing: 1px;
      font-size: 1rem;
      width: 80%;
      margin: 1rem auto;
      background-color: ${silverSand};
      white-space: pre-wrap;
      padding: 0.5rem 1rem;
      line-height: 1.5rem;
      text-align: left;
    }

    code {
      font-weight: 300;
      font-family: "Roboto Mono";
      font-size: 1rem;
      background-color: ${silverSand};
      color: ${arsenic};
      padding: 0.2rem;
    }

`;

export { Show, Title, Text };
