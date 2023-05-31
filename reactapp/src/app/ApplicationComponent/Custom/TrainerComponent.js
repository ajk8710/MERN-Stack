import React from "react";
import { AddTrainerToStoreAction } from  "../../State/CustomState/trainerActions";
import { connect, useSelector, useDispatch } from "react-redux";

// mapStateToProps seems not working when I seperate to TrainerContainer. Can debug later.

// takes state as parameter and returns object - props.Trainer : state.trainerReducer.Trainer
let mapStateToProps = (state) => {
    return {
        Trainer : state.trainerReducer.Trainer,
    }
}

// - takes redux.dispatch method as parameter and returns object - function name : calls reducer with action creator "AddTrainerToStoreAction"
let mapDispatchToProps = (dispatch) => {
    return {
        addTrainer : (newTrainer) => {
            dispatch(AddTrainerToStoreAction(newTrainer));
        }
    }
}

let Trainer = (props) => {
    // let testUseSelector = useSelector((state) => state.trainerReducer.Trainer.name);
    // console.log("Test useSelector:", testUseSelector);  // useSelector working
    // console.log("Test mapStateToProps:", props.Trainer.name);  // mapStateToProps working

    // Thoughts:
    // try mapDispatch and useDispatch - figure out how to change the state in functional component
    // setState was for state component - try similar way in class component still.  Also Try useState.
    // - onChange we did setState - why not do mapDispatch or useDispatch

    // setState was for text change - can I do useDispatch for text change also?
    // onChange button we did mapDispatch. Also try useDispatch

    let name = props.Trainer.name;
    let password = props.Trainer.password;
    let hometown = useSelector((state) => state.trainerReducer.Trainer.hometown);
    let rank = useSelector((state) => state.trainerReducer.Trainer.rank);

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
                        value={name} onChange={changeStateWithMapDispatchToProps}/>
                </div>

                <div className="col-md-12">
                    <b>Password</b>
                    <input type="text" className="form-control col-md-6 pass"
                        placeholder="User Name" maxLength={20}
                        value={password} onChange={changeStateWithMapDispatchToProps}/>
                </div>

                <div className="col-md-12">
                    <b>Home Town</b>
                    <input type="text" className="form-control col-md-6 town"
                        placeholder="Home Town" maxLength={20}
                        value={hometown} onChange={changeStateWithUseDispatch}/>
                </div>

                <div className="col-md-12">
                    <b>Rank (num)</b>
                    <input type="number" className="form-control col-md-6 rank"
                        placeholder="Rank" maxLength="11"
                        value={rank} onChange={changeStateWithUseDispatch}/>
                </div>

            </div>

        </section>
        </>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Trainer);
