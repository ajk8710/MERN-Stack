// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemComponent from "../Cart/CartItemComponent";
import { saveOrderToDB } from "../../State/OrderState/orderActions";

let RecentOrders = (prop) => {

    let recentOrdersForUser = useSelector(state => state.orderReducer);

    // JSON.stringify(recentOrdersForUser) =
    // [
    //     { "_id": "6483b79102c73743bb50d339",  "userid": "64792e90e2cb1cd4721bb677",  "username": "Red",
    //         "orderList": [ {"_id":"647bc207d3165a2f57b0ede8",  "name": "Poke Ball",  "price": 100, "desc": "Serves most basic needs",  "rating": 1,  "qty": 1},
    //                        {"_id":"647bc2a18075abfa8d1b0fea",  "name": "Super Ball",  "price": 200, "desc": "Serves better needs",  "rating": 2,  "qty": 2} ]
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

    // keep list of order ids
    let orderIDs = recentOrdersForUser.map((eachOrder)=>{return(eachOrder._id)});
    let orderIDIndex = 0;
    let incrementIndex = () => {
        orderIDIndex = orderIDIndex + 1;
    }
    // let [orderIDIndex, setOrderIDIndex] = useState(0);  // indexing starts from 0
    // let incrementIndex = () => {
    //     setOrderIDIndex(orderIDIndex + 1);
    // }

    let dispatch = useDispatch()
    let clickToCancelOrder = (orderID) => {
        // console.log(recentOrdersForUser.filter(eachOrder => eachOrder._id != orderID));
        console.log("Canceling the order")
        console.log("Index:", orderIDIndex);
        console.log("Order ID:", orderID);
        // dispatch(saveOrderToDB(orderID));

        
    }

    // I think I may have to create order item component - remove item button there, instead of cancel order button.

    return (
        <>
            <h1>Recent Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => {
                            return (
                                <>
                                    <h5><b>Order</b></h5>
                                    {
                                        order.map(item => {return <CartItemComponent item={item} key={item._id} readOnly={true}/>})
                                    }
                                    <button onClick={ () => clickToCancelOrder(orderIDs[orderIDIndex]) }>Cancel Order</button>
                                    {incrementIndex()}
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default RecentOrders
