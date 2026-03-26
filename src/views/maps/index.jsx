import React, { useState } from "react";
import InteractiveMap from "../../components/Map/InteractiveMap";
import MuseumHero from "../../sections/museum/hero/hero";
import MuseumCardList from "../../sections/museum/card/card";
import { FiMap, FiGrid } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const MapsPage = () => {
  const [viewMode, setViewMode] = useState("map"); // "map" atau "list"
  const { language } = useLanguage();

  return (
    <div className="bg-ethereal-white dark:bg-dark min-h-screen transition-colors duration-500 pb-20">
      {/* ===== SECTION HERO ===== */}
      <MuseumHero />

      {/* ===== SECTION CONTENT ===== */}
      <section className="px-5 md:px-10 xl:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col">
          
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-10">
            <div className="glass-crystal inline-flex p-1 rounded-full border border-prestige-gold/30 bg-white/50 dark:bg-light-dark/50">
              <button
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  viewMode === "map"
                    ? "bg-prestige-gold text-white shadow-md"
                    : "text-forest/70 dark:text-ethereal-white/70 hover:text-prestige-gold"
                }`}
              >
                <FiMap className="text-lg" />
                {language === "ID" ? "Peta Interaktif" : "Interactive Map"}
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-prestige-gold text-white shadow-md"
                    : "text-forest/70 dark:text-ethereal-white/70 hover:text-prestige-gold"
                }`}
              >
                <FiGrid className="text-lg" />
                {language === "ID" ? "Daftar Kartu" : "Card List"}
              </button>
            </div>
          </div>

          {/* Conditional View */}
          <div className="w-full transition-all duration-500">
            {viewMode === "map" ? (
              <div
                className="
                w-full 
                h-[600px] 
                rounded-3xl 
                overflow-hidden 
                border 
                border-prestige-gold/30 
                shadow-2xl
                bg-white
                dark:border-prestige-gold/10
                dark:shadow-none
                dark:bg-light-dark
              "
              >
                <InteractiveMap />
              </div>
            ) : (
              <MuseumCardList />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapsPage;
