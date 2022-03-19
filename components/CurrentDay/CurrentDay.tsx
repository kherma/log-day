import { format } from "date-fns";
import { useEffect, useState } from "react";

const CurrentDay = () => {
  const [weekDay, setWeekDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setWeekDay(format(date, "EEEE"));
    setCurrentDate(format(date, "d.LL"));
  }, []);
  return (
    <h2 className="pb-1 text-lg font-bold rounded-t-md border-b-2 border-b-black dark:border-b-white">
      <span className="pr-2 mr-2 uppercase border-r-2 border-r-black dark:border-r-white">
        {weekDay}
      </span>
      <span className="pr-2 mr-2 border-r-2 border-r-black dark:border-r-white">
        {currentDate}
      </span>
    </h2>
  );
};

export default CurrentDay;
