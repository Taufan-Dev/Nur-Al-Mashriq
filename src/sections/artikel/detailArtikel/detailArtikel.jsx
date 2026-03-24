import { FiCalendar, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { articlesData } from "../../../data/articles";

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { language } = useLanguage();

  const article = articlesData.find((a) => a.id === parseInt(id));

  // Fallback if article not found
  if (!article) {
    return (
      <div className="py-20 text-center text-forest dark:text-ethereal-white">
        <h2 className="text-2xl font-bold mb-4">
          {language === "ID" ? "Artikel Tidak Ditemukan" : "Article Not Found"}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-prestige-gold hover:underline"
        >
          {language === "ID" ? "Kembali" : "Go Back"}
        </button>
      </div>
    );
  }

  // Parse lines to paragraphs
  const contentParagraphs = article.content[language].split("\n").filter((p) => p.trim() !== "");

  return (
    <>
      {/* KEMBALI */}
      <button
        onClick={() => navigate(-1)}
        className="
          mb-6
          flex items-center gap-2
          text-sm font-semibold
          text-gray-600 dark:text-gray-300
          hover:text-prestige-gold dark:hover:text-prestige-gold
          transition
        "
      >
        <FiArrowLeft className="text-lg" />
        {language === "ID" ? "Kembali" : "Back"}
      </button>

      {/* KATEGORI */}
      <p className="text-prestige-gold font-semibold text-sm md:text-base mb-3">
        {article.category[language]}
      </p>

      {/* JUDUL */}
      <h1 className="text-3xl md:text-5xl font-black font-sans text-forest dark:text-ethereal-white mb-6 leading-tight">
        {article.title[language]}
      </h1>

      {/* AUTHOR & TANGGAL */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
        <p className="font-semibold text-forest/80 dark:text-ethereal-white/80">
          {language === "ID" ? "Oleh" : "By"}:{" "}
          <span className="text-prestige-gold">{article.author}</span>
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <FiCalendar />
          <span>{article.date}</span>
        </div>
      </div>

      {/* IMAGE */}
      <img
        src={article.image}
        alt={article.title[language]}
        className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl mb-10 shadow-lg"
      />

      {/* CONTENT */}
      <article className="prose prose-lg max-w-none text-justify text-forest/90 dark:text-ethereal-white/90">
        {contentParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>
    </>
  );
};

export default ArticleDetail;
