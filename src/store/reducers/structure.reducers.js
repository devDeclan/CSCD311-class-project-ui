import { structureConstants } from '../constants';

const initialState = {
    halls: [],
    rooms: [],
    programmes: [],
    hall: null,
    block: {
        rooms: []
    }
};

export default function structure(state = initialState, action) {
    switch (action.type) {
        case structureConstants.UPDATE_HALLS:
            return Object.assign({}, state, {
                halls: action.halls
            });
        case structureConstants.UPDATE_ROOMS:
            return Object.assign({}, state, {
                rooms: action.rooms
            });
        case structureConstants.UPDATE_PROGRAMMES:
            return Object.assign({}, state, {
                programmes: action.programmes
            });
        case structureConstants.UPDATE_HALL:
            return Object.assign({}, state, {
                hall: action.hall
            });
        case structureConstants.UPDATE_BLOCK:
            return Object.assign({}, state, {
                block: action.block
            });
        default:
            return state
    }
}