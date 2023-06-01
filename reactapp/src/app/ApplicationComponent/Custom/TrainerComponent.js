import React from "react";
import { AddTrainerToStoreAction } from  "../../State/CustomState/trainerActions";
import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react"

// mapStateToProps mapDispatchToProps seems not working when I seperate to TrainerContainer - Can debug later
// Debugged - Routing should be from TrainerContainer, not Trainer - on ApplicationComponent
// Container need to load first in order to initialize proper props values (mapStateToProps & mapDispatchToProps to load first)
// If not, when Trainer is loaded, state is not mapped to props yet, and props.Trainer is undefined

// takes state as parameter and returns object - props.Trainer : state.trainerReducer.Trainer
// let mapStateToProps = (state) => {
//     return {
//         Trainer : state.trainerReducer.Trainer
//     }
// }

// // - takes redux.dispatch method as parameter and returns object - function name : calls reducer with action creator "AddTrainerToStoreAction"
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addTrainer : (newTrainer) => {
//             dispatch(AddTrainerToStoreAction(newTrainer));
//         }
//     }
// }

let Trainer = (props) => {
    // let testUseSelector = useSelector((state) => state.trainerReducer.Trainer.name);
    // console.log("Test useSelector:", testUseSelector);  // useSelector working
    // console.log("Test mapStateToProps:", props.Trainer.name);  // mapStateToProps working

    // Thoughts:
    // try mapDispatch and useDispatch - figure out how to change the state in functional component - Done: using both MapDispatchToProps and UseDispatch
    // - onChange we did setState - why not do mapDispatch or useDispatch - see below

    // setState was for text change - can I do useDispatch for text change also? - Yes, Done
    // - But setState was to render text change on UI by updating react VDOM state (component's state). My mapDispatch/useDispatch is updating the trainer states.
    // I think this is issue because we want to save data when we click form submit button, not every time we change the text.
    // I need useRef/useEffect to update text change. I can also do useState (which is replacement of setState in Class Component)

    // Using useState to define react state (like this.state in constructor in Class Component)
    // Initialize values from Reducer
    let [name, setName] = useState(props.Trainer.name);
    let [password, setPassword] = useState(props.Trainer.password);
    let [hometown, setHometown] = useState( useSelector((state) => state.trainerReducer.Trainer.hometown) );
    let [rank, setRank] = useState( useSelector((state) => state.trainerReducer.Trainer.rank) );

    ///////// To Do ///////////
    // Change saveTrainer (rename to signinup) button/function to call props.signInUpTrainer(newtrainer) instead of props.addTrainer(newtrainer), or use useDispatch instead of props to do same job
    // In TrainerContainer.mapDispatchToProps: signInUpTrainer dispatch to addTrainertoDB
    // create addTrainertoDB Action on trainerActions, let it call AddTrainerToStoreAction after saving to DB
    // 
    

    let changeStateWithMapDispatchToProps = (evt) => {
        let target = evt.target;
        let classList = target.classList;  // reading the class name of html when change event happens (ex: className="form-control col-md-6 name")
        let value = target.value;  // value that user typed

        if (classList.contains("name")) {
            let newtrainer = {name: value, password, hometown, rank};
            props.addTrainer(newtrainer);
        }
        else if (classList.contains("pass")) {
            let newtrainer = {name, password: value, hometown, rank};
            props.addTrainer(newtrainer);
        }

        evt.preventDefault();
    }

    let dispatch = useDispatch();
    let changeStateWithUseDispatch = (evt) => {
        let target = evt.target;
        let classList = target.classList;  // reading the class name of html when change event happens (ex: className="form-control col-md-6 name")
        let value = target.value;  // value that user typed

        if (classList.contains("town")) {
            let newtrainer = {name, password, hometown: value, rank};
            dispatch(AddTrainerToStoreAction(newtrainer));
        }
        else if (classList.contains("rank")) {
            let newtrainer = {name, password, hometown, rank: value};
            dispatch(AddTrainerToStoreAction(newtrainer));
        }

        evt.preventDefault();
    }

    // props.addUser(User) => UserContainer.mapDispatchToProps(User)
    // => userActions.AddUserToStoreAction(User) => userReducer
    // userReducer updates states, updated states propagated by mapStateToProps
    let saveTrainer = (evt) => {
        let newtrainer = {name, password, hometown, rank};  // should I use this.name??
        props.addTrainer(newtrainer);

        evt.preventDefault();
    }

    return (
        <>
        <section className={"componentClass"}>
            
            <div className="form col-md-8">

                <h1><b>=Trainer Login Page=</b></h1>
                
                <div className="col-md-12">
                    <b>Trainer Name</b>
                    <input type="text" className="form-control col-md-6 name"
                        placeholder="Trainer Name" maxLength={20}
                        value={name} onChange={ (evt) => {setName(evt.target.value)} }/>
                </div>

                <div className="col-md-12">
                    <b>Password</b>
                    <input type="text" className="form-control col-md-6 pass"
                        placeholder="User Name" maxLength={20}
                        value={password} onChange={ (evt) => {setPassword(evt.target.value)} }/>
                </div>

                <div className="col-md-12">
                    <b>Home Town</b>
                    <input type="text" className="form-control col-md-6 town"
                        placeholder="Home Town" maxLength={20}
                        value={hometown} onChange={ (evt) => {setHometown(evt.target.value)} }/>
                </div>

                <div className="col-md-12">
                    <b>Rank (number)</b>
                    <input type="number" className="form-control col-md-6 rank"
                        placeholder="Rank" maxLength="11"
                        value={rank} onChange={ (evt) => {setRank(evt.target.value)} }/>
                </div>

                <div className="col-md-9">
                    <input type="button" className={"btn btn-primary col-md-4 saveTrainer"} 
                            value={"SignIn-Up Trainer"} 
                            onClick={saveTrainer}/>
                </div>

            </div>

        </section>
        </>
    )

}

export default Trainer;
// export default connect(mapStateToProps, mapDispatchToProps)(Trainer);