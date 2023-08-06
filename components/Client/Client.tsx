// import styles from "../styles/Home.module.css";
import U from "../../public/assets/img/U.png";
import Ub from "../../public/assets/img/Ub.png";
import Ue from "../../public/assets/img/Ue.png";
import Uk from "../../public/assets/img/Uk.png";
import Uo from "../../public/assets/img/Uo.png";
import Up from "../../public/assets/img/Up.png";
import Ut from "../../public/assets/img/Ut.png";
// user



import Image from 'next/image';
import Carousel from 'react-multi-carousel';
// import Agile from "../public/assets/img/agile.jpg";
export const Client = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <div>
         <div className="min-h-[25rem] relative   text-white pt-[2rem] px-[1.45rem] flex flex-col">
        <h1 className="text-3xl mt-[2rem]">{" "}</h1>
        <Carousel
          className=" h-[15rem] w-[100%] mt-3 text-black"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <div className="h-[13rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
            <Image alt="" height={80} width={300} src={Ut} />
          </div>
          <div className="h-[13rem]  border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={180}
              width={300}
              src={U}
            />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={80}
              width={300}
              src={Up}
            />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={150}
              width={450}
              src={Ue}
            />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image
              alt=""
              className="rounded-lg"
              height={130}
              width={150}
              src={Ub}
            />
          </div>

          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image alt="" height={130} width={450} src={Uo} />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5]  ">
            <Image
              alt=""
              className="rounded-lg"
              height={130}
              width={450}
              src={Uk}
            />
          </div>
        </Carousel>
      </div>

     
    </div>
  )
}
