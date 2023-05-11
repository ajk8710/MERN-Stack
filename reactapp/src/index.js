// entry point of our app

// console.log("This loads my first page through bundle");

// alert("Welcome to the shopping cart application!");

import React from "react";
import * as ReactDOM from "react-dom/client";

import Application from "./app/ApplicationComponent";  // default export/imports doesn't need curly brackets

// creating root to hold and load react application
const root = ReactDOM.createRoot(document.getElementById("root"));

// const app2 = <h1> hello app 2 </h1>
// const app3 = () => {return <div> hello app 3 </div>}

// bootstrapping of single page application - inject application into root
root.render(
    <Application/>
    // app2
    // app3
    // <app3/>
)
