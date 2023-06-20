import * as actionTypes from "../actionTypes";

const initialState = {
    products : [],  // list of products

    defaultProduct : {  // a default product which is a placeholder for text field on Add New Product Page
        name : "Poke Ball",
        price : 100,
        desc : "Serves most basic needs",
        rating : 1,
        // qty: 1  // need or no need? productSchema has qty with default=1. Does initial state needs be same as productSchema?
                   // (need? because when I add product to cart on UI, it's added to cart with qty=1?)
                   // no need actually because product list shown in UI is from DB after qty property is added
                   // purpose of defaultProduct is just to show initial contents on textbox on UI
        reviews : []
    }
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AddProductToStore:
            return {...state, products : action.payload.products};
        default:
            return state;

    }
}

export default productReducer;
