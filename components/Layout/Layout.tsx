import Head from "next/head";
import { TLayoutProps } from "./types";
import { pagesData } from "../../config";
import Header from "../Header/Header";

const Layout = ({ page, children }: TLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{pagesData[page].title}</title>
        <meta name="description" content={pagesData[page].description} />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
