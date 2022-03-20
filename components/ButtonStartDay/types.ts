import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TButtonStartDayProps = {
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
