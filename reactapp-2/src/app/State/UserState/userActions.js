import * as actionTypes from "../actionTypes";

export const UpdateUserAction = (newuser) => {
    return {
        type : actionTypes.UpdateUser,
        payload : newuser
    }
}
