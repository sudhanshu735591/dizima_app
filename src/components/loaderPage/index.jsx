import React, { useEffect } from "react";
import "./index.css";
import LinearColor from "../Loader";
import { useNavigate } from "react-router-dom";
function LoaderPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("./body");
    }, 6000);
  });
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-yellow-200 via-purple-300 to-purple-500 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className={`absolute rounded-full animate-bubble ${
              index % 2 === 0
                ? "bg-white bg-opacity-30"
                : "bg-transparent border-2 border-white"
            }`}
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 text-center">
        <div className="rounded-full shadow-sm p-5">
          <video
            className="rounded-full w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="./dizimaLoader.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <LinearColor />
        <h1 className="mt-6 text-4xl font-bold text-blue-200">Loading...</h1>
        <p className="text-lg text-gray-200 mt-2 text-blue-100">
          Please wait while we prepare everything for you!
        </p>
      </div>
    </div>
  );
}
export default LoaderPage;