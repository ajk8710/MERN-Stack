import * as actionTypes from "../actionTypes";

const initialState = []

const orderReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RECENT_ORDERS:
            let newState = action.payload.map((eachOrder)=>{return eachOrder});  // payload comes as - payload: recentOrdersfromDB (from orderActions)
            return newState;                        // action.payload.recentOrdersfromDB if comes with {} - payload: {recentOrdersfromDB} or {recentOrdersfromDB: recentOrdersfromDB}

        case actionTypes.CANCEL_ORDER:
            return state.filter(item => item._id!=action.payload);  // Do this if payload comes as - payload: orderID (from orderActions)
            // return state.filter(item => item._id!=action.payload.orderID);  // Do this if payload comes as - payload: {orderID} (from orderActions) with brackets meaning {orderID: orderID}
            
        default:
            return state;
    }
}

export default orderReducer;
