import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IRestaurantReducer } from '../../redux/reducers/restaurant';
import { StoreState } from '../../redux/root-reducer';
import { getRestaurants } from '../../redux/actions/restaurant';

import './ListView.style.css';
import ListViewItem from '../../components/ListViewItem/ListViewItem.component'; 
import DetailPane from '../../components/DetailPane/DetailPane.component';

interface ListViewProps {
  restaurant: IRestaurantReducer,
  getRestaurants: any,
}

const ListView:React.FunctionComponent<ListViewProps> = ({restaurant, getRestaurants}) => {

  useEffect(()=> {
    getRestaurants();
  },[]);

  const renderList = () => {
    if (restaurant.fetchingRestaurants) {
      return <p>Loading...</p>
    } else if (!restaurant.fetchingRestaurants && restaurant.fetchingRestaurantsError) {
      return <p>{restaurant.fetchingRestaurantsError}</p>
    } else {
      return (
        <React.Fragment>
          {restaurant.restaurants.map(rest => <ListViewItem key={rest.name} restaurant={rest}/>)}
        </React.Fragment>
      )
    }
  }

  return (
    <div className="list-view">
      {renderList()}
      {restaurant.restaurants.length %2 !== 0 && <div className="list-view-item list-view-item__extra"></div>}
      <DetailPane />
    </div>
  )
}

const mapStateToProps = (state: StoreState) => ({
  restaurant: state.restaurant
})

export default connect(
  mapStateToProps,
  {getRestaurants}
)(ListView);