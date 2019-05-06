import { keyframes } from "styled-components";

const scaleUp = keyframes`
0% {transform:scale(0)} 100%{transform:scale(1)}
`;

const slideInFromTop = keyframes`
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateX(0);
    }`;

const slideInFromLeft = keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateY(0);
    }
  `;
const growLarge = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
    `;
const slideDown = keyframes`
    0% {
            transform: translateY(-30%);
            filter:opacity(0)

    }
    100% {
           transform: translateY(0);

    }
    `;

export { scaleUp, slideInFromTop, slideInFromLeft, growLarge, slideDown };
