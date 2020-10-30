import React, { useState } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

import { IRestaurantLocation } from "../../interface/restaurant";

interface MapProps {
  location: IRestaurantLocation;
  name: string;
}

const Map: React.FC<MapProps> = ({ location, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const GoogleMapComp = withGoogleMap((props) => (
    <GoogleMap center={{ lat: location.lat, lng: location.lng }} zoom={15}>
      <Marker
        position={{ lat: location.lat, lng: location.lng }}
        onClick={() => toggleOpen()}
      >
        {isOpen && (
          <InfoBox
            position={{ lat: location.lat, lng: location.lng }}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
          >
            <div
              style={{
                backgroundColor: "#43b379",
                padding: "12px",
                minWidth: "100px",
                opacity: "0.9",
              }}
            >
              <div style={{ fontSize: "10px", color: "#2a2a2a" }}>
                <h2 style={{ color: "white" }}>{name}</h2>
                <p style={{ color: "white" }}>{location.formattedAddress[0]}</p>
                <p style={{ color: "white" }}>{location.formattedAddress[1]}</p>
              </div>
            </div>
          </InfoBox>
        )}
      </Marker>
    </GoogleMap>
  ));

  return (
    <div className="map">
      <GoogleMapComp
        containerElement={<div className="gmap-container"></div>}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Map;
