import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addItemToCart } from "../../State/CartState/CartActions";

let OrderItemComponent = (props) => {

    let item = props.item;
    let wasCanceled = props.wasCanceled;
    let productList = useSelector((state) => state.productReducer.products);  // state.productReducer.products on frontend is updated from fecthProduct call at RecentOrdersComponent

    let dispatch = useDispatch()
    let clickToAddProductToCart = (product) => {
        if (!product) {
            alert("The item is no longer on sale");
        }
        else {
            alert("Item added to your cart!");
            dispatch(addItemToCart(product));
        }
    }
    
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>{item.qty}</td>
            <td>{item.price*item.qty}</td>
            <td>
                <button onClick={() => clickToAddProductToCart(productList.find(product => product._id==item._id))}> Add to Cart </button>
                {wasCanceled ? "Thank you for reconsidering!": "Thank you for your reorders!"}
            </td>
        </tr>
    )
}

export default OrderItemComponent;
