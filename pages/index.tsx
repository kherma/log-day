import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import CurrentDay from "../components/CurrentDay/CurrentDay";

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <div className="overflow-hidden p-2 mx-auto max-w-layout h-full text-black dark:text-white bg-white dark:bg-black rounded-lg">
        <div>
          <CurrentDay />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
