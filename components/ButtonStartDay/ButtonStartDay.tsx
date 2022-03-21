import { TButtonStartDayProps } from "./types";

const ButtonStartDay = ({ setLogger }: TButtonStartDayProps) => {
  const startDayAction = () => {
    setLogger((prevState) => ({
      ...prevState,
      dayStarted: true,
      total: new Date(),
    }));
  };
  return (
    <button
      onClick={startDayAction}
      className="py-2 px-4 w-4/5 max-w-[20rem] font-bold text-black uppercase bg-yellow-500 rounded-lg"
    >
      Start day
    </button>
  );
};

export default ButtonStartDay;
