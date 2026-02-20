import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {
  FiMap,
  FiCoffee,
  FiShoppingBag,
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
      label: language === "ID" ? "Wisata" : "Tourism",
      path: "/wisata",
      icon: <FiMap />,
    },
    {
      label: language === "ID" ? "Kuliner" : "Culinary",
      path: "/kuliner",
      icon: <FiCoffee />,
    },
    {
      label: language === "ID" ? "UMKM" : "Businesses",
      path: "/umkm",
      icon: <FiShoppingBag />,
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
                ${isActive ? "text-prestige-gold" : "hover:text-prestige-gold"}`
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
            className="text-sm font-bold px-3 py-1 border border-prestige-gold rounded-full"
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
          className="md:hidden text-2xl text-prestige-gold"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
