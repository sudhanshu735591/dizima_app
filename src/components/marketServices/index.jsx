import { useState } from "react";
import "./index.css";
import Example from "./Card";

function MarketService() {
  const [data, setData] = useState("");

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex flex-col gap-10 py-10">
        {/* Heading Section */}
        <div className="border-l-4 border-white w-[90%] m-auto p-6 md:p-10 flex flex-col gap-6 md:gap-10">
          <h1 className="text-3xl md:text-6xl font-bold text-start">Why Us?</h1>
          <p className="text-lg md:text-2xl text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            itaque vero iusto facere quos esse. Laborum labore ipsa sequi
            adipisci aspernatur quo, veniam debitis minus mollitia optio enim ut
            aliquam.
          </p>
        </div>

        {/* Example Cards Section */}
        <div className="flex gap-6 md:gap-10 p-6 md:p-10 flex-wrap md:flex-nowrap justify-center">
          <Example />
          <Example />
          <Example />
        </div>
      </div>
    </>
  );
}

export default MarketService;
