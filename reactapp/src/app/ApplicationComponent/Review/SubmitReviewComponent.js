import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveProductToDB } from "../../State/CustomState/productActions";

let SubmitReview = (props) => {

    const { productid } = useParams();  // param from url .../submitreview/:productid - <Route path="/submitreview/:productid" element={<SubmitReview/>}/> on ApplicationComponent

    let trainer = useSelector(state => state.trainerReducer.Trainer);

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

    let [reviewRating, setReviewRating] = useState(10);
    let [reviewContents, setReviewContents] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let clickToSaveProductToDB = (evt) => {
        let updatedProduct = {name: productName, price: productPrice, desc: productDesc, rating: reviewRating, reviews: {userid: trainer._id, username: trainer.name, rating: reviewRating, contents: reviewContents, date: new Date()}}
        dispatch(saveProductToDB(updatedProduct));
        alert("Thank you for your review!");
        navigate("/productreviews/" + productid);  // navigate to submitreview url and pass item._id as route param ("/productreviews/:productid") - ApplicationComponent renders ProductReviewsComponent upon this url
        evt.preventDefault();
    }

    return (
        <>
            <h1><b>Submit review for your purchase</b></h1>
            <h5><b>Product ID: {productid}</b></h5>
            <h5><b>Product Name: {productName}</b></h5>
            <h5><b>User Rating: {Math.round(productRating * 10) / 10}</b></h5>

            <h5><b>Give Your Rating</b></h5>
            <input type="number" className="form-control col-md-6" placeholder="" min="0" max="10"
                value={reviewRating} onChange={evt => setReviewRating(Math.round(evt.target.value))}/>

            <h5><b>Write Your Review</b></h5>
            <input type="text" className="form-control col-md-6" placeholder="" maxLength="200" size="40"
                value={reviewContents} onChange={evt => setReviewContents(evt.target.value)}/>

            <button onClick={clickToSaveProductToDB}> Submit Review </button>
        </>
    )
}

export default SubmitReview;
