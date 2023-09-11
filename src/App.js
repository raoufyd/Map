import { map } from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useState } from "react";
import "./App.css";
import Mapper from "./Mapper";
import SearchBar from "./SearchBar";

function App() {
  const center = [51.505, -0.09];

  return (
    <div className="App">
      <Mapper center={center} />
    </div>
  );
}

export default App;
