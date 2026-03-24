import { useLanguage } from "../../../context/LanguageContext";

const CtaSection = () => {
  const { language } = useLanguage();

  const content = {
    ID: {
      title: "MUSLIM GOLDEN ERA",
      desc: "Di masa Eropa terjerumus dalam kegelapan, peradaban Islam memasuki Muslim Golden Era sebuah zaman keemasan ilmu pengetahuan yang menjadi fondasi dunia modern.",
      btnPrimary: "Jelajahi Sekarang",
      btnSecondary: "Baca Artikel",
    },
    EN: {
      title: "MUSLIM GOLDEN ERA",
      desc: "While Europe plunged into the dark ages, Islamic civilization entered the Muslim Golden Era, a golden age of science and knowledge that became the foundation of the modern world.",
      btnPrimary: "Explore Now",
      btnSecondary: "Read Articles",
    },
  };

  return (
    <section className="relative dark:bg-dark px-5 md:px-10 xl:px-20 py-24 overflow-hidden">
      {/* Aksen gradient kiri */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-prestige-gold/40 to-transparent rounded-full blur-3xl" />

      {/* Aksen gradient kanan */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-prestige-gold/30 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center bg-white dark:bg-light-dark rounded-2xl shadow-xl/20 border border-gray-100 dark:border-gray-800 px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-widest uppercase text-prestige-gold">
          {content[language].title}
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-300">
          {content[language].desc}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/ilmuan"
            className="px-8 py-3 rounded-full bg-prestige-gold text-white font-medium shadow hover:shadow-lg hover:opacity-90 transition"
          >
            {content[language].btnPrimary}
          </a>

          <a
            href="/artikel"
            className="px-8 py-3 rounded-full border border-prestige-gold text-prestige-gold hover:bg-prestige-gold hover:text-white transition"
          >
            {content[language].btnSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
