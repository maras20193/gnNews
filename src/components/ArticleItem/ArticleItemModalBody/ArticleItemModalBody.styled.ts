import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  img {
    width: 100%;
  }
`;

export const Author = styled.p`
  align-self: flex-end;
`;

export const ArticleLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 6px;
  align-self: flex-end;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7s;
  }
`;
