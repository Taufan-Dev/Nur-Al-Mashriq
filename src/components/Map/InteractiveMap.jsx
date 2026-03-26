import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { locations } from "../../data/locations";
import { MAP_CENTER, MAP_ZOOM_LEVEL } from "../../utils/constants";
import { useLanguage } from "../../context/LanguageContext";

/* =========================
   FIX ICON BUG VITE
========================= */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* =========================
   CUSTOM IMAGE MARKER
========================= */
const createCustomIcon = (imageUrl) => {
  return new L.DivIcon({
    className: "custom-image-marker",
    html: `
      <div style="
        width:48px;
        height:48px;
        border-radius:12px;
        border:4px solid white;
        overflow:hidden;
        box-shadow:0 4px 10px rgba(0,0,0,0.3);
      ">
        <img src="${imageUrl}" style="
          width:100%;
          height:100%;
          object-fit:cover;
        " />
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -24],
  });
};

const InteractiveMap = () => {
  const { language } = useLanguage();
  const [showOverlay, setShowOverlay] = React.useState(true);

  return (
    /* =========================
       PENTING: HEIGHT WAJIB ADA
    ========================= */
    <div 
      className="w-full h-[600px] relative z-0 overflow-hidden"
    >
      {/* Black transparent overlay instruction */}
      {showOverlay && (
        <div 
          className="absolute inset-0 z-1000 bg-black/60 flex items-center justify-center cursor-pointer transition-opacity duration-300"
          onClick={() => setShowOverlay(false)}
          onTouchStart={() => setShowOverlay(false)}
          onWheel={() => setShowOverlay(false)}
        >
          <div className="text-white text-xl md:text-2xl font-bold flex flex-col items-center gap-3 animate-pulse pointer-events-none">
            <span className="text-4xl">👆</span>
            {language === 'ID' ? 'Tekan atau klik untuk mulai berinteraksi' : 'Tap or click to explore'}
          </div>
        </div>
      )}
      <MapContainer
        center={MAP_CENTER}
        zoom={MAP_ZOOM_LEVEL}
        scrollWheelZoom={true}
        zoomControl={false}
        minZoom={3}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={createCustomIcon(location.imageUrl)}
          >
            <Popup>
              <div style={{ width: "200px" }}>
                <img
                  src={location.imageUrl}
                  alt={location.name}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h3
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  {location[language]?.name || location.EN.name}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "5px",
                  }}
                >
                  {(location[language]?.description || location.EN.description).substring(0, 80)}...
                </p>

                <Link
                  to={`/museum/${location.id}`}
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "6px 10px",
                    backgroundColor: "#c5a059",
                    color: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
