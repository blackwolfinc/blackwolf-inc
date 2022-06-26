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
import Claw from "../public/assets/img/claw.png";
import Agile from "../public/assets/img/agile.jpg";
import Man from "../public/assets/img/man.jpg";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/layout/Layout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer2 } from "../components/Footer2/Footer";
import dynamic from "next/dynamic";
import Link from "next/link";

import ReactPlayer from "react-player";

const Home: NextPage = () => {
  const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });

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
          <div className="mt-[1rem] flex justify-center z-30 content-center self-center items-center dropLogo ">
            <Image alt="" height={300} width={300} src={wolf} />
            <p className="text-2xl  text-stone-200 capitalize neonText ">
              Black wolf Tech Indonesia{" "}
            </p>
          </div>
        </div>
      </Layout>
      <MediaQuery minWidth={768}>
        <div className="flex justify-center self-center items-center  absolute mt-[-2rem] w-full  ">
          <div className="flex justify-between w-8/12 z-50">
            {" "}
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

      <div className="min-h-[45rem] relative     overflow-clip  bg-gradient-to-b from-[#1b1b1b11] via-[#424141a9] to-[#646464] text-white pt-[2rem] px-[1.45rem] flex flex-row justify-around space-x-4 pb-8">
        <MediaQuery minWidth={768}>
          <div className="absolute top-0 mt-[-20rem] mr-[-40rem]  overflow-clip  dropClaw right-0 ">
            <Image alt="" height={1000} width={1400} src={Claw} />
          </div>
        </MediaQuery>

        {/* Dexstop Header */}
        <MediaQuery minWidth={768}>
          <div className="w-full bgOur rounded-md p-3 mt-20 text-lg w-10/12 tracking-widest ">
            <div className="ml-[35%] mt-3 mb-4 bg-[#202326] bg-gradient-to-b from-[#1b1b1b11] via-[#424141a9] to-[#646464] p-4 rounded-md">
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
              We are ready to help your digital business become a reality, don't
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

      <div className="min-h-[25rem] relative  bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] text-white pt-[2rem] px-[1.45rem] flex flex-col">
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
        {" "}
        <div className="min-h-[45rem] relative teamwolf   pb-10 bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] text-white pt-[2rem] px-[1.45rem] flex flex-row justify-between">
          <div className="w-7/12 flex text-center justify-center bg-[#111111cc] items-center content-center">
            <h1 className="text-3xl text buttonAtas"> Softwere Development</h1>
          </div>
          <div className="w-5/12">
            <div className=" bg-[#111111e3] p-4 ">
              <p className="flex flex-col">
                Kami Berdedikasi tinggi Untuk turut membantu menyelesaikan
                masalah - masalah teknis maupun non teknis secara Profesional ,
                Dalam hal Memberikan Solusi terbaik dan hasil terbaik dalam
                penggembangan aplikasi yang anda inginkan , kami akan
                mendampingi anda dari tahap Perencanaan hingga penyerahan
                aplikasi secara profesional ,
                <br />
                <br />
                Proses pembuatan aplikasi di lakukan dengan Metode Agile , dan
                User (anda) akan secara penuh ikut andil dalam monitoring proses
                pembuatan aplikasi , kami akan mempersiapkan rancang bangun
                (design) , algoritma dan solusi terbaik dengan kebutuhan
                aplikasi anda , anda dapat menambahkan fitur fitur Customasi /
                fitur yang di sesuaikan dengan kebutuhan anda yang nantinya akan
                sangat membantu dalam proses penggunaan .
                <br />
                <br />
                Proses Pembuatan Aplikasi paling Cepat adalah 1 Bulan / Satu
                Bulan , Karena kami menjaga kualitas serta kepuasan Client atas
                Kinerja pekerjaan kami
                <br />
                <br />
                Tahap Tahap yang akan di Lakukan Saat kami membuat suatu
                aplikasi
                <br />
                <hr className="my-2" />
                <Image alt="" height={500} width={1000} src={Agile} />
                <ul className="mt-4">
                  <li>1. Tahap Awal Perencanaan</li>
                  <li>2. Tahap Design & Pengumpulan Material</li>
                  <li>3. Tahap Perencanaan Alur Aplikasi </li>
                  <li>4. Tahap Penerapan Mockup </li>
                  <li>5. Tahap Development Oleh Developer </li>
                  <li>
                    6. Tahap Show on 70% Untuk Di Coba dan di Revisi Oleh User{" "}
                  </li>
                  <li>7. Tahap revisi oleh Team Developer </li>
                  <li>8. Tahap Show 100% Dan Penyerahan </li>
                </ul>
                <br />
                Tahapan ini bisa di sesuaikan dengan kebutuhan Client / User .
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <div className="min-h-[45rem]    pb-10 bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] text-white pt-[2rem] px-[1.45rem] flex flex-row justify-center items-center">
          <ReactPlayer
            controls={false}
            light={true}
            playing={true}
            url="https://www.youtube.com/embed/b3jauWRqv8w"
          />
        </div>
      </MediaQuery>
      <Footer2 />
    </div>
  );
};

export default Home;
