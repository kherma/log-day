import { TButtonShowReportProps } from "./types";

const ButtonShowReport = ({ setIsModal }: TButtonShowReportProps) => {
  return (
    <button
      onClick={() => setIsModal(true)}
      className="py-2 px-4 w-full h-min font-bold text-black uppercase bg-blue-500 rounded-lg"
    >
      Show report
    </button>
  );
};

export default ButtonShowReport;
