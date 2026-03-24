import ArtikelCard from "./artikelCard";
import { useLanguage } from "../../context/LanguageContext";
import { articlesData } from "../../data/articles";

const ArtikelList = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      {articlesData.map((item) => {
        const localizedItem = {
          id: item.id,
          image: item.image,
          date: item.date,
          title: item.title[language],
          category: item.category[language],
          desc: item.desc[language]
        };
        return <ArtikelCard key={item.id} {...localizedItem} language={language} />;
      })}
    </div>
  );
};

export default ArtikelList;
