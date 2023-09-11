import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import icon from "./constants";

function SearchBar() {
  const map = useMap();

  const provider = new OpenStreetMapProvider();
}

export default SearchBar;
