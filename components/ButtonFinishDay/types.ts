import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TButtonFinishDayProps = {
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
