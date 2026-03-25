import { useLanguage } from "../../context/LanguageContext";
import { articlesData } from "../../data/articles";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";

const ArtikelSidebar = () => {
  const { language } = useLanguage();
  
  // Mengambil 3 artikel (index 1, 2, 3) sebagai artikel lainnya
  const sidebarArticles = articlesData.slice(1, 4);

  return (
    <div className="sticky top-24 pt-7 space-y-6">
      <h2 className="text-xl flex items-center gap-2 font-bold text-forest dark:text-ethereal-white mb-4">
        <AiFillFire className="text-red-500"/>
        {language === "ID" ? "Sering Dibaca" : "Most Read"}
      </h2>
      {sidebarArticles.map((item) => (
        <Link 
          to={`/artikel/${item.id}`} 
          key={item.id} 
          className="space-y-2 cursor-pointer group block"
        >
          <p className="text-prestige-gold text-sm font-semibold">
            {item.category[language]}
          </p>

          <h4 className="text-gray-800 dark:text-white font-semibold leading-snug group-hover:text-prestige-gold transition">
            {item.title[language]}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default ArtikelSidebar;
