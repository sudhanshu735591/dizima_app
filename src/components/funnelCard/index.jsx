import "./index.css";
function FunnelCard() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="relative">
          <div class="overflow-hidden h-40 w-120">
            <div class="flex flex-col animate-vertical-scroll space-y-4 text-8xl text-yellow-100 leading-relaxed	">
              <div>Web. Mobile. Software.</div>
              <div>Technology Made Simple.</div>
              <div>Fast And Reliable.</div>
            </div>
          </div>
          <div className="text-black text-4xl ">
            <h1 className="mt-10 font-bold">Always new and creative</h1>
            <h1 className="text-6xl mt-10 aqua">AQUARIOUS</h1>
          </div>
        </div>
      </div>
      {/* <div className="flex border-2 text-black md:flex-row p-5 md:p-10 gap-5 bg-white overflow-hidden">
      <div className="w-full md:w-1/2">
        <p className="mt-10 text-3xl md:text-6xl font-bold text-start p-5 text-purple-900 rounded-xl ">
          DIGITAL MARKETING <span className="animate-text text-blue-700">EXPERT</span>
        </p>
        <div>
          <p className="text-start mt-4 text-base md:text-2xl pl-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            tenetur molestiae mollitia. Tempora, tenetur molestiae mollitia
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            tenetur molestiae mollitia Tempora, tenetur molestiae mollitia
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="border w-full max-w-[500px] h-[300px] md:h-[400px] text-center p-5 flex items-center justify-center text-2xl">
          Create the 3d laptop in which inside the screen the "DIGITAL MARKET" text will be shown in animated format.
        </div>
      </div>
    </div> */}
    </>
  );
}
export default FunnelCard;