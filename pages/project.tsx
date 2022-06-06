import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Layout } from "../components/layout/Layout";
import image from "../public/assets/img/wolf3.png";

const project: NextPage = () => {
  const reanderCard = () => {
    const a = [1, 2, 3];

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
    <Layout pageTitle="colelction">
      <div className="flex flex-col bg-gradient-to-br from-[#1F1F1F] via-[#1F1F1F] to-[#080707] w-full h-full min-h-[100vh]  justify-center  items-center text-stone-200">
        <h1 className="text-4xl text-[#fff7] text-center p-4">
          - Comming Soon -{" "}
        </h1>
      </div>
    </Layout>
  );
};

export default project;
