import styled from "styled-components";

const Display = styled.main`
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 2.3rem;
`;

const PostListStyle = styled(Display)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  transition: 0.7s;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 949px) {
  }

  @media (min-width: 950px) and (max-width: 1099px) {
  }

  @media (min-width: 1100px) {
  }
`;

const LoadingS = styled.div``;

export { PostListStyle, LoadingS };
