import * as actionTypes from "../actionTypes";

const initialState = {
    couponNum : 1
}

const couponReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GENERATE_COUPON:
            return {...state, couponNum : action.payload}
        default:
            return state;
    }
}

export default couponReducer;
