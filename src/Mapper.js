import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapper.css";
import { useState } from "react";
import {
  GeocodeEarthProvider,
  GeoSearchControl,
  OpenStreetMapProvider,
} from "leaflet-geosearch";
import icon from "./constants";
import L from "leaflet";
import "leaflet-geosearch/dist/geosearch.css";
import SearchBar from "./SearchBar";

// function LeafletgeoSearch() {
//   const map = useMap();
//   useEffect(() => {
//     const provider = new OpenStreetMapProvider();

//     const searchControl = new GeoSearchControl({
//       provider,
//       marker: {
//         icon,
//       },
//     });

//     map.addControl(searchControl);

//     return () => map.removeControl(searchControl);
//   }, []);

//   return null;
// }

function Mapper({ center }) {
  return (
    <div className="Mapper">
      <MapContainer center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=vpKbFCvCvtquORa0Q9Mr"
        />
        {/* <LeafletgeoSearch /> */}
        <SearchBar />
      </MapContainer>
    </div>
  );
}

export default Mapper;
