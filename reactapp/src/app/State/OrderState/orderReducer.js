import * as actionTypes from "../actionTypes";

const initialState = []

const orderReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RECENT_ORDERS:
            let newState = action.payload.map((eachOrder)=>{return eachOrder});  // payload comes as - payload: recentOrdersfromDB (from orderActions)
            return newState;                        // action.payload.recentOrdersfromDB if comes with {} - payload: {recentOrdersfromDB} or {recentOrdersfromDB: recentOrdersfromDB}

        case actionTypes.CANCEL_ORDER:
            let newstate = action.payload.map((eachOrder)=>{return eachOrder});
            state.filter(item => item._id!=action.payload.id);
        default:
            return state;
    }
}

export default orderReducer;
