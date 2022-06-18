import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Footer2 } from "../components/Footer2/Footer";
import { Layout } from "../components/layout/Layout";
import image from "../public/assets/img/wolf3.png";

const colelction: NextPage = () => {
  const reanderCard = () => {
    const a = [1];

    return a.map((value) => {
      return (
        <>
          <div className="flex p-5 border-[1px] border-[#676767]  flex-col  rounded-md  flex justify-center  content-center self-center text-center shadow-2xl  text-stone-200">
            <h1 className="text-2xl">This Title </h1>
            <Image src={image} />

            <div className="flex space-x-4 justify-center mt-2">
              <button className=" border-2 border-[#676767]  min-w-[5rem] p-3 rounded-lg">
                Submit{" "}
              </button>
              <button className=" border-2 border-[#676767] min-w-[5rem]  p-3 rounded-lg">
                View{" "}
              </button>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
    <Layout pageTitle="colelction">
      <div className="flex flex-col w-full h-full min-h-[100vh]  justify-center  items-center">
        <div className="mt-[1rem] flex justify-center z-30 content-center self-center items-center">
          <div className="flex flex-row w-full space-x-4 ">
            {reanderCard()}
          </div>
        </div>
      </div>{" "}
    </Layout>
    <Footer2/>
    </>
  );
};

export default colelction;
