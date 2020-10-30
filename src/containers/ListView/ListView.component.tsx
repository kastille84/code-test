import React, { useEffect } from "react";
import { connect } from "react-redux";

import { IRestaurantReducer } from "../../redux/reducers/restaurant";
import { StoreState } from "../../redux/root-reducer";
import { getRestaurants } from "../../redux/actions/restaurant";

import "./ListView.style.css";
import ListViewItem from "../../components/ListViewItem/ListViewItem.component";
import DetailPane from "../../components/DetailPane/DetailPane.component";
import Error from "../../components/Error/Error.component";
import Loading from "../../components/Loading/Loading.component";

interface ListViewProps {
  restaurant: IRestaurantReducer;
  getRestaurants: any;
}

const ListView: React.FunctionComponent<ListViewProps> = ({
  restaurant,
  getRestaurants,
}) => {
  useEffect(() => {
    getRestaurants();
  }, []);

  const renderList = () => {
    if (restaurant.fetchingRestaurants) {
      return <Loading color="#43e895" height={75} width={75} />;
    } else if (
      !restaurant.fetchingRestaurants &&
      restaurant.fetchingRestaurantsError
    ) {
      return <Error message={restaurant.fetchingRestaurantsError} />;
    } else {
      return (
        <React.Fragment>
          {restaurant.restaurants.map((rest) => (
            <ListViewItem key={rest.name} restaurant={rest} />
          ))}
        </React.Fragment>
      );
    }
  };

  return (
    <div className="list-view">
      {renderList()}
      {restaurant.restaurants.length % 2 !== 0 && (
        <div className="list-view-item list-view-item__extra"></div>
      )}
      <DetailPane />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  restaurant: state.restaurant,
});

export default connect(mapStateToProps, { getRestaurants })(ListView);
