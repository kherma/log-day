import { TButtonStartDayProps } from "./types";

const ButtonStartDay = ({ setLogger }: TButtonStartDayProps) => {
  const startDayAction = () => {
    const timers = [
      {
        name: "misc",
        started: new Date(),
        isRunning: true,
        breakStart: null,
        breakEnds: null,
      },
    ];
    setLogger({ timers, dayStarted: true, total: new Date() });
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
