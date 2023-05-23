import { AddUserToStoreAction } from "../../State/UserState/userActions";
import User from "./UserComponent";
import { connect } from "react-redux";

// to make a component subscriber it implements - mapStateToProps - is the conventional name
// - takes state as parameter and returns object
// State that is present in store, map it as props
let mapStateToProps = (state) => {  // state is the store with all reducers
    return {
        User : state.userReducer.User  // mapped as props.User
        // Product : state.productReducer.ProductList
    }
}

// to make a component publisher it implements - mapDispatchToProps
// - takes redux.dispatch method as parameter and returns object
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (newuser) => {
            dispatch(AddUserToStoreAction(newuser))
        }
    }
}

// mapDispatchToProps is null for now
export default connect(mapStateToProps, mapDispatchToProps)(User);
