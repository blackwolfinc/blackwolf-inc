import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import wolf from "../public/assets/img/wolf3.png";
import Forest from "../public/assets/img/Forest.png";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <div className={styles.container}>
        <div className="flex flex-col bg-gradient-to-br from-[#1F1F1F] via-[#1F1F1F] to-[#080707] w-full h-full min-h-[100vh]  justify-center  items-center">
          <div className="mt-[1rem] flex justify-center z-30 content-center self-center items-center">
            <Image height={300} width={300} src={wolf} />
            <p className="text-2xl  text-stone-200 capitalize">
              Black wolf Tech Indonesia{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
