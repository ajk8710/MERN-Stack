import * as actionTypes from "../actionTypes";

export const getHobbyListAction = (hobbyList) => {
    return {
        type: actionTypes.GET_HOBBYLIST,
        payload: {hobbyList}
    }
}

export const saveHobbyToDB = (hobby) => {
    return function (dispatch) {
        window.fetch("http://localhost:9000/hobby/api/savehobby", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(hobby)
        })
        .then(resp => resp.json())
        .then((resp) => {
            console.log("response from DB", resp);  // response from DB is saved hobby
            dispatch(fetchHobbyList());  // fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error while getting response from DB", err)
        })
    }
}

export const fetchHobbyList = () => {
    return function (dispatch) {
        window.fetch("http://localhost:9000/hobby/api/gethobbylist",{
            method: 'GET'         
        })
        .then(resp => resp.json())
        .then((resp) => {  // response from DB is hobbyList with all hobbies
            console.log("response from DB", resp);
            dispatch(getHobbyListAction(resp));

        })
        .catch((err)=>{
            console.log("Error while getting response from DB", err)
        })
    }
};
