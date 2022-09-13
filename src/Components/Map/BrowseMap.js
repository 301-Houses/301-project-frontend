import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";

import { useRef, useMemo, useCallback } from "react";
import L from "leaflet";


const myPosition = [0, 0];


function LocationMarker() {
  const [position, setPosition] = useState(null);
  console.log();
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      console.log(e.latlng);
      myPosition = e.latlng;
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}


class HousesMap extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : [{}]
        }


    }

      componentDidMount() {
        console.log("Before");
         axios.get(`http://localhost:3001/house`).then(result => {
            console.log(result.data);
            this.setState({
                data : result.data,
            })
         })


        console.log("after");
    }

    render ()

    {
        const MapIcon = new L.icon({
            iconUrl: require("./../images/mountain.png"),
            iconSize: [40, 40],
          });
        let isReady = this.state.data.length > 0;    
        console.log(isReady);
        console.log(this.state.data);
        return (
            <MapContainer center={[33,35]} zoom={5} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <MarkerLayer data={cities} /> */}
              { isReady && this.state.data.map(house => {
                if (house.hasOwnProperty('lat') == false)
                    return;
                return (
                    <Marker position={[house.lat,house.long]} icon={MapIcon}>
                    <Popup>
                        <div>
                      <div style={{ width: "18rem" }}>
                        <img variant="top" src={house.imgURL} width={'100%'}/>
                        <div>
                          <h1>Card Title</h1>
                          <p>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                          </p>
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