import { Action } from "@remix-run/router";
import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
};

export const setProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, payload };

    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
