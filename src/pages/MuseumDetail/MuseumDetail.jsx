import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { locations } from "../../data/locations";

const MuseumDetail = () => {
  const { id } = useParams();
  const museumId = parseInt(id, 10);
  const location = locations.find((loc) => loc.id === museumId);

  // Scroll to top when change id
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // INIT PANNELLUM
  useEffect(() => {
    let viewer;

    if (location?.panoramaUrl && window.pannellum) {
      viewer = window.pannellum.viewer("panorama-viewer", {
        type: "equirectangular",
        panorama: location.panoramaUrl,
        autoLoad: true,
        pitch: 10,
        yaw: 180,
        hfov: 110,
        autoRotate: -2,
        showZoomCtrl: true,
        hotSpots: [
          {
            pitch: 10,
            yaw: -120,
            type: "info",
            text: "Artefak Penting",
          },
        ],
      });
    }

    return () => {
      if (viewer) viewer.destroy();
    };
  }, [location]);

  if (!location) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Museum Tidak Ditemukan</h2>
        <Link to="/" className="text-indigo-600 underline">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 relative">
      {/* Header */}
      <header className="p-6">
        <Link
          to="/"
          className="text-indigo-700 font-semibold hover:text-indigo-500"
        >
          ← Kembali
        </Link>
      </header>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4">{location.name}</h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          {location.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 animate-fade-in">
          {/* Gambar Utama (Kiri) */}
          <div className="w-full h-full">
            <img
              src={location.imageUrl}
              alt={location.name}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Grid 2x2 Gambar Kecil (Kanan) */}
          <div className="grid grid-cols-2 gap-4">
            {(location.gallery || [
              "https://images.unsplash.com/photo-1541832069-e6ce2eb87af7?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1582561424760-00b84df4dd88?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1574359422045-814ae396dfc8?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=400&h=400"
            ]).slice(0, 4).map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${location.name} - Galeri ${index + 1}`}
                className="w-full aspect-square object-cover rounded-xl shadow-md bg-gray-200"
              />
            ))}
          </div>
        </div>

        {location.panoramaUrl && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Tur Virtual 360°</h2>
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl border bg-gray-900">
              <div id="panorama-viewer" className="w-full h-full"></div>

              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm shadow-lg border border-white/10 flex items-center gap-2">
                <span>🖐️</span> Geser untuk melihat sekeliling
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MuseumDetail;
