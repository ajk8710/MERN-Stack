import * as actionTypes from "../actionTypes";

export const getRecentOrdersAction = (recentOrdersfromDB) => {
    return {
        type: actionTypes.GET_RECENT_ORDERS,
        payload: recentOrdersfromDB
    }
}

export const getCanceledOrdersAction = (canceledOrdersfromDB) => {
    return {
        type: actionTypes.GET_CANCELED_ORDERS,
        payload: canceledOrdersfromDB
    }
}

export const cancelOrderAction = (orderID) => {
    return {
        type: actionTypes.CANCEL_ORDER,
        payload: orderID
    }
}

export const saveOrderToDB = (orderObj) => {
    console.log("Order Object:", orderObj);

    return function(dispatch) {
            // return function () {  - not calling dispatch(saveOrderToDB(orderObj)). Instead calling saveOrderToDB(orderObj)
            // Not using dispatch because react state doesn't need to be updated upon saveOrderToDB, but upon fetchRecentOrders.
            // - Actually I need it because fetchRecentOrders may get called before saveOrderToDB finishes,
            //   so I call fetchRecentOrders here and dispatch is needed to be initialized in functional component - so it's taking dispatch as parameter to be used with fetchRecentOrders

            // window.fetch - is reacts way to make ajax to server
            window.fetch("http://localhost:9000/order/api/saveorder", {
                method: 'POST',  // rest method type 
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderObj)
            })
            .then(resp => resp.json())
            .then((resp) => {
                console.log("response from DB", resp);
                dispatch(fetchRecentOrders(orderObj.userid));  // calling fetchRecentOrders after saving to DB finishes.
            })                                                 // if I call fetchRecentOrders elsewhere, it may get called before saveOrderToDB finishes.
            .catch((err) => {
                console.log("Error while getting response from DB", err)
            })
    }
};

export const fetchRecentOrders = (userid) => {

    return function (dispatch) {

        window.fetch("http://localhost:9000/order/api/getrecentorders", {
            method: 'POST', // rest method type, post (not get) because we need to pass argument userid
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid: userid})  // here, userid argument passed in to fetchOrder was a value, not object
        })
        .then(resp => resp.json())
        .then((resp) => {  // response is user's all orders with canceled=false: list of {_id, userid, username, orderList, canceled, orderDate} (empty list if no previous orders)
            console.log("response from DB while fetching user's recent orders", JSON.stringify(resp));
            
            dispatch(getRecentOrdersAction(resp));
            // dispatch(emptyTheCart());  // remove exisiting cart on UI
            
            // for (const item of resp.cartList) {
            //     console.log("item in for-of loop:", item);
            //     let action = addItemToCart(item);
            //     dispatch(action);
            // }
        })
        .catch((err) => {
            console.log("error while fetching user's recent orders", err)
        })
    }
};

export const fetchCanceledOrders = (userid) => {

    return function (dispatch) {

        window.fetch("http://localhost:9000/order/api/getcanceledorders", {
            method: 'POST', // rest method type, post (not get) because we need to pass argument userid
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid: userid})  // here, userid argument passed in to fetchOrder was a value, not object
        })
        .then(resp => resp.json())
        .then((resp) => {  // response is user's all orders with canceled=true: list of {_id, userid, username, orderList, canceled, orderDate} (empty list if no previous orders)
            console.log("response from DB while fetching user's canceled orders", JSON.stringify(resp));
            
            dispatch(getCanceledOrdersAction(resp));
        })
        .catch((err) => {
            console.log("error while fetching user's canceled orders", err)
        })
    }
};

export const requestCancelOrderToDB = (orderID) => {

    return function (dispatch) {

        window.fetch("http://localhost:9000/order/api/cancelorder", {
            method: 'POST',  // rest method type 
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderID})  // passing orderID as object {orderID: orderID} and stringfied
        })
        .then(resp => resp.json())
        .then((resp) => {  // response is true or false depending on curr time minus order time
            console.log("response from DB", resp);

            if (resp) {
                dispatch(cancelOrderAction(orderID));
                alert("Order canceled");
            }
            else {
                alert("Order cancel time limit has passed (5 mins). Please contact us.");
            }
        })
        .catch((err) => {
            console.log("Error while getting response from DB", err)
        })
    }
}
