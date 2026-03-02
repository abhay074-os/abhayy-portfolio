import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabase";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ py: 4 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const [projectsRes, certRes] = await Promise.all([
        supabase.from("projects").select("*").order("id", { ascending: false }),
        supabase.from("certificates").select("*").order("id", { ascending: false }),
      ]);

      if (projectsRes.error) throw projectsRes.error;
      if (certRes.error) throw certRes.error;

      setProjects(projectsRes.data || []);
      setCertificates(certRes.data || []);
    } catch (err) {
      console.error("Supabase Error:", err.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section

      className="w-full min-h-screen bg-[#030014] py-16 px-4 md:px-16"
      id="Portfolio"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3">
          Explore my backend systems and scalable projects.
        </p>
      </div>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(15px)",
            overflow: "hidden"
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                background: "linear-gradient(90deg,#6366f1,#a855f7)",
                height: 4,
                borderRadius: 4,
              },
            }}
            sx={{
              "& .MuiTab-root": {
                fontWeight: 600,
                textTransform: "none",
                color: "#94a3b8",
                minHeight: 60,
                fontSize: { xs: "12px", sm: "15px" },
                transition: "all 0.3s ease",
              },
              "& .Mui-selected": {
                color: "#ffffff",
              },
            }}
          >
            <Tab icon={<Code size={18} />} iconPosition="start" label="Projects" />
            <Tab icon={<Award size={18} />} iconPosition="start" label="Certificates" />
            <Tab icon={<Boxes size={18} />} iconPosition="start" label="Tech Stack" />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={project.id || index} data-aos="fade-up">
                  <CardProject {...project} />
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificates.map((certificate, index) => (
                <div key={certificate.id || index} data-aos="fade-up">
                  <Certificate ImgSertif={certificate.Img} />
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStacks.map((stack, index) => (
                <div key={index} data-aos="fade-up">
                  <TechStackIcon
                    TechStackIcon={stack.icon}
                    Language={stack.language}
                  />
                </div>
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </section>
  );
}