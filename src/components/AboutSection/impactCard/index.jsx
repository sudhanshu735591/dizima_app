function ImpactCard() {
  return (
    <div className="p-8 md:p-20 bg-gradient-to-r from-violet-500 to-white">
      <div className="flex flex-wrap md:flex-nowrap justify-between">
        <div className="w-full md:w-[70%] text-start">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-semibold leading-tight text-violet-900">
            We help organizations transform <span className="font-times">their impact.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-6 md:mt-10 text-black">
            We are a team of creative minds and strategic thinkers, dedicated to helping businesses reach their full potential. Our approach is simple: understand your business, identify your unique selling proposition, and develop a marketing strategy that will help you stand out in a crowded market.
          </p>
        </div>
        <div className="w-full md:w-[500px] h-[200px] md:h-[300px] border-2 border-black text-black flex items-center justify-center text-2xl md:text-4xl">
          500x300
        </div>
      </div>
      <div className="mt-10 rounded-lg">
        <img
          className="rounded-xl w-full h-auto max-h-[500px] object-cover"
          src="https://cdn.prod.website-files.com/642310daa3b5216f73a47172/642310daa3b521e92fa471a0_about-goodbrand.jpg"
          alt="Team collaboration"
        />
      </div>
    </div>
  );
}
export default ImpactCard;