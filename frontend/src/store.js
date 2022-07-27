// import { createStore , combineReducers ,applyMiddleware } from 'redux'
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
// import {cartReducer} from './reducers/cartReducers'
import { cartReducer } from "./reducers/cartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from "./reducers/orderReducers";
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails:orderDetailsReducer,
  orderPay:orderPayReducer
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
// const middleware = [thunk]
// const store = createStore(reducer , initialState , composeWithDevTools(...middleware));
const store = configureStore({
  reducer,
  initialState,
  devTools: process.env.NODE_ENV !== "production", //only show devTools when in production
});
export default store;
