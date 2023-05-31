import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddTrainerToStoreAction = (newTrainer) => {
    return {
        type : actionTypes.AddTrainerToStore,
        payload : newTrainer
    }
}
