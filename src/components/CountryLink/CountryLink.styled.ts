import styled from "styled-components";

export const Wrapper = styled.li`
  padding: 0 20px;
  cursor: pointer;
  transition: 0.3s;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;

    transition: 0.3s;

    &.active {
      transform: translateX(10px);
      color: ${({ theme }) => theme.colors.primary};
    }
    :hover {
      transform: translateX(10px);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
