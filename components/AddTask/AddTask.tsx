import { TAddTaskProps, TAddTaskInputs } from "./types";
import { TTimer } from "../../utils";
import Modal from "../Modal/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";

const AddTask = ({ logger, setLogger, setIsAddTaskModal }: TAddTaskProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddTaskInputs>();
  const onSubmit: SubmitHandler<TAddTaskInputs> = ({ task }) => {
    const newTask: TTimer = {
      name: task,
      isRunning: true,
      started: new Date(),
      breakStart: null,
    };
    const timers = logger.timers.map((timer) => ({
      ...timer,
      breakStart: timer.isRunning ? new Date() : timer.breakStart,
      isRunning: false,
    }));
    timers.push(newTask);
    setLogger((prevState) => ({ ...prevState, timers }));
    setIsAddTaskModal(false);
  };
  return (
    <Modal>
      <div className="flex flex-col gap-4 justify-start items-center p-4 pt-10 h-full">
        <h2 className="text-2xl font-bold uppercase">Add new Task</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <input
            className={clsx(
              "p-2 text-xl text-black rounded-lg focus:border-2 outline-none",
              errors.task ? "focus:border-red-500" : "focus:border-green-500"
            )}
            placeholder="Task name..."
            type="text"
            {...register("task", { required: true })}
          />
          <button
            type="submit"
            className="py-2 px-4 font-bold text-black uppercase bg-green-500 rounded-lg"
          >
            add
          </button>
        </form>
        <button
          onClick={() => setIsAddTaskModal(false)}
          className="py-2 px-4 w-full font-bold text-black uppercase bg-red-500 rounded-lg"
        >
          cancel
        </button>
      </div>
    </Modal>
  );
};

export default AddTask;
