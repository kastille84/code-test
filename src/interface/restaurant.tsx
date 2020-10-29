export interface IRestaurantContact {
  phone: string,
  formattedPhone: string,
  twitter: string
};

export interface IRestaurantLocation {
  address: string,
  crossStreet: string,
  lat: number,
  lng: number,
  postalCode: string,
  cc: string,
  city: string,
  state: string,
  country: string,
  formattedAddress: string[]
}

export default interface IRestaurant {
  name: string,
  backgroundImageURL: string,
  category: string,
  contact: IRestaurantContact,
  location: IRestaurantLocation
}