import Image from "next/image";
import { useEffect, useState } from "react";
import Barbatos from "../../public/assets/img/barbatos.gif";
import BarbatosBackground from "../../public/assets/img/png/BackgroundBarbatos.png";
import { Client } from "../Client/Client";
import { OpenAnimation } from "../OpenAnimation/OpenAnimation";
import { Header } from "../Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";

export const Slide2 = () => {
  const [Data, setData] = useState(3);
  const [LoadClose, setLoadClose] = useState(false)
  const router = useRouter()
  useEffect(() => {
  }, [Data])


  const DataHideShow = (data: number) => {
    setLoadClose(true)
    setTimeout(() => {
      setData(data)
      setLoadClose(false)
    }, 1000);
  }


  const handleRenderSlidekanan = () => {
    if (Data == 1) {
      return <div className={`${Data == 1 ? "animatedCard" : ""} ${LoadClose ? "animatedCardClose" : ""}  relative w-full mt-[6rem] lg:mt-0 lg:w-[60%] border-[12px] rounded-lg border-[#696969] h-full flex mr-[-12rem] lg:skew-x-[-8deg]  items-center scale-110  border-b-[#696969] border-r-[#696969] overflow-clip`}>
        <div className=" text-white w-full rounded-[1rem] h-full md:h-[40rem] z-10 p-[2rem] md:py-[6rem]  relative">
          <div className="bg-card-our-solutions w-full h-full absolute top-0 left-0"></div>
          <div className="lg:skew-x-[0deg]  h-full w-full  md:w-[80%]  2xl:w-full">
            <h1 className="headerCard"> About Us</h1>
            <h1 className="font-medium mb-4 mt-4">

              Welcome to Black Wolf Tech Indonesia - Your Partner for Innovative IT Solutions!
            </h1>
            <span >
              At Black Wolf Tech Indonesia, we are a team of dedicated IT professionals with a mission to deliver cutting-edge solutions to businesses and individuals. Our passion for technology and commitment to excellence drive us to simplify complexities and provide seamless IT services.</span>
            <span><br /><br />
              What We Do :<br />
              Software Development: Our expert developers craft custom software solutions tailored to your unique needs. From web and mobile applications to enterprise software, we ensure efficiency and user-friendliness.
              <br /><br />
              Internet of Things (IoT): Embrace the future with our smart IoT solutions that connect and optimize devices, enabling seamless automation and data-driven decisions.

            </span>
          </div>
        </div>
      </div>

    } else if (Data == 2) {
      return (
        <div className={` ${Data == 2 ? "animatedCard" : ""} ${LoadClose ? "animatedCardClose" : ""} relative w-full mt-[6rem] lg:mt-0 lg:w-[60%] border-[12px] rounded-lg border-[#696969] h-full flex mr-[-12rem] lg:skew-x-[-8deg] items-center  scale-110  border-b-[#696969] border-r-[#696969] overflow-clip`}>
          <div className="bg-[#535353fd] text-white w-full rounded-[1rem] h-full md:h-[40rem] z-10 p-[2rem] md:py-[6rem]">
            <div className="bg-card-our-solutions w-full h-full absolute top-0 left-0"></div>
            <div className="lg:skew-x-[0deg]  h-full w-full  md:w-[80%] 2xl:w-full">
              <h1 className="headerCard"> Our Project</h1>
              At Black Wolf Tech Indonesia, we are passionate about technology and committed to empowering businesses and individuals with transformative digital experiences. Our mission is to provide simple and effective solutions that drive growth and success.
              <br></br>  <br></br>
              Empower your business with our professional software development services. As experienced software developers, we provide tailored solutions that drive growth and success. Here why you should choose us for your project:
              <br></br>  <br></br>
              Expert Software Developers: Our team consists of highly skilled and experienced software developers, ensuring top-notch solutions for your project.
              <br></br>  <br></br>
              Partner with us, the trusted software developers, and witness how technology transforms your business. Embrace efficiency, innovation, and excellence with our team driving your project to success. Let work together to bring your vision to life and set new standards in your industry.
              <br></br>  <br></br>
            <button onClick={()=>{router.push("/colelction")

}} className="bg-gray-600/60 px-[2rem] py-[1rem] z-40 hover:scale-105 hover:bg-gray-600 duration-500">More Details</button>
{/* </Link> */}
            </div>
          </div>
        </div>
      );
    } else if (Data == 3) {
      return (
        <div className={`${Data === 3 ? "animatedCard" : ""} ${LoadClose ? "animatedCardClose" : ""} relative w-full mt-[6rem] lg:mt-0 lg:w-[60%] border-[12px] rounded-lg border-[#696969] h-full flex mr-[-12rem] lg:skew-x-[-8deg] items-center  scale-110  border-[#696969] overflow-clip`}>
          <div className="bg-[#535353fd] text-white w-full rounded-[1rem] h-full md:h-[40rem] z-10  mt-[3rem] max-2xl:mt-[10rem]">
            <div className="bg-card-our-solutions w-full h-full absolute top-0 left-0"></div>
            <div className="2xl:skew-x-[8deg]  h-full  2xl:w-full">
              <div className="px-[2rem] md:px-[6rem]"> <h1 className="headerCard">Our Customer</h1>
                Our Customers are The Driving Force Behind Our Tech Company </div>
              <div className="md:skew-x-[-8deg] md:ml-[-1rem]  md:w-[150%] mt-12 ">  <Client /></div>
            </div>
          </div>
        </div>
      );
    } else if (Data == 4) {
      return (
        <div className={` ${Data === 4 ? "animatedCard" : ""} ${LoadClose ? "animatedCardClose" : ""} relative w-full mt-[6rem] lg:mt-0 lg:w-[60%] border-[12px] rounded-lg border-[#696969] h-full flex mr-[-12rem] lg:skew-x-[-8deg] items-center  scale-110  border-b-[#696969] border-r-[#696969] overflow-clip`}>
          <div className="bg-[#535353fd] text-white w-full rounded-[1rem] h-[40rem] z-10 p-[2rem] md:py-[6rem]">
            <div className="bg-card-our-solutions w-full h-full absolute top-0 left-0"></div>
            <div className="lg:skew-x-[0deg]  h-full">
              <h1 className="headerCard">Our Social</h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, architecto? Dignissimos quasi autem amet ea fuga
              veritatis culpa itaque est sapiente! Est minus culpa quam,
              quibusdam facilis nihil eveniet libero!
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="">
      <OpenAnimation />
      <div className="lg:hidden"><Header /></div>

      <div className="w-full flex justify-center h-full bg-gradient-to-bl  from-[#0f0404] via-[#6b6b6b] to-[#03030a] lg:h-[94.2svh] py-[2rem] md:py-[6rem]  relative overflow-x-clip">
        <div className="flex w-full h-full flex-col lg:flex-row container mt-[5rem] md:mt-0  justify-between md:scale-90">
          <div className="bg-slide-2 w-full absolute h-[85vh] z-0 top-0 left-0 !opacity-40 !brightness-50"></div>
          <div className="w-fit container relative ml-0  lg:left-[-5rem] left-0  border-[#848484] flex justify-center items-center">
            <div className="relative scale-90">
              <div className="absolute w-[130%] mt-[-4rem] ml-[-4rem] z-10">
                {" "}
                <Image src={BarbatosBackground} width={980}></Image>
              </div>
              <div className="shadow-2xl">
                {" "}
                <Image
                  className="opacity-90   rounded-md"
                  src={Barbatos}
                  width={500}
                  height={752}
                ></Image>
              </div>
            </div>
            <div onClick={() => { DataHideShow(1) }} className="absolute btn-slide-2 px-[2rem] py-6 rounded-md skew-x-[-8deg] mt-[32rem] font-bold text-2xl right-[9rem] md:right-[-6rem] min-w-[14rem] hover:translate-x-[3rem] duration-500 hover:text-white hover:bg-gray-600/60  cursor-pointer">
              About Us
            </div>
            <div onClick={() => { DataHideShow(2) }} className="absolute btn-slide-2 px-[2rem] py-6 rounded-md skew-x-[-8deg] mt-[20rem] font-bold text-2xl right-[9rem] md:right-[-6rem] min-w-[14rem] hover:translate-x-[3rem] duration-500 hover:text-white hover:bg-gray-600/60  cursor-pointer">
              Our Project
            </div>
            <div onClick={() => { DataHideShow(3) }} className="absolute  btn-slide-2  px-[2rem] py-6 rounded-md skew-x-[-8deg] mt-[8rem] font-bold text-2xl right-[9rem] md:right-[-6rem] min-w-[14rem] hover:translate-x-[3rem] duration-500 hover:text-white hover:bg-gray-600/60  cursor-pointer">
              {" "}
              Our Customer
            </div>
            {/* <div onClick={()=>{DataHideShow(4)}}  className="absolute bg-[#666666fd] px-[2rem] py-6 rounded-md skew-x-[-8deg] mt-[0rem] font-bold text-2xl right-[-6rem] min-w-[14rem] hover:translate-x-[3rem] duration-500 hover:text-orange-400 hover:bg-[#fff] cursor-pointer">
              Our Social
            </div> */}
          </div>
      
          {handleRenderSlidekanan()}
        </div>
      </div>
    </div>
  );
};
