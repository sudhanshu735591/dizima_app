function NativeAdd() {
    return (
      <div className="text-white bg-[#002852] pb-10 p-20">
        <div>
          <h1 className="text-6xl sm:text-4xl md:text-5xl">
            Native Advertising <span className="text-[#00F0D6]">Works</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 w-full md:w-[80%] mx-auto pb-40">
          <div className="text-end flex flex-col gap-10 mt-10 md:mt-20 w-full md:w-1/2">
            <div className="text-center">
              <h1 className="text-4xl sm:text-3xl md:text-6xl mt-20">+50%</h1>
              <p className="mt-5 sm:text-lg">50% more views than traditional display ads</p>
            </div>
            <div>
              <h1 className="text-4xl sm:text-3xl md:text-6xl text-center mt-20">+10X</h1>
              <p className="mt-5 sm:text-lg text-center  m-auto ">
                10X higher engagement rate compared to traditional display ads
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl overflow-hidden w-full md:w-1/2">
            <video
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover rounded-2xl"
              src="https://discover.taboola.com/wp-content/uploads/2024/06/vdo-Homepage_Redesign-Stats-V05.mp4"
            ></video>
          </div>
          <div className="text-start mt-10 md:mt-20 flex flex-col gap-10 w-full md:w-1/2">
            <div className="">
              <h1 className="text-4xl sm:text-3xl md:text-6xl text-center mt-20">+18%</h1>
              <p className="mt-5 sm:text-lg ">
                18% higher purchase intent than traditional display ads
              </p>
            </div>
            <div>
              <h1 className="text-4xl sm:text-3xl md:text-6xl text-center mt-20">+80%</h1>
              <p className="mt-5 sm:text-lg">
                80% of people trust ads on news sites more than social
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default NativeAdd;