import * as ActionTypes from "../actionTypes";

export const addItemToCart = (item)=>({
    type: ActionTypes.ADD_ITEM,
    payload: {item}  // {item: item}, like {item: Poke Ball}
})

export const emptyTheCart = () => ({
    type: ActionTypes.EMPTY_CART
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {id}  // {id: id}, like {id: 3}
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,  // {id: id}, like {id: 3}
        qty: parseInt(qty)  // update the quantity
    }
});
