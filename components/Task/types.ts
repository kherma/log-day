import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TTaskProps = {
  logger: TLoggerData;
  name: string;
  started: Date;
  isRunning: boolean;
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
