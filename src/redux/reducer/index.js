import { setProductsReducer, selectProductReducer } from "./productsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  allProducts: setProductsReducer,
  selectedProduct: selectProductReducer,
});

export default reducers;
