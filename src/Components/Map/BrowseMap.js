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
const data = [
  {
    _id: "63209d30587281cea1c0618a",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572596.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 4,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 33,
    long: 34,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d3b1b08cfd5ea52b6ee",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572596.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 4,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 33,
    long: 34,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d3b1b08cfd5ea52b6ef",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3060228.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 3,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 31,
    long: 37,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d3e9068417625d0b523",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572596.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 4,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 33,
    long: 34,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d3e9068417625d0b524",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3060228.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 3,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 31,
    long: 37,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d3e9068417625d0b525",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572808.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 6,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 35,
    long: 36,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d449f8f6f758a48814e",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572596.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 4,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 33,
    long: 34,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d449f8f6f758a48814f",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3060228.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 3,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 31,
    long: 37,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d449f8f6f758a488150",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572808.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 6,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for sale",
    lat: 35,
    long: 36,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d4c53026b93f3abc758",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572596.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 4,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 33,
    long: 34,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d4c53026b93f3abc759",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3060228.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 3,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 31,
    long: 37,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
  {
    _id: "63209d4c53026b93f3abc75a",
    ispremium: false,
    imgURL: "https://wallpaperaccess.com/full/3572808.jpg",
    ownerName: "monther",
    houseAddress: "amman",
    email: "test2@gmail.com",
    houseSize: 150,
    numOfRoomse: 6,
    isSold: false,
    price: 2000,
    phoneNumber: "0654612345",
    status: "for rent",
    lat: 35,
    long: 36,
    poster_date: "2022-09-12T21:00:00.000Z",
    __v: 0,
  },
];

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
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
    };
  }

  componentDidMount() {
    console.log("Before");
    axios.get(`http://localhost:3001/house`).then((result) => {
      console.log(result.data);
      this.setState({
        data: result.data,
      });
    });

    console.log("after");
  }

  render() {
    const MapIcon = new L.icon({
      iconUrl: require("./mountain.png"),
      iconSize: [40, 40],
    });
    let isReady = this.state.data.length > 0;
    console.log(isReady);
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
                      <img variant="top" src={house.imgURL} width={"100%"} />
                      <div>
                        <h1>Card Title</h1>
                        <p>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
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
