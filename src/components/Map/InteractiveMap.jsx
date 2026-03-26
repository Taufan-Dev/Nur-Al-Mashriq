import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Polyline,
  useMap
} from "react-leaflet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { locations } from "../../data/locations";
import { MAP_CENTER, MAP_ZOOM_LEVEL } from "../../utils/constants";

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

const ThemeMapUpdater = ({ activeTheme }) => {
  const map = useMap();

  useEffect(() => {
    if (activeTheme) {
      // Temukan lokasi berdasarkan IDs
      const themeLocations = activeTheme.locationIds
        .map(id => locations.find(loc => loc.id === id))
        .filter(Boolean);
      
      if (themeLocations.length > 0) {
        const bounds = L.latLngBounds(themeLocations.map(loc => loc.position));
        map.fitBounds(bounds, { padding: [60, 60], animate: true, duration: 1.5 });
      }
    } else {
      // Reset view
      map.flyTo(MAP_CENTER, MAP_ZOOM_LEVEL, { animate: true, duration: 1.5 });
    }
  }, [activeTheme, map]);

  return null;
};

const InteractiveMap = ({ activeTheme }) => {
  const themedLocations = activeTheme 
    ? activeTheme.locationIds.map(id => locations.find(loc => loc.id === id)).filter(Boolean)
    : [];
  return (
    /* =========================
       PENTING: HEIGHT WAJIB ADA
    ========================= */
    <div className="w-full h-screen relative z-0">
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

        <ThemeMapUpdater activeTheme={activeTheme} />

        {/* Gambar rute polyline jika ada tema yang aktif */}
        {activeTheme && themedLocations.length > 1 && (
          <Polyline 
            positions={themedLocations.map(loc => loc.position)} 
            pathOptions={{ 
              color: activeTheme.color, 
              weight: 4, 
              opacity: 0.8, 
              dashArray: "10, 10" 
            }} 
          />
        )}

        {locations.map((location) => {
          // Jika ada tema aktif, buat sedikit pudar/transparan marker yang tidak relevan
          const isThemed = activeTheme ? activeTheme.locationIds.includes(location.id) : true;
          
          return (
          <Marker
            key={location.id}
            position={location.position}
            icon={createCustomIcon(location.imageUrl)}
            opacity={isThemed ? 1 : 0.4}
            zIndexOffset={isThemed ? 1000 : 0}
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
                  {location.name}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "5px",
                  }}
                >
                  {location.description.substring(0, 80)}...
                </p>

                <Link
                  to={`/museum/${location.id}`}
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "6px 10px",
                    backgroundColor: "#4f46e5",
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
        )})}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
