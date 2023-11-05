import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk";

import userReducer from "./UserState/userReducer";
import productReducer from "./ProductState/productReducers";

// custom middleware function to log action raised
const logger = () => (next) => (action) => {
    // currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action);
    return next(action);  //move to the actual execution
}

const rootReducer = combineReducers({
    userReducer,  // userReducer : userReducer - using short hand
    productReducer
})

// create, configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},  // inital state if we want to set from store instead of reducer
    applyMiddleware(logger, thunk)
)
