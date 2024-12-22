import "./index.css";
function FunnelCard() {
  return (
    <div className="flex flex-col border-2 text-black md:flex-row p-5 md:p-10 gap-5 bg-gradient-to-r from-yellow-200 via-purple-300 to-purple-500 overflow-hidden">
      <div className="w-full md:w-1/2">
        <p className="mt-10 text-3xl md:text-6xl font-bold text-start text-purple-900">
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
    </div>
  );
}
export default FunnelCard;