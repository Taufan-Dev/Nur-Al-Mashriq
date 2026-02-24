import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

/**
 * Prop Types:
 * @param {Object} location - The location data object
 * @param {string} location.id - The ID of the location
 * @param {string} location.name - The Name of the location
 * @param {string} location.description - The description of the location
 * @param {string} location.imageUrl - The main image URL
 * @param {string} location.region - The region or city (optional, fallback to default text)
 */
const MapPopupCard = ({ location }) => {
    return (
        <div className="w-[300px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden font-sans">
            {/* Header: Title */}
            <div className="p-4 pb-2 flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {location.name}
                </h3>
            </div>

            {/* Image Container */}
            <div className="px-4">
                <img
                    src={location.imageUrl}
                    alt={location.name}
                    className="w-full h-[180px] object-cover rounded-lg shadow-sm"
                />
            </div>

            {/* Content: Description */}
            <div className="p-4 pt-3">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {location.description.substring(0, 150)}
                    {location.description.length > 150 ? "..." : ""}
                </p>

                {/* Footer: Location & Link */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-1">
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                        <MapPin size={16} className="mr-1.5" />
                        <span>Timur Tengah / Eropa</span>
                    </div>

                    <Link
                        to={`/museum/${location.id}`}
                        className="flex items-center text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                    >
                        Detail Lainnya
                        <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MapPopupCard;
