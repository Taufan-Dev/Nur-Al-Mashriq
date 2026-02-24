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
import MapPopupCard from "./MapPopupCard";

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

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={createCustomIcon(location.imageUrl)}
          >
            <Popup
              className="custom-popup"
              minWidth={300}
              maxWidth={300}
            >
              <MapPopupCard location={location} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
