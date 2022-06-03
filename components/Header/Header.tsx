import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

export const Header = () => {
  const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });

  return (
    <>
    {/* Mobile Header  */}
      <MediaQuery maxWidth={768}>
        <div className="p-6 bg-transparent flex w-full space-x-7  bg-inherit fixed text-stone-200">
          <Link href={""}>Homepage</Link>
          <Link href={""}>Colection</Link>
          <Link href={""}>Projects</Link>
          <Link href={""}>About Us</Link>
        </div>
      </MediaQuery>
      {/* Dexstop Header */}
      <MediaQuery minWidth={768}>
        <div className="p-6 bg-transparent flex w-full space-x-7 fixed text-stone-200 tracking-widest">
          <Link  href={""}>Homepage</Link>
          <Link href={""}>Colection</Link>
          <Link href={""}>Projects</Link>
          <Link href={""}>About Us</Link>
        </div>
      </MediaQuery>
    </>
  );
};
