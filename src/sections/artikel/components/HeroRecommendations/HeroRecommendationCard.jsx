import React from "react";
import { Link } from "react-router-dom";

/**
 * Prop Types:
 * @param {Object} item - The recommendation data object
 * @param {string} item.id - The ID
 * @param {string} item.title - The Name/Title of the recommendation
 * @param {string} item.description - A short description
 * @param {string} item.imageUrl - The image URL
 * @param {string} item.linkUrl - URL for the detail button
 */
const HeroRecommendationCard = ({ item }) => {
    return (
        <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Image Container */}
            <div className="h-[200px] w-full overflow-hidden shrink-0">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                </p>
            </div>

            {/* Footer Button (Full Width) */}
            <div className="mt-auto">
                <Link
                    to={item.linkUrl || "#"}
                    className="block w-full bg-[#f87114] hover:bg-[#ea580c] text-white text-center font-semibold py-3.5 transition-colors duration-300"
                >
                    Detail
                </Link>
            </div>
        </div>
    );
};

export default HeroRecommendationCard;
