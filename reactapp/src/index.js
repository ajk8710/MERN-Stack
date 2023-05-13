// entry point of our app

// console.log("This loads my first page through bundle");

// alert("Welcome to the shopping cart application!");

import React from "react";
import * as ReactDOM from "react-dom/client";

import Application from "./app/ApplicationComponent";  // default export/imports doesn't need curly brackets

// creating root to hold and load react application
const root = ReactDOM.createRoot(document.getElementById("root"));

// const App2 = <h1> hello app 2 </h1>  // this is not a component, but just a reference to html
// const App3 = () => {return <h1> hello app 3 </h1>}  // component names should start capital or it's considered html tags

// bootstrapping of single page application - inject application into root
root.render (
    <Application/>
    // App2
    // <h1> hello app 22 </h1>  // - this is what App2 is
    // <App3/>  // <app3/> - lower case would not work
)
