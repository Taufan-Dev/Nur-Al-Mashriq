import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { articlesData } from "../../data/articles";

const ArtikelHero = () => {
  const { language } = useLanguage();
  const heroArticle = articlesData[0]; // Mengambil artikel pertama untuk hero

  return (
    <div
      className="xl:col-span-3 h-[280px] md:h-[350px] xl:h-[450px] relative flex items-end rounded-xl overflow-hidden p-4 md:p-10"
      style={{
        backgroundImage: `url('${heroArticle.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/30"></div>

      <div className="relative z-10 w-full max-w-3xl">
        <h6 className="text-prestige-gold font-semibold text-sm md:text-base mb-2">
          {heroArticle.category[language]}
        </h6>

        <Link to={`/artikel/${heroArticle.id}`}>
          <h2 className="text-white font-bold text-xl md:text-2xl xl:text-3xl hover:text-prestige-gold transition-colors duration-300">
            {heroArticle.title[language]}
          </h2>
        </Link>

        <p className="text-gray-200 mt-3 text-sm hidden xl:block">
          {heroArticle.desc[language]}
        </p>
      </div>
    </div>
  );
};

export default ArtikelHero;
