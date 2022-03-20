// import { useState } from "react";
import { TDayHeadingProps } from "./types";
import { getDayName } from "../../utils";

const DayHeading = ({ currentDay }: TDayHeadingProps) => {
  const day = getDayName(new Date(), "en-EN");
  console.log(currentDay);
  console.log(day);

  return (
    <h1>
      <span>Friday</span>
      <span>03.02</span>
    </h1>
  );
};

export default DayHeading;
