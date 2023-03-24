import { useEffect, useState } from "react";
import * as S from "./Footer.styled";

const TimeCounter = () => {
  const [time, setTime] = useState<number>(new Date().getTime());
  let intervalId: number;

  const timeDisplay = new Date(time).toLocaleTimeString();

  useEffect(() => {
    intervalId = window.setInterval(() => {
      setTime((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return <p>{timeDisplay}</p>;
};

export const Footer = () => (
  <S.Wrapper>
    <p>(X articles)</p>
    <TimeCounter />
  </S.Wrapper>
);
