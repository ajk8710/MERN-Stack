import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../State/CustomState/productActions";
import DisplayProductDetail from "./DisplayProductDetail";

let DisplayProduct = ()=>{

    let productList = useSelector((state)=>state.productReducer.products);
    let dispatch = useDispatch();

    // useEffect is used as componentDidMount hook
    // The empty array as an argument to useEffect means
    // the fetch will only be called on initial render, and not on subsequent renders when state changes
    useEffect(()=>{ dispatch(fetchProducts()) }, [])
    // console.log("productList ", productList)

    return(
        <>
           <h3>Below are products we can add to cart</h3>
            <div>
                {productList && productList.length > 0 ?  // if productList exist and its length is > 0
                    productList.map(product => {          // for each product, create DisplayProductDetail and render here
                        // return JSON.stringify(product)
                        return <DisplayProductDetail product={product} key={product._id}/>
                    }):
                    "No Product Found!!"
                }
            </div>
        </>
    )
}

export default DisplayProduct;
