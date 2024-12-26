import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
const services = [
  {
    step: "63%",
    name: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "State-of-the-art diagnostics to accurately identify vehicle issues.",
  },
  {
    step: "63%",
    name: "Repairs",
    imageUrl: "https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.",
  },
  {
    step: "63%",
    name: "Maintenance",
    imageUrl: "https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
  },
];

const AmbitiousGrowth = () => {
  return (
    <section className="mx-auto bg-gradient-to-r from-violet-200 to-pink-200 pb-10 pt-10">
      <div className="mx-auto flex px-4 lg:max-w-7xl">
        <div className="flex justify-center object-center w-full flex-col gap-12 ">
          <h2 className="text-4xl font-semibold tracking-tight text-blue-900 underline sm:text-5xl lg:text-6xl">
          Achieving Growth Goals Together
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap gap-20 space-y-10  w-full md:space-y-0 ">
            {services.map((service) => (
              <div key={service.name} className="group h-96 w-full ">
                <div className="relative bg-gradient-to-r from-pink-200 via-purple-400 to-indigo-600 h-full w-full rounded-2xl text-black shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute text-yellow-100 font-bold text-4xl flex flex-col items-center justify-center inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {`${service.step} Growth Rate`}
                    <h1 className="text-2xl p-5 text-white font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nobis nulla velit sunt voluptas fuga culpa. Delectus rerum eveniet officia quos aut sunt aliquam, </h1>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                      <p className="text-lg text-pretty text-center mb-4">{service.description}</p>
                      <a href="tel:5555555555" className="inline-flex">
                        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                          <span>Schedule Service</span>
                          <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbitiousGrowth;
