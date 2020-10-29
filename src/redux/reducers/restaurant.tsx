import { Action } from '../actions/types';
import constants from '../constants';
import IRestaurant from '../../interface/restaurant'

export interface IRestaurantReducer {
  restaurants: IRestaurant[],
  fetchingRestaurants: boolean,
  fetchingRestaurantsError: string,
  selectedRestaurant: IRestaurant | null
}

const initialState = {
  restaurants: [],
  fetchingRestaurants: false,
  fetchingRestaurantsError: '',
  selectedRestaurant: null,
}

export default (state:IRestaurantReducer = initialState, action:Action) => {
  switch(action.type) {
    case constants.RESTAURANT.GET_RESTAURANTS:
      return {
        ...state,
        fetchingRestaurants: true
      };
    case constants.RESTAURANT.GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        fetchingRestaurants: false,
        restaurants: action.payload
      };
    case constants.RESTAURANT.GET_RESTAURANTS_FAIL:
      return {
        ...state,
        fetchingRestaurants: false,
        fetchingRestaurantsError: action.payload
      };
    case constants.RESTAURANT.SET_SELECTED_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload
      }
    default:
      return state;
  }
}

