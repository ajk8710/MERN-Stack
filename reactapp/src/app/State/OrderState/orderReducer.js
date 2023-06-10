import * as actionTypes from "../actionTypes";

const initialState = []

const orderReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RECENT_ORDERS:
            let newState = action.payload.map((eachOrder)=>{return eachOrder})  // payload comes as - payload: order (from orderActions)
            return newState                                                     // action.payload.order if comes with {} - payload: {order} or {order: order}
        default:
            return state;
    }
}

export default orderReducer;
