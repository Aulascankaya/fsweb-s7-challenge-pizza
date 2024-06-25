import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/pizza.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { Icon } from "leaflet"; // icon gözükmüyordu düzeltme

// Marker ikonu için düzeltme
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

const LocationMarker = ({ setSelectedPosition }) => {
  useMapEvents({
    click(e) {
      setSelectedPosition(e.latlng);
    },
  });

  return null;
};

const MapComponent = (props) => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const{address, setAddress} = props


  const fetchAddress = async (lat, lng) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();
    setAddress(data.display_name);
   
  };

  const handleMapClick = (latlng) => {
    setSelectedPosition(latlng);
    fetchAddress(latlng.lat, latlng.lng);
  };

  return (
    <div>
      <MapContainer
        center={[41.015137, 28.97953]}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker setSelectedPosition={handleMapClick} />
        {selectedPosition && (
          //<Marker position={selectedPosition}></Marker>   icon gözükmüyordu düzeltme
          <Marker
            position={selectedPosition}
            icon={
              new Icon({
                iconUrl: iconRetinaUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          />
        )}
      </MapContainer>

      <div>
        <p>
          <span className="adress-select">Adresiniz:</span> {address}
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
