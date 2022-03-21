import { TDayHeadingProps } from "./types";
import { getDayData, getDayName } from "../../utils";

const DayHeading = ({ currentDay }: TDayHeadingProps) => {
  const { day, month } = getDayData(new Date(currentDay));
  const weekDay = getDayName(new Date(currentDay), "en-EN");

  return (
    <div className="flex flex-col justify-center items-center p-4 font-black bg-neutral-200 dark:bg-neutral-800 rounded-lg border-t-8 border-t-blue-600 shadow-sm">
      <span className="text-lg">{`${day}.${month}`}</span>
      <span className="text-sm uppercase">{weekDay}</span>
    </div>
  );
};

export default DayHeading;
