import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrderAction, requestCancelOrderToDB, fetchCanceledOrders } from "../../State/OrderState/orderActions";

let CancelOrderButton = (props) => {
    let orderID = props.orderID;
    let userid = useSelector(state => state.trainerReducer.Trainer._id) 

    let dispatch = useDispatch()
    let dispatchToFetchCanceledOrders = useDispatch();
    let clickToCancelOrder = (evt) => {
        // dispatch(cancelOrderAction(orderID));  // test code when DB was not set up - bypassing DB and update UI
        dispatch(requestCancelOrderToDB(orderID));
        setTimeout(() => {
            dispatchToFetchCanceledOrders(fetchCanceledOrders(userid));  // without delay, it fetches canceled order list before update is made from requesting cancel order
        }, "500");                                                       // there should be better way to resolve this
        evt.preventDefault();
    }

    return (
        <>
            <button onClick={clickToCancelOrder}>Cancel Order ID: {orderID.slice(-6)}</button>
        </>
    )
}

export default CancelOrderButton;
