import styled from "styled-components";
import { motion } from "framer-motion";

export const MainWrapper = styled(motion.div)`
  width: 100%;
`;

export const LinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TilesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
