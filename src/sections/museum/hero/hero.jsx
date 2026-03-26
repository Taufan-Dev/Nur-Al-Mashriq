import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
const MuseumHero = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title1: "Islamic ",
      title2: "Museums",
      subtitle:
        "Discover the magnificent collections of Islamic art, history, and science housed in renowned museums around the world. Explore interactive maps or browse detailed cards.",
      placeholder: "Search for a museum or location...",
    },
    ID: {
      title1: "Museum ",
      title2: "Islam",
      subtitle:
        "Temukan koleksi seni, sejarah, dan sains Islam yang menakjubkan di museum-museum ternama dunia. Jelajahi peta interaktif atau telusuri melalui daftar kartu.",
      placeholder: "Cari museum atau lokasi...",
    },
  };

  const text = content[language] || content.EN;

  return (
    <section className="dark:bg-dark py-20 flex justify-center mt-20 md:mt-0 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(#c5a059 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-prestige-gold/20 dark:bg-light-dark/40 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        {/* Bottom Fade Gradient for Smooth Blending */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-ethereal-white dark:from-dark to-transparent"></div>
      </div>

      <div className="max-w-4xl w-full px-6 flex flex-col items-center text-center relative z-10 pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#2a261f] dark:text-ethereal-white mb-6 leading-tight">
          {text.title1}
          <span className="text-prestige-gold">{text.title2}</span>
        </h1>

        <p className="md:text-lg text-[#2a261f]/80 dark:text-ethereal-white/80 font-sans mb-10 max-w-2xl leading-relaxed">
          {text.subtitle}
        </p>

        <div className="mt-8">
          <span className="inline-block px-6 py-2 rounded-full border border-prestige-gold/30 bg-prestige-gold/10 text-forest dark:text-prestige-gold font-medium tracking-wide shadow-sm">
            {language === "ID" ? "Jelajahi ke bawah" : "Scroll down to explore"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default MuseumHero;
