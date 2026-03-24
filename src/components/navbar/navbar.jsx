import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {
  FiMap,
  FiUsers,
  FiHome,
  FiFileText,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const menuItems = [
    {
      label: language === "ID" ? "Beranda" : "Home",
      path: "/",
      icon: <FiHome />,
    },
    {
      label: language === "ID" ? "Ilmuwan" : "scientist",
      path: "/ilmuan",
      icon: <FiUsers />,
    },
    {
      label: language === "ID" ? "museum" : "museum",
      path: "/maps",
      icon: <FiMap />,
    },
    {
      label: language === "ID" ? "Artikel" : "Articles",
      path: "/artikel",
      icon: <FiFileText />,
    },
  ];

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <nav className="glass-crystal rounded-full px-6 md:px-8 py-4 flex items-center justify-between relative">
        <Link
          to="/"
          className="font-serif text-xl tracking-widest uppercase text-prestige-gold"
        >
          Nur Al-Mashriq
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-sans">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm uppercase tracking-widest transition-colors
                ${isActive ? "text-prestige-gold" : "text-gray-800 hover:text-prestige-gold dark:text-gray-200 dark:hover:text-prestige-gold"}`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 font-sans">
          <button
            onClick={toggleLanguage}
            className="text-sm font-bold px-3 py-1 border border-prestige-gold rounded-full text-gray-800 dark:text-gray-200"
          >
            {language}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-prestige-gold"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-prestige-gold focus:outline-none"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* --- MOBILE DROPDOWN MENU --- */}
        {open && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-2 glass-crystal bg-white/80 dark:bg-deep-forest/80 rounded-3xl p-6 flex flex-col gap-6 md:hidden z-50 animate-fade-in shadow-2xl shadow-forest/10 border border-prestige-gold/30">
            <div className="flex flex-col gap-5 border-b border-prestige-gold/20 pb-6">
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 text-base uppercase tracking-widest transition-colors font-sans font-bold
                    ${
                      isActive
                        ? "text-prestige-gold"
                        : "text-forest hover:text-prestige-gold dark:text-gray-200 dark:hover:text-prestige-gold"
                    }`
                  }
                >
                  <span className="text-xl text-prestige-gold/80">
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={toggleLanguage}
                className="text-sm font-bold px-5 py-2 border-[1.5px] border-prestige-gold rounded-full text-forest dark:text-ethereal-white active:bg-prestige-gold active:text-white transition-colors"
              >
                Lang: {language}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-2xl text-prestige-gold p-3 bg-prestige-gold/10 dark:bg-white/5 rounded-full"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
