import { useState, useEffect } from "react";
import { TTasksProps } from "./types";
import { TTimer } from "../../utils";
import Task from "../Task/Task";

const Tasks = ({ logger, setLogger }: TTasksProps) => {
  const [tasks, setTasks] = useState<TTimer[]>([]);

  useEffect(() => {
    const newState = logger.timers.map((task) => ({ ...task }));
    setTasks(newState);
  }, [logger.timers]);

  return (
    <div className="relative mx-4 mb-4 h-full">
      <ul className="flex overflow-auto absolute inset-0 flex-col gap-4 justify-start items-center py-4 px-2 w-full h-full bg-neutral-300 dark:bg-neutral-700 rounded-lg">
        {tasks.map((props, index) => (
          <Task
            key={`${props.name}-${index}`}
            {...props}
            setLogger={setLogger}
            logger={logger}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
