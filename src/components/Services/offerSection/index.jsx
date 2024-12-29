function OfferSection() {
  return (
    <div className="relative min-h-screen p-10 md:p-20 text-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1951817667/video/water-bubble-element-animation-movement-of-air-bubbles-on-white-background-animation-seamless.mp4?s=mp4-640x640-is&k=20&c=rKiCGYMAnYW_qcQYAsZJ1XLTTH_94CKbKZvIg6W6yfo="
        ></video>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-80">
        <div>
          <div className="md:sticky md:top-20">
            <h1 className="text-5xl md:text-6xl text-violet-800">
              Here is what we{" "}
              <span className="font-dancing text-7xl md:text-8xl text-violet-900 font-bold">
                can offer
              </span>.
            </h1>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-3xl md:text-5xl font-playwright">
              Marketing Strategy
            </h2>
            <p className="text-lg md:text-2xl">
            Whether you're expanding your reach through ATL (Above The Line) strategies for broad audience engagement or leveraging BTL (Below The Line) tactics for more targeted, personalized interactions, we provide the tools, insights, and expertise to help your business grow across both channels.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-3xl md:text-5xl font-playwright">
            Brand Management
            </h2>
            <p className="text-lg md:text-2xl">
            From shaping your brand's identity and ensuring consistent messaging to managing public relations and building strong media relationships, we offer comprehensive strategies to elevate your brand, enhance its reputation, and drive long-term success.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-3xl md:text-5xl font-playwright">
            Design and Production 
            </h2>
            <p className="text-lg md:text-2xl">
            From creating visually stunning UI/UX designs to producing high-impact TV and commercial ads, we offer end-to-end design and production services. Our team crafts compelling digital experiences and impactful multimedia campaigns that resonate with your audience, driving engagement and brand recognition.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-3xl md:text-5xl font-playwright">
              Digital Management
            </h2>
            <p className="text-lg md:text-2xl">
            With expert Digital Management services, we help elevate your online presence through effective SEO strategies that boost search engine rankings and SMO tactics that enhance social media visibility. Our tailored approach ensures your brand connects with the right audience, drives traffic, and fosters engagement across all digital platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OfferSection;