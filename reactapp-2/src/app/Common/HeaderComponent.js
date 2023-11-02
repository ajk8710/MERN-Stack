import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

import { connect, useSelector, useDispatch } from "react-redux";
import * as userActions from "../State/UserState/userActions";

let Header = (props) => {

    let userName = props.User.userName;  // one way using connect & mapStateToProps, available as props
    let userName2 = useSelector((state) => state.userReducer.User.userName);  // another way, mapping using useSelector hook

    let updateUserBtn = (evt) => {
        let newUser = { userName : "Raichu", password : "pw", street : "here", mobile : 0 }
        props.updateUser(newUser);
        evt.preventDefault();
    }

    let dispatch = useDispatch();
    let updateUserBtn2 = (evt) => {
        let newUser = { userName : "Raichu2", password : "pw", street : "here", mobile : 0 }
        dispatch(userActions.UpdateUserAction(newUser));
        evt.preventDefault();
    }

    return (
        <>  
            Hi, <b>{userName} {userName2}</b>.
            <div>
            <NavLink to="/home" className="navBarLink">Home</NavLink>
            <NavLink to="/user" className="navBarLink">User</NavLink>
            <NavLink to="/userhook" className="navBarLink">UserHook</NavLink>
            <NavLink to="/about" className="navBarLink">About</NavLink>
            </div>
            <input type="button" value="Update User" onClick={updateUserBtn}/>
            <input type="button" value="Update User using hook" onClick={updateUserBtn2}/>
        </>
    )
}

// to make a component subscriber it implements - mapStateToProps - is the conventional name
// - takes state as parameter and returns object
// State that is present in store, map it as props
let mapStateToProps = (state) => {  // state is the store with all reducers
    return {
        User : state.userReducer.User  // mapped as props.User
    }
}

// to make a component publisher it implements - mapDispatchToProps
// - takes redux.dispatch method as parameter and returns object
let mapDispatchToProps = (dispatch) => {
    return {
        updateUser : (newUser) => {
            dispatch(userActions.UpdateUserAction(newUser));
        }
    }
}

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
