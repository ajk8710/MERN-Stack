import * as actionTypes from "../actionTypes";

// define initial state
const initialState = {
    User : {
        userName : "Pikachu",
        password : "passwords",
        street : "Pokemon Center",
        mobile : 0
    }
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {  // each action has type and payload
        case actionTypes.UpdateUser:
            return {...state, User : action.payload};
        default:
            return state;
    }
}

export default userReducer;
