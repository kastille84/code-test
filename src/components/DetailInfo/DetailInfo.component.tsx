import React from "react";
import IRestaurant from "../../interface/restaurant";

import "./DetailInfo.style.css";

interface DetailInfoProps {
  restaurant: IRestaurant;
}

const DetailInfo: React.FunctionComponent<DetailInfoProps> = ({
  restaurant,
}) => {
  const displayPhone = () => {
    if ((restaurant.contact || {}).formattedPhone) {
      return (
        <h2 className="title dark-text">{restaurant.contact.formattedPhone}</h2>
      );
    } else {
      return null;
    }
  };

  const displayTwitter = () => {
    if ((restaurant.contact || {}).twitter) {
      return <h2 className="title dark-text">@{restaurant.contact.twitter}</h2>;
    } else {
      return null;
    }
  };

  return (
    <div className="detail-info">
      <div className="detail-info__header">
        <p className="title">{restaurant.name}</p>
        <p className="subtitle">{restaurant.category}</p>
      </div>
      <div className="detail-info__contact">
        <h2 className="title dark-text">
          {restaurant.location.formattedAddress[0]} <br />
          {restaurant.location.formattedAddress[1]}
        </h2>
        {displayPhone()}
        {displayTwitter()}
      </div>
    </div>
  );
};

export default DetailInfo;
