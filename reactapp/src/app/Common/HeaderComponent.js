import React from "react";
import { NavLink, useNavigate } from "react-router-dom";  // hoooks for navigations

import { connect, useSelector, useDispatch } from "react-redux";
import { AddUserToStoreAction } from "../State/UserState/userActions";

let Header = (props) => {

    let userName = props.User.userName;  // one way using connect & mapStateToProps, available as props
    let trainerName = props.Trainer.name;
    
    let password = useSelector((state) => state.userReducer.User.password);  // another way, mapping using useSelector hook
    let password2 = useSelector((state) => state.userReducer.User2.password);
    
    let dispatch = useDispatch();  // mapping using useDispatch hook, instead of mapDispatchToProps
    let testUseDispatch = () => {
        let testUser = {userName : "reset", password : "reset"};
        dispatch(AddUserToStoreAction(testUser));
    }
    
    let goAboutHook = useNavigate();
    
    let goToAboutClick = (evt)=>{
        goAboutHook("/about/2023");
        evt.preventDefault();  // prevents html default behavior - Event invoked in child propagating to parent
    }

    return (
        <>
            Hi <b>{trainerName + ", "} & {userName + ", "}</b> Welcome to Pokemon Center
            {userName == "" ?<b> Please login to see more items</b>:""}
            {/* <div>Password is: {password} & {password2} <button onClick={testUseDispatch}>reset</button></div> */}
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
                <NavLink to="/trainer" className="button" activeclassname="success" >Trainer </NavLink>
                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink>
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
                <NavLink to="/user" className="button" activeclassname="success" >User </NavLink>
                <NavLink to="/userhook" className="button" activeclassname="success" >User Hook </NavLink>
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            </div>
            {/*<button onClick={goToAboutClick} >Go To About Page</button>*/}
            {/*<h1>This is Header Component</h1>*/}
            {/*<b>Passed from App to Header: {age}</b>*/}
        </>
    )
}

// to make a component subscriber it implements - mapStateToProps - is the conventional name
// - takes state as parameter and returns object
// State that is present in store, map it as props
let mapStateToProps = (state) => {  // state is the store with all reducers
    return {
        User : state.userReducer.User,  // mapped as props.User
        User2 : state.userReducer.User2,
        Trainer : state.trainerReducer.Trainer
        // Product : state.productReducer.ProductList
    }
}

// to make a component publisher it implements - mapDispatchToProps
// - takes redux.dispatch method as parameter and returns object
// let mapDispatchToProps = (dispatch)=>{
//     return {
//         User : state.userReducer.User
//     }
// }

// mapDispatchToProps is null for now
export default connect(mapStateToProps, null)(Header);
