import React from "react";

let Header = ({age}) => {
    return (
        <>
            <h1>This is Header Component</h1>
            <b>Passed from App to Header: {age}</b>
        </>
    )
}

export default Header;
