import React from "react";
import { useState } from "react";
import {  MapContainer, TileLayer , useMapEvents,Marker,Popup  } from "react-leaflet";
import { useRef, useMemo, useCallback } from "react";

const myPosition = [0,0];

export const Map = () => {
  const position = [0, 0];
  
  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MarkerLayer data={cities} /> */}
      <LocationMarker />
      <DraggableMarker myPosition={myPosition}/>
      
    </MapContainer>
  );
};


function LocationMarker() {
  const [position, setPosition] = useState(null)
  console.log()
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      console.log(e.latlng);
      myPosition  =e.latlng ;
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}



function DraggableMarker(props) {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(props.myPosition)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
          console.log(marker.getLatLng());
          
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  )
}

