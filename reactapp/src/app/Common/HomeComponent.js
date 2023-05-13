import React, {Component} from "react";
import Child from "./ChildComponent";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.User = props.user;
    }

    render() {
        return (
            <>
                <h1><b>This is Home Component</b></h1>
                <h4>Passed from App to Home: {this.User.Age} {this.User.Name}</h4>
                <Child user={this.User} desc={"GrandChild"}/>
            </>
        )
    }

}
