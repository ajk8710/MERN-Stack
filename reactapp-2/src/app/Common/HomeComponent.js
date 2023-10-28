import React, {Component} from "react";
import Child from "./ChildComponent";

export default class Home extends Component {
    constructor(props) {
        super(props);

        // we can write state object to create new virtual dom
        this.state = {
            UserName: props.user.name,
            UserAge: props.user.age,
            ChildInfo: "child info from parent",
            Address: "Address from Home",
            Session: "Session from Home"
        }

        // Although it is recommended to not directly access the DOM (html) but,
        // by using ref htmls, we can access and manipulate html directly
        this.RefAddress = React.createRef();  // reference that can be used to link html in react
        this.RefSession = React.createRef();
    }

    // Arrow functions within a class is linked with the class, then refered by this
    incrementAge = () => {
        // when state changes, render method is called, creates new v-dom,
        // compare difference with previous v-dom, only the differences are rendered
        this.setState( {UserAge: this.state.UserAge + 1} );
    }

    updateName = (evt) => {
        let targetValue = evt.target.value;  //  value from event target (javascript way)
        this.setState( {UserName: targetValue} );
        evt.preventDefault();
    }

    // function to get ChildInfo from ChildComponent
    getChildData = (newChildInfo) => {
        alert(newChildInfo);
        this.setState({ChildInfo: newChildInfo})
    }

    // Supports uncontrolled component rendering
    // Upon form submit, do not go to API (9000/api/user/saveExample). Go to this method.
    formSubmit = (evt) => {
        let address = this.RefAddress.current.value;
        let session = this.RefSession.current.value

        this.setState({
            Address: address,
            Session: session
        })

        evt.preventDefault();
    }

    render() {
        return (
            <>
            <div>
                <h3>Home Component. User: {this.state.UserName} {this.state.UserAge}</h3>
                <input type="button" onClick={this.incrementAge} value={"Increment Age"}></input> 
            </div>
            <div>
                <input type="text" value={this.state.UserName} placeholder="Please type" onChange={this.updateName}></input>
            </div>

            <h5>{this.state.ChildInfo}</h5>
            <Child childData={"Child"} childEvent={this.getChildData}/>

            <div>
                <input type="text" ref={this.RefAddress} placeholder="Please type"/>
            </div>
            <div>
                <input type="text" ref={this.RefSession} placeholder="Please type"/>
            </div>

            <h5>Form using Ref</h5>
            <div>
                <form action="localhost:9000/api/user/saveExample" onSubmit={this.formSubmit}>
                    <label>
                         Address: <input type="text" ref={this.RefAddress} placeholder="Please type"/>
                    </label>

                    <label>
                       Session: <input type="text" ref={this.RefSession} placeholder="Please type"/>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
                <h5>{this.state.Address}</h5>
                <h5>{this.state.Session}</h5>
            </div>
            </>
        )
    }
}
