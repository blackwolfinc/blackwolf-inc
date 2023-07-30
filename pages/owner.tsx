import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Layout } from "../components/layout/Layout";
// import image from "../public/assets/img/saya.png";

const colelction: NextPage = () => {
  return (
    <Layout pageTitle="owner">
      <div className="flex flex-col  w-full h-full min-h-[100vh]  justify-center  items-center">
        {/* <Image alt="" className="bg-red" src={image} height={600} width={350} /> */}
      </div>
    </Layout>
  );
};

export default colelction;
