import * as actionTypes from "../actionTypes";

export const generateCouponAction = (couponNum) => {
    return {
        type : actionTypes.GENERATE_COUPON,
        payload : couponNum
    }
    
}
