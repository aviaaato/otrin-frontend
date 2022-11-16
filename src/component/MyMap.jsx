import React, { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer , Tooltip} from "react-leaflet";


const MyMap = ({filtered_prices, coordonnees}) => {

  const [markers, setMarkers] = useState([])
  //const [is_located, setIsLocated] = useState(false);
  const [coord, setCoord] = useState({lat: -19.87064, lon: 47.03499});
  const [isLoading, setIsLoading] = useState(false);

  const icon = L.icon({
    iconUrl: "marker.png",
    iconSize: [40]
  })

  useEffect(() => {
    setIsLoading(true);
    /**
     * TODO position of user
     */
    /*if(coordonnees.lat !== undefined && coordonnees.lon !== undefined){
       setCoord({lat: coordonnees.lat, lon: coordonnees.lon});
       setIsLocated(true);
    }else{
      let lat = -19.87064, lon = 47.03499;
      setCoord({lat: lat, lon: lon});
      setIsLocated(false);
    }*/
    setCoord({lat: -19.87064, lon: 47.03499});
    setMarkers(filtered_prices.prices);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, [filtered_prices, coordonnees])

  /**
   * TODO handleclik on marker
   */
  /*const handleMarkerClick = (e) => {
    e.preventDefault();
    console.log("click");
  }*/
  
  return (
    <React.Fragment>
      {isLoading ? <>
        <div className="d-flex justify-content-center pt-5 mt-5 pb-5">
          <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <h5 className="text-center text-muted mb-5">Chargement de la carte ...</h5>
      </>
      :
      <MapContainer center={[coord.lat, coord.lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers && markers.map((marker, index) => (
            <Marker key={index} 
            icon={icon}
            position={[marker.store.location.latitude, marker.store.location.longitude]}
            /*eventHandlers={{
              click : (e) => {
                console.log(e);
              },
            }}*/
            >
              <Tooltip direction="top" offset={[0, 0]} opacity={1}>
                {marker.product.name} <b>{marker.store.name}</b>  <i className="text-center">{marker.value} Ar</i> 
              </Tooltip>
            </Marker>
          ))}
      </MapContainer>
      }
    </React.Fragment>
  );
}

/**
 * { is_located === true &&
          <Marker icon={icon_home}
            position={[coord.lat, coord.lon]}>
              <Tooltip direction="top" offset={[0, 0]} opacity={1} permanent>
                Votre position 
              </Tooltip>
          </Marker>
        }
 */

export default MyMap;
