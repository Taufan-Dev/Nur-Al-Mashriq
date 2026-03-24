import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title1: "Pioneers of ",
      title2: "Science",
      subtitle:
        "Explore the lives and legacies of the scholars from the Golden Age of Islam who shaped the modern world through mathematics, astronomy, medicine, and philosophy.",
      placeholder: "Find a scholar, field, or invention...",
    },
    ID: {
      title1: "Perintis ",
      title2: "Sains",
      subtitle:
        "Jelajahi kehidupan dan warisan para sarjana dari Zaman Keemasan Islam yang membentuk dunia modern melalui matematika, astronomi, kedokteran, dan filsafat.",
      placeholder: "Cari cendekiawan, bidang, atau penemuan...",
    },
  };

  const text = content[language] || content.EN;

  return (
    <section className=" dark:bg-dark py-24 md:py-32 flex justify-center mt-20 md:mt-0 relative overflow-hidden transition-colors duration-500">
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
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-prestige-gold/30 dark:bg-light-dark blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 -ml-32 w-[500px] h-[500px] rounded-full bg-prestige-gold/10 dark:bg-light-dark/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col justify-center items-start pt-10 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-sans font-black tracking-tighter text-[#2a261f] dark:text-ethereal-white mb-6 leading-tight">
            {text.title1}
            <span className="text-prestige-gold">{text.title2}</span>
          </h1>

          <p className=" md:text-md lg:text-lg text-[#2a261f]/80 dark:text-ethereal-white/80 font-sans mb-12 max-w-3xl leading-relaxed">
            {text.subtitle}
          </p>

          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <FiSearch className="text-prestige-gold text-2xl" />
            </div>
            <input
              type="text"
              className="w-full pl-14 pr-6 py-4 rounded-lg border border-prestige-gold bg-white dark:bg-light-dark text-forest dark:text-ethereal-white placeholder:text-gray-400 focus:outline-none focus:border-prestige-gold focus:ring-1 focus:ring-prestige-gold transition-colors font-sans text-lg shadow-sm"
              placeholder={text.placeholder}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
