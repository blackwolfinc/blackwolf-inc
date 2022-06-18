import Image from 'next/image'
import React from 'react'
import Forest from '../../public/assets/img/Forest.png'
import Forest2 from '../../public/assets/img/Forest2.png'

export const Footer = () => {
  return (
    <div className='fixed z-[-1] w-full bottom-0'>
     <Image className='opacity-10 z-[0] animation-backgroundone ' src={Forest2}/> 
     <Image className='opacity-10 z-[0] animation-backgroundtwo  animation-background2' src={Forest}/> 
     <Image className='opacity-10 z-[-1] animation-background  ' src={Forest}/> 
    </div>
  )
}
