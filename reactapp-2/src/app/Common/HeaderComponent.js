import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

let Header = ({user}) => {
    return (
        <>  
            Hi, <b>{user.name}</b>.
            <div>
            <NavLink to="/home" className="navBarLink">Home</NavLink>
            <NavLink to="/about" className="navBarLink">About</NavLink>
            </div>
        </>
    )
}

export default Header;
