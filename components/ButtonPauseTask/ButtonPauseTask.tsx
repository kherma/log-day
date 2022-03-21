import { TButtonPauseTasksProps } from "./types";

import { IoPause } from "react-icons/io5";

const ButtonPauseTask = ({
  logger,
  setLogger,
  name,
}: TButtonPauseTasksProps) => {
  const pauseTask = () => {
    const timers = logger.timers.map((item) => {
      if (item.name === name) {
        return { ...item, breakStart: new Date(), isRunning: false };
      }
      return { ...item };
    });
    setLogger((prevState) => ({ ...prevState, timers }));
  };

  return (
    <button
      onClick={pauseTask}
      className="flex justify-center items-center w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded-full"
    >
      <IoPause />
    </button>
  );
};

export default ButtonPauseTask;
