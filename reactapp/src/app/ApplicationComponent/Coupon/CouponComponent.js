import React, { useState } from "react";
import { generateCouponAction } from "../../State/CouponState/CouponActions";
import { useSelector, useDispatch } from "react-redux";

let Coupon = () => {

    let [show, setShow] = useState(false);

    let couponNum = useSelector((state) => (state.couponReducer.couponNum));
    
    let dispatch = useDispatch();
    let generateCoupon = (evt) => {
        setShow(true);
        dispatch(generateCouponAction(Math.floor(100000 + Math.random() * 900000)))  // random 6 digits
        evt.preventDefault();
    }

    return (
        <>
        <button onClick={generateCoupon}>Generate Coupon</button>
        {show ? <>Coupon Code {couponNum} (10% discount) is applied!</> : ""}
        </>
    )
}

export default Coupon;
