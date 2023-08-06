import type { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";
import { animated } from '@react-spring/web'


// import styles from "../styles/Home.module.css";
import Claw from "../public/assets/img/claw.png";
import wolf from "../public/assets/img/wolf3.png";
// import Agile from "../public/assets/img/agile.jpg";
import { FaAngleDoubleRight, FaAngleRight, FaChevronLeft, FaChevronRight, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
// import { Header } from "../components/Header/Header";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import { Footer2 } from "../components/Footer2/Footer";
import { Layout } from "../components/layout/Layout";
// import Link from "next/link";

// import video from '../public/assets/mp4/barbatos.mkv'
import { OpenAnimation } from "../components/OpenAnimation/OpenAnimation";
import { ParticlesData } from "../components/Particle/ParticlesData";
import { OurProduct } from "../components/OurProduct/OurProduct";
import Gif from "../public/assets/img/png/barbatos.png"
import { Social } from "../components/Social/Social";
import { Slide2 } from "../components/Slide/Slide2";
import { useState } from "react";
import { CloseAnimation } from "../components/OpenAnimation/CloseAnimation";

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

  const [Page, setPage] = useState(0)
  const [closeAnimation, setcloseAnimation] = useState(false)

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

  const handleLoading =()=>{
    setcloseAnimation(true)
    setTimeout(() => {
      setPage(Page + 1)
    }, 3000);

   
  }


  const handlePage = () => {
    if (Page == 0) {
      return (
        <>
        {closeAnimation && <CloseAnimation/>}
          <Layout pageTitle="Jasa Pembuatan Website & Aplikasi">
            <div className="flex flex-col w-full h-full min-h-[94.2svh] relative  justify-center  items-center  overflow-x-clip">
              <div className="mt-[-6rem] flex justify-center  z-30 content-center self-center items-center dropLogo ">
                <div className=" absolute right-0 top-0 opacity-70">
                  <Image alt="" height={350} width={450} src={Claw} />
                </div>
                <Image alt="" height={300} width={550} src={wolf} />
              </div>
              <button onClick={() => {handleLoading() }} className="absolute bottom-[10.5rem]  text-[#bfbfbf] rounded-full z-50 border-[1px] px-6 py-2 text-xl font-bold hover:scale-110 duration-300  hover:bg-[#4242426c] translate-y-2">Our Solutions</button>
            </div>
          </Layout>
          <Social />
          </>
      )
    } else if (
      Page == 1
    ) {
      return <Slide2 />
    }

  }

  return (
    <div className="" >
      <OpenAnimation />
      <ParticlesData />
      {handlePage()}
      <Footer2 />
    </div>
  );
};

export default Home;
