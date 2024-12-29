import "./index.css";
function Creativity() {
  const text = "Why we are ? 💫";
  const data = [
    {
      heading:"Emerging channel report",
      img:"https://i.gifer.com/origin/71/711557abfeed55bc0ebc5185168147c6.gif",
    },
    {
      heading:"Tactic playbook",
      img:"https://digitalscholar.in/wp-content/uploads/2022/06/Inbound-Marketing-Manager.gif",
    },
    {
      heading:"Ultimate guide",
      img:"https://cdn.dribbble.com/users/1519660/screenshots/9809330/media/6cac76b4cb5fdd9085989daecdfa1318.gif",
    },
  ]
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
        digital management. Here are some of the learnings and research we've
        developed over the years.
      </div>

      <div className="flex gap-6 sm:gap-8 lg:gap-10 justify-between flex-wrap">
        {
          data.map((val)=>{
            return(
              <div className="w-full sm:w-[300px] lg:w-[400px] text-start p-5 gap-5 mt-10 flex flex-col">
                <h1 className="text-xl sm:text-2xl font-bold">{val.heading}</h1>
                <img
                src={val.img}
                className="w-full rounded-2xl"
              />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default Creativity;
