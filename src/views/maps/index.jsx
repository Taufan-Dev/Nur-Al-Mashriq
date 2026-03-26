import React, { useState } from "react";
import InteractiveMap from "../../components/Map/InteractiveMap";
import { mapThemes } from "../../data/themes";

const MapsPage = () => {
  const [activeThemeId, setActiveThemeId] = useState(null);

  const activeTheme = mapThemes.find(t => t.id === activeThemeId) || null;
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===== SECTION HEADER ===== */}
      <section className="px-5 md:px-10 xl:px-20 pt-28 md:pt-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Peta Museum Islam Dunia
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Jelajahi lokasi museum-museum Islam di berbagai belahan dunia. Klik
          setiap penanda untuk melihat informasi singkat dan akses halaman
          detail museum secara lengkap.
        </p>
      </section>

      {/* ===== SECTION THEMES ===== */}
      <section className="px-5 md:px-10 xl:px-20 pb-8 text-center max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pilih Tur Tematik:</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveThemeId(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeThemeId === null
                ? "bg-slate-800 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-slate-100"
            }`}
          >
            Semua Lokasi
          </button>
          {mapThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveThemeId(theme.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeThemeId === theme.id
                  ? "text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-slate-100"
              }`}
              style={{
                backgroundColor: activeThemeId === theme.id ? theme.color : undefined,
                borderColor: activeThemeId === theme.id ? theme.color : undefined,
              }}
            >
              <span 
                className="w-3 h-3 rounded-full block border border-white/50" 
                style={{ backgroundColor: activeThemeId === theme.id ? 'white' : theme.color }}
              ></span>
              {theme.title}
            </button>
          ))}
        </div>
        
        {/* Deskripsi Tema Aktif */}
        {activeTheme && (
           <p className="mt-5 text-gray-700 bg-white p-4 rounded-xl border border-gray-100 shadow-sm animate-fade-in inline-block text-left">
             <strong className="block mb-1 text-gray-900">{activeTheme.title}</strong>
             {activeTheme.description}
           </p>
        )}
      </section>

      {/* ===== SECTION MAP ===== */}
      <section className="px-5 md:px-10 xl:px-20 pb-16">
        <div
          className="
          w-full 
          h-[600px] 
          rounded-3xl 
          overflow-hidden 
          border 
          border-gray-200 
          shadow-xl
          bg-white
        "
        >
          <InteractiveMap activeTheme={activeTheme} />
        </div>
      </section>
    </div>
  );
};

export default MapsPage;
