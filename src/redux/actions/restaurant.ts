import constants from "../constants";
import { Dispatch } from "redux";
import axios from "axios";
import IRestaurant from "../../interface/restaurant";

export interface IRestaurantAction {
  type: string;
  payload: any;
}

export const getRestaurants = () => {
  return async (dispatch: Dispatch) => {
    // dispatch indicates beginning of fetching restaurants
    dispatch<IRestaurantAction>({
      type: constants.RESTAURANT.GET_RESTAURANTS,
      payload: true,
    });

    // attempting to fetch restaurants
    try {
      const response = await axios.get("/restaurants.json", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Credentials": true,
        },
      });
      const {
        data: { restaurants },
      } = response;
      dispatch<IRestaurantAction>({
        type: constants.RESTAURANT.GET_RESTAURANTS_SUCCESS,
        payload: restaurants,
      });
    } catch (error) {
      dispatch<IRestaurantAction>({
        type: constants.RESTAURANT.GET_RESTAURANTS_FAIL,
        payload:
          "Whoops! Something went wrong. Please refresh the page and try again. If all else fails, contact Edwin Martinez: edwin.martinez.dev@gmail.com",
      });
    }
  };
};

export const setSelectedRestaurant = (rest: IRestaurant) => {
  if (!rest) {
    return {
      type: constants.RESTAURANT.SET_SELECTED_RESTAURANT,
      payload: null,
    };
  } else {
    return {
      type: constants.RESTAURANT.SET_SELECTED_RESTAURANT,
      payload: rest,
    };
  }
};
