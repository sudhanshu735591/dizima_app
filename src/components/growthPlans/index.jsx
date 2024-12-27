import { useEffect, useRef } from "react";
import Card from "../cardComponent";
function GrowthPlans() {
  const carouselRef = useRef(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollStep = () => {
      if (carousel) {
        carousel.scrollLeft += 20;
        scrollAmount += 20;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount = 0;
          carousel.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scrollStep, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white bg-gradient-to-r from-slate-50 to-indigo-600 hover:from-pink-500 hover:to-orange-500 border p-6 md:p-10">
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="text-3xl md:text-4xl uppercase text-center ">Clients Across Industries</p>
        <h1 className="text-4xl md:text-5xl font-bold text-violet-900 text-center ">
          Full-Service Web Design Agency
        </h1>
        <p className="text-xl md:text-2xl text-center">From startups to Fortune 500 companies</p>
        <p className="text-3xl md:text-4xl text-center">
          We create custom solutions that grow brands online
        </p>
      </div>
      <div
        ref={carouselRef}
        className="flex gap-6 md:gap-10 mt-10 justify-center overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default GrowthPlans;