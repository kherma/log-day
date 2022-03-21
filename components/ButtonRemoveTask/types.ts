import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TButtonRemoveTaskProps = {
  name: string;
  logger: TLoggerData;
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
