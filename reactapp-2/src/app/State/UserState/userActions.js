import * as actionTypes from "../actionTypes";
import axios from "axios";

export const UpdateUserAction = (newuser) => {
    return {
        type : actionTypes.UpdateUser,
        payload : newuser
    }
}

export const saveUserToDB = (newuser) => {
    // thunk - makes it behave synchronously
    return (dispatch) => {
        // here we go with ajax call: to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("saveUserToDB called by dispatch and synced by thunk");
        // dispatch(loading(true));
        axios.post("http://localhost:9000/user/api/signinupuser",  // url or end point of singninup api
                    newuser  // passing user object to be read as req.body
                )
                .then((ServerData) => {  // if resolved, data is saved to mongoose
                    let signdUser = ServerData.data;  // data sent from userRouter as response
                    // alert(JSON.stringify(signdUser))
                    // sending user to the store to update on UI
                    dispatch(UpdateUserAction(signdUser));  // dispatching action with signed user 
                    // dispatch(getUserCart(signdUser._id))
                })
                .catch((err)=>{
                    console.log("err in login ", err);
        })
    }
}