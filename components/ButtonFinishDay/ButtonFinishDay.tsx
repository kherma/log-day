import { loggerData } from "../../utils";
import { TButtonFinishDayProps } from "./types";

const ButtonFinishDay = ({ setLogger }: TButtonFinishDayProps) => {
  const finishDay = () => {
    setLogger(loggerData);
    localStorage.removeItem("loggerBE");
  };
  return (
    <button
      className="py-2 px-4 w-full h-min font-bold text-black uppercase bg-blue-500 rounded-lg"
      onClick={finishDay}
    >
      Finish Day
    </button>
  );
};

export default ButtonFinishDay;
