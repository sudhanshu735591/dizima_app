import "./index.css";
function Creativity() {
  const text = "Why we are ? 💫";
  return (
    <div className="m-auto text-black p-10 sm:p-16 lg:p-20">
      <h1 className="overflow-hidden text-4xl sm:text-5xl lg:text-6xl font-bold text-start font-montserrat text-violet-900">
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

      <div className="mt-5 sm:mt-8 lg:mt-10 text-lg sm:text-2xl lg:text-4xl text-start">
        We help businesses grow through the magic of creative and the science of
        digital marketing. Here are some of the learnings and research we've
        developed over the years.
      </div>

      <div className="flex gap-6 sm:gap-8 lg:gap-10 justify-between flex-wrap">
        {["Emerging channel report", "Tactic playbook", "Ultimate guide"].map(
          (title, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] lg:w-[400px] text-center p-5 gap-5 mt-10 flex flex-col"
            >
              <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
              <img
                src={`https://cdn.prod.website-files.com/607d49b61828080acc1b8fe0/60940a0f8fa3de10051b17dc_cover_test_calc.svg`}
                alt={`${title} image`}
                className="w-full"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Creativity;
