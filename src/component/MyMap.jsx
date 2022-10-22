import React, { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer , Tooltip} from "react-leaflet";


const MyMap = ({filtered_prices}) => {

  const [markers, setMarkers] = useState([])

  const icon = L.icon({
    iconUrl: "marker.png",
    iconSize: [40]
  })

  let lat = -19.87064;
  let lon = 47.03499;

  useEffect(() => {
    setMarkers(filtered_prices.prices);
  }, [filtered_prices])


  return (
    <React.Fragment>
      <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers && markers.map((marker, index) => (
            <Marker key={index} 
            icon={icon}
            position={[marker.store.location.latitude, marker.store.location.longitude]}
            >
              <Tooltip direction="top" offset={[0, 0]} opacity={1} permanent>
                {marker.product.name} <b>{marker.store.name}</b>  <i className="text-center">{marker.value} Ar</i> 
              </Tooltip>
            </Marker>
          ))}
      </MapContainer>
    </React.Fragment>
  );
}

export default MyMap;
