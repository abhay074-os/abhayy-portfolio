import React from "react";

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105 shadow-xl">

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src={TechStackIcon}
          alt={Language}
          className="h-16 w-16 object-contain"
        />
      </div>

      {/* Text */}
      <span className="relative z-10 text-slate-300 font-medium text-sm tracking-wide group-hover:text-white transition duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;