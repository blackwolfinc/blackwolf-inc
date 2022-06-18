import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";

export const Header = () => {
  const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });
  const [Header, setHeader] = useState(false);

  return (
    <>
    {/* Mobile Header  */}
      <MediaQuery maxWidth={768}>
      <div className="p-6 bg-transparent flex z-50 w-full space-x-7 fixed text-stone-200  bg-gradient-to-br from-[#323232] via-[#4b4b4bfb] to-[#0807079f] tracking-widest">
          <Link href={"/"}>Homepage</Link>
          {/* <Link href={"/owner"}>Owner</Link> */}
          <Link href={"/colelction"}>Colection</Link>
          {/* <Link href={"/project"}>Projects</Link> */}
          <Link href={"/aboutus"}>About Us</Link>
        </div>
      </MediaQuery>
      {/* Dexstop Header */}
      <MediaQuery minWidth={768}>
          <div
            onClick={() => {
              setHeader(!Header);
            }}
            className="absolute left-[7rem] top-[3rem] p-5 border-2 border-[#8c8c8c] rounded-[50%] z-50 text-white shadow-md shadow-[#8c8c8c] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>

            {Header ? (
              <div className="absolute mt-7 ml-[-0.5rem] flex-row h-max   border-l-[1px] pl-3 border-dashed border-[#cacaca]">
                <div className="flex flex-col ">
                  <div className="my-3 hover:scale-125 hover:ml-4 duration-100	min-w-max">
                    {" "}
                    <Link href={"/"}>Homepage</Link>
                  </div>
                  <div className="my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max">
                    {" "}
                    <Link href={"/colelction"}>Colection</Link>
                  </div>
                  <div className="my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max">
                    {" "}
                    <Link href={"/aboutus"}>About Us</Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </MediaQuery>
    </>
  );
};
