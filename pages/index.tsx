import type { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";

// import styles from "../styles/Home.module.css";
import Claw from "../public/assets/img/claw.png";
import wolf from "../public/assets/img/wolf3.png";
// import Agile from "../public/assets/img/agile.jpg";

// import { Header } from "../components/Header/Header";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import { Footer2 } from "../components/Footer2/Footer";
import { Layout } from "../components/layout/Layout";
// import Link from "next/link";

import { Client } from "../components/Client/Client";
import { OpenAnimation } from "../components/OpenAnimation/OpenAnimation";
import { Ourservice } from "../components/OurService/Ourservice";
import { OurProduct } from "../components/OurProduct/OurProduct";

const Home: NextPage = () => {
  const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });
  const LitterWitch = dynamic(() => import("../components/LitterWitch"), {
    ssr: false,
    loading: () => <div>loading...</div>,
  });
  const SoftwereDev = dynamic(() => import("../components/SoftwereDev"), {
    ssr: false,
    loading: () => <div>loading...</div>,
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <OpenAnimation />
      <Layout pageTitle="Jasa Pembuatan Website & Aplikasi">
        <div className="flex flex-col w-full h-full min-h-[94.5svh] relative  justify-center  items-center  overflow-x-clip">
          <div className="mt-[-2rem] flex justify-center z-30 content-center self-center items-center dropLogo ">
            <div className=" absolute right-0 top-0 opacity-70">
              <Image alt="" height={350} width={450} src={Claw} />
            </div>
            <Image alt="" height={300} width={550} src={wolf} />
          </div>
        </div>
      </Layout>
      {/* <OurProduct/> */}
       {/* <Ourservice/> */}
       {/* <Client/>   */}
      <Footer2 />
    </div>
  );
};

export default Home;
