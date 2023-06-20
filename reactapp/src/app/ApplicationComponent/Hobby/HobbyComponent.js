import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveHobbyToDB, fetchHobbyList } from "../../State/HobbyState/hobbyActions";

let Hobby = () => {

    let [hobbyName, setHobbyName] = useState(useSelector(state => state.hobbyReducer.defaultHobby.hobbyName));

    fetchHobbyList();  // fetchHobbyList fetches hobbyList from DB then call hobbyReducer to update UI - this needs to fire upon admin login
    let hobbyList = useSelector(state => state.hobbyReducer.hobbyList);

    let dispatch = useDispatch();
    let clickToSaveHobbyToDB = (evt) => {
        dispatch(saveHobbyToDB({hobbyName}));  // sending as object {hobbyName: hobbyName}
        evt.preventDefault();
    }

    return (
        <>
            <h1><b>Hobby Page</b></h1>
            <b>Add Hobby to DB</b>
            <input type="text" className="form-control col-md-6 town" placeholder="Hobby" maxLength="20"
                value={hobbyName} onChange={evt => setHobbyName(evt.target.value)}/>
            <button onClick={clickToSaveHobbyToDB}>Add Hobby</button>
            <div><b>List of Hobbies</b></div>
            {hobbyList.map(eachHobby => eachHobby.hobbyName + " ")}
        </>
    )
}

export default Hobby;
