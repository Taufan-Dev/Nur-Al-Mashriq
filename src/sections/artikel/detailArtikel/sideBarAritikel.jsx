import RecommendationCard from "./cardRekomendasi";
import { useLanguage } from "../../../context/LanguageContext";
import { articlesData } from "../../../data/articles";
import { Link } from "react-router-dom";

const ArticleSidebar = () => {
  const { language } = useLanguage();

  // Ambil beberapa artikel untuk rekomendasi
  const recommendations = articlesData.slice(1, 4);

  return (
    <aside className="sticky top-32 space-y-6">
      {/* Thumbnail */}
      <div className="relative h-[230px] rounded-xl overflow-hidden">
        <img
          src={articlesData[0]?.image || "https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg"}
          alt="Sidebar Thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <h3 className="font-bold text-lg dark:text-white mt-8 mb-4">
        {language === "ID" ? "Artikel Direkomendasikan" : "Recommended Articles"}
      </h3>

      {/* Rekomendasi */}
      {recommendations.map((rec) => (
        <Link to={`/artikel/${rec.id}`} key={rec.id} className="block mt-4">
          <RecommendationCard
            category={rec.category[language]}
            title={rec.title[language]}
          />
        </Link>
      ))}
    </aside>
  );
};

export default ArticleSidebar;
