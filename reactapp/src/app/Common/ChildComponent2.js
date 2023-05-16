import React from "react";

let Child2 = (props) => {
    return (
        <>
            <h2>This is Child #2 in Footer1</h2>
        </>
    )
}

export default Child2;

// Difference between class and functional component:
// Class uses class keyword and inherits from Component or PureComponent base classes
// Functional component is just a function which returns virtual dom

// As class component inherits from base class, so it can implement Component Life Cycle Methods

// creation life cycle
// 1. Constructor - feed data through (props)
// 2. render - component gets rendered - prepared with html and data
// 3. componentDidMount - finally all initializations are done and component is ready to access

// update life cycle
// shouldComponentUpdate
// getSanpshotBeforeUpdate
// componentWillUpdate
// render
// componentDidUpdated

// destruction life cycle
// componentWillUnmount


// class component has state object to define different virtual dom
// functional component are stateless, however with the help of state hooks it can do the job
