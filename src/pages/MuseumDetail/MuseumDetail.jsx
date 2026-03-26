import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { locations } from "../../data/locations";
import { genericArtifacts } from "../../data/artifacts";
import { useLanguage } from "../../context/LanguageContext";
import { FiArrowLeft, FiMap, FiBox, FiX, FiArrowRight } from "react-icons/fi";

const MuseumDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const museumId = parseInt(id, 10);
  const location = locations.find((loc) => loc.id === museumId);

  const [viewMode, setViewMode] = useState("360"); // "360" or "artifacts"
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  // Scroll to top when change id
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedArtifact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedArtifact]);

  // INIT PANNELLUM
  useEffect(() => {
    let viewer;

    if (viewMode === "360" && location?.panoramaUrl && window.pannellum) {
      // Must give a small timeout to allow the DOM node to be ready correctly if doing conditional rendering
      const initPannellum = () => {
        const el = document.getElementById("panorama-viewer");
        if (el && !el.innerHTML) { // Only init if empty
          viewer = window.pannellum.viewer("panorama-viewer", {
            type: "equirectangular",
            panorama: location.panoramaUrl,
            autoLoad: true,
            pitch: 0,
            yaw: 180,
            hfov: 110,
            autoRotate: -2,
            showZoomCtrl: true,
            hotSpots: [
              {
                pitch: 10,
                yaw: -120,
                type: "info",
                text: language === "ID" ? "Artefak Penting" : "Important Artifact",
              },
            ],
          });
        }
      };
      
      const timeoutId = setTimeout(initPannellum, 100);
      return () => {
         clearTimeout(timeoutId);
         if (viewer) viewer.destroy();
      };
    }
  }, [location, viewMode, language]);

  if (!location) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-ethereal-white dark:bg-dark">
        <h2 className="text-2xl font-bold mb-4 text-dark dark:text-ethereal-white">
          {language === "ID" ? "Museum Tidak Ditemukan" : "Museum Not Found"}
        </h2>
        <Link to="/maps" className="text-prestige-gold underline font-bold">
          {language === "ID" ? "Kembali ke Peta" : "Back to Maps"}
        </Link>
      </div>
    );
  }

  const locData = location[language] || location.EN;

  return (
    <div className="min-h-screen bg-ethereal-white dark:bg-dark pb-20 relative pt-24 font-sans transition-colors duration-500">
      {/* ARTIFACT MODAL */}
      {selectedArtifact && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedArtifact(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-ethereal-white dark:bg-light-dark rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
            <button 
              onClick={() => setSelectedArtifact(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-prestige-gold text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full bg-white dark:bg-[#1a1c22] p-8 flex items-center justify-center relative">
               <img src={selectedArtifact.image} alt={selectedArtifact[language]?.name} className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
               <div className="inline-block px-4 py-1.5 rounded-full border border-prestige-gold/50 text-prestige-gold text-sm font-bold tracking-widest uppercase mb-6 w-fit">
                 {selectedArtifact.year}
               </div>
               
               <h2 className="text-3xl md:text-4xl font-black text-forest dark:text-ethereal-white mb-6 leading-tight">
                 {selectedArtifact[language]?.name}
               </h2>

               <p className="text-forest/80 dark:text-ethereal-white/80 text-lg leading-relaxed mb-8">
                 {selectedArtifact[language]?.description}
               </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="p-6 md:px-10 max-w-7xl mx-auto flex items-center">
        <Link
          to="/maps"
          className="group flex items-center gap-2 text-forest dark:text-ethereal-white font-semibold hover:text-prestige-gold transition-colors bg-white/50 dark:bg-light-dark/50 px-5 py-2.5 rounded-full shadow-sm backdrop-blur-md border border-prestige-gold/20"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          {language === "ID" ? "Kembali ke Peta" : "Back to Maps"}
        </Link>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        
        {/* Title & Description Refactored */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-forest dark:text-ethereal-white tracking-tight">
            {locData.name}
          </h1>
          <p className="text-forest/80 dark:text-ethereal-white/80 text-lg md:text-xl leading-relaxed max-w-4xl border-l-4 border-prestige-gold pl-6 py-2 bg-linear-to-r from-prestige-gold/10 to-transparent">
            {locData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 animate-fade-in group">
          {/* Gambar Utama (Kiri) */}
          <div className="w-full h-full overflow-hidden rounded-2xl relative border border-prestige-gold/10">
            <img
              src={location.imageUrl}
              alt={locData.name}
              className="w-full h-full object-cover shadow-md group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay for extra premium look */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Grid 2x2 Gambar Kecil (Kanan) */}
          <div className="grid grid-cols-2 gap-4">
            {(location.gallery || [
              "https://images.unsplash.com/photo-1541832069-e6ce2eb87af7?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1582561424760-00b84df4dd88?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1574359422045-814ae396dfc8?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=400&h=400"
            ]).slice(0, 4).map((imgSrc, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-prestige-gold/10">
                <img
                  src={imgSrc}
                  alt={`${locData.name} - Galeri ${index + 1}`}
                  className="w-full aspect-square object-cover shadow-md bg-gray-200 dark:bg-light-dark hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* VIEW TOGGLE */}
        <div className="mt-16 mb-8 flex flex-col md:flex-row items-center justify-between border-b border-prestige-gold/20 pb-6 gap-4">
          <h2 className="text-3xl font-black text-forest dark:text-ethereal-white flex items-center gap-3">
             <span className="material-symbols-outlined text-prestige-gold text-4xl">museum</span>
            {language === "ID" ? "Jelajahi Koleksi" : "Explore Collections"}
          </h2>
          <div className="glass-crystal inline-flex p-1 rounded-full border border-prestige-gold/30 bg-white/50 dark:bg-light-dark/50 shadow-sm relative z-20">
             <button
                onClick={() => setViewMode("360")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  viewMode === "360"
                    ? "bg-prestige-gold text-white shadow-md scale-105"
                    : "text-forest/70 dark:text-ethereal-white/70 hover:text-prestige-gold"
                }`}
              >
                <FiMap className="text-lg" />
                {language === "ID" ? "Tur 360°" : "360° Tour"}
              </button>
              <button
                onClick={() => setViewMode("artifacts")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  viewMode === "artifacts"
                    ? "bg-prestige-gold text-white shadow-md scale-105"
                    : "text-forest/70 dark:text-ethereal-white/70 hover:text-prestige-gold"
                }`}
              >
                <FiBox className="text-lg" />
                {language === "ID" ? "Barang Museum" : "Museum Items"}
              </button>
          </div>
        </div>

        {/* CONDITIONALLY RENDER VIEW */}
        <div className="w-full min-h-[500px]">
          {viewMode === "360" ? (
             <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-prestige-gold/20 bg-gray-300 dark:bg-gray-900 animate-fade-in">
               {location.panoramaUrl ? (
                 <>
                   <div id="panorama-viewer" className="w-full h-full"></div>
                   <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm shadow-lg border border-white/20 flex items-center gap-2 z-500">
                     <span>🖐️</span> {language === "ID" ? "Geser untuk melihat sekeliling" : "Click and drag to look around"}
                   </div>
                 </>
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-forest/50 dark:text-white/50 font-medium">
                    {language === "ID" ? "Tur virtual tidak tersedia." : "Virtual tour not available."}
                 </div>
               )}
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {(location.artifacts && location.artifacts.length > 0 ? location.artifacts : genericArtifacts).map((artifact) => (
                <div key={artifact.id} onClick={() => setSelectedArtifact(artifact)} className="group cursor-pointer glass-crystal rounded-3xl overflow-hidden border border-prestige-gold/20 hover:border-prestige-gold/50 shadow-md hover:shadow-xl dark:bg-light-dark transition-all duration-300 flex flex-col h-[380px] bg-white/50">
                  <div className="relative h-[65%] w-full overflow-hidden bg-white dark:bg-[#1a1c22]">
                     <img src={artifact.image} alt={artifact[language]?.name} className="w-full h-full object-contain object-cover p-6 group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 right-4 bg-black/70 text-prestige-gold text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-prestige-gold/30">
                       {artifact.year}
                     </div>
                  </div>
                  <div className="p-6 h-[35%] flex flex-col border-t border-prestige-gold/10 dark:bg-light-dark justify-center">
                     <h3 className="font-bold text-forest dark:text-ethereal-white text-lg line-clamp-2 leading-snug mb-2 transition-colors">{artifact[language]?.name}</h3>
                     <div className="flex items-center gap-2  text-sm font-semibold mt-auto">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                           {language === "ID" ? "Lihat Detail" : "View Details"}
                        </span>
                        <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 transform duration-300"/>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MuseumDetail;
