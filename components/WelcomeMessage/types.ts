import { Dispatch, SetStateAction } from "react";
import { TLoggerData } from "../../utils";

export type TWelcomeMessageProps = {
  setLogger: Dispatch<SetStateAction<TLoggerData>>;
};
