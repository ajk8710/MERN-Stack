import React, {Component} from "react";

let Footer = (props) => {  // onwer of props is parent. props is read only.
    return (
        <>
            <div className="footer">
                © Copyright 2023 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
            </div>
        </>
    )
}

export let Footer1 = (props) => {
    return (
        <>
            <h1>This is Footer1 Component</h1>
            <b>Passed from App to Footer: {props.age}</b>
            <h3>More in Footer1 Below</h3>
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
