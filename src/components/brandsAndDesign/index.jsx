import { useNavigate } from "react-router-dom";
import "./index.css"
function Brands() {
  const navigate = useNavigate();
  const text = "Covering Your Growth Journey 💫";
  return (
    <div className="text-black flex flex-col border border-2 gap-10 ">
      <div className="flex flex-col gap-5 w-full md:w-[75vw] mx-auto text-start p-5">
        <h1 className="overflow-hidden text-xl lg:text-6xl font-bold text-start font-montserrat text-violet-900">
          {text.match(/./gu)?.map((char, index) => (
            <span
              className="animate-text-reveal inline-block"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          )) || null}
        </h1>
        <div className="w-full ">
          <p className="text-lg md:text-2xl">
            Whether you're just building out your marketing or looking to
            explore new strategies, we have the toolkits and experience to help
            you grow your business.
          </p>
        </div>
      </div>
      <div className="flex relative lg:pl-40 w-auto mx-0 md:flex-row flex-wrap gap-5 md:gap-40 justify-start">
        <div className="text-bold top-10 text-4xl md:text-6xl text-start px-5 md:px-10 text-purple-800">
          Branding & Design
        </div>
        <div className="flex flex-col text-start gap-5 md:gap-8 px-5 md:px-10">
          <ul className="space-y-4 md:space-y-6">
            <li className="text-lg md:text-2xl">Branding</li>
            <li className="text-lg md:text-2xl">Creative</li>
            <li className="text-lg md:text-2xl">UI/UX Design</li>
            <li className="text-lg md:text-2xl">Video</li>
            <li className="text-lg md:text-2xl">Web Design</li>
            <li className="text-lg md:text-2xl">Photography</li>
          </ul>
        </div>
      </div>
      <div className="flex relative lg:pl-40 w-auto mx-0 md:flex-row flex-wrap gap-5 md:gap-40 justify-start">
        <div className="text-bold top-10 text-4xl md:text-6xl text-start px-5 md:px-10 text-purple-800">
          Strategy & Growth
        </div>
        <div className="flex flex-col text-start gap-5 md:gap-8 px-5 md:px-10">
          <ul className="space-y-4 md:space-y-6">
            <li className="text-lg md:text-2xl">Strategy Development</li>
            <li className="text-lg md:text-2xl">Strategy Implementation</li>
            <li className="text-lg md:text-2xl">Campaign Management</li>
            <li className="text-lg md:text-2xl">Account Based Marketing</li>
            <li className="text-lg md:text-2xl">Content Marketing</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:pl-40 w-auto mx-0 md:flex-row flex-wrap gap-10 md:gap-40 justify-start">
        <div className="top-10 text-4xl md:text-6xl text-start px-5 text-purple-800">
          Services
          <span className="text-2xl align-middle px-4">
            {" "}
            (ATL and BTL Activities){" "}
          </span>
        </div>
        <div className="flex flex-col text-start gap-5 md:gap-8 px-5 md:px-20 pb-20">
          <ul className="space-y-4 md:space-y-6">
            <li className="text-lg md:text-2xl">Television Advertising</li>
            <li className="text-lg md:text-2xl">Radio Advertising</li>
            <li className="text-lg md:text-2xl">Print Media Advertising</li>
            <li className="text-lg md:text-2xl">Event Marketing</li>
            <li className="text-lg md:text-2xl">Direct Mail Campaigns</li>
          </ul>
          <button
            onClick={() => navigate("/form")}
            className="bg-gradient-to-r from-yellow-200 via-purple-300 to-purple-500 to-purple-500 pt-2 pb-3 md:p-10 rounded-xl md:rounded-full bg-purple-400 text-2xl text-white"
          >
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
}
export default Brands;
