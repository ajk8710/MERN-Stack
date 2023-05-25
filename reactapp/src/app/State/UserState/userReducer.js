import * as actionTypes from "../actionTypes";

// this initialState is not a store for states
// this is just a definition of initial state
const initialState = {
    User : {
        userName : "Pikachu",
        password : "passwords",
        street : "Pokemon Center",
        mobile : 0
    },
    User2 : {
        userName : "Red",
        password : "pw",
        street : "Pallet Town",
        mobile : 0
    }
}

const userReducer = (state=initialState, action) => {
    console.log("Previous State:", state);
    console.log("We are in user reducer with action payload - ", action.payload)

    switch (action.type) {  // each action has type and payload
        case actionTypes.AddUserToStore:
            return {...state, User : action.payload};  // action.payload is new user added to state and we return new state
        case actionTypes.AddUser2ToStore:
            return {...state, User2 : action.payload};
        default:
            return state;
    }
}

export default userReducer;
