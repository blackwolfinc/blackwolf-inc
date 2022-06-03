import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'


interface LayoutProps {
    children : ReactNode,
    pageTitle? :string
}

export const Layout = (props : LayoutProps) => {
    const {children ,pageTitle } = props
  return (
   <div className='bg-gradient-to-br from-[#1F1F1F] via-[#1F1F1F] to-[#080707]'>
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Black Wolf Tech Indonesia" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
       <Header/>
        {children}
        {/* <Footer/> */}
        <Footer/>
   </div>
  )
}
