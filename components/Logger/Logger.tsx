import { useState } from "react";
import { TLoggerProps } from "./types";
import Teaser from "../Teaser/Teaser";
import Report from "../Report/Report";

const Logger = ({ logger, setLogger }: TLoggerProps) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="relative w-full h-full">
      {logger.total && <Teaser total={logger.total} setIsModal={setIsModal} />}
      {isModal && (
        <Report logger={logger} setIsModal={setIsModal} setLogger={setLogger} />
      )}
    </div>
  );
};

export default Logger;
