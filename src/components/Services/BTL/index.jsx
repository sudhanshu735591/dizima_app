import Carousel from "../Caraousel";
function BTL() {
  const slides = [
    { image: "./Event Marketing.gif", alt: "Slide 1" },
    { image: "./Direct Mail.png", alt: "Slide 2" },
    { image: "./Store Promotion.png", alt: "Slide 3" },
    { image: "./giphy.gif", alt: "Slide 4" },
  ];
  return (
    <div className="relative min-h-screen">
      <div className="absolute h-full w-full z-10 top-0 left-0"></div>
      <div className="relative z-10 p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl lg:text-4xl text-black underline text-violet-900">
          BTL (Below the line) Activities
        </h1>
        <div className="text-lg md:text-xl flex flex-col gap-6 text-start text-black ">
          <h1 className="mt-6 md:mt-10 text-xl md:text-3xl lg:text-4xl md:pl-20">
            Our BTL Services are:
          </h1>
          <h1 className="md:pl-20 text-2xl">Below the Line” marketing, which is a more targeted and direct approach to marketing. BTL marketing activities include promotional events, direct mail campaigns, and targeted advertising.</h1>
          <div className="flex  flex-row-reverse flex-wrap justify-center md:flex-nowrap">
            <Carousel slides={slides}/>
            <div className="w-1/2 p-4">
             <img className="h-[400px]" src="https://i.pinimg.com/originals/20/a4/47/20a4475d0c43df388d54345bc69a2ab8.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BTL;