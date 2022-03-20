import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TLoggerProps = {
  logger: TLoggerData;
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
