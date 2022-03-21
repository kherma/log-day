import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TAddTaskProps = {
  logger: TLoggerData;
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
  setIsAddTaskModal: Dispatch<SetStateAction<boolean>>;
};

export type TAddTaskInputs = {
  task: string;
};
