import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import CurrentDay from "../components/CurrentDay/CurrentDay";

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <div className="mx-auto max-w-layout h-full text-black dark:text-white bg-white dark:bg-black rounded-lg transition-colors duration-300 ease-in-out">
        <div>
          <CurrentDay />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
