import { TButtonPauseTasksProps } from "./types";

import { IoPause } from "react-icons/io5";

const ButtonPauseTask = ({
  logger,
  setLogger,
  name,
}: TButtonPauseTasksProps) => {
  const pauseTask = () => {
    const timers = logger.timers.map((item) => {
      const isRunning = item.name === name ? !item.isRunning : item.isRunning;
      const breakStart = new Date();
      return { ...item, isRunning, breakStart };
    });
    setLogger((prevState) => ({ ...prevState, timers }));
  };

  return (
    <button
      onClick={pauseTask}
      className="p-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"
    >
      <IoPause />
    </button>
  );
};

export default ButtonPauseTask;
