import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import wolf from "../public/assets/img/wolf3.png";
import Ut from "../public/assets/img/Ut.png";
import Uo from "../public/assets/img/Uo.png";
import Ue from "../public/assets/img/Ue.png";
import U from "../public/assets/img/U.png";
import Up from "../public/assets/img/Up.png";
import Uk from "../public/assets/img/Uk.png";
import Ub from "../public/assets/img/Ub.png";
import Claw from "../public/assets/img/claw.png";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/layout/Layout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer2 } from "../components/Footer2/Footer";
import dynamic from "next/dynamic";
import Link from "next/link";

const Home: NextPage = () => {
  const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });

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
    <>
      <Layout pageTitle="Homepage">
        <div className="flex flex-col w-full h-full min-h-[100vh] relative  justify-center  items-center  overflow-x-clip">
          <div className="mt-[1rem] flex justify-center z-30 content-center self-center items-center dropLogo">
            <Image height={300} width={300} src={wolf} />
            <p className="text-2xl  text-stone-200 capitalize neonText ">
              Black wolf Tech Indonesia{" "}
            </p>
          </div>
       
        </div>
      </Layout>

      <div className="min-h-[45rem] relative     overflow-clip  bg-gradient-to-b from-[#1b1b1b11] via-[#424141a9] to-[#646464] text-white pt-[2rem] px-[1.45rem] flex flex-row justify-around space-x-4 pb-8">
     
        <div className="absolute top-0 mt-[-20rem] mr-[-40rem]  overflow-clip  dropClaw right-0 ">
          
          <Image height={1000} width={1400} src={Claw} />
        </div>
          {/* Dexstop Header */}
      <MediaQuery minWidth={768}>
      <div className="w-full bg-[#242424] rounded-md p-3 text-lg w-8/12 tracking-widest">
        <h1 className="text-3xl">Our Company</h1>
        <hr className="my-5" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vitae nobis delectus reiciendis officia consequatur et blanditiis? Quaerat, sint ducimus iure officia autem, minima laboriosam maxime totam incidunt saepe adipisci tempora reiciendis exercitationem at esse ipsa fugit deserunt! Fugit recusandae distinctio maiores aut vero a dolore! Amet, voluptatibus omnis quasi ullam perspiciatis nobis eaque inventore nesciunt hic ab aut. Unde laudantium eius temporibus eum, natus deserunt rem sint tempore, culpa in enim a voluptatem nulla. Culpa doloremque totam sunt unde natus ipsum quae, nisi iusto aliquam atque fugiat repellendus facere dolores maiores non quam quis error provident autem perferendis doloribus praesentium nesciunt laudantium velit. Veniam fugiat optio sunt! Nostrum impedit, neque beatae tempora provident obcaecati, reprehenderit unde quia architecto sequi perferendis distinctio! Minus quia animi sunt voluptatum necessitatibus, iure fugiat! Exercitationem debitis suscipit libero, nemo voluptatem animi aspernatur necessitatibus reiciendis officia, odit dolorem. Ut natus assumenda, vero modi officia quasi et accusantium architecto error repudiandae voluptas, tempore quod reprehenderit culpa nemo molestias iste quisquam veritatis qui sunt repellendus dolor totam. Aspernatur possimus temporibus nisi hic quaerat sapiente ab similique impedit ratione inventore modi, sed facilis nihil officiis voluptate. Nulla eveniet quae perferendis quod fugiat quisquam laboriosam! Commodi quidem voluptatem, deleniti optio repellat dignissimos, debitis pariatur quaerat aperiam consequatur adipisci. Qui suscipit velit aut, voluptatem molestias officiis repellat? Excepturi autem est voluptatem, ab nostrum placeat debitis asperiores, aut obcaecati voluptas voluptatibus nesciunt! Neque doloribus provident corporis in consectetur quos fugit quasi necessitatibus dicta aut sed sequi quidem quo, vero, laborum hic accusamus alias repellendus nemo. Quidem voluptates consectetur quia magni deleniti praesentium dolorum, facilis vitae recusandae magnam cum numquam eum similique autem fugit suscipit harum nemo atque quae! Atque provident quia, quae quos amet repudiandae tempore facilis vel eius, fuga harum maxime, animi eveniet! Numquam adipisci tempora a laborum delectus blanditiis!</p>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
      <div className="w-full bg-[#242424] rounded-md p-3 text-lg w-full tracking-widest">
        <h1 className="text-3xl">Our Company</h1>
        <hr className="my-5" />
        <p  className="	">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vitae nobis delectus reiciendis officia consequatur et blanditiis? Quaerat, sint ducimus iure officia autem, minima laboriosam maxime totam incidunt saepe adipisci tempora reiciendis exercitationem at esse ipsa fugit deserunt! Fugit recusandae distinctio maiores aut vero a dolore! Amet, voluptatibus omnis quasi ullam perspiciatis nobis eaque inventore nesciunt hic ab aut. Unde laudantium eius temporibus eum, natus deserunt rem sint tempore, culpa in enim a voluptatem nulla. Culpa doloremque totam sunt unde natus ipsum quae, nisi iusto aliquam atque fugiat repellendus facere dolores maiores non quam quis error provident autem perferendis doloribus praesentium nesciunt laudantium velit. Veniam fugiat optio sunt! Nostrum impedit, neque beatae tempora provident obcaecati, reprehenderit unde quia architecto sequi perferendis distinctio! Minus quia animi sunt voluptatum necessitatibus, iure fugiat! Exercitationem debitis suscipit libero, nemo voluptatem animi aspernatur necessitatibus reiciendis officia, odit dolorem. Ut natus assumenda, vero modi officia quasi et accusantium architecto error repudiandae voluptas, tempore quod reprehenderit culpa nemo molestias iste quisquam veritatis qui sunt repellendus dolor totam. Aspernatur possimus temporibus nisi hic quaerat sapiente ab similique impedit ratione inventore modi, sed facilis nihil officiis voluptate. Nulla eveniet quae perferendis quod fugiat quisquam laboriosam! Commodi quidem voluptatem, deleniti optio repellat dignissimos, debitis pariatur quaerat aperiam consequatur adipisci. Qui suscipit velit aut, voluptatem molestias officiis repellat? Excepturi autem est voluptatem, ab nostrum placeat debitis asperiores, aut obcaecati voluptas voluptatibus nesciunt! Neque doloribus provident corporis in consectetur quos fugit quasi necessitatibus dicta aut sed sequi quidem quo, vero, laborum hic accusamus alias repellendus nemo. Quidem voluptates consectetur quia magni deleniti praesentium dolorum, facilis vitae recusandae magnam cum numquam eum similique autem fugit suscipit harum nemo atque quae! Atque provident quia, quae quos amet repudiandae tempore facilis vel eius, fuga harum maxime, animi eveniet! Numquam adipisci tempora a laborum delectus blanditiis!</p>
        </div>
      </MediaQuery>
      
      </div>

      <div className="min-h-[25rem] relative  bg-gradient-to-t from-[#1F1F1F] via-[#646464] to-[#424141a9] text-white pt-[2rem] px-[1.45rem] flex flex-col">
        <h1 className="text-3xl"> Our Client</h1>
        <Carousel
          className=" h-[15rem] w-[100%] mt-3 text-black"
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <div className="h-[13rem] border-[8px] border-[#646464] text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg  bg-[#f5f5f5]">
            <Image height={80} width={300} src={Ut} />
          </div>
          <div className="h-[13rem]  border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image className="rounded-lg" height={180} width={300} src={U} />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image className="rounded-lg" height={80} width={300} src={Up} />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image className="rounded-lg" height={150} width={450} src={Ue} />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image className="rounded-lg" height={130} width={150} src={Ub} />
          </div>

          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5] ">
            <Image height={130} width={450} src={Uo} />
          </div>
          <div className="h-[13rem] border-[8px] border-[#646464]  text-stone-200 p-2 justify-center items-center text-center content-center m-2 rounded-md flex flex-col  border-y-0 border-x-0 shadow-lg bg-[#f5f5f5]  ">
            <Image className="rounded-lg" height={130} width={450} src={Uk} />
          </div>
        </Carousel>
      </div>
      <Footer2 />
    </>
  );
};

export default Home;
