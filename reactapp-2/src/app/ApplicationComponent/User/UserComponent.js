import React, { Component } from "react";

export default class User extends Component {

    // mapping redux to props done in UserContainer through connect method
    constructor(props) {
        super(props)

        this.state = {
            userName: props.User.userName,
            password: props.User.password,
            street: props.User.street,
            mobile: props.User.mobile
        }
    }

    onTextChange = (evt) => {
        let target = evt.target;
        let classList = target.classList;  // reading the class name of html when change event happens (ex: className="form-control col-md-6 username")
        let value = target.value;  // value that user typed

        if (classList.contains("username")) {
            this.setState({userName: value})   
        }
        else if (classList.contains("pass")) {
            this.setState({password: value})
        }
        else if (classList.contains("street")) {
            this.setState({street: value})
        }
        else {
            this.setState({mobile: value})
        } 
        evt.preventDefault();
    }

    // props.updateUserOnUI(User) => UserContainer.mapDispatchToProps(User)
    // => userActions.UpdateUserAction(User) => rootReducer finds which reducer contains given action 
    // => userReducer => userReducer finds appropriate switch case and updates states,
    // updated states propagated by mapStateToProps
    loginUser = (evt) => {
        this.props.updateUserOnUI(this.state);  // this.state is User on this component only
        evt.preventDefault();                   // Update User on Store using props.updateUserOnUI

        // If it was functional component, can use useDispatch hook:
        // Call action directly, instead of defining a function (updateUserOnUI)
        // that calls action on mapDispatchToProps.
        // let dispatchLoginUser = useDispatch();
        // dispatchSignInUser(UpdateUserAction(this.state));
    }

    render() {
        return(
            <>
                <h1>User Login Page</h1>
                <section className="componentClass">
                    <div className="form col-md-8">
                    
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username"
                                value={this.state.userName} 
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
                    </div>

                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                            placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                    </div>

                    <div className="col-md-12">
                    <b>Street </b>
                        <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                placeholder="Street Name" onChange={this.onTextChange} />
                    </div>

                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                        placeholder="Mobile" maxLength="11"
                        onChange={this.onTextChange} />
                    </div>

                    <div className="col-md-12">
                    <input type="button" className="btn btn-primary col-md-2 saveUser"
                            value="SignIn-Up User"
                            onClick={this.loginUser}/>
                    </div>

                    </div>
                </section>
            </>
        )
    }

}
