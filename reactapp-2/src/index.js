import React from "react";
import * as ReactDOM from "react-dom/client";

import Application from "./app/ApplicationComponent";

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
