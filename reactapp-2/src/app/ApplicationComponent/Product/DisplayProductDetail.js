import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../State/CartState/CartActions";


let DisplayProductDetail = ({product}) => {

    let [showHide, toggleShowHide] = useState(false)  // initially showHide is false
    let dispatchToAddProduct = useDispatch();

    let addProductToCart = ( product ) => {
        dispatchToAddProduct(addItemToCart(product))
    }

    let navigate = useNavigate();
    let clickToNavigateToReviews = (evt) => {
        navigate("/productreviews/" + product._id);  // navigate to submitreview url and pass product._id as route param ("/productreviews/:productid") - ApplicationComponent renders ProductReviewsComponent upon this url
        evt.preventDefault();
    }

    return(
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}> {/* showHide is !showHide */}
            {product.name}
                {showHide ?
                    <ul>
                    <li>Price: {product.price}</li>
                    <li>Desc: {product.desc}</li>
                    <li>Rating: {Math.round(product.rating * 10) / 10}</li> 

                    <button onClick={()=>{addProductToCart(product)}}> Add To Cart </button>

                    <button onClick={clickToNavigateToReviews}> Read Reviews </button>
                </ul>
                : 
                ""}
            </li>
        </ul>
    )

}

export default DisplayProductDetail;
