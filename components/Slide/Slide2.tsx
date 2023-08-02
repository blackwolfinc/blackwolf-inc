import Image from 'next/image'
import React from 'react'
import Barbatos from "../../public/assets/img/barbatos.gif"
import { OpenAnimation } from '../OpenAnimation/OpenAnimation'
import { CloseAnimation } from '../OpenAnimation/CloseAnimation'

export const Slide2 = () => {
  return (
    <div>      
        <OpenAnimation />
        <div className="w-full flex justify-left  h-[94.2svh]  py-[6rem]  relative"> 
        <div className='bg-slide-2 w-full absolute h-full top-0'></div>
        <div className="w-fit relative ml-0 sm:ml-[4rem]  border-[#848484] flex justify-center items-center"> 
        <Image className="opacity-90   rounded-md" src={Barbatos} width={540} height={680}></Image>
        <div className="absolute bg-white px-[2rem] py-6 rounded-md skew-x-[-10deg] mt-[-2rem] font-bold text-2xl right-[-6rem]"> Our Product</div>
        <div className="absolute bg-white px-[2rem] py-6 rounded-md skew-x-[-10deg] mt-[10rem] font-bold text-2xl right-[-6rem]"> Our Product</div>
        <div className="absolute bg-white px-[2rem] py-6 rounded-md skew-x-[-10deg] mt-[22rem] font-bold text-2xl right-[-6rem]"> Our Product</div>
        <div className="absolute bg-white px-[2rem] py-6 rounded-md skew-x-[-10deg] mt-[34rem] font-bold text-2xl right-[-6rem]"> Our Product</div>
        </div>
         </div>
      </div>
  )
}
