import Card from "../card";
import { data } from "../data";
import Marquee from "react-fast-marquee";
function Creativity() {
  return (
    <div className="relative text-black min-h-screen ">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <img
          className="w-full h-full object-cover"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgH..."
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-center px-4 text-violet-900">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-start">
          Discover our extraordinary lineup of {" "}
          <span className="font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            world-class talent.
          </span>
        </div>
        <Marquee pauseOnHover={true} className="overflow-hidden mt-10">
          <div className="flex gap-10">
            {data.map((val, index) => (
              <div
                key={index}
                className="flex border border-blue-300 shadow-xl rounded-xl w-[300px] md:w-[400px] p-5 flex-shrink-0"
              >
                <Card designation={val?.designation} text={val?.text} />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          pauseOnHover={true}
          direction="right"
          className="overflow-hidden mt-10"
        >
          <div className="flex gap-10">
            {data.map((val, index) => (
              <div
                key={index}
                className="flex border border-blue-300 shadow-xl rounded-xl w-[300px] md:w-[400px] p-5 flex-shrink-0"
              >
                <Card designation={val?.designation} text={val?.text} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
export default Creativity;