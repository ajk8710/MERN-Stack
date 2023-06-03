import * as actionTypes from "../actionTypes";

const initialState = {
    products : [],  // list of products

    defaultProduct : {
        name : "Poke Ball",
        price : 100,
        desc : "Serves most basic needs",
        rating : 1,
        qty: 1
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
