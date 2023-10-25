import React from "react";
import {useParams, useNavigate} from "react-router-dom";

let About = () => {
    let params = useParams();
    let paramId = params["id"] ? params["id"]: "No ID";  // if param exists? get params["id"]
    
    let goToAboutHook = useNavigate();
    
    let goToAboutBtn = (evt) => {
        goToAboutHook("/about/2023");
        evt.preventDefault();  // prevents html default behavior - Event invoked in child propagating to parent (html container)
    }

    return (
        <>
            <h3>About Component</h3>
            <h5>Id: {paramId}</h5>
            <button onClick={goToAboutBtn}> Go To About Page </button>
        </>
    )
}

export default About;
