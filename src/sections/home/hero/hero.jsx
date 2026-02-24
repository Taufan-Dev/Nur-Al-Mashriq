import { useEffect, useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";

function Hero() {
  const [offset, setOffset] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    ID: {
      title: "Nur Al-Mashriq",
      subtitle:
        "Saat dunia terbenam dalam kegelapan, Muslim Golden Era menyalakan cahaya ilmu yang hingga kini menjadi fondasi peradaban modern.",
    },
    EN: {
      title: "Nur Al-Mashriq",
      subtitle:
        "When the world sank into darkness, the Muslim Golden Era ignited a light of knowledge that still shapes modern civilization today.",
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1664346582394-1f38bdb31d02?auto=format&fit=crop&w=2000&q=80')",
          transform: `translateY(${offset * 0.3}px) scale(${1 + offset * 0.0002})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif font-light tracking-widest uppercase text-prestige-gold mb-6">
            {content[language].title}
          </h1>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {content[language].subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
