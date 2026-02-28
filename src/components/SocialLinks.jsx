import React from "react";
import { Linkedin, Instagram, Github } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Connect With Me
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abhayy-potdar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
        >
          <Linkedin className="w-6 h-6 text-blue-400" />
          <div>
            <p className="font-semibold text-white">Let's Connect</p>
            <p className="text-sm text-gray-400">on LinkedIn</p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/abhayy_potdar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
        >
          <Instagram className="w-6 h-6 text-pink-400" />
          <div>
            <p className="font-semibold text-white">Instagram</p>
            <p className="text-sm text-gray-400">@abhayy_potdar</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/abhay074-os"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
        >
          <Github className="w-6 h-6 text-gray-300" />
          <div>
            <p className="font-semibold text-white">GitHub</p>
            <p className="text-sm text-gray-400">@abhay074-os</p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default SocialLinks;