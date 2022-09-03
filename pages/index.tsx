import type { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";

// import styles from "../styles/Home.module.css";
import wolf from "../public/assets/img/wolf3.png";
import Ut from "../public/assets/img/Ut.png";
import Uo from "../public/assets/img/Uo.png";
import Ue from "../public/assets/img/Ue.png";
import U from "../public/assets/img/U.png";
import Up from "../public/assets/img/Up.png";
import Uk from "../public/assets/img/Uk.png";
import Ub from "../public/assets/img/Ub.png";
import Claw from "../public/assets/img/claw.png";
import Agile from "../public/assets/img/agile.jpg";

import Man from "../public/assets/client/jo.png";
import Malik from "../public/assets/client/malik.png";
import Mary from "../public/assets/client/mary.png";
// import { Header } from "../components/Header/Header";
import { Layout } from "../components/layout/Layout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer2 } from "../components/Footer2/Footer";
import dynamic from "next/dynamic";
// import Link from "next/link";

import ReactPlayer from "react-player";
import { AnimatePresence } from "framer-motion";

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
      <Layout pageTitle="Homepage">
        <div className="flex flex-col w-full h-full min-h-[100vh] relative  justify-center  items-center  overflow-x-clip">
          <div className="mt-[-2rem] flex justify-center z-30 content-center self-center items-center dropLogo ">
            <div className=" absolute right-0 top-0 opacity-70">
              <Image alt="" height={350} width={450} src={Claw} />
            </div>
            <Image alt="" height={300} width={550} src={wolf} />
          </div>
        </div>
      </Layout>

      {/* <AnimatePresence exitBeforeEnter initial={true}></AnimatePresence> */}
      <MediaQuery minWidth={768}>
        <div className="flex justify-center self-center items-center  absolute mt-[-2rem] w-full">
          <div className="flex justify-between w-8/12 z-50">
            <button className="p-4  bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]  buttonAtas  rounded-md border-[1px] border-[#b2b1b1] w-52 text-stone-200">
              Softwere Development
            </button>
            <button className="p-4  bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]   buttonAtas rounded-md border-[1px] w-52 border-[#b2b1b1] text-stone-200">
              IT Consultant
            </button>
            <button className="p-4  bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]   buttonAtas rounded-md border-[1px] w-52 border-[#b2b1b1] text-stone-200">
              Company Profile
            </button>
            <button className="p-4  bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]   buttonAtas rounded-md border-[1px] w-52 border-[#b2b1b1] text-stone-200">
              Custom Website
            </button>
          </div>
        </div>
      </MediaQuery>
      <div className="min-h-[45rem] relative pb-[6rem]    overflow-clip  bg-gradient-to-b from-[#1b1b1b11] via-[#424141a9] to-[#646464] text-white pt-[2rem] px-[1.45rem] flex flex-row justify-around space-x-4 pb-8">
        <MediaQuery minWidth={768}>
          <div className="absolute top-0 mt-[-20rem] mr-[-40rem]  overflow-clip  dropClaw right-0 ">
            <Image alt="" height={1000} width={1400} src={Claw} />
          </div>
        </MediaQuery>

        {/* Dexstop Header */}
        <MediaQuery minWidth={768}>
          <div className="w-full bgOur rounded-md p-3 mt-20 text-lg w-10/12 tracking-widest ">
            <LitterWitch />
            <div className="mr-[35%] mt-3 mb-4 bg-[#202326] bg-gradient-to-b from-[#1b1b1b11] via-[#424141a9] to-[#646464] p-4 rounded-md">
              <h1 className="text-3xl px-1 z-10">Our Services</h1>
              <div className="my-5 border-b-[1px] w-full border-[#444444] z-10" />
              <p className="text-lg z-10">
                We are ready to help your digital business become a reality,
                dont worry about how to start your digital business, we will
                provide free consultation, mature concepts and friendly prices.
                Not only digital business, if you already have a business in the
                real sector, we also provide landing page / company profile
                creation services, so that your prospective customers are more
                global, and more widely recognized in the digital era. <br />
                <br />
                We Have Many International Clients Who Are Regularly Developing
                Their Websites, To Be Better Which We Have Fully Entrusted With
                .
              </p>

              <div className="my-5 border-b-[1px] w-full border-[#444444] z-10" />
              <p>
                We are ready to collaborate with you both with the government
                and private sector to develop themselves towards the era of
                digital , in application development (Softwere Development) /
                Custom Website / IT Consultant / Company Profile and we will be
                ready for collaborate From the planning stage to completion,
                will continue to accompany us with professionals.
              </p>
              <br />
              <br />
              <p>
                We are ready to provide a Cash Back Guarantee if what we do not
                according to the agreed master plan <br />
                <br /> (Black Wolf Tech Indonesia).
              </p>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={768}>
          <div className="w-full bg-[#242424] rounded-md p-3 text-lg w-full tracking-widest">
            <h1 className="text-3xl px-1">Our Services</h1>
            <div className="my-5 border-b-[1px] w-full border-[#444444]" />
            <p className="text-lg ">
              We are ready to help your digital business become a reality, dont
              worry about how to start your digital business, we will provide
              free consultation, mature concepts and friendly prices. Not only
              digital business, if you already have a business in the real
              sector, we also provide landing page / company profile creation
              services, so that your prospective customers are more global, and
              more widely recognized in the digital era. <br />
              <br />
              We Have Many International Clients Who Are Regularly Developing
              Their Websites, To Be Better Which We Have Fully Entrusted With .
            </p>{" "}
            <br />
            <div className="my-1 border-b-[1px] w-full border-[#444444]" />
            <br />
            <p>
              We are ready to collaborate with you both with the government and
              private sector to develop themselves towards the era of digital ,
              in application development (Softwere Development) / Custom Website
              / IT Consultant / Company Profile and we will be ready for
              collaborate From the planning stage to completion, will continue
              to accompany us with professionals.
            </p>
            <br />
            <p>
              We are ready to provide a Cash Back Guarantee if what we do not
              according to the agreed master plan <br />
              <br /> (Black Wolf Tech Indonesia).
            </p>
          </div>
        </MediaQuery>
      </div>
      <div className="min-h-[25rem] relative mt-20  bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] text-white pt-[2rem] px-[1.45rem] flex flex-col">
        <h1 className="text-3xl"> Our Client</h1>
        <Carousel
          className=" h-[15rem] w-[100%] mt-3 text-black"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <div className="h-[13rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
            <Image alt="" height={80} width={300} src={Ut} />
          </div>
          <div className="h-[13rem]  border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={180}
              width={300}
              src={U}
            />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={80}
              width={300}
              src={Up}
            />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={150}
              width={450}
              src={Ue}
            />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={130}
              width={150}
              src={Ub}
            />
          </div>

          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image alt="" height={130} width={450} src={Uo} />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5]  ">
            <Image
              alt=""
              className="rounded-lg"
              height={130}
              width={450}
              src={Uk}
            />
          </div>
        </Carousel>
      </div>

      <MediaQuery minWidth={768}>
        <div className="min-h-[45rem] mt-[2rem]  flex flex-col  pb-4  text-[#646464] pt-[2rem] px-[1.45rem] flex flex-row justify-center items-center">
          <h1 className="text-center w-full my-[1rem] text-3xl font-bold">
            Demo Product
          </h1>
          <ReactPlayer
            controls={false}
            light={true}
            playing={true}
            url="https://www.youtube.com/embed/b3jauWRqv8w"
          />
        </div>
      </MediaQuery>

      <h1 className="text-center w-full my-[1rem] mt-4 text-3xl font-bold">
        International Clients
      </h1>
      <div className="min-h-[40rem]  p-10  space-x-4 flex overflow-y-hidden">
        <div className="bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] p-4 rounded-md min-w-[25rem] text-white w-4/12 flex flex-col justify-center ">
          <div className=" max-w-[15rem] self-center ">
            <Image src={Man} className="rounded-full shadow-xl" />
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-bold text-center w-full mb-4 mt-4">
              Joshua
            </h1>
            <p className="px-4">
              My project was done very quickly and professionally,
              communicative, very responsible developer
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] p-4 rounded-md min-w-[25rem] text-white w-4/12 flex flex-col justify-center ">
          <div className=" max-w-[15rem] self-center ">
            <Image src={Mary} className="rounded-full shadow-xl" />
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-bold text-center w-full mb-4 mt-4">
              Mary
            </h1>
            <p className="px-4">
              It s an honor to collaborate with a professional developer, who
              helps me provide solutions for my website development
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] p-4 rounded-md min-w-[25rem] text-white w-4/12 flex flex-col justify-center ">
          <div className=" max-w-[15rem] self-center ">
            <Image src={Malik} className="rounded-full shadow-xl" />
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-bold text-center w-full mb-4 mt-4">
              Malik
            </h1>
            <p className="px-4">
              I was impressed by the good workmanship and professional, very
              communicative and able to provide solutions and idea for my
              website
            </p>
          </div>
        </div>
      </div>

      <MediaQuery minWidth={768}>
        {" "}
        <div className="min-h-[45rem] relative teamwolf  mt-[10rem] pb-10 bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] text-white pt-[2rem] px-[1.45rem] flex flex-row justify-between">
          <div className="w-7/12 flex text-center justify-center bg-[#111111cc] items-center content-center">
            <h1 className="self-start mt-[3rem]">Softwere Development</h1>
            <SoftwereDev />
          </div>
          <div className="w-5/12">
            <div className=" bg-[#111111e3] p-4 ">
              <p className="flex flex-col">
                We are highly dedicated to helping solve Professional technical
                and non-technical problems, In terms of Providing the best
                Solutions and the best results in development of the application
                you want, we will accompany you from the planning stage to
                delivery professional application,
                <br />
                <br />
                The application development process is carried out using the
                Agile Method, and User (you) will fully participate in
                monitoring the process application development, we will prepare
                the design , algorithms and best solutions to the needs your
                application, you can add Customization features to your needs
                which will later be very helpful when in use.
                <br />
                <br />
                The fastest application development process is 1 month because
                we maintain quality and client satisfaction Our work performance
                <br />
                <br />
                Steps to be taken when we make a application
                <br />
                <br />
                <Image alt="" height={500} width={1000} src={Agile} />
                <ul className="mt-4 space-y-2">
                  <li>1. Early Stages of Planning</li>
                  <li>2. Design & Material Collection Stage</li>
                  <li>3. Application Flow Planning Stage </li>
                  <li>4. Mockup Implementation Stage </li>
                  <li>5. T Development Stage By Developer </li>
                  <li>6. Show on 70% stage to be tried and revised by users</li>
                  <li>7. Revision stage by Team Developer </li>
                  <li>8. 100% Show and Submission Stage </li>
                </ul>
                <br />
                This stage can be adjusted to the needs of the Client / User.
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>
      <Footer2 />
    </div>
  );
};

export default Home;
