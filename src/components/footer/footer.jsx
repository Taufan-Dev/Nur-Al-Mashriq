import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      desc: "A digital gateway to explore the discoveries, figures, and historical legacies from the Islamic Golden Age that shaped modern civilization.",
      menuTitle: "Menu",
      servicesTitle: "Services",
      contactTitle: "Contact",
      menu: [
        { label: "Home", path: "/" },
        { label: "Scientists", path: "/ilmuan" },
        { label: "Museum", path: "/maps" },
        { label: "Articles", path: "/artikel" },
      ],
      services: [
        "Scholars Directory",
        "Interactive Artifacts",
        "Virtual Museum Tour",
        "Historical Articles"
      ],
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    },
    ID: {
      desc: "Gerbang digital untuk menelusuri penemuan, tokoh, dan peninggalan bersejarah dari era Keemasan Islam yang membentuk peradaban modern.",
      menuTitle: "Menu",
      servicesTitle: "Layanan",
      contactTitle: "Kontak",
      menu: [
        { label: "Beranda", path: "/" },
        { label: "Ilmuwan", path: "/ilmuan" },
        { label: "Museum", path: "/maps" },
        { label: "Artikel", path: "/artikel" },
      ],
      services: [
        "Direktori Tokoh",
        "Artefak Interaktif",
        "Tur Museum Virtual",
        "Artikel Sejarah"
      ],
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan"
    }
  };

  const text = content[language] || content.EN;

  return (
    <footer className="relative border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-dark">
      {/* aksen gradient halus */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-prestige-gold/40 to-transparent" />

      <div className="px-5 md:px-10 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif tracking-widest uppercase text-prestige-gold text-2xl">
              Nur Al-Mashriq
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-justify leading-relaxed pr-4">
              {text.desc}
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider">
              {text.menuTitle}
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {text.menu.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:text-prestige-gold transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider">
              {text.servicesTitle}
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {text.services.map((service, index) => (
                <li key={index} className="hover:text-prestige-gold transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider">
              {text.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 flex flex-col items-start">
              {/* Fake Contacts specifically themed for Golden Age vibe */}
              <li className="flex gap-4 group cursor-pointer w-full">
                <div className="w-10 h-10 rounded-full bg-prestige-gold/10 flex items-center justify-center group-hover:bg-prestige-gold transition-colors flex-shrink-0">
                  <FiMapPin className="text-prestige-gold group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="leading-tight">Kuningan, Jawa Barat</span>
                  <span className="text-xs text-gray-400">Universitas Kuningan</span>
                </div>
              </li>
              <li className="flex gap-4 group cursor-pointer w-full">
                <div className="w-10 h-10 rounded-full bg-prestige-gold/10 flex items-center justify-center group-hover:bg-prestige-gold transition-colors flex-shrink-0">
                  <FiMail className="text-prestige-gold group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="leading-tight">info@nuralmashriq.com</span>
                  <span className="text-xs text-gray-400">Tanya Kami Kapan Saja</span>
                </div>
              </li>
              <li className="flex gap-4 group cursor-pointer w-full">
                <div className="w-10 h-10 rounded-full bg-prestige-gold/10 flex items-center justify-center group-hover:bg-prestige-gold transition-colors flex-shrink-0">
                  <FiPhone className="text-prestige-gold group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="leading-tight">+62 812-3456-7890</span>
                  <span className="text-xs text-gray-400">Layanan Edukasi</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <p className="text-center md:text-left mb-4 md:mb-0 uppercase max-w-lg leading-relaxed">
            © {new Date().getFullYear()}{" "}
            <span className="font-serif tracking-widest text-prestige-gold text-sm lg:text-md ml-1 mr-1">
              jual sawah demi daftar TECHSOFT
            </span>. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="#" className="hover:text-prestige-gold transition">{text.privacy}</Link>
            <Link to="#" className="hover:text-prestige-gold transition">{text.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
