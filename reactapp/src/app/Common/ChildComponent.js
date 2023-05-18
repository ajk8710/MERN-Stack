import React from "react";

let Child = (props) => {
    return (
        <>
            <h2>This is Child in Home</h2>
            <b>Passed from App to Home to Child: {props.user.Age} {props.desc}</b>
            <button onClick={() => props.childEvent("Child pass data to parent Home")}>Send to Parent</button>
        </>
    )
}

export default Child;
