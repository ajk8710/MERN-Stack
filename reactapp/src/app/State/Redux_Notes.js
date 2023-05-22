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
