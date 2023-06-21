import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DisplayReview from "./DisplayReviewComponent";

let ProductReviews = (props) => {
    
    const { productid } = useParams();  // param from url .../productreviews/:productid - <Route path="/productreviews/:productid" element={<ProductReviews/>}/> on ApplicationComponent

    let productList = useSelector((state) => state.productReducer.products);  // state.productReducer.products on frontend is updated from fecthProduct call at RecentOrdersComponent
    let product = productList.filter(product => product._id==productid);
    let productName = "Product to be Reviewed";
    let productPrice = 0;
    let productDesc = "Product to be Reviewed Desc";
    let productRating = 0;
    let reviews = [];
    let numReviews = 0;

    if (product) {
        productName = product[0].name;
        productPrice = product[0].price
        productDesc = product[0].desc
        productRating = product[0].rating
        reviews = product[0].reviews;
        numReviews = product[0].numReviews;
    }

    return (
        <>
            <h1><b>User Reviews</b></h1>
            <h5><b>Product ID: {productid}</b></h5>
            <h3><b>Product Name: {productName}</b></h3>
            <h3><b>User Rating: {Math.round(productRating * 10) / 10}</b></h3>
            <div>
                {reviews && reviews.length > 0 ?  // if reviews exist and its length is > 0
                    reviews.map(review => {   // for each review, create DisplayReview and render here
                        return <DisplayReview key={review.userid} username={review.username} rating={review.rating} contents={review.contents} date={review.date}/>
                    }):
                    <h1>No reviews yet. Be the first one to review!</h1>
                }
            </div>
        </>
    )
}

export default ProductReviews;
