import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Footer2 } from "../components/Footer2/Footer";
import { Layout } from "../components/layout/Layout";
import image from "../public/assets/img/wolf3.png";
import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// image
import Ut from "../public/assets/img/Ut.png";
import Uo from "../public/assets/img/Uo.png";
import Ue from "../public/assets/img/Ue.png";
import U from "../public/assets/img/U.png";
import Up from "../public/assets/img/Up.png";
import Uk from "../public/assets/img/Uk.png";
import Ub from "../public/assets/img/Ub.png";
import Link from "next/link";

const colelction: NextPage = () => {
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

  const reanderCardMobile = () => {
    const a = [1];
    return a.map((value) => {
      return (
        <>
          <div className="flex  w-full  p-5 border-[1px] border-[#676767]  flex-col  rounded-md  flex justify-center  content-center self-center text-center shadow-2xl  text-stone-200 bg-gradient-to-r from-[#2f2f2f2d] via-[#706e6e7a] to-[#393939]">
            <div className="dropLogoCollection">
              {" "}
              <Image src={Ut} />
            </div>
            <h1 className="text-2xl  mt-3">Ultra Telecome (USA)</h1>
            <div className="flex space-x-4 justify-center mt-2">
              <Link
                href="http://ultratelecom.net/"
                className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg"
              >
                <p className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg">
                  Open Website
                </p>
              </Link>
            </div>
          </div>
          <div className="flex  w-full p-5 border-[1px] border-[#676767]  flex-col  rounded-md  flex justify-center  content-center self-center text-center shadow-2xl  text-stone-200  bg-gradient-to-r from-[#2f2f2f2d] via-[#706e6e7a] to-[#393939]">
            <div className="dropLogoCollection">
              <Image src={Uo} />
            </div>
            <h1 className="text-2xl mt-3">Ultra One LLC (USA)</h1>
            <div className="flex space-x-4 justify-center mt-2">
              <Link
                href="https://www.ultra.one/"
                className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg"
              >
                <p className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg">
                  Open Website
                </p>
              </Link>
            </div>
          </div>
          {/* Logisfleet  */}
          <div className="flex  w-full p-5 border-[1px] border-[#676767]  flex-col  rounded-md  flex justify-center  content-center self-center text-center shadow-2xl  text-stone-200  bg-gradient-to-r from-[#2f2f2f2d] via-[#706e6e7a] to-[#393939]">
            <Image src={Ue} />
            <h1 className="text-2xl  mt-3">LogisFleet Pte. Ltd. (SGP)</h1>
            <div className="flex flex-col justify-center mt-2">
              <Link
                href="https://www.logisfleet.com/"
                className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg"
              >
                <p className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg">
                  Open Website
                </p>
              </Link>
              <Link
                href="https://app.wasteporter.com/login"
                className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg"
              >
                <p className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg">
                  Open Product
                </p>
              </Link>
            </div>
          </div>
          <div className="flex  w-full p-5 border-[1px] border-[#676767]  flex-col  rounded-md  flex justify-center  content-center self-center text-center shadow-2xl  text-stone-200  bg-gradient-to-r from-[#2f2f2f2d] via-[#706e6e7a] to-[#393939]">
            <Image src={U} />
            <h1 className="text-2xl  mt-3">VoxTeneo . (BLG)</h1>
            <div className="flex space-x-4 justify-center mt-2">
              <Link
                href="https://www.voxteneo.com/"
                className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg"
              >
                <p className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg">
                  Open Website
                </p>
              </Link>
            </div>
          </div>

          <div className="flex  w-full p-5 border-[1px] border-[#676767]  flex-col  rounded-md  flex justify-center  content-center self-center text-center shadow-2xl  text-stone-200  bg-gradient-to-r from-[#2f2f2f2d] via-[#706e6e7a] to-[#393939]">
            <div className="dropLogoCollection">
              {" "}
              <Image src={Uk} />
            </div>
            <h1 className="text-2xl  mt-3">Klinik Arrisalah. (IND)</h1>
            <div className="flex space-x-4 justify-center mt-2">
              <Link
                href="http://www.arrisalahklinik.com/"
                className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg"
              >
                <p className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg">
                  Open Website
                </p>
              </Link>
            </div>
          </div>

          <div className="flex  w-full p-5 border-[1px] border-[#676767]  flex-col  rounded-md  flex justify-center  content-center self-center text-center shadow-2xl  text-stone-200  bg-gradient-to-r from-[#2f2f2f2d] via-[#706e6e7a] to-[#393939]">
            <div className="dropLogoCollection">
              {" "}
              <Image src={Up} />
            </div>
            <h1 className="text-2xl  mt-3">Pasar jasa . (IND)</h1>
            <div className="flex space-x-4 justify-center mt-2">
              <Link
                href="https://pasarjasa.net/"
                className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg"
              >
                <p className=" w-full border-2 border-[#676767] mt-4   p-3 rounded-lg">
                  Open Website
                </p>
              </Link>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <Layout pageTitle="colelction">
        <MediaQuery minWidth={768}>
          <div className="relative  items-center pt-[20%] pb-[10%] mt-0  bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] text-white px-[1.45rem] flex flex-col">
            <h1 className="text-3xl"> Our Client Webiste</h1>
            <Carousel
              className=" h-[25rem] w-[100%] mt-3 text-black"
              responsive={responsive}
              infinite={true}
              swipeable={true}
              draggable={true}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              showDots={true}
            >
              {/* Ultra Telecome */}
              <Link href="http://ultratelecom.net/">
                <div className="h-[18rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
                  <Image alt="" height={80} width={300} src={Ut} />
                </div>
              </Link>
              {/* Logis Fleet */}
              <Link href="https://www.logisfleet.com/">
                <div className="h-[18rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
                  <Image alt="" height={100} width={300} src={Ue} />
                </div>
              </Link>

              {/* Ultra one  */}
              <Link href="https://www.ultra.one/">
                <div className="h-[18rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
                  <Image alt="" height={80} width={300} src={Uo} />
                </div>
              </Link>
              {/* Vox teneo */}
              <Link href="https://www.voxteneo.com/">
                <div className="h-[18rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
                  <Image alt="" height={200} width={300} src={U} />
                </div>
              </Link>
              {/* Pasar jasa */}
              <Link href="https://pasarjasa.net/">
                <div className="h-[18rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
                  <Image alt="" height={80} width={300} src={Up} />
                </div>
              </Link>

              {/* Brilliat */}

              {/* Arisalah */}
              <Link href="http://www.arrisalahklinik.com/">
                <div className="h-[18rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
                  <Image alt="" height={80} width={300} src={Uk} />
                </div>
              </Link>
            </Carousel>
            <h1 className="text-[#e0dddd8b] mt-2">
              Click Logo To Open Website
            </h1>
          </div>
        </MediaQuery>
        <div className="flex flex-col w-full h-full min-h-[100vh]  justify-center  items-center">
          <MediaQuery maxWidth={768}>
            <div className="mt-[25%] w-[90%] space-y-4  mb-16">
              {reanderCardMobile()}{" "}
            </div>
          </MediaQuery>
        </div>{" "}
      </Layout>
      <Footer2 />
    </>
  );
};

export default colelction;
