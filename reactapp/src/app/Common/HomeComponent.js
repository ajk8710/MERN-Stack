import React, {Component, PureComponent, Ref} from "react";
import Child from "./ChildComponent";

// export default class Home extends Component {

// PureComponent compares all the states and props before calling render method so shouldComponentUpdate is not required
// If there are so many states and props, PureComponent compares each - heavy overhead if actually only dependent on few of them
export default class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.User = props.user;

        // we can write state object to create new virtual dom
        this.state = {
            UserName : props.user.Name,
            UserAge : props.user.Age,
            Timer : 1,
            ChildInfo : "state.ChildInfo at parent Home",
            Address : "Address from Home Comp",
            Session : "Session from Home Comp"
        }

        this.incrementTimer();

        // Although it is recommended to not directly access the DOM (html) but,
        // by using ref htmls, we can access and manipulate html directly
        this.RefAddress = React.createRef();  // reference that can be used to link html in react
        this.RefSession = React.createRef();
    }

    // state is mutable. Upon change of state a new virtual dom gets created which will be rended on browser
    // props is immutable - ownership of props is on the component who passed it

    // APIs to update states and render
    // this.setState - recommended as it fallows all the life cycle methods
    // this.forceUpdate - not recommended - it will skip all life cycle methods and just call the render

    // Arrow functions within a class is linked with the class, then refered by this
    incrementAge = () => {

        // render method does not get called and virtual dom is not created without updating state (setState or forceUpdate)
        // this.state.UserAge++;
        // console.log(this.state.UserAge);
        // this.forceUpdate();

        // when state changes, render method is called, creates new v-dom,
        // compare difference with previous v-dom, only the differences are rendered

        this.setState( {UserAge : this.state.UserAge + 1, 
            // UserName : "Raichu"
        } );
        // forceUpdate, unlike setState, skips all life cycle method and just render (creates virtual dom)
        // this.forceUpdate();
    }

    incrementTimer = () => {
        // this.interval = setInterval( () => {  // this on this.interval makes it global variable
        //     this.setState( {Timer : this.state.Timer + 1} );
        //     console.log(this.state.Timer);
        // }, 1000)
    }

    // event binding in textbox, two way data binding in react
    updateNameHandler = (evt) => {
            let targetValue = evt.target.value; //  value from event target (javascript way)
            console.log(targetValue);
            this.setState( {UserName : targetValue} );

            evt.preventDefault();
    }

    getChildData = (childinfo) => {
        alert("Child Info: " + childinfo);
        this.setState( {ChildInfo : childinfo} );
    }
    
    //supporting uncontrolled component rendering
    formSubmit = (evt)=>{
        let address = this.RefAddress.current.value;
        let session = this.RefSession.current.value

        this.setState({
            Address : address,
            Session : session
        })

        evt.preventDefault();
    }

    // Creation Life Cycle Methods
    // 1. Constructor - Here we feeds data, set the basic info
    //     In constructor, UI/HTML is not ready (render method not called yet).
    //     We should not access UI/HTML, nor state changes, nor server call. (it may impact rendering process)
    // 2. render method
    // 3. componentDidMount
    componentDidMount() {  // view or ui is ready, and we can access HTML if required, and do state changes here
        console.log("Component did mount");

        setTimeout(() => {
            this.RefAddress.current.focus()
            this.RefAddress.current.value = "Address changed"    
        }, 3000);
    }

    // Update Life Cycle Methods
    // shouldComponentUpdate - called whenever there is state change
    // But forceUpdate() will skip all life cycle method and just render
    // shouldComponentUpdate(nextProps, nextState) {  // after state change, do you really want to render this
    //     console.log("nextProps ", nextProps);
    //     console.log("nextState ", nextState);
    //     // return false; - state change will not go to render (will not go to UI). Usage ex: render as a batch
    //     if (this.state.UserName === nextState.UserName) {
    //         return false;  // render method not called
    //     } else {
    //         return true;  // render method called
    //     }
    // }

    // Destruction Life Cycle Method
    // Clear all subscriptions of API or calls like setInterval
    // componentWillUnmount is the only destruction life cycle method
    componentWillUnmount() {  // inherited from Component
        console.log("Component will unmount");
        clearInterval(this.interval);
    }

    render() {
        console.log("Home Component Rendered");
        return (
            <>
                <h1><b>This is Home Component</b></h1>
                <h4>Props Values Passed from App to Home: {this.User.Age} {this.User.Name}</h4>
                <h3>{"Timer " + this.state.Timer}</h3>
                <div>
                    <b>Home's State: {this.state.UserName} {this.state.UserAge}</b>
                    <input type="button" onClick={this.incrementAge} value={"Increment Age"}></input>
                </div>
                <input type="text" value={this.state.UserName} placeholder="Please type your name"
                 onChange={this.updateNameHandler}></input>
                <h3>{this.state.ChildInfo}</h3>
                <hr/>
                    <Child user={this.User} desc={"GrandChild"} 
                    childEvent={this.getChildData}/>
                <hr/>
                 {/* uncontrolled component */}
                 <form action="localhost:9000/api/user/save" onSubmit={this.formSubmit}>
                    <label>
                        Address:
                    <input type={"text"} ref={this.RefAddress} className={"address"} id={"address"} 
                            placeholder="Please add user address" maxLength={25}></input>
                    </label>

                    <label>
                        Session:
                    <input type={"text"} ref={this.RefSession} placeholder="Please add session details" maxLength={25}></input>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
                <h3>{this.state.Address}</h3>
                <h3>{this.state.Session}</h3>
            </>
        )
    }

}
