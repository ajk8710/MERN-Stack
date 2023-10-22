import React, {Component} from "react";
import Home from "./Common/HomeComponent";

export default class Application extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Application Class Component</h2>
                <Home/>
            </div>
        )
    }
}


/*
const Application = () => {

    let name = "Awesome React!"

    return (
        <div>
            <div>
                <h2>Application Functional Component</h2>
            </div>
            <div>
                <b><i>{name}</i></b>
            </div>
        </div>
    )
}

export default Application;
*/