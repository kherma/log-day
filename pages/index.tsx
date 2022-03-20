import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { loggerData } from "../utils";
import Layout from "../components/Layout/Layout";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import Logger from "../components/Logger/Logger";

const Home: NextPage = () => {
  const [logger, setLogger] = useState(loggerData);

  useEffect(() => {
    const loggerBE = localStorage.getItem("loggerBE");
    setLogger(loggerBE ? JSON.parse(loggerBE) : loggerData);
  }, []);

  useEffect(() => {
    logger.dayStarted &&
      localStorage.setItem("loggerBE", JSON.stringify(logger));
  }, [logger]);

  return (
    <Layout page="home">
      <div className="overflow-hidden mx-auto max-w-layout h-full text-black dark:text-white bg-white dark:bg-black rounded-lg">
        {!logger.dayStarted && <WelcomeMessage setLogger={setLogger} />}
        {logger.dayStarted && <Logger logger={logger} setLogger={setLogger} />}
      </div>
    </Layout>
  );
};

export default Home;
