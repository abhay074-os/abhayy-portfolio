import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabase";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes } from "lucide-react";

/* TECH STACK */
const techStacks = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", language: "HTML" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", language: "CSS" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", language: "React" },
  { icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", language: "Tailwind CSS" },
  { icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg", language: "Supabase" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", language: "Firebase" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", language: "Android Studio" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", language: "PHP" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", language: "Python" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", language: "C++" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", language: "Java" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", language: "Vercel" }
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const [projectsRes, certRes] = await Promise.all([
        supabase.from("projects").select("*").order("id", { ascending: false }),
        supabase.from("certificates").select("*").order("id", { ascending: false }),
      ]);

      setProjects(projectsRes.data || []);
      setCertificates(certRes.data || []);
    } catch (err) {
      console.error("Supabase Error:", err.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section
      className="md:px-[10%] px-[5%] w-full mt-[3rem] bg-[#030014]"
      id="Portofolio"
    >
      {/* Title */}
      <div className="text-center pb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3">
          Explore my backend systems and scalable projects.
        </p>
      </div>

      {/* Glass Tab UI */}
      <div className="flex justify-center mb-14">
        <div className="flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-lg">

          <button
            onClick={() => setValue(0)}
            className={`px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium
              ${value === 0
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg scale-105"
                : "text-slate-300 hover:text-white"
              }`}
          >
            <Code className="w-4 h-4" />
            Projects
          </button>

          <button
            onClick={() => setValue(1)}
            className={`px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium
              ${value === 1
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg scale-105"
                : "text-slate-300 hover:text-white"
              }`}
          >
            <Award className="w-4 h-4" />
            Certificates
          </button>

          <button
            onClick={() => setValue(2)}
            className={`px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium
              ${value === 2
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg scale-105"
                : "text-slate-300 hover:text-white"
              }`}
          >
            <Boxes className="w-4 h-4" />
            Tech Stack
          </button>

        </div>
      </div>

      {/* Swipe Animation */}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={setValue}
      >
        {/* Projects */}
        <div hidden={value !== 0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={project.id || index} data-aos="fade-up">
                <CardProject {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div hidden={value !== 1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <div key={certificate.id || index} data-aos="fade-up">
                <Certificate ImgSertif={certificate.Img} />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div hidden={value !== 2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStacks.map((stack, index) => (
              <div key={index} data-aos="fade-up">
                <TechStackIcon
                  TechStackIcon={stack.icon}
                  Language={stack.language}
                />
              </div>
            ))}
          </div>
        </div>

      </SwipeableViews>
    </section>
  );
}