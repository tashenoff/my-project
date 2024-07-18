import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from "leaflet";
import contactInfo from '../site.json';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";


const Map = () => {
  const { address } = contactInfo;
  const defaultPosition = [51.1694, 71.4491];

  let DefaultIcon = Leaflet.icon({
    ...Leaflet.Icon.Default.prototype.options,
    iconUrl: icon, 
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow
  });
  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        return { position: [parseFloat(lat), parseFloat(lon)], found: true };
      } else {
        console.error('No results found for the address.');
        return { position: defaultPosition, found: false };
      }
    } catch (error) {
      console.error('Error geocoding address:', error);
      return { position: defaultPosition, found: false };
    }
  };

  const [markerPosition, setMarkerPosition] = useState(defaultPosition);
  const [popupOpen, setPopupOpen] = useState(true); // Состояние для открытия попапа по умолчанию

  useEffect(() => {
    (async () => {
      const { position, found } = await geocodeAddress(address);
      setMarkerPosition(position);
      if (found) {
        setPopupOpen(true); // Открываем попап, если адрес был найден
      }
    })();
  }, [address]);

  return (
    <div className='relative z-40 bottom-0 h-[400px] left-0'>

      <MapContainer center={markerPosition} zoom={14} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition}>
          {popupOpen && (
            <Popup>
              {address}
            </Popup>
          )}
        </Marker>
      </MapContainer>

    </div>
  );
};

export default Map;
