import * as actionTypes from "../actionTypes";

const initialState = {
    Product : {
        name : "Poke Ball",
        price : 100,
        desc : "Serves most basic needs",
        rating : 1
    }
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AddProductToStore:
            return {...state, Product : action.payload};
        default:
            return state;

    }
}

export default productReducer;
