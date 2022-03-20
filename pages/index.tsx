import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { loggerData } from "../utils";
import Layout from "../components/Layout/Layout";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

const Home: NextPage = () => {
  const [logger, setLogger] = useState(loggerData);

  useEffect(() => {
    setLogger(loggerData);
  }, []);
  return (
    <Layout page="home">
      <div className="overflow-hidden p-2 mx-auto max-w-layout h-full text-black dark:text-white bg-white dark:bg-black rounded-lg">
        {!logger.dayStarted && <WelcomeMessage />}
      </div>
    </Layout>
  );
};

export default Home;
