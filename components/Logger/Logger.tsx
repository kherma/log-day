import DayHeading from "../DayHeading/DayHeading";
import { TLoggerProps } from "./types";
import ButtonFinishDay from "../ButtonFinishDay/ButtonFinishDay";

const Logger = ({ logger, setLogger }: TLoggerProps) => {
  return (
    <div>
      {logger.total && (
        <div className="flex gap-6 p-4">
          <DayHeading currentDay={logger.total} />
          <div className="flex flex-col justify-between items-center w-full">
            <ButtonFinishDay setLogger={setLogger} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Logger;
