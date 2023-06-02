import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddProductToStoreAction = (newProduct) => {
    return {
        type : actionTypes.AddProductToStore,
        payload : newProduct
    }
}

export const saveProductToDB = (newProduct) => {
    // thunk - makes it behave synchronously
    return (dispatch) => {
        // here we go with ajax call: to save data to the server or fetch it from the server
        // using fetch method of react
        // console.log("saveUserToDB called by dispatch and synced by thunk");
        // dispatch(loading(true));
        axios.post("http://localhost:9000/product/api/saveproduct",  // url or end point of singninup api
                    newProduct  // passing user object to be read as req.body
                )
                .then((ServerData) => {  // if resolved, data is saved to mongoose
                    let savedProduct = ServerData.data;  // data sent from userRouter as response
                    // alert(JSON.stringify(updatedProduct))
                    // Done saving to DB, sending product to the store using AddProductToStoreAction
                    dispatch(AddProductToStoreAction(savedProduct));  // dispatching action with saved product
                    // dispatch(getUserCart(signdUser._id))
                })
                .catch((err)=>{
                    console.log("err in login ", err);
        })
    }
}
