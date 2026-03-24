import CardArtikel from "./card";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { articlesData } from "../../../data/articles";

const ListArtikel = () => {
  const { language } = useLanguage();

  // Ambil 5 artikel pertama
  const articles = articlesData.slice(0, 5).map(a => ({
    id: a.id,
    image: a.image,
    title: a.title[language],
    category: a.category[language],
  }));

  return (
    <section className="container light:bg-white mx-auto px-4 py-16">
      <div className="flex items-center justify-between my-8">
        {/* Judul */}
        <h3 className="flex items-center gap-2 font-serif font-extralight tracking-widest uppercase text-prestige-gold text-base lg:text-2xl">
          <FiFileText className="text-lg lg:text-2xl" />
          {language === "ID" ? "Sekilas Artikel" : "Articles Overview"}
        </h3>

        {/* Link */}
        <Link
          to="/artikel"
          className="text-sm lg:text-base font-medium text-prestige-gold/80 hover:text-prestige-gold transition flex items-center gap-1 group"
        >
          {language === "ID" ? "Lihat Semuanya" : "View All"}
          <span className="group-hover:translate-x-1 transition">→</span>
        </Link>
      </div>
      {/* GRID UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* ARTIKEL BESAR */}
        {articles.length > 0 && (
          <div className="lg:col-span-3 hidden lg:block">
            <CardArtikel {...articles[0]} big />
          </div>
        )}

        {/* LIST ARTIKEL KECIL */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((item, index) => (
            <CardArtikel
              key={item.id}
              {...item}
              // di HP & tablet → semua kecil
              // di desktop → skip artikel pertama (karena sudah jadi besar)
              className={index === 0 ? "lg:hidden" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListArtikel;
