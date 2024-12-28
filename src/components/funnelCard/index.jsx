import "./index.css";
function FunnelCard() {
  return (
    <>
      <div className="relative md:min-h-screen ">
        <div className="relative">
          <div class="overflow-hidden h-40 w-120">
            <div class="flex flex-col animate-vertical-scroll space-y-10 text-4xl md:text-6xl text-black leading-relaxed	">
              <div>Web. Mobile. Software.</div>
              <div className="">Technology Made Simple.</div>
              <div>Fast And Reliable.</div>
            </div>
          </div>
        
        </div>
        <div className="flex text-black flex-wrap lg:flex-nowrap w-[90%] m-auto border-black md:flex-row p-5 md:p-10 gap-5 bg-white overflow-hidden">
          <div className="w-full m-auto md:w-1/2">
            <p className=" text-2xl md:text-6xl  text-start  text-purple-900 rounded-xl ">
              <span className="aqua">DIGITAL MARKETING{" "}</span>
              <span className="animate-text text-blue-700"> EXPERT</span>
            </p>
            <div>
              <p className="text-start text-base md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, tenetur molestiae mollitia. Tempora, tenetur molestiae
                mollitia Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempora, tenetur molestiae mollitia Tempora, tenetur
                molestiae mollitia
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className=" w-full max-w-[500px] h-[300px] md:h-[400px] text-center p-5 flex items-center justify-center text-2xl">
              Create the 3d laptop in which inside the screen the "DIGITAL
              MARKET" text will be shown in animated format.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FunnelCard;
