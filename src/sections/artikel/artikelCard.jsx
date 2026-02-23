import { Link } from "react-router-dom";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const ArtikelCard = ({ image, category, title, desc, date }) => {
  return (
    <Link
      to="/artikel/detail"
      className="
        block
        w-full
        border border-prestige-gold/70
        rounded-3xl
        p-6 md:p-8
        bg-white
        hover:shadow-lg
        transition-all
      "
    >
      <div className="grid md:grid-cols-7 gap-8 items-center">
        <div className="md:col-span-3 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-[220px] object-cover"
          />
        </div>

        <div className="md:col-span-4">
          <p className="text-prestige-gold text-xs font-semibold uppercase tracking-widest">
            {category}
          </p>

          <h3 className="text-xl font-semibold mt-3 mb-3">{title}</h3>

          <p className="text-gray-600">{desc}</p>

          <div className="mt-6 flex justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FiCalendar />
              <span>{date}</span>
            </div>

            <span className="flex items-center gap-1 text-prestige-gold font-semibold">
              Baca <FiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtikelCard;
