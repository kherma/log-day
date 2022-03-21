import { TModalProps } from "./types";

const Modal = ({ children }: TModalProps) => {
  return (
    <div className="absolute top-0 left-0 z-10 p-4 w-full h-full bg-transparent">
      <div className="overflow-hidden relative w-full h-full bg-neutral-300 dark:bg-neutral-800 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;
