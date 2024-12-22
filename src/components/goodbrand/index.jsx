import "./index.css";
function GoodBrand() {
  return (
    <div className="mt-10 md:mt-20">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left text-4xl md:text-8xl gap-8 md:gap-0">
        <p className="w-[90%] md:w-[70%] text-green-400	">
          More customers, more revenue, more quickly.
        </p>
        <img
          className="bg-white rounded-full p-3 animate-spin-custom h-24 md:h-40"
          src="https://uploads-ssl.webflow.com/642310daa3b5216f73a47172/642310daa3b52189b7a47194_label-round.svg"
          alt=""
        />
      </div>

      {/* Second Section */}
      <div className="mt-10 md:mt-20 w-[90%] md:w-[50%] m-auto text-lg md:text-3xl text-center md:text-left pb-10">
        <p>
          Whether you're just building out your marketing or looking to explore
          new strategies, we have the toolkits and experience to help you grow
          your business.
        </p>
      </div>

      {/* Divider */}
      <div className="w-[90%] md:w-[80%] mt-10 md:mt-20 border-[1px] bg-white m-auto"></div>
    </div>
  );
}
export default GoodBrand;