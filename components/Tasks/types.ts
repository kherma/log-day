import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TTasksProps = {
  logger: TLoggerData;
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
