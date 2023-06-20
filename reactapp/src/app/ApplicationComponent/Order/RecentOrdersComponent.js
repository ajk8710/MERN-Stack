// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemComponent from "../Cart/CartItemComponent";
import OrderItemComponent from "./OrderItemComponent";
import CancelOrderButton from "./CancelOrderComponent";
import { fetchProducts } from "../../State/CustomState/productActions";

let RecentOrders = (props) => {

    let recentOrdersForUser = useSelector(state => state.orderReducer.recentOrderList);
    let canceledOrdersForUser = useSelector(state => state.orderReducer.canceledOrderList);

    // JSON.stringify(recentOrdersForUser) =
    // [
    //     { "_id": "6483b79102c73743bb50d339",  "userid": "64792e90e2cb1cd4721bb677",  "username": "Red",
    //         "orderList": [ {"_id":"647bc207d3165a2f57b0ede8",  "name": "Poke Ball",  "price": 100, "desc": "Serves most basic needs",  "rating": 1,  "qty": 1},
    //                        {"_id":"647bc2a18075abfa8d1b0fea",  "name": "Super Ball",  "price": 200, "desc": "Serves better needs",  "rating": 2,  "qty": 2} ],
    //         "canceled": false,  "orderDate" :"2023-06-14T16:22:25.938Z"}
    //     },
    //     { Another Order }, { Another Order }...
    // ]
    // recentOrdersForUser.map((eachOrder)=>{return(console.log(eachOrder.orderList))});

    // console.log() to help understand
    let listOfOrderLists = recentOrdersForUser.map((eachOrder)=>{return(eachOrder.orderList)});  // list of orderList (orderList is list of items of the Order)
    for (let orderList of listOfOrderLists) {  // for each orderList (list of items) of the order
        for (let item of orderList) {          // for each item
            console.log(item);                 // print item
        }
    }

    // creating orders = [ [items..], [items..], [items..] ]
    let orders = [];
    let index = 0;
    for (let orderList of listOfOrderLists) {  // for each orderList (list of items) of the Order
        orders.push([]);                       // initialize an array to save items of the Order
        for (let item of orderList) {          // save each items to the array
            orders[index].push(item);
        }
        index++;                               // advance index of orders[]
    }
    // console.log(orders);

    // list of order ids = [orderID, orderID, orderID]
    let orderIDs = recentOrdersForUser.map((eachOrder)=>{return(eachOrder._id)});

    // list of order date = [orderDATE, orderDATE, orderDATE]
    let orderDates = recentOrdersForUser.map((eachOrder)=>{return(new Date(eachOrder.orderDate))});

    // index to be incremented as cancel button is created, so that each button is linked to orderIDs[orderIDIndex]
    let orderIDIndex = orders.length - 1;  // to iterate in reverse order
    let incrementIndex = () => {
        orderIDIndex--;
    }


    // For Canceled Orders

    // canceledOrdersForUser: [{"_id":"6489e94148f58ad90edb8012", "userid":"64792e90e2cb1cd4721bb677", "username":"Red",
    // "orderList":[{"_id":"647bc207d3165a2f57b0ede8","name":"Poke Ball","price":100,"desc":"Serves most basic needs","rating":1,"qty":1},
    // {"_id":"647bc2a18075abfa8d1b0fea","name":"Super Ball","price":200,"desc":"Serves better needs","rating":2,"qty":2}],
    // "canceled":true, "orderDate":"2023-06-14T16:22:25.938Z"}]

    let listOfOrderListsC = canceledOrdersForUser.map((eachOrder)=>{return(eachOrder.orderList)});  // list of orderList (orderList is list of items of the Order)
    console.log(listOfOrderListsC);

    // creating canceled orders = [ [items..], [items..], [items..] ]
    let ordersC = [];
    let indexC = 0;
    for (let orderList of listOfOrderListsC) {  // for each orderList (list of items) of the Order
        ordersC.push([]);                       // initialize an array to save items of the Order
        for (let item of orderList) {          // save each items to the array
            ordersC[indexC].push(item);
        }
        indexC++;                               // advance index of orders[]
    }

    // list of order ids = [orderID, orderID, orderID]
    let orderIDsC = canceledOrdersForUser.map((eachOrder)=>{return(eachOrder._id)});

    // list of order date = [orderDATE, orderDATE, orderDATE]
    let orderDatesC = canceledOrdersForUser.map((eachOrder)=>{return(new Date(eachOrder.orderDate))});

    // index to be incremented as iterating over canceled orders - [ [items..], [items..], [items..] ]
    let orderIDIndexC = ordersC.length - 1;  // to iterate in reverse order
    let incrementIndexC = () => {
        orderIDIndexC--;
    }

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dispatch = useDispatch();
    dispatch(fetchProducts());  // update product list from DB, so that (product._id==item._id) works on OrderItemComponent

    return (
        <>
            <h1>Recent Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.slice(0).reverse().map(itemsOfTheOrder => {  // slice(0).reverse() to iterate in reverse order
                            return (
                                <>
                                    <tr><td><b>Order Date: {months[orderDates[orderIDIndex].getMonth()]} {orderDates[orderIDIndex].getDate()}
                                        {" "}{orderDates[orderIDIndex].getFullYear()}, Order ID: {orderIDs[orderIDIndex].slice(-6)}</b></td></tr>
                                    {
                                        itemsOfTheOrder.map(item => {return <OrderItemComponent item={item} key={item._id} wasCanceled={false}/>})
                                    }
                                    {/* <button onClick={ () => clickToCancelOrder() }>Cancel Order</button> */}
                                    <tr><td><CancelOrderButton orderID={orderIDs[orderIDIndex]} key={orderIDs[orderIDIndex]}/></td></tr>
                                    {incrementIndex()}
                                </>
                            );
                        })
                    }
                </tbody>
            </table>

            <h1>Canceled Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordersC.slice(0).reverse().map(itemsOfTheOrder => {  // slice(0).reverse() to iterate in reverse order
                            return (
                                <>
                                    <tr><td><b>Order Date: {months[orderDatesC[orderIDIndexC].getMonth()]} {orderDatesC[orderIDIndexC].getDate()}
                                        {" "}{orderDatesC[orderIDIndexC].getFullYear()}, Order ID: {orderIDsC[orderIDIndexC].slice(-6)}</b></td></tr>
                                    {
                                        itemsOfTheOrder.map(item => {return <OrderItemComponent item={item} key={item._id} wasCanceled={true}/>})
                                    }
                                    {incrementIndexC()}
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default RecentOrders;
