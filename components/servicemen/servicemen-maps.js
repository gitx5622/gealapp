import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "../../styles/mapStyles";

const Map = ({ latitude, longitude }) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{
          lat: latitude,
          lng: longitude,
        }}
        icon={{
          url: `/favicon-32x32.png`,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function ServicemenMaps({ lat, lng }) {
  return (
    <div style={{ width: "40vw", height: "70vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS
          }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        latitude={lat}
        longitude={lng}
      />
    </div>
  );
}
