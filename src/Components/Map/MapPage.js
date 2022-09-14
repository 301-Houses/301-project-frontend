import React from "react";
import BrowseMap from "./BrowseMap";
import Map from "./Map";
import "leaflet/dist/leaflet.css";

class MapPage extends React.Component {
  render() {
    return (
      <>
        <div style={{}}>
          <BrowseMap />
        </div>
      </>
    );
  }
}

export default MapPage;
