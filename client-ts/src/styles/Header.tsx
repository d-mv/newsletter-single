import styled from "styled-components";

import { darkMediumGrey } from "./_definitions";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0;

  margin: -10px 20px 20px 20px;
  border-bottom: 1px solid ${darkMediumGrey};
  cursor: default;
  user-select: none;
`;

export default Header;
