import Image from 'next/image'
import React from 'react'
import Gif from "../../public/assets/img/png/barbatos.png"
export const OurProduct = () => {
  return (
    <div className='flex justify-center h-full bg-[#FAFAFA] p-4 relative'>

   
        <Image width={600} height={500} className='w-[10rem] ' alt='' src={Gif}></Image>


    </div>
  )
}
