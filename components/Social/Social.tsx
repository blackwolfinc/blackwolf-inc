import { useRouter } from 'next/router'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export const Social = () => {
    const route = useRouter()
    const social = "hover:scale-125 hover:text-green-500  hover:mt-[-0.5rem] duration-300"

    const link =(data : string)=>{
        if (data == '1') {
            route.push("https://www.instagram.com/bagasajinugroho_/")
        } else if 
        (data == '2') {
            route.push(" https://www.facebook.com/BagasajiNugraha/")
        }
        else if 
        (data == '3') {
            route.push("https://www.youtube.com/@BWTid")
        }
        else if 
        (data == '4') {
            route.push("https://wa.me/+6282228503323")
        }

       
   
    }

    return (
        <div className='absolute text-white w-full flex justify-center mt-[-7rem]'>
            <div className=' bg-[#ffffff16] w-[15rem] h-[3rem] rounded-[2rem] px-[1rem] flex justify-around items-center '>
                <div onClick={()=>{link("1")}} className={social}><FaInstagram /></div>
                <div onClick={()=>{link("2")}} className={social}> <FaFacebook /></div>
                <div onClick={()=>{link("3")}} className={social}><FaYoutube/></div>
                <div onClick={()=>{link("4")}} className={social}> <FaWhatsapp /></div>
            </div>
        </div>
    )
}
