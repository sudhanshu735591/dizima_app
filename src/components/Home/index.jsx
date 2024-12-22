function Home() {
    return (
      <div
        className="relative flex justify-center items-center bg-purple-200 overflow-hidden border"
      >
        <div className="relative z-10 flex justify-center rounded">
          <video
            className="w-full h-[400px]"
            autoPlay
            loop
            muted
          >
            <source src="./homePage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }
  
  export default Home;
  