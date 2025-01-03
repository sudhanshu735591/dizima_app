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
            src="https://growthbenchmarks.com/images/Logo.png"
            alt="Growth Benchmarks Logo"
          />

          <p className="mt-8  text-base sm:text-lg md:text-4xl  leading-relaxed text-start">
            At Dizima, we have a burning passion for helping businesses not just
            survive, but thrive in the digital age. Our cutting-edge digital
            marketing strategies are engineered to elevate your online presence,
            captivate your target audience, and drive unparalleled results.
            Whether you’re a budding startup or a well-established enterprise,
            we possess the expertise and creativity needed to propel your brand
            to new heights.
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
      <NativeAdd />
      <ImpactCard />
      <Creativity />
      <Footer />
    </div>
  );
}
export default GrowthBenchMarks;
