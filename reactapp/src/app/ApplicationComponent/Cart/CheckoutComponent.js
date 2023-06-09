// Checkout Component
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) - We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) - (Go To Checkout From Cart Component)

// Second Task:
// Create a state using useState to show hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thank you for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page

import React, {useState, Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import CartComponent from "./CartComponent";
import CartItemComponent from "./CartItemComponent";
import { saveOrderToDB, fetchRecentOrders } from "../../State/OrderState/orderActions";

let Checkout = (props) => {

    let trainer = useSelector((state) => state.trainerReducer.Trainer);
    let [doneCheckout, setDoneCheckout] = useState(false);
    let [deliveryAddress, setdeliveryAddress] = useState(trainer.hometown);
    let cartList = useSelector((state)=>state.cartReducer);

    let dispatch = useDispatch();
    let clickToMakePayment = (evt) => {
        setDoneCheckout(true);  // re-render to thank you page

        // when user signs in, it hits the DB then we retrieve user id from DB. (or trainer id)
        let orderObj = {userid: trainer._id, username: trainer.name, orderList: cartList};
        // dispatch(saveOrderToDB(orderObj));  // no need to use dispatch here, because it's not being used in saveOrderToDB
        dispatch(saveOrderToDB(orderObj));
        // dispatch(fetchRecentOrders(trainer._id));  // This may get called before saveOrderToDB finishes. Should be put inside saveOrderToDB.

        evt.preventDefault();
    }

    return (
        <>
            {
                !doneCheckout ?
                    <>
                        <h5><b>You're in checkout, {trainer.name} from {trainer.hometown}</b></h5>
                        <CartComponent readOnly={true}/>
                        <b>Delivery Address</b>
                        <input type="text" className={"form-control col-md-6"} maxLength={100}
                            placeholder="Please enter delivery address"
                            value={deliveryAddress} onChange={(evt) => setdeliveryAddress(evt.target.value)}/>
                        <button onClick={clickToMakePayment}> Make Payment </button>
                    </>
                :
                    <>
                        <h4><b>Thank you for the payment!</b></h4>
                        <h4><b>Purchase Confirmation</b></h4>
                        <h5><b>Your Name: {trainer.name}</b></h5>
                        <h5><b>Delivery Address: {deliveryAddress}</b></h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Rating</th>
                                    <th>Quantity</th>
                                    <th>Item Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartList.map(item => {
                                        return <CartItemComponent
                                                    item={item}
                                                    key={item._id}
                                                    readOnly={true}/>
                                    })
                                }
                            </tbody>
                        </table>
                        <h5></h5>
                    </>
            }
        </>
    )
}

export default Checkout;
