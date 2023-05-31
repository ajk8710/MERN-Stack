import Trainer from "./TrainerComponent"
import { AddTrainerToStoreAction } from  "../../State/CustomState/trainerActions";
import { connect } from "react-redux";

// mapStateToProps mapDispatchToProps seems not working when I seperate to TrainerContainer - Can debug later
// Debugged - Routing should be from TrainerContainer, not Trainer - on ApplicationComponent
// Container need to load first in order to initialize proper props values (mapStateToProps & mapDispatchToProps to load first)
// If not, when Trainer is loaded, state is not mapped to props yet, and props.Trainer is undefined

// takes state as parameter and returns object - props.Trainer : state.trainerReducer.Trainer
let mapStateToProps = (state) => {
    return {
        Trainer : state.trainerReducer.Trainer
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

export default connect(mapStateToProps, mapDispatchToProps)(Trainer);
