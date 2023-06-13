import * as actionTypes from "../actionTypes";
const initialState = {
    hobbyList: [],  // list of all hobbies from DB
    defaultHobby: {hobbyName: "Fishing"}  // initial hobby shown in UI
}

const hobbyReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOBBYLIST:  // payload comes as - payload: {hobbyList} (from hobbyActions)
            return {...state, hobbyList: action.payload.hobbyList}
        default:
            return state;
    }
}

export default hobbyReducer;
