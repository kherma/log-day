import { useState } from "react";
import { TLoggerProps } from "./types";
import Teaser from "../Teaser/Teaser";
import Report from "../Report/Report";
import Tasks from "../Tasks/Tasks";
import AddTask from "../AddTask/AddTask";

const Logger = ({ logger, setLogger }: TLoggerProps) => {
  const [isModal, setIsModal] = useState(false);
  const [isAddTaskModal, setIsAddTaskModal] = useState(false);
  return (
    <div className="flex flex-col justify-between h-full">
      {logger.total && <Teaser total={logger.total} setIsModal={setIsModal} />}
      <Tasks logger={logger} setLogger={setLogger} />
      <button
        className="py-2 px-4 font-bold text-black uppercase bg-green-500"
        onClick={() => setIsAddTaskModal(true)}
      >
        Add task
      </button>
      {isModal && (
        <Report logger={logger} setIsModal={setIsModal} setLogger={setLogger} />
      )}
      {isAddTaskModal && (
        <AddTask
          logger={logger}
          setLogger={setLogger}
          setIsAddTaskModal={setIsAddTaskModal}
        />
      )}
    </div>
  );
};

export default Logger;
