import * as actionTypes from "../actionTypes";


export const AddUserToStoreAction = (newuser)=>{
    return {
        type : actionTypes.AddUserToStore,
        payload : newuser
    }
}
