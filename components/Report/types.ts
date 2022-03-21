import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TReportProps = {
  logger: TLoggerData;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
