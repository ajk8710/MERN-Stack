import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddTrainerToStoreAction = (newTrainer) => {
    return {
        type : actionTypes.AddTrainerToStore,
        payload : newTrainer
    }
}

export const saveTrainerToDB = (newTrainer) => {
    // thunk - makes it behave synchronously
    return (dispatch) => {
        // here we go with ajax call: to save data to the server or fetch it from the server
        // using fetch method of react
        // console.log("saveUserToDB called by dispatch and synced by thunk");
        // dispatch(loading(true));
        axios.post("http://localhost:9000/trainer/api/signinuptrainer",  // url or end point of singninup api
                    newTrainer  // passing user object to be read as req.body
                )
                .then((ServerData) => {  // if resolved, data is saved to mongoose
                    let signdTrainer = ServerData.data;  // data sent from userRouter as response
                    // alert(JSON.stringify(signdTrainer))
                    // sending trainer to the store
                    dispatch(AddTrainerToStoreAction(signdTrainer));  // dispatching action with signed trainer
                    // dispatch(getUserCart(signdUser._id))
                })
                .catch((err)=>{
                    console.log("err in login ", err);
        })
    }
}
