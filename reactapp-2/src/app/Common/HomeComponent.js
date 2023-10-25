import React, {Component} from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        // we can write state object to create new virtual dom
        this.state = {
            UserName : props.user.name,
            UserAge : props.user.age,
            Timer : 1,
            Address : "Address from Home",
            Session : "Session from Home"
        }
    }

    // Arrow functions within a class is linked with the class, then refered by this
    incrementAge = () => {
        // when state changes, render method is called, creates new v-dom,
        // compare difference with previous v-dom, only the differences are rendered
        this.setState( {UserAge: this.state.UserAge + 1} );
    }

    updateName = (evt) => {
        let targetValue = evt.target.value;  //  value from event target (javascript way)
        this.setState( {UserName: targetValue} );
        evt.preventDefault();
    }

    render() {
        return (
            <>
            <div>
                <h3>Home Component. User: {this.state.UserName} {this.state.UserAge}</h3>
                <input type="button" onClick={this.incrementAge} value={"Increment Age"}></input> 
            </div>
            <div>
                <input type="text" value={this.state.UserName} placeholder="Please type" onChange={this.updateName}></input>
            </div>
            </>
        )
    }
}
