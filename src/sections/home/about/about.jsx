import { FiPlay } from "react-icons/fi";
import { useLanguage } from "../../../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const content = {
    ID: {
      story: "Nur Al-Mashriq",
      titlePart1: "Masa Keemasan Islam Inspirasi Teknologi ",
      titlePart2: "Peradaban Modern.",
      tags: {
        sejarah: "Sejarah",
        sains: "Sains",
        tokoh: "Tokoh",
      },
      aboutUs: "Tentang Kami",
      desc: "Nur Al-Mashriq menghubungkan masa lalu yang gilang-gemilang dengan saat ini. Di masa Eropa terjerumus dalam kegelapan, peradaban Islam menjadi mercusuar ilmu pengetahuan, memberikan sumbangsih tanpa batas untuk sains, arsitektur, dan pelestarian pengetahuan umat manusia yang membentuk pondasi awal dari kemajuan dunia modern saat ini.",
      stats: {
        ilmuwan: "Tokoh Ilmuwan",
        artefak: "Artefak Edukasi",
        museum: "Museum Bersejarah",
        pengunjung: "Pengunjung",
      },
      btnLabel: "WATCH INTRO",
    },
    EN: {
      story: "OUR STORY",
      titlePart1: "The Islamic Golden Age inspires modern ",
      titlePart2: "Technology & Civilization.",
      tags: {
        sejarah: "History",
        sains: "Science",
        tokoh: "Figures",
      },
      aboutUs: "About Us",
      desc: "Nur Al-Mashriq connects the glorious past with the present. When Europe was plunged into the dark ages, Islamic civilization became a beacon of knowledge, providing limitless contributions to science, architecture, and the preservation of human knowledge that formed the foundation for the advancement of today's modern world.",
      stats: {
        ilmuwan: "Scientists",
        artefak: "Digital Artifacts",
        museum: "Historical Museums",
        pengunjung: "Visitors",
      },
      btnLabel: "WATCH INTRO",
    },
  };

  return (
    <section className="bg-white dark:bg-[#101214] py-24 px-5 md:px-10 xl:px-20 text-gray-800 dark:text-white font-sans overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
        {/* === LEFT COLUMN === */}
        <div className="flex flex-col gap-12">
          {/* Label & Heading */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-semibold">
              <span>{content[language].story}</span>
              <div className="w-12 h-[1px] bg-gray-300 dark:bg-gray-600" />
            </div>

            <div className="relative pl-6">
              {/* Gradient line vertical */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-prestige-gold via-prestige-gold/50 to-transparent rounded-full" />
              <h2 className="text-2xl md:text-4xl font-bold leading-[1.2] text-gray-900 dark:text-ethereal-white">
                {content[language].titlePart1}
                <span className="text-prestige-gold">
                  {content[language].titlePart2}
                </span>
              </h2>
            </div>
          </div>

          {/* Large Vertical Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] relative group mt-auto border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1744132241239-2e02b0d7c9f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sejarah Islam"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition duration-500" />
          </div>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="flex flex-col gap-10">
          {/* Two Small Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl relative overflow-hidden h-[220px] group shadow-xl border border-gray-100 dark:border-white/5 bg-gray-100 dark:bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=800&q=80"
                alt="Sains"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 dark:bg-black/30" />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="mb-2 w-fit bg-black/70 px-3 py-1 text-xs text-white rounded uppercase tracking-wide">
                  {content[language].tags.sejarah}
                </span>
                <span className="mb-2 w-fit bg-black/70 px-3 py-1 text-xs text-white rounded uppercase tracking-wide">
                  {content[language].tags.sains}
                </span>
              </div>
            </div>

            <div className="rounded-3xl relative overflow-hidden h-[220px] group shadow-xl border border-gray-100 dark:border-white/5 bg-gray-100 dark:bg-white/5">
              <img
                src="https://static.wixstatic.com/media/7335d9_d805c34d74434cdaa0fbdadbfbb03cba~mv2.jpeg/v1/fill/w_568,h_588,al_c,lg_1,q_80,enc_avif,quality_auto/7335d9_d805c34d74434cdaa0fbdadbfbb03cba~mv2.jpeg"
                alt="Arsitektur"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 dark:bg-black/30" />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="mb-2 w-fit bg-black/70 px-3 py-1 text-xs text-white rounded uppercase tracking-wide">
                  {content[language].tags.tokoh}
                </span>
              </div>
            </div>
          </div>

          {/* Text Description */}

          <h3 className="flex gap-2 font-serif font-extralight tracking-widest uppercase text-prestige-gold text-base lg:text-2xl">
            {content[language].aboutUs}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-[15px] text-justify leading-relaxed ">
            {content[language].desc}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                50+
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {content[language].stats.ilmuwan}
              </p>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                100+
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {content[language].stats.artefak}
              </p>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                15+
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {content[language].stats.museum}
              </p>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                20K+
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {content[language].stats.pengunjung}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
