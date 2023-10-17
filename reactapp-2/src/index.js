import React from "react";
import * as ReactDOM from "react-dom/client";

import Application from "./app/ApplicationComponent";

// creating root to hold and load react application
const root = ReactDOM.createRoot(document.getElementById("root"));

// bootstrapping of single page application - inject application into root
// render creates virtual dom
root.render (
    <Application/>
)
