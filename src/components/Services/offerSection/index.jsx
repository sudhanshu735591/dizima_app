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
            <h1 className="text-5xl md:text-6xl">
              Here is what we{" "}
              <span className="font-dancing text-7xl md:text-8xl">
                can offer
              </span>.
            </h1>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-4xl md:text-6xl font-playwright">
              Marketing Strategy
            </h2>
            <p className="text-lg md:text-2xl">
              Whether you're just building out your marketing or looking to
              explore new strategies, we have the toolkits and experience to
              help you grow your business.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-4xl md:text-6xl font-playwright">
              Branding & Design
            </h2>
            <p className="text-lg md:text-2xl">
              A clear and engaging brand design can set you apart. We craft
              brand identities that resonate with your audience.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-4xl md:text-6xl font-playwright">
              Digital Marketing
            </h2>
            <p className="text-lg md:text-2xl">
              Reach your audience effectively with our tailored digital
              marketing strategies that deliver measurable results.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-4xl md:text-6xl font-playwright">
              Content Creation
            </h2>
            <p className="text-lg md:text-2xl">
              High-quality content is key. Let us help you tell your story in a
              way that connects with your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OfferSection;