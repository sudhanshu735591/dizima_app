function ImpactCard() {
  return (
    <div className="p-20 pt-0 bg-gradient-to-r from-violet-500 to-white" >
      <div className="flex justify-between flex-wrap md:flex-nowrap">
        <div className=" w-[70%] text-start">
            <h1 className="text-6xl text-black font-600 mt-20">We help organizations transform <span className="font-times">their impact.</span></h1>
            <p className="text-2xl mt-10 text-black">We are a team of creative minds and strategic thinkers, dedicated to helping businesses reach their full potential. Our approach is simple: understand your business, identify your unique selling proposition, and develop a marketing strategy that will help you stand out in a crowded market.</p>

        </div>
        <div className="w-[500px] h-[300px] mt-20 border border-4 border-black text-black flex items-center justify-center text-4xl">500x300</div>
      </div>
      <div className="mt-10 rounded-lg border-10 border-black">
        <img className="rounded-xl" src="https://cdn.prod.website-files.com/642310daa3b5216f73a47172/642310daa3b521e92fa471a0_about-goodbrand.jpg" alt="" />
      </div>
    </div>
  );
}
export default ImpactCard;
