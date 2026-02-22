import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

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
      subtitle: "Menerangi Dunia dengan Ilmu dan Peradaban Islam",
    },
    EN: {
      title: "Nur Al-Mashriq",
      subtitle:
        "Illuminating the World Through Knowledge and Islamic Civilization",
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1664346582394-1f38bdb31d02?auto=format&fit=crop&w=2000&q=80')",
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="text-center text-white max-w-4xl">

          <h1 className="font-primary text-6xl font-bold text-prestige-gold mb-6">
            {content[language].title}
          </h1>

          <p className=" text-lg md:text-xl max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>

        </div>
      </div>
    </section>
  );
}

export default Hero;