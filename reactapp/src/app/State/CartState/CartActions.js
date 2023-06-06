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
    console.log(JSON.stringify(cartObj));
    // let stringifyed = {"username":"Red",
    // "cartList":[{"_id":"647bc207d3165a2f57b0ede8","name":"Poke Ball","price":100,"desc":"Serves most basic needs","rating":1,"qty":1},
    // {"_id":"647bc2a18075abfa8d1b0fea","name":"Super Ball","price":200,"desc":"Serves better needs","rating":2,"qty":1}]}

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
            console.log("Calling to fetch from DB", resp);
            //dispatch(loading(false));
            // dispatch(fetchCart());  //fetched at the time of save it self
        })
        .catch((err) => {
            console.log("Error while calling to fetch from DB", err)
        })
    }
};

export const fetchCart = () => {
    // console.log(JSON.stringify(username));

    return function (dispatch) {
        // dispatch(loading(true));

        window.fetch("http://localhost:9000/cart/api/getcart",{
            method: 'GET', // rest method type
        })
        // .then(resp => resp.json())
        .then((resp)=>{
            // console.log("get products response ", productresp);
            // dispatch(loading(false));
            // dispatch(addItemToCart(resp))

        })
        .catch((err)=>{
            console.log("Error While Updating Cart to Store", err)
        })
    }
};
