import { useState, useEffect } from "react";
import { TTimerProps } from "./types";
import { convertDateToTime } from "../../utils";

const Timer = ({ date, isRunning }: TTimerProps) => {
  const [timer, setTimer] = useState("00:00:00");
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const time = convertDateToTime(new Date(date));
        setTimer(time);
      }, 1000);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [isRunning, date]);

  return <p>{timer}</p>;
};

export default Timer;
