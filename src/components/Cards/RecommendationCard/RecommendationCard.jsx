import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

/**
 * Prop Types:
 * @param {Object} item
 * @param {string} item.id
 * @param {string} item.title
 * @param {string} item.location
 * @param {string} item.imageUrl
 * @param {string} item.linkUrl
 */
const RecommendationCard = ({ item }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin size={16} className="mr-1.5" />
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>

            {/* Footer Button */}
            <Link
                to={item.linkUrl || "#"}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white text-center font-medium py-3 transition-colors duration-300"
            >
                Detail
            </Link>
        </div>
    );
};

export default RecommendationCard;
