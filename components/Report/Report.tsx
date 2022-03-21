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
      <div className="grid grid-rows-[auto,1fr,auto] p-4 h-full">
        <ButtonCloseModal setIsModal={setIsModal} />
        <h2 className="text-3xl font-black text-center uppercase">Report</h2>
        <ul className="flex overflow-auto flex-col gap-2 justify-start items-center py-4 px-2">
          {report.map(({ name, started }, index) => (
            <li
              key={`${name}-${index}`}
              className="flex justify-between items-center p-2 w-full text-xl bg-neutral-100 dark:bg-neutral-900 rounded-lg"
            >
              <p className="overflow-hidden max-w-[10rem] font-bold text-ellipsis">
                {name}
              </p>
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
