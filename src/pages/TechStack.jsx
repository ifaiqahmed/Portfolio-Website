import React from "react";
import { assets } from "../assets/assets";

const TechStack = () => {
  return (
    <div className="mt-10 h-[80vh]">
      <h2 className="text-customDarkBlue text-4xl font-bold mb-4">My Tech Stack</h2>
      <p className="text-customGray text-sm font-base">
      Technologies I’ve been working with recently
      </p>

      <div className="grid grid-cols-6 gap-8 mt-10">
        <img src={assets.html} className="w-16 h-16 object-contain" />
        <img src={assets.css} className="w-16 h-16 object-contain" />
        <img src={assets.tailwind} className="w-16 h-16 object-contain" />
        <img src={assets.js} className="w-16 h-16 object-contain" />
        <img src={assets.react} className="w-16 h-16 object-contain" />
        <img src={assets.next} className="w-16 h-16 object-contain" />
        <img src={assets.express} className="w-16 h-16 object-contain" />
        <img src={assets.node} className="w-16 h-16 object-contain" />
        <img src={assets.mongodb} className="w-16 h-16 object-contain" />
        <img src={assets.gitbash} className="w-16 h-16 object-contain" />
        <img src={assets.github} className="w-16 h-16 object-contain" />
        <img src={assets.wordpress} className="w-16 h-16 object-contain" />
        <img src={assets.elementor} className="w-16 h-16 object-contain" />

        {/* Add more logos here */}
      </div>
    </div>
  );
};

export default TechStack;
