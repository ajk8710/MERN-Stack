import * as actionTypes from "../actionTypes";

export const getRecentOrdersAction = (recentOrdersfromDB) => {
    return {
        type: actionTypes.GET_RECENT_ORDERS,
        payload: recentOrdersfromDB
    }
}

export const cancelOrder = (order) => {
    return {
        type: actionTypes.CANCEL_ORDER,
        payload: order
    }
}

export const saveOrderToDB = (orderObj) => {
    console.log("Order Object:", orderObj);
    // return function(dispatch) {}
    // return function () {  - not calling dispatch(saveOrderToDB(orderObj)). Instead calling saveOrderToDB(orderObj).

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
        })
        .catch((err) => {
            console.log("Error while getting response from DB", err)
        })
    // }
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
        .then((resp) => {  // response is user's all orders: list of {userid, username, orderList}
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
