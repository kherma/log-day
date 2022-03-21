import { useState } from "react";
import DayHeading from "../DayHeading/DayHeading";
import { TLoggerProps } from "./types";
import ButtonShowReport from "../ButtonShowReport/ButtonShowReport";
import Report from "../Report/Report";

const Logger = ({ logger, setLogger }: TLoggerProps) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="relative w-full h-full">
      {logger.total && (
        <div className="flex gap-6 p-4">
          <DayHeading currentDay={logger.total} />
          <div className="flex flex-col justify-between items-center w-full">
            <ButtonShowReport setIsModal={setIsModal} />
          </div>
        </div>
      )}
      {isModal && (
        <Report logger={logger} setIsModal={setIsModal} setLogger={setLogger} />
      )}
    </div>
  );
};

export default Logger;
