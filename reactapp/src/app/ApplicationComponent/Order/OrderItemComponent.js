import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    
    let navigate = useNavigate();
    let clickToSubmitReview = (evt) => {  // navigate to submitreview url and pass item._id as route param ("/submitreview/:productid") - ApplicationComponent renders SubmitReviewComponent upon this url
        navigate("/submitreview/" + item._id);
        evt.preventDefault();
    }

    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.qty}</td>
            <td>{item.price*item.qty}</td>
            <td>
                <button onClick={() => clickToAddProductToCart(productList.find(product => product._id==item._id))}> Add to Cart </button>
                {wasCanceled ? "Thank you for reconsidering!" : <button onClick={clickToSubmitReview}> Write Review </button>}
            </td>
        </tr>
    )
}

export default OrderItemComponent;
