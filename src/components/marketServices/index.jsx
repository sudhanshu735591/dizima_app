import { useState } from "react";
import "./index.css";
import Example from "./Card";
function MarketService() {
  const [data, setData] = useState("");
  // const buttons = [
  //   "SEO",
  //   "SEM/PPC",
  //   "BLOGGING",
  //   "Content Marketing",
  //   "Advertising",
  // ];

  // function handleHover(id) {
  //   setData(
  //     <div className="flex gap-4 flex-wrap p-5 animate-fadeIn">
  //       {buttons.map((btnText, index) => (
  //         <button
  //           key={index}
  //           className="border bg-blue-300 font-bold p-4 pl-7 pr-7 rounded-2xl  text-sm"
  //         >
  //           {btnText}
  //         </button>
  //       ))}
  //     </div>
  //   );
  // }
  return (
    <>
      {/* <div className="bg-white text-black p-8 md:p-20 border m-auto">
      <div className="w-full md:w-[85vw] m-auto md:text-6xl">
        <p className="text-start text-purple-900 rounded-xl bg-gradient-to-r from-yellow-200 via-purple-300 to-purple-500 p-10">
          Our marketing services are strategically designed to align with your
          sales Box, empowering you to drive sustainable and predictable growth.
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10 text-start mt-10 justify-center  w-full md:w-[90%] m-auto  text-base md:text-xl">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            id={id}
            className="flex flex-col gap-3 hover:text-blue-700"
            onMouseEnter={() => handleHover(id)}
            onMouseLeave={() => setData("400 X 600")}
          >
            <p className="font-bold text-lg md:text-xl">0{id}</p>
            <p className="font-bold text-lg md:text-xl">ATTRACT CUSTOMERS</p>
            <p className="text-sm md:text-base">
              Attract more visitors to your website and use proven strategies
              to convert visitors into qualified leads and delighted customers.
            </p>
          </div>
        ))}
      </div>
      <div className="relative z-10 flex justify-center md:h-[400px] md:w-[600px] border mt-20 flex justify-center m-auto items-center text-2xl ">
        {data}
      </div>
      </div> */}
      <div className="text-white bg-gradient-to-r from-indigo-500 flex flex-col gap-10 ">
        <div className="border-l-4 border-white w-[90%] m-auto p-10 flex flex-col gap-10 mt-20">
          <h1 className="text-6xl font-bold text-start">Why Us?</h1>
          <p className="text-2xl text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            itaque vero iusto facere quos esse. Laborum labore ipsa sequi
            adipisci aspernatur quo, veniam debitis minus mollitia optio enim ut
            aliquam.
          </p>
        </div>
        <div className="flex gap-10 p-10 md:flex-nowrap flex-wrap">
        <Example/>
        <Example/>
        <Example/>

        </div>
      </div>
    </>
  );
}
export default MarketService;