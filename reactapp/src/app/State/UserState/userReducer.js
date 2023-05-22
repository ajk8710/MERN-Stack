import * as actionTypes from "../actionTypes";

const initialState = {
    User : {
        UserName : "Pikachu",
        Password : "passwords",
        Street : "Pokemon Center",
        Mobile : 0
    }
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {  // each action has type and payload
        case actionTypes.AddUserToStore:
            return {...state, User : action.payload}  // action.payload is new user added to state and we return new state
        default:
            return state;
    }
}

export default userReducer;
