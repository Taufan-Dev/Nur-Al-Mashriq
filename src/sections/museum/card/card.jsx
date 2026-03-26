import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { locations } from "../../../data/locations";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

const MuseumCardList = () => {
  const { language } = useLanguage();

  if (locations.length === 0) {
    return (
      <div className="w-full py-20 flex justify-center text-center">
        <p className="text-forest/60 dark:text-ethereal-white/60 text-lg">
          {language === "ID" ? "Museum tidak ditemukan." : "No museums found."}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
      {locations.map((museum) => (
        <Link
          key={museum.id}
          to={`/museum/${museum.id}`}
          className="group glass-crystal rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-prestige-gold/20 hover:border-prestige-gold/50 shadow-md hover:shadow-xl dark:shadow-none bg-white/50 dark:bg-light-dark/50"
        >
          <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-dark">
            <img
              src={museum.imageUrl}
              alt={museum.name}
              className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentElement.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center bg-forest text-prestige-gold opacity-50"><span class="material-symbols-outlined text-5xl">museum</span></div>';
              }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="absolute bottom-4 left-5 z-20 text-white flex gap-2 items-center">
               <FiMapPin className="text-prestige-gold" />
               <span className="text-sm font-semibold tracking-wide uppercase drop-shadow-md">
                 Location
               </span>
            </div>
          </div>

          <div className="p-6 flex flex-col dark:bg-light-dark grow relative z-20">
            <h3 className="text-xl lg:text-2xl font-black text-forest dark:text-ethereal-white mb-3 font-sans transition-colors">
              {museum[language]?.name || museum.EN.name}
            </h3>
            <p className="text-forest/80 dark:text-ethereal-white/80 text-sm mb-6 grow leading-relaxed line-clamp-3">
              {museum[language]?.description || museum.EN.description}
            </p>

            <span className="inline-flex items-center gap-2 text-prestige-gold font-bold group-hover:gap-4 transition-all mt-auto border-t border-prestige-gold/10 pt-4 w-full">
              {language === "ID" ? "Jelajahi Museum" : "Explore Museum"}
              <FiArrowRight />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MuseumCardList;
