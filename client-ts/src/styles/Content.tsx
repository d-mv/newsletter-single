import styled from "styled-components";

import { baseFont } from "./_definitions";

const Content = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  /* height: 97vh; */
  font-family: ${baseFont};
  background-color: #d3d3d3 !important;
  color: #444444;

  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

export default Content;
