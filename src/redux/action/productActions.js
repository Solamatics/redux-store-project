import { ActionTypes } from "../constants/actionTypes";

//action creator to set all products
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

//action creator to select single product
export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECT_PRODUCT,
    payload: product,
  };
};

//action  creator to remove product
export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
  };
};
