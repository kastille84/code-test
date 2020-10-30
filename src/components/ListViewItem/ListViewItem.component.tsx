import React from "react";
import { connect } from "react-redux";

import bg from "../../images/cellGradientBackground@2x.png";
import IRestaurant from "../../interface/restaurant";
import { setSelectedRestaurant } from "../../redux/actions/restaurant";

import "./ListViewItem.style.css";

interface ListViewItemProp {
  restaurant: IRestaurant;
  setSelectedRestaurant: any;
}

const ListViewItem: React.FunctionComponent<ListViewItemProp> = ({
  restaurant,
  setSelectedRestaurant,
}) => {
  return (
    <div
      className="list-view-item"
      style={{
        backgroundImage: `
      url('${bg}'), 
      url('${restaurant.backgroundImageURL}'),
      linear-gradient(
        180deg,
        rgba(255,255,255,0.2413340336134454) 0%, rgba(0,0,0,1) 77%
      )
    `,
      }}
      onClick={() => {
        setSelectedRestaurant(restaurant);
      }}
    >
      <section className="list-view-item__header">
        <p className="title">{restaurant.name}</p>
        <p className="subtitle">{restaurant.category}</p>
      </section>
    </div>
  );
};

export default connect(null, { setSelectedRestaurant })(ListViewItem);
