import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { locations } from "../../data/locations";

const MuseumDetail = () => {
  const { id } = useParams();
  const museumId = parseInt(id, 10);
  const location = locations.find((loc) => loc.id === museumId);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-indigo-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>

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

        <p className="text-gray-600 mb-6">{location.description}</p>

        <img
          src={location.imageUrl}
          alt={location.name}
          className="w-full rounded-xl shadow-md mb-10"
        />

        {location.panoramaUrl && (
          <>
            <h2 className="text-2xl font-bold mb-6">Tur Virtual 360°</h2>

            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl border">
              <div id="panorama-viewer" className="w-full h-full"></div>

              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                Geser untuk melihat sekeliling
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default MuseumDetail;
