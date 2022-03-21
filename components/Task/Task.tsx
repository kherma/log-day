import { TTaskProps } from "./types";
import Timer from "../Timer/Timer";
import ButtonPauseTask from "../ButtonPauseTask/ButtonPauseTask";
import ButtonStartTask from "../ButtonStartTask/ButtonStartTask";
import ButtonRemoveTask from "../ButtonRemoveTask/ButtonRemoveTask";
import clsx from "clsx";

const Task = ({ name, started, isRunning, setLogger, logger }: TTaskProps) => {
  return (
    <li
      className={clsx(
        "flex justify-between items-center p-2 w-full text-lg font-bold rounded-lg",
        isRunning ? "bg-yellow-500" : "bg-neutral-100 dark:bg-neutral-900"
      )}
    >
      <p className="overflow-hidden max-w-[8rem] text-ellipsis">{name}</p>
      <div className="flex gap-4 justify-between items-center ">
        {isRunning ? (
          <ButtonPauseTask logger={logger} setLogger={setLogger} name={name} />
        ) : (
          <ButtonStartTask logger={logger} setLogger={setLogger} name={name} />
        )}
        <Timer date={started} isRunning={isRunning} />
        <ButtonRemoveTask name={name} logger={logger} setLogger={setLogger} />
      </div>
    </li>
  );
};

export default Task;
