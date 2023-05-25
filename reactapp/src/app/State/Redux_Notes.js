import {configureStore} from "redux";
import {Provider, useSelector, useDispatch, connect} from "react-redux";

function reducer(currentState, action) {  // state manager
    if (currentState === undefined) {
        return {number : 1};
    }
    const newState = {...currentState};
    if (action.type === "PLUS") {
        newState.number++;
    }
    return newState;
}

const store = configureStore(reducer);  // state store

// Provider surrounds components that use states
<Provider store={store}>
    <Left3/>
    <Right3/>
</Provider>

function Left3(props) {
    // Selector requests to use the state - like getter method
    const number = useSelector((state) => state.number); // from state, I want to use number
    return (
        <div>
            Left3 : Number : {number}
        </div>
    )
}

function Right3(props) {
    // Dispatch updates the state by calling what type of update - like setter method
    const dispatch = useDispatch();
    return (
        <div>
            <input type="button" value="+" onClick={() => {
                dispatch({type: "PLUS"})
            }}></input>
        </div>
    )
}


// Another notes

// Action is an object with type property and any other user defined property – {type: BUY_CAKE}
// Action Creator is a function that returns Action - function buyCake() { return ( {type: BUY_CAKE} ) }
//     - Use as a parameter to dispatch (dispatch takes Action object as parameter)
//     - if change is needed for Action, you only change one function, not all the parameters
const BUY_CAKE = "BUY_CAKE";
function buyCake() { return ( {type: BUY_CAKE} ) }
// or do:
const buyCake1 = () => { return ( {type: BUY_CAKE} ) }

// State is represented by a single object
const initialCakeState = {numCakes: 10}

// reducer takes two parameters (currentState, action), then returns new state (not a mutation of currState)
const cakeReducer = (state=initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {...state, numCakes: state.numCakes - 1}
        default:  // if action is null or undefined
            return state;
    }
}

// You can have more than one reducer
const BUY_ICECREAM = "BUY_ICECREAM";
function buyIcecream() { return ( {type: BUY_ICECREAM} ) }

// State is represented by a single object
const initialIcecreamState = {numIcecreams: 20}

// reducer takes two parameters (currentState, action), then returns new state (not a mutation of currState)
const IcecreamReducer = (state=initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {...state, numIcecreams: state.numIcecreams - 1}
        default:  // if action is null or undefined
            return state;
    }
}

// combineReducers combine multiple reducers
import { combineReducers } from "redux";
const rootReducer = combineReducers({  // rootReducer is conventional name
    cakeReducer,  // cakeReducer : cakeReducer - using short hand
    IcecreamReducer
})
// now you refer states as state.cakeReducer.numCakes, state.IcecreamReducer.numIcecreams

import {configureStore, applyMiddleware} from "redux";
const storeShop = configureStore(rootReducer /*, applyMiddleware(whetever middleware defined)*/);


// to make a component a subscriber - mapStateToProps - is the conventional name
// - takes state as parameter and returns object
// State that is present in store, map it as props
const mapStateToProps = (state) => {
    return {
        numCakes: state.cakeReducer.numCakes  // mapped as props.numCakes
    }
}

// to make a component publisher it implements - mapDispatchToProps
// - takes redux.dispatch method as parameter and returns object (its properties are dispatches of action creators)
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())  // mapped as props.buyCake:  Use EX: onClick={props.buyCake}
    }
}

// Connect two functions with react component
// Mapping redux store states to react component props
import { connect } from "react-redux";
export default connect(mapStateToProps, mapDispatchToProps)(Cake);


// Alternatives to connect - mapStateToProps, mapDispatchToProps
// is Hooks - useSelector, useDispatch
import { useSelector, useDispatch } from "react-redux";

// Within function component, use useSelector and useDispatch
const numCakes = useSelector((state) => state.cakeReducer.numCakes);

const dispatch = useDispatch();  // returns reference to redux.useDispatch()
// Use EX: onClick={() => dispatch(buyCake())}
// Use Ex2:
//    buyingCake = () => { dispatch(buyCake()) } 
      //   onClick={buyingCake}
