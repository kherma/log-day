import { TTeaserProps } from "./types";
import DayHeading from "../DayHeading/DayHeading";
import ButtonShowReport from "../ButtonShowReport/ButtonShowReport";
import Timer from "../Timer/Timer";

const Teaser = ({ total, setIsModal }: TTeaserProps) => {
  return (
    <div className="flex gap-6 p-4">
      <DayHeading currentDay={total} />
      <div className="flex flex-col justify-between items-center w-full">
        <ButtonShowReport setIsModal={setIsModal} />
        <div className="flex gap-4 justify-center items-center py-1 w-full text-lg font-bold uppercase bg-neutral-200 dark:bg-neutral-800 rounded-lg">
          <p>working</p>
          <Timer isRunning={true} date={total} />
        </div>
      </div>
    </div>
  );
};

export default Teaser;
