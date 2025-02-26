import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png", // Αντικατάστησε με το σωστό path
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Map({ locations }) {
  return (
    <MapContainer 
        center={[36.343871992716146, 28.19742289414295]} 
        zoom={14} 
        className="h-full w-full z-0"
        scrollWheelZoom={false} // Απενεργοποίηση zoom με ροδέλα ποντικιού
        style={{ position: 'relative' }}
        >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {locations.map((location) => (
        <Marker key={location.id} position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
