import { stateConstants } from "../constants";

const initialState = {
    running: false
}

export default function state(state = initialState, action) {
    switch (action.type) {
        case stateConstants.IDLE:
            return {
                running: false
            };
        case stateConstants.RUNNING:
            return {
                running: true
            };
        default:
            return state
    }
}