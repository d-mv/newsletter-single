import styled from "styled-components";

// import { baseFont } from "./_definitions";
import { textMessage } from "./_typography";

const Center = styled.main`
  /* display: flex;
  justify-content: center;
  align-content: auto; */
  /* font: font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit; */
  width: 100%;
  text-align: center;
  position: absolute;
  top: 30%;
  font: ${textMessage};
`;

export default Center;
