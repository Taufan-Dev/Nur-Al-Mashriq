import ArtikelHero from "../../sections/artikel/artikelHero";
import ArtikelVideo from "../../sections/artikel/artikelVidio";
import ArtikelList from "../../sections/artikel/artikelList";
import ArtikelPagination from "../../sections/artikel/artikelPagination";
import ArtikelSidebar from "../../sections/artikel/artikelSidebar"; // ⬅️ INI WAJIB

const Artikel = () => {
  return (
    <section className="px-5 md:px-10 xl:px-20 pt-26 pb-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid xl:grid-cols-4 gap-10">

          {/* KIRI */}
          <div className="xl:col-span-3 space-y-16">
            <ArtikelHero />
            <ArtikelList />
            <ArtikelPagination />
          </div>

          {/* KANAN */}
          <div className="space-y-10">
            <ArtikelVideo />
            <ArtikelSidebar />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Artikel;