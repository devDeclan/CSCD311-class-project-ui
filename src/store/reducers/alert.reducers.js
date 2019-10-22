import { alertConstants } from '../constants';

const initialState = {
    code: null,
    message: null,
    type: null
}

export default function alert(state=initialState, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message,
                code: action.code
            };
        case alertConstants.ERROR:
            return {
                type: 'error',
                message: action.message,
                code: action.code
            };
        case alertConstants.CLEAR:
            return initialState;
        default:
            return state
    }
}