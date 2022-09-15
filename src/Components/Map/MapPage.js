import React from "react";
import BrowseMap from "./BrowseMap";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class MapPage extends React.Component {
  render() {
    return (
      <>
        <div style={{}}>
          <Header />
          <BrowseMap />
          <Footer />
        </div>
      </>
    );
  }
}

export default MapPage;
