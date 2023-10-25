import React from "react";

let Footer = (props) => {
    let user = props.user;

    return (
        <>
        <h3>This is Footer. User: {user.name} {user.age}</h3>
        </>
    )
}

export default Footer;
