import { FC } from "react";
import { TLayoutProps } from "./types";
import Head from "next/head";
import { pagesData } from "../../config";

const Layout: FC<TLayoutProps> = ({ page, children }) => {
  return (
    <div>
      <Head>
        <title>{pagesData[page].title}</title>
        <meta name="description" content={pagesData[page].description} />
      </Head>
      <header>
        <h1>DayLog+</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
