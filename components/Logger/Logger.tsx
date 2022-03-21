import { useState } from "react";
import DayHeading from "../DayHeading/DayHeading";
import { TLoggerProps } from "./types";
import ButtonFinishDay from "../ButtonFinishDay/ButtonFinishDay";
import ButtonShowReport from "../ButtonShowReport/ButtonShowReport";
import ButtonCloseModal from "../ButtonCloseModal/ButtonCloseModal";
import Modal from "../Modal/Modal";

const Logger = ({ logger, setLogger }: TLoggerProps) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="relative w-full h-full">
      {logger.total && (
        <div className="flex gap-6 p-4">
          <DayHeading currentDay={logger.total} />
          <div className="flex flex-col justify-between items-center w-full">
            <ButtonShowReport setIsModal={setIsModal} />
          </div>
        </div>
      )}
      {isModal && (
        <Modal>
          <div className="flex flex-col justify-between items-center h-full">
            <ButtonCloseModal setIsModal={setIsModal} />
            <div></div>
            <ButtonFinishDay setLogger={setLogger} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Logger;
