import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

export const Header = () => {
  const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });

  return (
    <>
    {/* Mobile Header  */}
      <MediaQuery maxWidth={768}>
        <div className="p-6 bg-transparent flex w-full space-x-7 z-50  bg-inherit fixed text-stone-200 ">
          <Link href={"/"}>Homepage</Link>
          {/* <Link href={"/owner"}>Owner</Link> */}
          <Link href={"/colelction"}>Colection</Link>
          {/* <Link href={"/project"}>Projects</Link> */}
          <Link href={"/aboutus"}>About Us</Link>
        </div>
      </MediaQuery>
      {/* Dexstop Header */}
      <MediaQuery minWidth={768}>
        <div className="p-6 bg-transparent flex z-50 w-full space-x-7 fixed text-stone-200  bg-gradient-to-br from-[#323232] via-[#4b4b4b3d] to-[#08070700] tracking-widest">
          <Link  href={"/"}>Homepage</Link>
          {/* <Link href={"/owner"}>Owner</Link> */}
          <Link href={"/colelction"}>Colection</Link>
          {/* <Link href={"/project"}>Projects</Link> */}
          <Link href={"/aboutus"}>About Us</Link>
        </div>
      </MediaQuery>
    </>
  );
};
