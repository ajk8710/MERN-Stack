import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./app.css";

import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import NotFound from "./Common/NotFoundPage";

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.user = {name: "user1", age: 19}
    }

    render() {
        return (
            <Router>
                <Header user={this.user}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/about/:id" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer user={this.user}/>
            </Router>
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