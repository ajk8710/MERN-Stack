import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = []  // instead of having specific objet in array, we are starting with empty array

export default function cartReducer(state = INITIAL_STATE, action)
{
    // console.log("cart Reducer", state, action);
    // console.log("first element:", state[0]);
    
    // additem, removeitem, updateitem, emptyitem
    switch(action.type) 
    {
        case ActionTypes.ADD_ITEM:
            // checking if item already present in cart
            // gets new array with all items except item._id equals
            let newState = state.filter(item => item._id != action.payload.item._id);

            // checking if quantity is present or not, if not then add default quantity to 1, else do nothing
            // adding new property "qty" on the fly
            // !action.payload.item["qty"] ? action.payload.item["qty"] = 1 : "";  // this isn't doing anything right now - always resovles to  ""

            // newState is filtered state
            return [...newState, action.payload.item];  // adding the item with qty property added

            // below code is in works/practice
            // if (state.filter(item => item._id == action.payload.item._id).length == 0) {
            //     return [...state, action.payload.item];  // if item doesn't exist in cart, add to cart
            // }
            // else {  // if item already exists in cart
            //     action.payload.id = action.payload.item._id;
            //     action.payload.qty = action.payload.item.qty + 1;
            //     action.type = ActionTypes.UPDATE_ITEM;  // fall through without break or return
            // }
            
        // filter out all the items except the one which id matches
        case ActionTypes.REMOVE_ITEM:
            return state.filter(item => item._id!=action.payload.id);

        // empty cart by changing state to empty array
        case ActionTypes.EMPTY_CART:
            return [];

        // update quantity of an item in cart
        case ActionTypes.UPDATE_ITEM:
            return state.map((item)=>{  // for each item of state (product array)
                if (item._id == action.payload.id) {  // if item id matches, update qty
                    return {...item, qty:action.payload.qty}  // ...item means {name, desc, rating, qty, price}
                }
                return item;  // for all other items in cart do not update anything
            })

        default:
            return state;
    }
}
