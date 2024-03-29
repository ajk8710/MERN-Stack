import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./app.css";

import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import NotFound from "./Common/NotFoundPage";

import UserContainer from "./ApplicationComponent/User/UserContainer";
import UserHook from "./ApplicationComponent/User/UserFuncComponent";
import Product from "./ApplicationComponent/Product/ProductComponent";

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.user = {name: "me", age: 19}
    }

    render() {
        return (
            <Router>
                <Header user={this.user}/>
                <Routes>
                    <Route path="/" element={<Home user={this.user}/>}/>
                    <Route path="/home" element={<Home user={this.user}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/about/:id" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/user" element={<UserContainer/>}/>
                    <Route path="/userhook" element={<UserHook/>}/>
                    <Route path="/product" element={<Product/>}/>
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