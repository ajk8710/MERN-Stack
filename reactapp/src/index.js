// entry point of our app

// console.log("This loads my first page through bundle");

// alert("Welcome to the shopping cart application!");

import React from "react";
import * as ReactDOM from "react-dom/client";

import Application from "./app/ApplicationComponent";  // default export/imports doesn't need curly brackets


import { Provider } from "react-redux"; // provider component wraps whole react app so it has store object
import store from "./app/State/store";

// creating root to hold and load react application
const root = ReactDOM.createRoot(document.getElementById("root"));

// bootstrapping of single page application - inject application into root
// render creates virtual dom
root.render (
    <Provider store={store}>
        <Application/>
    </Provider>
)

// Practice: playing around with App injection:
// const App2 = <h1> hello app 2 </h1>  // this is not a component, but just a reference to html
// const App3 = () => {return <h1> hello app 3 </h1>}  // component names should start capital or it's considered html tags
// root.render (
    // App2
    // <h1> hello app 22 </h1>  // - this is what App2 is, just plain html
    // <App3/>  // <app3/> - lower case would not work
// )

// Flux based architecture - publisher subscriber method
// Redux will implement this artchitecture
// Object which stores all the states is called: "Store" - there will be one store per app
// The object which will update the state is called: "Action" - {payload : dataToUpdate, type : edit, delete..}
// We need callback: reducer to generate new state using - Actions Payload & Actions Type - always returns new state
//     Initial states (to be used to comebine in reducer), switch cases or if statements to handle action type for every new state
// Action creator to define the action which will be invoked - ex: button, click event handler
// Dispatcher - a function which makes application work in callback
