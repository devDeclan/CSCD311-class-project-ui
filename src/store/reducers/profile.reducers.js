import { profileConstants } from '../constants';

export default function profile(state = {}, action) {
    switch (action.type) {
        case profileConstants.SET:
            return action.profile;
        case profileConstants.REMOVE:
            return {};
        default:
            return state
    }
}