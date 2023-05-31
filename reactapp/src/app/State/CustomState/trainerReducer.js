import * as actionTypes from "../actionTypes";

const initialState = {
    Trainer : {
        name : "Red",
        password : "pw",
        hometown : "Pallet Town",
        rank : 0
    }
}

const trainerReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AddTrainerToStore:
            return {...state, Trainer : action.payload};
        default:
            return state;

    }
}

export default trainerReducer;
