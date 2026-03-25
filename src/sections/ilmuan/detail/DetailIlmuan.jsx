import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { scientistsData } from "../../../data/scientists";
import { useLanguage } from "../../../context/LanguageContext";
import { FiArrowLeft, FiClock, FiBook, FiAward } from "react-icons/fi";

const DetailIlmuan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [scientist, setScientist] = useState(null);

  useEffect(() => {
    // Cari data berdasarkan ID
    const data = scientistsData.find((item) => item.id === parseInt(id));
    if (data) setScientist(data);
    else navigate("/ilmuan"); // Kalau gak ketemu, redirect ke list
  }, [id, navigate]);

  if (!scientist) return null;

  const content = {
    ID: {
      back: "Kembali ke Daftar Ilmuwan",
      era: "Era Kehidupan",
      about: "Biografi Singkat",
      contributions: "Kontribusi Utama",
      works: "Karya Populer",
      fields: "Bidang Keahlian",
    },
    EN: {
      back: "Back to Scientists List",
      era: "Era of Life",
      about: "Short Biography",
      contributions: "Major Contributions",
      works: "Famous Works",
      fields: "Fields of Expertise",
    },
  };

  const textData = scientist[language] || scientist.ID;

  return (
    <section className="bg-ethereal-white dark:bg-dark min-h-screen text-forest dark:text-ethereal-white transition-colors duration-500 pb-24">
      {/* Tombol Back */}
      <div className="container mx-auto px-5 md:px-10 xl:px-20 pt-32 pb-8">
        <button
          onClick={() => navigate("/ilmuan")}
          className="flex items-center gap-2 text-forest/70 hover:text-prestige-gold dark:text-ethereal-white/70 dark:hover:text-prestige-gold transition font-medium group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition" />
          {content[language].back}
        </button>
      </div>

      {/* Main Grid: Split Screen Layout */}
      <div className="container mx-auto px-5 md:px-10 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* === KIRI: STICKY PROFILE === */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 flex flex-col">
          {/* Foto Profile Besar */}
          <div className="w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl relative border-2 border-prestige-gold/20 dark:border-white/10 group">
            <img
              src={scientist.image}
              alt={scientist.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentElement.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-light-dark text-prestige-gold"><span class="material-symbols-outlined text-7xl opacity-50">history_edu</span></div>';
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Nama di Atas Gambar */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-prestige-gold font-bold tracking-widest uppercase text-sm mb-2 block">
                {scientist.era}
              </span>
              <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                {scientist.name}
              </h1>
            </div>
          </div>

          {/* Kartu Info Tambahan (Era & Fields) */}
          <div className="bg-white dark:bg-light-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">
                Nama Lengkap
              </p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {scientist.fullName}
              </p>
            </div>

            <hr className="border-gray-100 dark:border-gray-800" />

            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <FiAward /> {content[language].fields}
              </p>
              <div className="flex flex-wrap gap-2">
                {textData.fields.map((field, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-bold rounded-md bg-prestige-gold/10 text-prestige-gold border border-prestige-gold/30"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === KANAN: SCROLLABLE CONTENT === */}
        <div className="lg:col-span-8 flex flex-col gap-12 pt-0 lg:pt-4">
          {/* Section: Biografi Singkat */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest uppercase text-prestige-gold flex items-center gap-3">
              <FiBook /> {content[language].about}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              <p className="text-xl md:text-2xl font-light text-gray-800 dark:text-ethereal-white leading-snug mb-6 border-l-4 border-prestige-gold pl-6">
                "{textData.shortDescription}"
              </p>
              <p>{textData.description}</p>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800" />

          {/* Section: Kontribusi Utama */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest uppercase text-prestige-gold flex items-center gap-3">
              <FiAward /> {content[language].contributions}
            </h2>
            <ul className="space-y-4">
              {textData.contributions.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-prestige-gold/10 flex items-center justify-center text-prestige-gold font-bold group-hover:bg-prestige-gold group-hover:text-white transition-colors mt-1">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-200 dark:border-gray-800" />

          {/* Section: Karya Populer */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest uppercase text-prestige-gold flex items-center gap-3">
              <FiClock /> {content[language].works}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scientist.famousWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-light-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-prestige-gold/50 transition-all group cursor-default flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-prestige-gold text-2xl">
                      <FiBook />{" "}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {work}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailIlmuan;
