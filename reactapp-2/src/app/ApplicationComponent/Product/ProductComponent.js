import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProductToDB } from  "../../State/CustomState/productActions";
import DisplayProduct from "../Product/DisplayProduct";

let Product = (props) => {

    // Using useState to define react state (like this.state in constructor in Class Component)
    // Initialize values from Reducer
    let product = useSelector((state) => state.productReducer.defaultProduct);

    let [name, setName] = useState(product.name);
    let [price, setPrice] = useState(product.price);
    let [desc, setDesc] = useState(product.desc);
    let [rating, setRating] = useState(product.rating);

    // let productlist = useSelector((state) => state.productReducer.products);
    // console.log("productlist:", productlist);

    let userName = useSelector(state => state.userReducer.User.userName);
    let isAdmin = false;
    if (userName == "admin") {
        isAdmin = true;
    }

    ///////// Connecting to Backend /////////
    // create button/function to dispatch saveProductToDB(newProduct) - readFormData
    // create saveProductToDB on productActions, let it call fetchProducts which calls updateProductsAction after saving/fetching to/from DB (node-server's job)
    // on node-server: create productDataModel, create productRouter (implement post call here), instantiate productApp in server.js to use productRouter

    // Then updateProductsAction triggers productReducer (b/c productReducer has switch case for UPDATE_PRODUCTS_TO_STORE type)
    // productReducer updates store, updated states from store propagates on useSelector

    let dispatch = useDispatch();

    let readFormData = (evt) => {

        alert(`Product Detail Saved!\nName: ${name}\nPrice: ${price}\nDesc: ${desc}\nRating: ${rating}`);  // confirming updates upon button click

        // dispatches productActions.saveProductToDB
        let newProduct = {name, price, desc, rating}  // name: name - using shorthand
        dispatch(saveProductToDB(newProduct));

        evt.preventDefault();
    }

    return (
        <>
            {
                isAdmin ?
                    <>
                        <h1>Save Product Details</h1>
                        <form className={"form col-md-10 product component"} onSubmit={readFormData}>

                            <label>
                                <b>Product Name:</b>
                                <input type="text" className={"form-control col-md-12"} value={name}
                                        placeholder="Please enter product name" maxLength={20} required
                                        onChange={ (evt)=>{setName(evt.target.value)} }/>
                            </label>
                            <br/>

                            <label>
                                <b>Price:</b>
                                <input type="number" className={"form-control col-md-12"} value={price}
                                        placeholder="Please enter price" required
                                        onChange={ (evt)=>{setPrice(evt.target.value)} }/>
                            </label>
                            <br/>

                            <label>
                                <b>Description:</b>
                                <input type="text" className={"form-control col-md-12"} value={desc}
                                        placeholder="Please enter description" maxLength={40}
                                        onChange={ (evt)=>{setDesc(evt.target.value)} }/>
                            </label>
                            <br/>

                            <label>
                                <b>Rating:</b>
                                <input type="number" className={"form-control col-md-12"} value={rating}
                                        placeholder="Please enter rating"
                                        onChange={ (evt)=>{setRating(evt.target.value)} }/>
                            </label>
                            <br/>

                            <input type="submit" className={"btn btn-primary"} value="Save Product"/>

                        </form>
                        <DisplayProduct/>
                    </>
                :
                    <DisplayProduct/>
            }
        </>
    )

}

export default Product;
