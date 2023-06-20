import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

let ProductReviews = (props) => {
    
    const { productid } = useParams();  // param from url .../productreviews/:productid - <Route path="/productreviews/:productid" element={<ProductReviews/>}/> on ApplicationComponent

    let productList = useSelector((state) => state.productReducer.products);  // state.productReducer.products on frontend is updated from fecthProduct call at RecentOrdersComponent
    let product = productList.filter(product => product._id==productid);
    let productName = "Product to be Reviewed";
    let productPrice = 0;
    let productDesc = "Product to be Reviewed Desc";
    let productRating = 0;

    if (product) {
        productName = product[0].name;
        productPrice = product[0].price
        productDesc = product[0].desc
        productRating = product[0].rating
    }

    return (
        <>
            <h1><b>User Reviews</b></h1>
            <h5><b>Product ID: {productid}</b></h5>
            <h5><b>Product Name: {productName}</b></h5>
            <h5><b>User Rating: {productRating}</b></h5>
        </>
    )
}

export default ProductReviews;
