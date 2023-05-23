import * as actionTypes from "../actionTypes";

const initialState = {
    User : {
        userName : "Pikachu",
        password : "passwords",
        street : "Pokemon Center",
        mobile : 0
    }
}

const userReducer = (state=initialState, action) => {
    console.log("Previous State:", state);
    console.log("We are in user reducer with action payload - ", action.payload)

    switch (action.type) {  // each action has type and payload
        case actionTypes.AddUserToStore:
            return {...state, User : action.payload}  // action.payload is new user added to state and we return new state
        default:
            return state;
    }
}

export default userReducer;
