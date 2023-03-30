import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../styles";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-top: 80px;
  margin-bottom: 70px;

  @media ${device.tablet} {
    margin-top: 94px;
  }
`;

export const Content = styled.div`
  margin-left: 80px;
  height: 100%;

  @media ${device.tablet} {
    margin-left: 250px;
  }
`;
