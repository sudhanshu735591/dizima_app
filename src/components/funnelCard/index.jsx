import { useState } from "react";
import "./index.css";
function FunnelCard() {
  // const [flag, setFlag] = useState(false);
  // setTimeout(() => {
  //   setFlag(true);
  // }, 6000);
  return (
    <>
      {/* {!flag && (
        <div className="mt-10 text-black m-auto p-10">
          <h1 className="text-blue-800 text-6xl animate-bounce ">Welcome to DIZIMA!</h1>
        </div>
      )} */}
      <div className="relative md:min-h-screen ">
        <div className="relative">
          {(
            <div class="overflow-hidden h-40 w-120">
              <div class="flex flex-col animate-vertical-scroll space-y-10 text-4xl md:text-6xl text-black leading-relaxed	">
                <div>Web. Mobile. Software.</div>
                <div className="">Technology Made Simple.</div>
                <div>Fast And Reliable.</div>
              </div>
            </div>
          )}
        </div>

        <div className="flex text-black flex-wrap lg:flex-nowrap w-[90%] m-auto border-black md:flex-row p-5 md:p-10 gap-5 bg-white overflow-hidden">
          <div className="w-full m-auto md:w-1/2">
            <p className=" text-2xl md:text-6xl  text-start  text-purple-900 rounded-xl ">
              <span className="aqua">DIGITAL MANAGEMENT </span>
              <span className="animate-text text-blue-700"> EXPERT</span>
            </p>
            <div>
              <p className="text-start text-base md:text-2xl mt-5 text-gray-800">
                As a{" "}
                <span className="text-indigo-600">
                  Digital Management Expert
                </span>
                , We help businesses like yours thrive in the digital world. From
                increasing your online visibility with tailored SEO strategies
                to driving traffic through cutting-edge paid campaigns, We create
                solutions that{" "}
                <span className="text-green-600">transform</span>{" "}
                clicks into customers and grow your bottom line.
                <span className="text-red-500">
                  Ready to scale your business?
                </span>{" "}
                Let's work together to make it happen!
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className=" w-full max-w-[500px] h-[300px] md:h-[400px] text-center p-5 flex items-center justify-center text-2xl">
              Create the 3d laptop in which inside the screen the "DIGITAL
              MARKET" text will be shown in animated format.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FunnelCard;