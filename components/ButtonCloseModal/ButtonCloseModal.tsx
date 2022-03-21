import { TButtonCloseModalProps } from "./types";
import { IoClose } from "react-icons/io5";

const ButtonCloseModal = ({ setIsModal }: TButtonCloseModalProps) => {
  return (
    <button
      className="absolute top-0 right-0 bg-red-500"
      onClick={() => setIsModal(false)}
    >
      <IoClose className="w-10 h-10 text-white" />
    </button>
  );
};

export default ButtonCloseModal;
