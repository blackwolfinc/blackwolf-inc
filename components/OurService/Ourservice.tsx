import React from 'react'
import MediaQuery from 'react-responsive'
import LitterWitch from '../LitterWitch'
import Image from 'next/image'
import Claw from "../../public/assets/img/claw.png";

export const Ourservice = () => {
  return (
    <div className="min-h-[58rem] relative overflow-clip  bg-gradient-to-b from-[#1b1b1b11] via-[#424141a9] to-[#646464] text-white pt-[2rem] flex flex-row justify-around ">
    <MediaQuery minWidth={768}>
      <div className="absolute top-0 mt-[-20rem] mr-[-40rem]  overflow-clip  dropClaw right-0 ">
        <Image alt="" height={1000} width={1400} src={Claw} />
      </div>
    </MediaQuery> 

    {/* Dexstop Header */}
    <MediaQuery minWidth={768}>
      <h1 className="absolute font-extrabold text-[70px] capitalize text-[#1b1b1b] self-start ml-[-55vw] mt-[4rem] bg-[#1b1b1b11] px-8 rounded-[12px]">
        our services
      </h1>
      <div className="w-full bgOur rounded-md mt-[20rem] text-lg tracking-widest ">
        <LitterWitch />
      </div>
      <MediaQuery minWidth={768}>
        <div className="flex justify-center self-center items-center  absolute mb-[-30rem] w-full">
          <div className="flex justify-between w-10/12 z-50 space-x-2">
            <button className="p-4 font-extrabold bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]  buttonAtas  h-[5rem] rounded-md border-[1px] border-[#b2b1b1] w-72 text-stone-200 hover:text-orange-300">
              <span> Company Website </span>
            </button>
            <button className="p-4   bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]   buttonAtas rounded-md border-[1px] w-72 border-[#b2b1b1] text-stone-200 hover:text-orange-300">
              <span> Online Store</span>
            </button>
            <button className="p-4  font-extrabold bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]   buttonAtas rounded-md border-[1px] w-72 border-[#b2b1b1] text-stone-200 hover:text-orange-300">
              <span> Softwere Development</span>
            </button>
            <button className="p-4 font-extrabold  bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]   buttonAtas rounded-md border-[1px] w-72 border-[#b2b1b1] text-stone-200 hover:text-orange-300">
              <span>Marketing Website </span>
            </button>
            <button className="p-4 font-extrabold  bg-gradient-to-b from-[#1b1b1b] via-[#424141] to-[#646464]   buttonAtas rounded-md border-[1px] w-72 border-[#b2b1b1] text-stone-200 hover:text-orange-300">
              <span> Custom Website</span>
            </button>
          </div>
        </div>
      </MediaQuery>
    </MediaQuery>
     <MediaQuery maxWidth={768}>
      <div className="w-full bg-[#242424] rounded-md p-3 text-lg tracking-widest">
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
  )
}
