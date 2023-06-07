import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummaryComponent from "./CartSummaryComponent";
import { saveCartToDB } from "../../State/CartState/CartActions";

let CartComponent = (props)=> {

    let cartList = useSelector((state)=>state.cartReducer);

    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;

        // sum of all items and all qtys
        for (let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }

        return {
            amount,  //ES6 syntactic sugar amount: amount 
            count    // if key and values are same name then we can put it this way without ":"
        }
    }

    let navigate = useNavigate();
    let navigateToCheckout = function(event) {      
        navigate('/checkout');
        event.preventDefault();
    }

    // when user signs in, it hits the DB then we retrieve user id from DB. (or trainer id)
    let username = useSelector((state)=>state.trainerReducer.Trainer.name);
    let userid = useSelector((state)=>state.trainerReducer.Trainer._id);
    // console.log("Signed-In Trainer:", username, "ID:", userid)

    let dispatch = useDispatch()
    let clickToSaveCart = (evt) => {
        if (!userid) {  // if userid does not exist, user is not signed in
            alert("Please sign in before saving the cart");
            navigate('/trainer');
        }
        else {
            alert(`Cart Saved!`);
            let cartObj = {userid, username, cartList};
            dispatch(saveCartToDB(cartObj));
            evt.preventDefault();
        } 
    }

    // readOnly is false by default - you can make is true by passing readOnly={true} from parent (ex: ApplicationComponent)
    // it makes component reusable (ex: billing page can be same as cart page but read only)
    return (
        <Fragment>
            {props.readOnly ? "" : <h1>Cart Component</h1>}
            {cartList && cartList.length > 0 ? 
                <Fragment>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : 
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item=>{
                                    // return item.name
                                    return <CartItemComponent
                                                    item={item}
                                                    key={item._id}
                                                    readOnly = {props.readOnly}/>
                                })
                            } 
                        </tbody>
                    </table>

                    <CartSummaryComponent data={recalculate(cartList)} readOnly={props.readOnly} />

                    {
                        props.readOnly ? <></> : // use example of readOnly - you can hide buttons: both "" and <></> works
                            <Fragment>
                                <button onClick={clickToSaveCart} >
                                        Save Cart
                                </button>

                                <button onClick={navigateToCheckout} >
                                    Go To Checkout
                                </button>
                            </Fragment> 
                    }
                </Fragment> 
                :
                    <b>Cart Is Empty. Please add products to cart.</b>
                }
        </Fragment>
    )
}

export default CartComponent;

// CartComponent - fetch the cart and make it configurabale on the basis of property
// CartItemComponent - to edit the quantity
// CartSummaryComponent - show the cart summary
