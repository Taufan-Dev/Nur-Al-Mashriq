import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { locations } from '../../data/locations';
import { MAP_CENTER, MAP_ZOOM_LEVEL } from '../../utils/constants';

// Helper function to create custom image marker
const createCustomIcon = (imageUrl) => {
    return new L.DivIcon({
        className: 'custom-image-marker',
        html: `
            <div class="relative w-12 h-12 rounded-lg border-4 border-white shadow-lg overflow-hidden transform transition-transform hover:scale-110 hover:z-50 hover:border-indigo-500 duration-300">
                <img src="${imageUrl}" alt="Marker" class="w-full h-full object-cover" />
            </div>
        `,
        iconSize: [48, 48], // Tailwind w-12 h-12 + border
        iconAnchor: [24, 24], // Center the icon
        popupAnchor: [0, -24], // Pop up slightly above the top edge
    });
};

const InteractiveMap = () => {
    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={MAP_CENTER}
                zoom={MAP_ZOOM_LEVEL}
                scrollWheelZoom={true}
                zoomControl={false}
                minZoom={3}
                className="w-full h-full bg-[#aad3df]"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="bottomright" />

                {locations.map((location) => (
                    <Marker
                        key={location.id}
                        position={location.position}
                        icon={createCustomIcon(location.imageUrl)}
                    >
                        <Popup className="custom-popup rounded-lg overflow-hidden min-w-[200px]">
                            <div className="flex flex-col">
                                <img src={location.imageUrl} alt={location.name} className="w-full h-28 object-cover" />
                                <div className="p-4 text-center">
                                    <h3 className="font-bold text-lg text-indigo-700 leading-tight">{location.name}</h3>
                                    <p className="text-gray-600 text-sm mt-2">{location.description}</p>
                                    {location.readMoreUrl && (
                                        <Link
                                            to={`/museum/${location.id}`}
                                            className="inline-block mt-4 w-full px-4 py-2 bg-indigo-600 text-white !text-white text-sm font-semibold rounded shadow hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
                                        >
                                            Baca Selengkapnya
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default InteractiveMap;
