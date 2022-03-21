import { useState, useEffect } from "react";
import { TReportProps } from "./types";
import Modal from "../Modal/Modal";
import ButtonCloseModal from "../ButtonCloseModal/ButtonCloseModal";
import ButtonFinishDay from "../ButtonFinishDay/ButtonFinishDay";
import { convertDateToTime } from "../../utils";

const Report = ({ logger, setIsModal, setLogger }: TReportProps) => {
  const [report, setReport] = useState<{ name: string; started: string }[]>([]);

  useEffect(() => {
    const state = logger.timers.map(({ name, started }) => ({
      name,
      started: convertDateToTime(new Date(started)),
    }));
    setReport(state);
  }, [logger]);
  return (
    <Modal>
      <div className="grid grid-rows-[auto,1fr,auto] pt-4 h-full">
        <ButtonCloseModal setIsModal={setIsModal} />
        <h2 className="text-2xl font-black text-center uppercase">Report</h2>
        <ul className="flex overflow-auto flex-col gap-2 justify-start items-center p-4">
          {report.map(({ name, started }, index) => (
            <li
              key={`${name}-${index}`}
              className="flex justify-around items-center py-2 w-full text-lg bg-neutral-100 dark:bg-neutral-900 rounded-lg"
            >
              <p className="font-bold">{name}</p>
              <p>{started}</p>
            </li>
          ))}
        </ul>
        <ButtonFinishDay setLogger={setLogger} />
      </div>
    </Modal>
  );
};

export default Report;
