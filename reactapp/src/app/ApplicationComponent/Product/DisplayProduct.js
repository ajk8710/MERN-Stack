import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../State/CustomState/productActions";
// import DisplayDetailedProduct from "./DisplayDetailedProduct";

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
           <h2>Below are products we can add to cart!!</h2>
            <div>
                {productList && productList.length>0 ?
                    productList.map(product=>{
                        return JSON.stringify(product)
                        // return <DisplayDetailedProduct product={product} key={product._id}/>
                    }):
                    "No Product Found!!"
                }
            </div>
        </>
    )
}

export default DisplayProduct;
