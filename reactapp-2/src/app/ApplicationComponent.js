import React, {Component} from "react";
import Home from "./Common/HomeComponent";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";


export default class Application extends Component {
    constructor(props) {
        super(props);
        this.user = {name: "user1", age: 19}
    }

    render() {
        return (
            <div>
                <Header user={this.user}/>
                <Home/>
                <Footer user={this.user}/>
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