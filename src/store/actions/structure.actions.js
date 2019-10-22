import axios from "axios";
import {server} from "../../config";
import { serviceConstant, structureConstants } from '../constants';
import { structureService } from '../services';
import { alertActions, stateActions } from '../actions';
import { history } from '../../App';
import SweetAlert from 'sweetalert2';
import profileActions from './profile.actions';

export default {
    addHall,
    deleteHall,
    getHalls,
    getHall,
    addRoom,
    deleteRoom,
    getRooms,
    getProgrammes,
    addProgramme,
    deleteProgramme,
    addBlock,
    getBlock,
    deleteBlock
};

function addHall(data) {
    console.log(data);
    return dispatch => {
        dispatch(stateActions.running());

        structureService.addHall(data)
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    dispatch(getHalls());
                    dispatch(alertActions.success("Hall added successfully"))
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("An error occured"))
                dispatch(stateActions.idle());
            })
    };
}

function deleteHall(hall) {
    return dispatch => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Hall?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.value) {
                structureService.deleteHall(hall)
                .then(({data}) => {
                    if(!data.success){
                        dispatch(alertActions.error(data.message))
                    }else{
                        dispatch(getHalls());
                        dispatch(alertActions.success("Hall deleted successfully"))
                    }
                    dispatch(stateActions.idle());
                })
                .catch((error) => {
                    dispatch(alertActions.error("Hall deletion unsuccessful"))
                    dispatch(stateActions.idle());
                })
            }else{
                dispatch(alertActions.success("cancelled"))
            }
        })
    }
}

function getHalls() {
    return dispatch => {
        dispatch(stateActions.running());

        structureService.getHalls()
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    let halls = data.data;
                    console.log(halls)
                    dispatch(success(halls));
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("Error Occured"))
                dispatch(stateActions.idle());
            })
    }
    function success(halls) { return { type: structureConstants.UPDATE_HALLS, halls } }
}

function getHall(_id) {
    return dispatch => {
        dispatch(stateActions.running());

        structureService.getHall(_id)
            .then(({data}) => {
                console.log("DATUM", data)
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    let hall = data.data;
                    console.log(hall)
                    dispatch(success(hall));
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("Error Occured"))
                dispatch(stateActions.idle());
            })
    }
    function success(hall) { return { type: structureConstants.UPDATE_HALL, hall } }
}

function addRoom(data) {
    const block = data.block
    return dispatch => {
        dispatch(stateActions.running());

        structureService.addRoom(data)
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    dispatch(getBlock(block));
                    dispatch(alertActions.success("Room added successfully"))
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("Room addition unsuccessful"))
                dispatch(stateActions.idle());
            })
    };
}

function deleteRoom(room) {
    return dispatch => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Room?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.value) {
                structureService.deleteRoom(room)
                .then(({data}) => {
                    if(!data.success){
                        console.log(data)
                        dispatch(alertActions.error("blue balls"))
                    }else{
                        dispatch(getRooms());
                        dispatch(alertActions.success("Room deleted successfully"))
                    }
                    dispatch(stateActions.idle());
                })
                .catch((error) => {
                    dispatch(alertActions.error("Room deletion unsuccessful"))
                    dispatch(stateActions.idle());
                })
            }else{
                dispatch(alertActions.success("cancelled"))
            }
        })
    }
}

function getRooms() {
    return dispatch => {
        dispatch(stateActions.running());

        structureService.getRooms()
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    let rooms = data.data;
                    dispatch(success(rooms));
                    dispatch(alertActions.success("Rooms updated"))
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("Error Occured"))
                dispatch(stateActions.idle());
            })
    }
    function success(rooms) { return { type: structureConstants.UPDATE_ROOMS, rooms } }
}

function addProgramme(data) {
    return dispatch => {
        dispatch(stateActions.running());

        structureService.addProgramme(data)
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    dispatch(getProgrammes());
                    dispatch(alertActions.success("Room added successfully"))
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("Room addition unsuccessful"))
                dispatch(stateActions.idle());
            })
    };
}

function deleteProgramme(programme) {
    return dispatch => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Room?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.value) {
                structureService.deleteProgramme(programme)
                .then(({data}) => {
                    if(!data.success){
                        dispatch(alertActions.error("blue balls"))
                    }else{
                        dispatch(getProgrammes());
                        dispatch(alertActions.success("Programme deleted successfully"))
                    }
                    dispatch(stateActions.idle());
                })
                .catch((error) => {
                    dispatch(alertActions.error("Room deletion unsuccessful"))
                    dispatch(stateActions.idle());
                })
            }else{
                dispatch(alertActions.success("cancelled"))
            }
        })
    }
}

function getProgrammes() {
    return dispatch => {
        dispatch(stateActions.running());

        structureService.getProgrammes()
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    let programmes = data.data;
                    dispatch(success(programmes));
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("An Error Occured"))
                dispatch(stateActions.idle());
            })
    }
    function success(programmes) { return { type: structureConstants.UPDATE_PROGRAMMES, programmes } }
}

function addBlock(data) {
    const hall = data.hall
    return dispatch => {
        dispatch(stateActions.running());

        structureService.addBlock(data)
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    dispatch(getHall(hall));
                    dispatch(alertActions.success("Room added successfully"))
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                dispatch(alertActions.error("Room addition unsuccessful"))
                dispatch(stateActions.idle());
            })
    };
}

function deleteBlock(block) {
    return dispatch => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Block?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.value) {
                structureService.deleteBlock(block)
                .then(({data}) => {
                    if(!data.success){
                        dispatch(alertActions.error("blue balls"))
                    }else{
                        dispatch(getHall(data.data.hall));
                        dispatch(alertActions.success("Programme deleted successfully"))
                    }
                    dispatch(stateActions.idle());
                })
                .catch((error) => {
                    dispatch(alertActions.error("Room deletion unsuccessful"))
                    dispatch(stateActions.idle());
                })
            }else{
                dispatch(alertActions.success("cancelled"))
            }
        })
    }
}

function getBlock(_id) {
    return dispatch => {
        dispatch(stateActions.running());

        structureService.getBlock(_id)
            .then(({data}) => {
                if(!data.success){
                    dispatch(alertActions.error(data.message))
                }else{
                    let block = data.data;
                    dispatch(success(block));
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                alert(error)
                dispatch(alertActions.error("Error Occured"))
                dispatch(stateActions.idle());
            })
    }
    function success(block) { return { type: structureConstants.UPDATE_BLOCK, block } }
}