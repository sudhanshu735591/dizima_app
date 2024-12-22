import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`w-full sticky top-0 z-50 bg-gradient-to-r from-yellow-200 via-purple-300 to-purple-500 shadow-lg transition-all duration-1000 ease-in-out ${
        showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center md:p-5 font-semibold text-lg md:text-2xl">
        <img
          src="/dizimaLogo.jpeg"
          alt="Dizima Logo"
          className="w-10 h-10 rounded-full"
        />
        <ul className="text-purple-900 flex gap-6 md:gap-10 font-medium cursor-pointer flex-wrap">
          <li onClick={()=>navigate("/body")} className="hover:underline hover:text-yellow-300">Home</li>
          <li onClick={()=>navigate("/about")} className="hover:underline hover:text-yellow-300">About</li>
          <li onClick={()=>navigate("/services")} className="hover:underline hover:text-yellow-300">Service</li>
          <li onClick={()=>navigate("/blogs")} className="hover:underline hover:text-yellow-300">Blog</li>
          <li onClick={()=>navigate("/form")} className="hover:underline hover:text-yellow-300">Contact</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;