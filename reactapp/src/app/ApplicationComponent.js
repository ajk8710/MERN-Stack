import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./app.css";


import Home from "./Common/HomeComponent";
import Header from "./Common/HeaderComponent";
import Footer, {Footer1, Footer2, Footer3} from "./Common/FooterComponent";
import Child2 from "./Common/ChildComponent2";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundPage";

// class based component - any component's first letter should be capital
export default class Application extends Component {
    constructor(props) {  // props is read only object  - used to share info from one comp to another
        super(props);     // props is only way to share information between components in react
        this.User = {Name: "Pikachu", Age: 21}
    }

    // unlike functional component, class component has render method to return
    // (Class itself in general doesn't return anything, unless it has a method that returns something.)
    render() {
        return (
            <Router>
                <Header age={this.User.Age}/>
                
                <Routes>
                    <Route path="/" element={<Navigate replace to={"/user"}/>}/>
                    <Route path="/home" element={<Home user={this.User}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/about/:id" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                
                <Footer age={this.User.Age}/>
                
                {/*<Footer1 age={this.User.Age}>
                    <Child2/>
                    <input type="text" value={"input element"}></input>
                </Footer1>
                <Footer2 name={this.User.Name}/>
                <Footer3 age={this.User.Age}/>*/}
            </Router>
        )
    }
}



// Component is a functional class or function which does single or multiple things independently
// Particularly, this is functional or function based component - read variables present then return the virtual DOM

// const Application = () => {

//     let name = "Awesome React!"

//     // return the UI or virtual dom
//     // looks like html, but this is jsx - javascript in xml format
//     return (
//         <div>
//             <div>
//                 <h2>Application Functional Component</h2>
//             </div>
//             <div>
//                 <b><i>{name}</i></b>
//             </div>
//         </div>
//         // <div></div>  // cannot have multiple top level div
//     )
// }

// export default Application;
