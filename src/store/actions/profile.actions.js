import { profileConstants } from '../constants';
import { profileService, authService } from '../services';
//import { stateActions } from 'store/actions';

export default {
    setProfile,
    removeProfile
};

function setProfile(profile) {
    return { type: profileConstants.SET, profile };
}

function removeProfile() {
    return { type: profileConstants.REMOVE };
}