import React, { useEffect, memo } from "react";
import { FileText, Code, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      id="About"
      className="w-full min-h-screen px-[5%] lg:px-[10%] py-20 text-white bg-[#030014]"
    >
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="mt-4 text-gray-400 flex justify-center items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          Building scalable backend systems & intelligent solutions
          <Sparkles className="w-4 h-4 text-purple-400" />
        </p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SIDE */}
        <div data-aos="fade-right">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Abhay Potdar
            </span>
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Backend-focused developer specializing in PHP and MySQL,
            building secure, scalable, and database-driven web applications.
            Passionate about clean architecture and AI-powered backend systems.
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl mb-6">
            <p className="italic text-gray-300 text-sm">
              "Using AI as a professional tool to enhance productivity, not replace thinking."
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Download CV
            </button>

            <a href="#Portofolio">
              <button className="px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2">
                <Code className="w-4 h-4" /> View Projects
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div
          className="flex justify-center"
          data-aos="fade-left"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur-3xl opacity-30 animate-pulse"></div>

            {/* Image */}
            <img
              src="/photo1.png"
              alt="Abhay Potdar"
              className="relative w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(AboutPage);