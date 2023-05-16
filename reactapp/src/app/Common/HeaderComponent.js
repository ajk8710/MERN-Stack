import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // hoooks for navigations

let Header = ({age}) => {

    let userName = "Pikachu";
    let goAboutHook = useNavigate();

    let goToAboutClick = (evt)=>{
        goAboutHook("/about/2023");
        evt.preventDefault();
    }

    return (
        <>
             Hi <b>{userName + ", "}</b> Welcome to Pokemon Center
            {userName == "" ?<b> Please login to see more items</b>:""}
            
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            </div>
            <button onClick={goToAboutClick} >Go To About Page</button>
            {/*<h1>This is Header Component</h1>*/}
            {/*<b>Passed from App to Header: {age}</b>*/}
        </>
    )
}

export default Header;
