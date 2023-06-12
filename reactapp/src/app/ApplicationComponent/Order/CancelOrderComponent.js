import React from "react";
import { useDispatch } from "react-redux";
import { cancelOrderAction, requestCancelOrderToDB } from "../../State/OrderState/orderActions";

let CancelOrderButton = (props) => {
    let orderID = props.orderID;

    let dispatch = useDispatch()
    let clickToCancelOrder = (evt) => {
        // dispatch(cancelOrderAction(orderID));  // test code when DB was not set up - bypassing DB and update UI
        dispatch(requestCancelOrderToDB(orderID));
        evt.preventDefault();
    }

    return (
        <>
            <button onClick={clickToCancelOrder}>Cancel Order ID: {orderID}</button>
        </>
    )
}

export default CancelOrderButton;
