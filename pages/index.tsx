import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <h1 className="text-red-500">Hello Next</h1>
    </Layout>
  );
};

export default Home;
