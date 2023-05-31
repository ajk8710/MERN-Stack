import Trainer from "./TrainerComponent"
import { connect } from "react-redux";

// mapStateToProps seems not working when I seperate to TrainerContainer
// let mapStateToProps = (state) => {
//     return {
//         Trainer : state.trainerReducer.Trainer,
//         //User : state.userReducer.User
//     }  
// }

// export default connect(mapStateToProps)(Trainer);
