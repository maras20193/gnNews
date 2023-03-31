import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 32px;

  img {
    width: 100%;
  }
`;
