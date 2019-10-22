import { authConstants } from '../constants';

const initialState = {
    loggedIn: false,
    student_id: null,
    isAdmin: null
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN:
            return {
                loggedIn: true,
                student_id: action.student_id,
                isAdmin: action.isAdmin
            };
        case authConstants.LOGOUT:
            return {
                loggedIn: false,
                student_id: null,
                isAdmin: null
            };
        default:
            return state
    }
}