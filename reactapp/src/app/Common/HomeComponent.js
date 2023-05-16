import React, {Component} from "react";
import Child from "./ChildComponent";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.User = props.user;

        // we can write state object to create new virtual dom
        this.state = {
            UserName : props.user.Name,
            UserAge : props.user.Age
        }
    }

    // state is mutable. Upon change of state a new virtual dom gets created which will be rended on browser
    // props is immutable - ownership of props is on the component who passed it

    // APIs to update states and render
    // this.setState - recommended as it fallows all the life cycle methods
    // this.forceUpdate - not recommended - it will skip all life cycle methods and just call the render

    // Arrow functions within a class is linked with the class, then refered by this
    incrementAge = () => {

        // render method does not get called and virtual dom is not created without updating state (setState or forceUpdate)
        // this.state.UserAge++;
        // console.log(this.state.UserAge);
        // this.forceUpdate();

        // when state changes, render method is called, creates new v-dom,
        // compare difference with previous v-dom, only the differences are rendered

        this.setState( {UserAge : this.state.UserAge + 1} );
    }

    // event binding in textbox, two way data binding in react
    updateNameHandler = (evt) => {
            let targetValue = evt.target.value; //  value from event target (javascript way)
            console.log(targetValue);
            this.setState( {UserName : targetValue} );

            evt.preventDefault();
    }

    render() {
        console.log("Home Component Rendered")
        return (
            <>
                <h1><b>This is Home Component</b></h1>
                <h4>Props Values Passed from App to Home: {this.User.Age} {this.User.Name}</h4>
                <div>
                    <b>Home's State: {this.state.UserName} {this.state.UserAge}</b>
                    <input type="button" onClick={this.incrementAge} value={"Increment Age"}></input>
                </div>
                <input type="text" value={this.state.UserName} placeholder="Please type your name"
                 onChange={this.updateNameHandler}></input>
                <Child user={this.User} desc={"GrandChild"}/>
            </>
        )
    }

}
