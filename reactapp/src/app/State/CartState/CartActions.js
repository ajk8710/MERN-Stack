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

export const saveCartToDB = (cartObj) => {
    console.log("Cart:", cartObj);
    console.log("Cart Stringifyed:", JSON.stringify(cartObj));
    // let stringifyed = 
    // {"userid":"64792e90e2cb1cd4721bb677","username":"Red",
    // "cartList":[{"_id":"647bc207d3165a2f57b0ede8","name":"Poke Ball","price":100,"desc":"Serves most basic needs","rating":1,"qty":1}]}

    return function (dispatch) {
        // dispatch(loading(true));

        // window.fetch - is reacts way to make ajax to server
        window.fetch("http://localhost:9000/cart/api/savecart", {
            method: 'POST',  // rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartObj)
        })
        .then(resp => resp.json())
        .then((resp) => {
            console.log("response from DB", resp);
            //dispatch(loading(false));
        })
        .catch((err) => {
            console.log("Error while getting response from DB", err)
        })
    }
};

export const fetchCart = (userid) => {

    return function (dispatch) {
        // dispatch(loading(true));

        window.fetch("http://localhost:9000/cart/api/getcart", {
            method: 'POST', // rest method type, post (not get) because we need to pass argument userid
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid: userid})  // here, userid argument passed in to fetchCart was a value, not object
        })
        .then(resp => resp.json())
        .then((resp)=>{  // response is user's cart: {userid, username, cartList}
            console.log("response from DB while fetching user's cart", resp);
            
            dispatch(emptyTheCart());  // remove exisiting cart on UI
            
            for (const item of resp.cartList) {
                console.log("item in for-of loop:", item);
                let action = addItemToCart(item);
                dispatch(action);    
            }
        })
        .catch((err)=>{
            console.log("error while fetching user's cart", err)
        })
    }
};
