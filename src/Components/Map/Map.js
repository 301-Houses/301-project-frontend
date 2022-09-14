import React from "react";
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
// C:\Users\SUPER\Desktop\14-9\301-project-frontend\src\Components\Map\markersIcon.jpg
const myPosition = [0, 0];

const MapIcon = new L.icon({
  iconUrl: require("./markerTest.jpg"),
  iconSize: [40, 40],
});

const Map = (props) => {
  const position = [0, 0];
  // var map = L.map("map").fitWorld();
  // map.locate({ setView: true, maxZoom: 16 });
  if (props.position !== undefined) position = props.position;
  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MarkerLayer data={cities} /> */}
      <LocationMarker getPostion={props.getPostion} />
      <DraggableMarker getPostion={props.getPostion} myPosition={myPosition} />
    </MapContainer>
  );
};

function LocationMarker(props) {
  const [position, setPosition] = useState(null);
  console.log();

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      props.getPostion(e.latlng);
      setPosition(e.latlng);
      console.log(e.latlng);
    },
  });
  if (position) map.flyTo(position, map.getZoom());
  return position === null ? null : (
    <Marker icon={MapIcon} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function DraggableMarker(props) {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(props.myPosition);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          props.getPostion(marker.getLatLng());
          console.log(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      icon={MapIcon}
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

export default Map;
