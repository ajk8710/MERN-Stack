import * as actionTypes from "../actionTypes";

const initialState = {
    recentOrderList: [],
    canceledOrderList: []
}

const orderReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RECENT_ORDERS:
            return {...state, recentOrderList: action.payload};  // payload comes as - payload: recentOrdersfromDB (from orderActions)
                                                                 // it would be action.payload.recentOrdersfromDB if comes with {} - payload: {recentOrdersfromDB} or {recentOrdersfromDB: recentOrdersfromDB}
        case actionTypes.GET_CANCELED_ORDERS:
            return {...state, canceledOrderList: action.payload};

        case actionTypes.CANCEL_ORDER:
            return {...state, recentOrderList: state.recentOrderList.filter(item => item._id!=action.payload)};  // payload comes as - payload: orderID (from orderActions)
            // return state.filter(item => item._id!=action.payload.orderID);  // it would be this if payload comes as - payload: {orderID} (from orderActions) with brackets meaning {orderID: orderID}
        
        default:
            return state;
    }
}

export default orderReducer;
