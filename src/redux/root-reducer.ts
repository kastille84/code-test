import { combineReducers } from "redux";
import restaurantReducer, { IRestaurantReducer } from "./reducers/restaurant";

export interface StoreState {
  restaurant: IRestaurantReducer;
}

export default combineReducers<StoreState>({
  restaurant: restaurantReducer,
});
