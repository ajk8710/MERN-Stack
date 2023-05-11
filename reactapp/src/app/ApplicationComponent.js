import React from "react";

// component - is a functional class or function which does single or multiple things independently

const Application = () => {

    let name = "Awesome React!"

    // return the UI or virtual dom
    // looks like html, but this is jsx - javascript in xml format
    return (
        <div>
            <div>
                <h2>Application Component</h2>
            </div>
            <div>
                <b><i>{name}</i></b>
            </div>
        </div>
        // <div></div>  // cannot have multiple top level div
    )
}

export default Application;
