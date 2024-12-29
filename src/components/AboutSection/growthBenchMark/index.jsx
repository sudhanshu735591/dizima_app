import Footer from "../../Footer";
import Header from "../../header";
import NativeAdd from "../../NativeAdd";
import Creativity from "../creativity";
import ImpactCard from "../impactCard";
function GrowthBenchMarks() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="relative  text-black min-h-screen flex flex-col items-center justify-start">
         <div className="relative mt-10 z-10 px-4 sm:px-6 w-[80%]">
          <img
            className="mx-auto"
            src="https://growthbenchmarks.com/images/Logo.png"
            alt="Growth Benchmarks Logo"
          />

          <p className="mt-8  text-base sm:text-lg md:text-4xl  leading-relaxed text-start">
          We are a dedicated group of creative thinkers and planners focused on helping businesses drive exceptional growth. Our approach is simple: deeply understand your business, identify your unique strengths, and develop a tailored marketing strategy that sets you apart in a competitive market.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center  md:mt-20 gap-8">
            <div className="text-center w-full md:w-1/3 p-4">
              <img
                className="h-24 md:h-32 mx-auto"
                src="https://cdn.prod.website-files.com/607d49b61828080acc1b8fe0/6094080d3055c375b255ab9f_icon_seasonality.svg"
                alt="Seasonality"
              />
              <p className="text-sm md:text-lg">Seasonality</p>
            </div>

            <div className="text-center w-full md:w-1/3 p-4">
              <img
                className="h-24 md:h-32 mx-auto"
                src="https://cdn.prod.website-files.com/607d49b61828080acc1b8fe0/6094080d9f6171a6b442a00e_icon_volatility.svg"
                alt="Platform Volatility"
              />
              <p className="text-sm md:text-lg">Platform Volatility</p>
            </div>
            <div className="text-center w-full md:w-1/3 p-4">
              <img
                className="h-24 md:h-32 mx-auto"
                src="https://cdn.prod.website-files.com/607d49b61828080acc1b8fe0/6094080d2476887124955462_icon_macroeconomics.svg"
                alt="Macroeconomics"
              />
              <p className="text-sm md:text-lg">Macroeconomics</p>
            </div>
          </div>
        </div>
      </div>
      <NativeAdd/>
      <ImpactCard/>
      <Creativity/>
      <Footer/> 
    </div>
  );
}
export default GrowthBenchMarks;