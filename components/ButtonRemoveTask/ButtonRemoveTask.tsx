import { TButtonRemoveTaskProps } from "./types";
import { FaTrash } from "react-icons/fa";

const ButtonRemoveTask = ({
  name,
  logger,
  setLogger,
}: TButtonRemoveTaskProps) => {
  const removeTask = () => {
    const timers = logger.timers.filter((timer) => timer.name !== name);
    const isDeletedTimerRunning = logger.timers.find(
      (timer) => timer.name === name && timer.isRunning
    );
    if (isDeletedTimerRunning) timers[0].isRunning = true;
    setLogger((prevState) => ({ ...prevState, timers }));
  };

  return (
    <button onClick={removeTask}>
      <FaTrash />
    </button>
  );
};

export default ButtonRemoveTask;
