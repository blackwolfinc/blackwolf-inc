import React, { useEffect, useState } from "react";

export const OpenAnimation = () => {
  const [FristLoad, setFristLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (FristLoad == true) {
        setFristLoad(false);
      }
    }, 3000);
  }, []);

  if (FristLoad) {
    return (
      <div className="fixed w-screen h-screen z-[99999] flex justify-center items-center overflow-hidden">
        <div className="w-[20rem] h-[20rem] fixed z-[99999] bg-red-500 rounded-full items-center justify-center flex animateOpenCenter ">
        </div>

        <div className="w-[99vw]  h-[100vh] flex justify-center items-start animationOpenTop"></div>
        <div className="w-[99vw]  h-[100vh] flex justify-center items-start animationOpenBottom"></div>
      </div>
    );
  } else {
    return null;
  }
};
