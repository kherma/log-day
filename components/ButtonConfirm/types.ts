import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TButtonConfirmProps = {
  logger: TLoggerData;
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
