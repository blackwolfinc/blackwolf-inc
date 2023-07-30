import React from 'react'
// import styles from "../styles/Home.module.css";
import wolf from "../../public/assets/img/wolf3.png";
import Ut from "../../public/assets/img/Ut.png";
import Uo from "../../public/assets/img/Uo.png";
import Ue from "../../public/assets/img/Ue.png";
import U from "../../public/assets/img/U.png";
import Up from "../../public/assets/img/Up.png";
import Uk from "../../public/assets/img/Uk.png";
import Ub from "../../public/assets/img/Ub.png";
// user

import Man from "../../public/assets/client/jo.png";
import Malik from "../../public/assets/client/malik.png";
import Mary from "../../public/assets/client/mary.png";


import Claw from "../../public/assets/img/claw.png";
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import MediaQuery from 'react-responsive';
import ReactPlayer from 'react-player';
// import Agile from "../public/assets/img/agile.jpg";
export const Client = () => {

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
    </div>
  )
}
