import DayHeading from "../DayHeading/DayHeading";
import { TLoggerProps } from "./types";

const Logger = ({ logger, setLogger }: TLoggerProps) => {
  console.log(setLogger);

  return (
    <div>
      {logger.total && (
        <div className="flex p-4">
          <DayHeading currentDay={logger.total} />
        </div>
      )}
    </div>
  );
};

export default Logger;
