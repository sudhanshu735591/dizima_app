import Footer from "../../Footer";
import Header from "../../header";
import Card from "../card";
import Creativity from "../creativity";
import ImpactCard from "../impactCard";
function GrowthBenchMarks() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="relative bg-gradient-to-r from-white to-violet-500 text-black min-h-screen flex flex-col items-center justify-start">
       
        <div className="relative mt-10 z-10 px-4 sm:px-6  w-[80%]">
          <img
            className="mx-auto w-2/3 sm:w-1/2"
            src="https://growthbenchmarks.com/images/Logo.png"
            alt="Growth Benchmarks Logo"
          />

          <p className="mt-8  text-base sm:text-lg md:text-4xl  leading-relaxed text-start">
            We are a passionate team of innovators and strategists committed to empowering businesses to achieve remarkable growth. Our philosophy is straightforward: gain an in-depth understanding of your business, uncover what makes you unique, and craft a targeted marketing strategy that differentiates you in today’s competitive landscape.
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
      <ImpactCard/>
      <Creativity/>
      <Footer/> 
    </div>
  );
}
export default GrowthBenchMarks;