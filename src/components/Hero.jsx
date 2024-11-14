import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex justify-between items-center h-[80vh]">
      {/* Left Side */}
      <div className="text-customDarkBlue flex flex-col text-4xl font-bold gap-4">
        <h3>Hi 👋,</h3>
        <h3>My name is </h3>
        <h3 className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
          Faiq Ahmed{" "}
        </h3>
        <h3>I build things for web</h3>
      </div>

      {/* Right Side */}

      <div class="inline-block p-2 bg-gradient-to-br from-pink-600 to-blue-500 rounded-full">
        <img
          class="rounded-full w-80 h-80 object-cover"
          src={assets.myself}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
