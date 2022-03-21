import { TButtonStartTaskProps } from "./types";

import { IoPlay } from "react-icons/io5";

const ButtonStartTask = ({
  logger,
  setLogger,
  name,
}: TButtonStartTaskProps) => {
  const startTask = () => {
    const item = logger.timers.find((timer) => timer.name === name);

    const breakTime = item?.breakStart
      ? new Date().getTime() - new Date(item.breakStart).getTime()
      : 0;
    const itemTime = item?.breakStart ? new Date(item.started).getTime() : 0;
    const newItemStarted = new Date(itemTime + breakTime);

    const timers = logger.timers.map((timer) => {
      if (timer.name === name)
        return {
          ...timer,
          started: newItemStarted,
          breakStart: null,
          isRunning: true,
        };
      return {
        ...timer,
        breakStart: timer.isRunning ? new Date() : timer.breakStart,
        isRunning: false,
      };
    });

    setLogger((prevState) => ({ ...prevState, timers }));
  };

  return (
    <button
      onClick={startTask}
      className="flex justify-center items-center w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded-full"
    >
      <IoPlay className="ml-0.5" />
    </button>
  );
};

export default ButtonStartTask;
