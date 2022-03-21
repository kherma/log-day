import { TButtonConfirmProps } from "./types";

const ButtonConfirm = ({ logger, setLogger }: TButtonConfirmProps) => {
  const addTask = () => {
    setLogger(logger);
  };
  return (
    <button
      onClick={addTask}
      className="py-2 px-4 w-full h-min font-bold text-black uppercase bg-green-500"
    >
      Add task
    </button>
  );
};

export default ButtonConfirm;
