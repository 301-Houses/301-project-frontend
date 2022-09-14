import React from "react";
import axios from "axios";
import './MapCard.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";


class HousesMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/house`).then((result) => {
      this.setState({
        data: result.data,
      });
    });

  }

  render() {
    const MapIcon = new L.icon({
      iconUrl: require("./marker1.png"),
      iconSize: [25, 20],
    });
    let isReady = this.state.data.length > 0;
    console.log(this.state.data);
    return (
      <MapContainer center={[33, 35]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <MarkerLayer data={cities} /> */}
        {isReady &&
          this.state.data.map((house) => {
            if (house.hasOwnProperty("lat") == false) return;
            return (
              <Marker position={[house.lat, house.long]} icon={MapIcon}>
                <Popup>
                  <div>
                    <div style={{ width: "18rem" }}>
                      <img variant="top" src={house.imgURL} width={"100%"} alt="houseMap" />
                      <div>
                      <h3><b>owner name: </b>{house.ownerName}</h3>
                        <p><b>House size:</b>{house.houseSize}</p>
                        <p><b>Roomse Number :</b>{house.numOfRoomse}</p>
                        <p><b>{house.status}</b></p>

                        <h4 id="price"><b>price :</b>{house.price}$</h4>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    );
  }
}

export default HousesMap;
