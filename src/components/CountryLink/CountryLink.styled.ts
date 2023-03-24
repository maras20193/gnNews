import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
