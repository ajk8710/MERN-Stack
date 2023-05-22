import React from "react";
import { NavLink, useNavigate } from "react-router-dom";  // hoooks for navigations

import { connect, useSelector } from "react-redux";

let Header = (props) => {

    let userName = props.User.UserName;  // one way using connect & mapStateToProps, available as props
    
    let password = useSelector((state) => state.userReducer.User.Password);  // another way, mapping using useSelector hook
    
    let goAboutHook = useNavigate();

    let goToAboutClick = (evt)=>{
        goAboutHook("/about/2023");
        evt.preventDefault();  // prevents html default behavior - Event invoked in child propagating to parent
    }

    return (
        <>
            Hi <b>{userName + ", "}</b> Welcome to Pokemon Center
            {userName == "" ?<b> Please login to see more items</b>:""}
            <div>Password is: {password}</div>
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

// to make a component subscriber it implements - mapStateToProps
// state that is present in store, map it as props
let mapStateToProps = (state) => {
    return {
        User : state.userReducer.User
        // Product : state.productReducer.ProductList
    }
}

// to make a component publisher it implements - mapDispatchToProps
// let mapDispatchToProps = (dispatch)=>{
//     return {
//         User : state.userReducer.User
//     }
// }

// mapDispatchToProps = null for now
export default connect(mapStateToProps, null)(Header);
