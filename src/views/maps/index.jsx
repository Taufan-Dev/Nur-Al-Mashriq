import React from "react";
import InteractiveMap from "../../components/Map/InteractiveMap";

const MapsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===== SECTION HEADER ===== */}
      <section className="px-5 md:px-10 xl:px-20 pt-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Peta Museum Islam Dunia
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Jelajahi lokasi museum-museum Islam di berbagai belahan dunia. Klik
          setiap penanda untuk melihat informasi singkat dan akses halaman
          detail museum secara lengkap.
        </p>
      </section>

      {/* ===== SECTION MAP ===== */}
      <section className="px-5 md:px-10 xl:px-20 py-16">
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
          <InteractiveMap />
        </div>
      </section>
    </div>
  );
};

export default MapsPage;
