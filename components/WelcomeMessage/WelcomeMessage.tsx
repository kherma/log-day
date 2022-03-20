import { useState, useEffect } from "react";
import Image from "next/image";
import { getDayName } from "../../utils";

const WelcomeMessage = () => {
  const [currentWeekDay, setCurrentWeekDay] = useState("");

  useEffect(() => {
    const currentDay = getDayName(new Date(), "en-EN");
    setCurrentWeekDay(currentDay.toLowerCase());
  }, []);
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <h1 className="text-4xl font-black uppercase">Hello World</h1>
      <div className="overflow-hidden relative w-4/5 h-60 rounded-lg shadow-lg">
        <Image
          src={`/memeDay/${currentWeekDay}.webp`}
          alt="Meme of the day"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default WelcomeMessage;
