import React from "react";

let Child = (props) => {

    return (
            <>
                <h3>Child Component</h3>
                <button onClick={() => props.childEvent("msg from child")}> Send to Parent </button>
            </>
    )

}

export default Child;
