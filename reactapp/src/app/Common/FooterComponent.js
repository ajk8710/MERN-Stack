import React, {Component} from "react";

let Footer = (props) => {  // onwer of props is parent. props is read only.
    return (
        <>
            <h1>This is Footer Component</h1>
            <b>Passed from App to Footer: {props.age}</b>
            <h3>More in Footer Below</h3>
            {props.children[0]}
            {props.children[1]}
        </>
    )
}

export let Footer2 = (props) => {
    return (
        <>
        <h2>My Footer #2</h2>
        <h3>{props.name}!!!</h3>
        </>
    )

}

export class Footer3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>My Footer #3 {this.props.age}</h2>
            </>
        )
    }
}

export default Footer;
