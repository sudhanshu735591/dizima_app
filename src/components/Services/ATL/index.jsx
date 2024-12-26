import Carousel from "../Caraousel";
function ATL() {
  const slides = [
    { image: "./Television Advertising.png", alt: "Slide 1" },
    { image: "./Radio Advertising.gif", alt: "Slide 2" },
    { image: "https://www.washingtonpost.com/news/theworldpost/wp-content/uploads/sites/67/2018/03/newspapers2.gif", alt: "Slide 3" },
    { image: "https://media0.giphy.com/media/Ln3KGU57JGmPKJwhMV/200.gif?cid=6c09b952ghtg8me0g3mo976ahd72f7va5rxy4xafih0u31m0&ep=v1_gifs_search&rid=200.gif&ct=g", alt: "Slide 4" },
  ];
  return (
    <div className="relative min-h-screen">
      <div className="absolute h-full w-full z-10 top-0 left-0"></div>
      <div className="relative z-10 p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-black underline text-violet-800">
          ATL (Above the line) Activities
        </h1>
        <div className="text-lg md:text-xl flex flex-col gap-6 text-start text-black ">
          <h1 className="mt-6 md:mt-10 text-xl md:text-3xl lg:text-4xl md:pl-20 ">
            Our ATL Services Includes:
          </h1>
          <div className="flex lg:flex-row lg:justify-between gap-8 text-3xl md:pl-20 md:pr-20 flex-wrap">
            <Carousel slides={slides}/>
            <div className=" p-4">
              <video
                className=""
                autoPlay
                loop
                muted
                playsInline
                src="https://cdnl.iconscout.com/lottie/premium/thumb/cat-using-laptop-animation-download-in-lottie-json-gif-static-svg-file-formats--pretty-logo-writing-on-pet-cute-activity-pack-animal-animations-6319295.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ATL;
