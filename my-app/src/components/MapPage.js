import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { useParams } from "react-router-dom";

function MapPage() {
    const {lat, lng} = useParams()
    console.log(lat, lng);
    const [geoData, setGeoData] = useState({
        lat: null,
        lng: null,
        first: true,
      });
    const center = [geoData.lat, geoData.lng];

    useEffect(() => {
        setGeoData({
            lat,
            lng
        })

    }, [lat, lng])
    return (
        <div>
            <MapContainer
            preferCanvas={true}
            center={center}
            zoom={4}
            style={{ height: "530px", zIndex: "0" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[geoData.lat, geoData.lng]}>
              
            </Marker>
          </MapContainer>
        </div>
    )
}

export default MapPage