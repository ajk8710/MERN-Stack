// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

import React from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "../Cart/CartItemComponent";

let RecentOrders = (prop) => {

    let recentOrdersForUser = useSelector(state => state.orderReducer);

    // JSON.stringify(recentOrders) =
    // [
    //     { "_id": "6483b79102c73743bb50d339",  "userid": "64792e90e2cb1cd4721bb677",  "username": "Red",
    //         "orderList": [ {"_id":"647bc207d3165a2f57b0ede8",  "name": "Poke Ball",  "price": 100, "desc": "Serves most basic needs",  "rating": 1,  "qty": 1},
    //                        {"_id":"647bc2a18075abfa8d1b0fea",  "name": "Super Ball",  "price": 200, "desc": "Serves better needs",  "rating": 2,  "qty": 2} ]
    //     },
    //     { Another Order }, { Another Order }...
    // ]
    // recentOrdersForUser.map((eachOrder)=>{return(console.log(eachOrder.orderList))});

    let listOfOrderList = recentOrdersForUser.map((eachOrder)=>{return(eachOrder.orderList)});
    for (let orderList of listOfOrderList) {
        for (let item of orderList) {
            console.log(item);
        }
    }

    let orders = [];
    let index = 0;
    for (let orderList of listOfOrderList) {
        orders.push([]);
        for (let item of orderList) {
            orders[index].push(item);
        }
        index++;
    }

    console.log(orders);

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
                        
                        orders.map(order=>{
                            return (
                                <>
                                    <h5>Order</h5>
                                    {
                                        order.map(item=>{return <CartItemComponent item={item} key={item._id} readOnly={true}/>})
                                    }
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
