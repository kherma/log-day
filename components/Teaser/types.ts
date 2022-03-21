import { Dispatch, SetStateAction } from "react";

export type TTeaserProps = {
  total: Date;
  setIsModal: Dispatch<SetStateAction<boolean>>;
};
