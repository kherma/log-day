import Head from "next/head";
import { TLayoutProps } from "./types";
import { pagesData } from "../../config";
import Header from "../Header/Header";

const Layout = ({ page, children }: TLayoutProps) => {
  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <Head>
        <title>{`${pagesData[page].title} | logDAY`}</title>
        <meta name="description" content={pagesData[page].description} />
      </Head>
      <Header />
      <main className="dark:text-white bg-neutral-200 dark:bg-neutral-900 transition-colors duration-300 ease-in-out">
        {children}
      </main>
    </div>
  );
};

export default Layout;
