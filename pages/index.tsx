import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import wolf from "../public/assets/img/wolf3.png";
import Ut from "../public/assets/img/Ut.png";
import Uo from "../public/assets/img/Uo.png";
import Ue from "../public/assets/img/Ue.png";
import U from "../public/assets/img/U.png";
import Up from "../public/assets/img/Up.png";
import Uk from "../public/assets/img/Uk.png";
import Ub from "../public/assets/img/Ub.png";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/layout/Layout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer2 } from "../components/Footer2/Footer";

const Home: NextPage = () => {
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
    <>
      <Layout pageTitle="Homepage">
        <div className="flex flex-col w-full h-full min-h-[100vh]  justify-center  items-center">
          <div className="mt-[1rem] flex justify-center z-30 content-center self-center items-center">
            <Image height={300} width={300} src={wolf} />
            <p className="text-2xl  text-stone-200 capitalize neonText ">
              Black wolf Tech Indonesia{" "}
            </p>
          </div>
        </div>
      </Layout>
      <div className="min-h-[25rem]  bg-gradient-to-br from-[#1F1F1F] via-[#1F1F1F] to-[#080707] text-white pt-[2rem] px-[1.45rem] flex flex-col">
        <h1 className="text-3xl"> Our Client</h1>
        <Carousel
          className=" h-[15rem] w-[100%] mt-3 text-black"
          responsive={responsive}
        >
          <div className="h-[13rem] border-[2px] border-[#1a1919] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col bg-[#ececec]">
            <Image height={80} width={300} src={Ut} />
          </div>
          <div className="h-[13rem] border-[2px] border-[#1a1919] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col bg-[#ececec]">
            <Image className="rounded-lg" height={180} width={300} src={U} />
          </div>
          <div className="h-[13rem] border-[2px] border-[#1a1919] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col bg-[#ececec]">
            <Image className="rounded-lg" height={80} width={300} src={Up} />
          </div>
          <div className="h-[13rem] border-[2px] border-[#1a1919] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col bg-[#ececec]">
            <Image className="rounded-lg" height={150} width={450} src={Ue} />
          </div>
          <div className="h-[13rem] border-[2px] border-[#1a1919] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col bg-[#ececec]">
            <Image className="rounded-lg" height={130} width={150} src={Ub} />
          </div>

          <div className="h-[13rem] border-[2px] border-[#1a1919] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col bg-[#ececec]">
            <Image height={130} width={450} src={Uo} />
          </div>
          <div className="h-[13rem] border-[2px] border-[#1a1919] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col bg-[#ececec]">
            <Image className="rounded-lg" height={130} width={450} src={Uk} />
          </div>
        </Carousel>

        {/* background: #1f1f1f;
box-shadow:  20px 20px 60px #1a1a1a,
             -20px -20px 60px #242424; */}
      </div>
      <Footer2 />
    </>
  );
};

export default Home;
