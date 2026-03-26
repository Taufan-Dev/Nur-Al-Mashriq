import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { scientistsData } from "../../../data/scientists";
import { FiArrowRight } from "react-icons/fi";

const ScientistCard = ({ scientist, language }) => {
  return (
    <Link 
      to={`/ilmuan/${scientist.id}`}
      className="glass-crystal rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group border border-prestige-gold/20 hover:border-prestige-gold/50 shadow-sm hover:shadow-xl dark:shadow-none bg-white/40 dark:bg-light-dark cursor-pointer"
    >
      <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200 dark:bg-dark">
        <img
          src={scientist.image}
          alt={scientist.name}
          className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            // Fallback content if image is broken
            e.target.parentElement.innerHTML =
              '<div class="w-full h-full flex items-center justify-center bg-forest text-prestige-gold opacity-50"><span class="material-symbols-outlined text-5xl">history_edu</span></div>';
          }}
        />
        <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2 justify-end max-w-[80%]">
          {scientist[language]?.fields?.slice(0, 2).map((field, idx) => (
            <span
              key={idx}
              className="mb-2 w-fit bg-black/70 px-3 py-1 text-xs text-white rounded uppercase tracking-wide"
            >
              {field}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
        <span className="text-prestige-gold text-sm font-bold tracking-widest uppercase mb-2 block">
          {scientist.era}
        </span>
        <h3 className="text-xl lg:text-2xl font-sans font-black text-forest dark:text-ethereal-white mb-3">
          {scientist.name}
        </h3>
        <p className="text-forest/80 dark:text-ethereal-white/80 text-base mb-8 flex-grow leading-relaxed">
          {scientist[language]?.shortDescription}
        </p>

        <span
          className="inline-flex items-center gap-2 text-prestige-gold font-bold group-hover:gap-4 transition-all w-fit mt-auto"
        >
          {language === "ID" ? "Baca Selengkapnya" : "Read More"}
          <FiArrowRight />
        </span>
      </div>
    </Link>
  );
};

const CardList = ({ searchQuery = "" }) => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Filter data based on search query
  const filteredScientists = scientistsData.filter((scientist) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    
    // Check fields using the currently selected language, or check both
    const nameMatch = scientist.name.toLowerCase().includes(query);
    const descMatchEn = scientist.EN?.shortDescription?.toLowerCase().includes(query) || false;
    const descMatchId = scientist.ID?.shortDescription?.toLowerCase().includes(query) || false;
    const fieldMatchEn = scientist.EN?.fields?.some(field => field.toLowerCase().includes(query)) || false;
    const fieldMatchId = scientist.ID?.fields?.some(field => field.toLowerCase().includes(query)) || false;
    const eraMatch = scientist.era?.toLowerCase().includes(query) || false;
    
    return nameMatch || descMatchEn || descMatchId || fieldMatchEn || fieldMatchId || eraMatch;
  });

  // Tampilkan max 6 kalau tidak showAll
  const displayedScientists = showAll
    ? filteredScientists
    : filteredScientists.slice(0, 6);

  const buttonText =
    language === "ID"
      ? showAll
        ? "Tampilkan Lebih Sedikit"
        : "Lihat Lebih Banyak"
      : showAll
        ? "Show Less"
        : "Load More";

  return (
    <section className="w-full pb-24 px-5 md:px-10 xl:px-20 flex justify-center bg-ethereal-white dark:bg-dark transition-colors duration-500">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {displayedScientists.map((scientist) => (
            <ScientistCard
              key={scientist.id}
              scientist={scientist}
              language={language}
            />
          ))}
        </div>

        {/* Show More Button */}
        {filteredScientists.length > 6 && (
          <div className="mt-16 md:mt-20">
            <button
              onClick={() => setShowAll(!showAll)}
              className="glass-crystal px-8 py-4 rounded-full border border-prestige-gold/50 text-forest dark:text-ethereal-white font-bold hover:bg-prestige-gold hover:text-white dark:hover:text-dark transition-colors duration-500 flex items-center justify-center min-w-[200px]"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardList;
