import { useEffect, useState } from "react";

export const TimeCounter = () => {
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
