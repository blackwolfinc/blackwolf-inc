import Image from 'next/image'
import React from 'react'
import Forest from '../../public/assets/img/Forest.png'
import Forest2 from '../../public/assets/img/Forest2.png'

export const Footer = () => {
  return (
    <div className='fixed z-10 w-full bottom-0'>
     <Image className='opacity-10 animation-backgroundone ' src={Forest2}/> 
     <Image className='opacity-10 z-20 animation-backgroundtwo  animation-background2' src={Forest}/> 
     <Image className='opacity-10 z-10 animation-background  ' src={Forest}/> 

    </div>
  )
}