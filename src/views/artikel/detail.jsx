import ArticleDetail from "../../sections/artikel/detailArtikel/detailArtikel";
import ArticleSidebar from "../../sections/artikel/detailArtikel/sideBarAritikel";
import { HeroRecommendations } from "../../sections/artikel/components/HeroRecommendations";

const ArticleDetailPage = () => {
  return (
    <section className="container mx-auto pt-32 xl:px-20 md:px-5 px-3">
      {/* Main Content + Sidebar */}
      <div className="grid xl:grid-cols-4 gap-10">
        {/* 75% KIRI */}
        <div className="xl:col-span-3">
          <ArticleDetail />
        </div>

        {/* 25% KANAN */}
        <div className="hidden xl:block">
          <ArticleSidebar />
        </div>
      </div>

      {/* Hero Recommendations (Bottom Full Width) */}
      <HeroRecommendations />
    </section>
  );
};

export default ArticleDetailPage;
